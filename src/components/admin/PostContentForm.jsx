import React, { useState, useEffect } from 'react';
import '../../styles/postContentForm.css';
import { useDispatch } from 'react-redux';
import { getPostsAction, createPostAction } from '../../store/actions/posts.actions';
import { storage } from '../../firebase';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';

import {
  Button,
  TextField,
  Select,
  MenuItem,
} from '@material-ui/core'

export const PostContentForm = () => {

  const [ image, setImage ] = useState(null);
  const [ newPost, setNewPost ] = useState({
    imageURL: '',
    catagory: '',
    title: '',
    description: '',
    content: ''
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsAction())
  },[])  

  const handleSubmit = (e) => {
    e.preventDefault();
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      'state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      }, (error) => {
        console.log(error)
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          let uploadedPost = Object.assign(newPost, {imageURL:url})
          setNewPost(uploadedPost);
          dispatch(createPostAction(uploadedPost))
          console.log('File available at','image const', url);          
        })
      }
    )
  }

  return (
    <div className="form-container">
      <form className="post-form">
        <Select
          style={{width: "100%"}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="catagory"
          value={newPost.catagory}
          onChange={(e) => {setNewPost({...newPost, catagory: e.target.value})}}
        >
          <MenuItem value='beauty'>BEAUTY</MenuItem>
          <MenuItem value='body & soul'>BODY & SOUL</MenuItem>
          <MenuItem value='food'>FOOD</MenuItem>
          <MenuItem value='life'>LIFE</MenuItem>

        </Select>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="Post Title"
          type="text"
          fullWidth
          onChange={(e) => setNewPost({...newPost, title: e.target.value })}
        />
        <TextField
          autoFocus
          margin="dense"
          id="description"
          label="description"
          type="text"
          fullWidth
          onChange={(e) => setNewPost({...newPost, description: e.target.value })}
        />
        <TextField
          autoFocus
          margin="dense"
          id="content"
          label="post content"
          type="text"
          fullWidth
          onChange={(e) => setNewPost({...newPost, content: e.target.value })}
        />
          <TextField
          autoFocus
          margin="dense"
          id="image"
          label="image"
          type="file"
          fullWidth
          onChange={(e) => setImage(e.target.files[0])}
        />
        <Button onClick={handleSubmit} variant="contained" color="secondary" type="submit">
          SUBMIT POST
        </Button>
        <Button variant="contained" color="secondary">
          Cencel
        </Button>
      </form>
    </div>
  )
}