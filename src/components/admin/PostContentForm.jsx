import React, { useState, useEffect } from 'react';
import '../../styles/postContentForm.css';
import { useDispatch } from 'react-redux';
import { getPostsAction, createPostAction } from '../../store/actions/posts.actions';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { storage } from '../../firebase';
import {
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl
} from '@material-ui/core'

export const PostContentForm = ({editPost, setEditPost}) => {
  const [ image, setImage ] = useState(null);
  const [value, setValue] = useState('');
  const [ readyToPost, setReadyToPost ] = useState(false)
  const [ newPost, setNewPost ] = useState({
    imageURL: '',
    catagory: '',
    title: '',
    description: '',
    content: value
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
          setNewPost({
            imageURL: '',
            catagory: '',
            title: '',
            description: '',
            content: ''
          })
          setValue('')
        })
      }
    )
  }

  const handleSaveChanges = () => {
    // need to continue coding from here
  }

  const resetInputs = () => {
    setNewPost({
      imageURL: '',
      catagory: '',
      title: '',
      description: '',
      content: ''
    })
  }

  const saveEditorContent = () => {
    setNewPost({
      ...newPost,
      content: value
    })
    setReadyToPost(true)
  }
    
  return (
    <div className="form-container">
        <FormControl required className="post-form">
          <InputLabel htmlFor="atagory-select">CATAGORY</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="catagory-select"
              name="catagory"
              value={editPost ? editPost.catagory : newPost.catagory}
              onChange={(e) => {setNewPost({...newPost, catagory: e.target.value})}}
              >
              <MenuItem value='beauty'>BEAUTY</MenuItem>
              <MenuItem value='body and soul'>BODY & SOUL</MenuItem>
              <MenuItem value='food'>FOOD</MenuItem>
              <MenuItem value='life'>LIFE</MenuItem>
            </Select>
            <TextField
              className="input"
              required
              autoFocus
              margin="dense"
              id="title"
              label="POST TITLE"
              type="text"
              variant="outlined"
              fullWidth
              value={editPost ? editPost.title : newPost.title}
              onChange={editPost ? (e) => setEditPost({...editPost, title: e.target.value}) :(e) => setNewPost({...newPost, title: e.target.value })}
            />
            <TextField
              className="input"
              required
              variant="outlined"
              autoFocus
              margin="dense"
              id="description"
              label="DESCRIPTION"
              type="text"
              fullWidth
              value={editPost ? editPost.description : newPost.description}
              onChange={(e) => setNewPost({...newPost, description: e.target.value })}
            />
            <TextField
              required
              className="input"
              autoFocus
              margin="dense"
              id="image"
              label="image"
              type="file"
              fullWidth
              onChange={(e) => setImage(e.target.files[0])}
            />
            <ReactQuill className="editor-quill" theme="snow" onChange={setValue} value={editPost ? editPost.content : value} style={{height:"300px"}} />
            <div className="btns-group">
              <Button className="btn" variant="contained" color="secondary" onClick={saveEditorContent}>Save</Button>
              <Button className="btn" onClick={editPost ? handleSaveChanges : handleSubmit} variant="contained" color="secondary" type="submit" disabled={!readyToPost}>
                {editPost ? "Save Changes" : "Submit Post"}
              </Button>
              <Button className="btn" variant="contained" color="secondary" onClick={resetInputs}>
                Cencel
              </Button>
            </div>
           
        </FormControl>
    </div>
  )
}