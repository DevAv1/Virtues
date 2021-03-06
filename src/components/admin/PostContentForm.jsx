import React, { useState, useEffect } from 'react';
import '../../styles/postContentForm.css';
import { useDispatch } from 'react-redux';
import { getPostsAction, createPostAction, setPostAction } from '../../store/actions/posts.actions';
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

export const PostContentForm = ({ editPost, setEditPost }) => {
  const [ image, setImage ] = useState(null);
  const [ value, setValue ] = useState('');
  const [ editValue, setEditValue ] = useState('');
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
    setEditValue(editPost.content)
  }, [editPost])

  useEffect(() => {
    dispatch(getPostsAction())
  },[])  

  const QuillModules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      // [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean'],
      [{ 'direction': 'rtl' }],
      ['image', 'code-block'],
      ['align'],
      [{'color': ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color']}]

    ],
  }
  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'color', 'code-block', 'image','clean', 'direction', 'align','video'
  ]
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if(editPost.title.length === 0) {
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
            resetInputs();
            setValue('')
            setReadyToPost(false)
          })
        }
      )
    } else {
      dispatch(setPostAction(editPost))
      resetInputs();
      setEditPost('')
      setReadyToPost(false)
    }
  }

  const resetInputs = () => {
    setNewPost({
      imageURL: '',
      catagory: '',
      title: '',
      description: '',
      content: ''
    })
    setEditPost({
      id: '',
      imageURL: '',
      catagory: '',
      title: '',
      description: '',
      content: ''
    })
    setImage(null)
  }

  const saveEditorContent = () => {
    if(editPost.title.length === 0) {
      setNewPost({
        ...newPost,
        content: value
      })
      setReadyToPost(true)
    } else {
      setEditPost({
        ...editPost,
        content: editValue
      })
      setReadyToPost(true)
    }
  }
  
  return (
    <div className="form-container">
        <FormControl required className="post-form">
          <InputLabel htmlFor="atagory-select">CATAGORY</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="catagory-select"
              name="catagory"
              value={editPost.catagory ? editPost.catagory : newPost.catagory}
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
              value={editPost.title ? editPost.title : newPost.title}
              onChange={editPost.title ? (e) => setEditPost({...editPost, title: e.target.value}) :(e) => setNewPost({...newPost, title: e.target.value })}
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
              value={editPost.description ? editPost.description : newPost.description}
              onChange={editPost.description ? (e) => setEditPost({...editPost, description: e.target.value}) : (e) => setNewPost({...newPost, description: e.target.value })}
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
            <ReactQuill className="editor-quill" modules={QuillModules} formats={formats} placeholder="התחילי לכתוב..."  theme="snow" onChange={editPost.content ? setEditValue : setValue} value={editPost.content ? editValue : value} style={{height:"400px"}} />
            <div className="btns-group">
              <Button className="btn" variant="contained" color="secondary" onClick={saveEditorContent}>Save</Button>
              <Button className="btn" onClick={handleSubmit} variant="contained" color="secondary" type="submit" disabled={!readyToPost}>
                {`${editPost.title ? "Submit Changes" : "Submit Post"}`}
              </Button>
              <Button className="btn" variant="contained" color="secondary" onClick={resetInputs}>
                Cancel
              </Button>
            </div>
        </FormControl>
    </div>
  )
}