import React, { useState, useEffect} from 'react';
import '../../styles/admin.css';
import { AdminPosts } from './AdminPosts';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAction, createPostAction } from '../../store/actions/posts.actions';
import { getPostsSelector } from '../../store/selectors';
import { storage } from '../../firebase';

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Select,
  MenuItem,
  InputLabel,
} from '@material-ui/core'

const PostDialog = ({
  open,
  handleClickOpen,
  handleClose,
  handleInputChange,
  handleSubmit,
  newPost,
  handleImageChange,
  handleUpload
  }) => {
  
  return (
    <div>
       <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Create new Post
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Post</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create a post, please fillout all the inputs according to your needs and then click SUBMIT and see the magic.
          </DialogContentText>
          <InputLabel id="demo-simple-select-label">Catagory</InputLabel>
          <Select
            style={{width: "100%"}}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="catagory"
            value={newPost.catagory}
            onChange={handleInputChange}
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
            onChange={handleInputChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="description"
            type="text"
            fullWidth
            onChange={handleInputChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="content"
            label="post content"
            type="text"
            fullWidth
            onChange={handleInputChange}
          />
            <TextField
            autoFocus
            margin="dense"
            id="image"
            label="image"
            type="file"
            fullWidth
            onChange={handleImageChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary" type="submit">
            SUBMIT POST
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )

}

const Admin = () => {
  const [open, setOpen] = useState(false)
  const [ image, setImage ] = useState(null)
  const [ urlLocal, setUrl ] = useState('')
  const [ newPost, setNewPost ] = useState({
    imageURL: '',
    catagory: '',
    title: '',
    description: '',
    content: ''
  });

  const dispatch = useDispatch();
  const allPosts = useSelector(getPostsSelector);

  useEffect(() => {
    dispatch(getPostsAction())
  }, [])  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    if (e.target.name === 'catagory') {
      setNewPost({
        ...newPost,
        catagory: e.target.value
      })
    } else if (e.target.id === 'title') {
      setNewPost({
        ...newPost, 
        title: e.target.value
      })
    } else if (e.target.id === 'description') {
      setNewPost({
        ...newPost,
        description: e.target.value
      })
    } else {
      setNewPost({
        ...newPost,
        content: e.target.value
      })
    }
  }

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
          setNewPost({
            ...newPost,
            imageURL: url
          })
          console.log('File available at','image const', url);
        })
      }
    )
    dispatch(createPostAction(newPost))
    setNewPost({})
    handleClose();
  }

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }


  return (
    <div className="admin">
      <div className="admin_header">
        <h1>Hi Limor,</h1>
        <p style={{fontWeight:"bolder"}}>Lets manage...</p>
      </div>
      <div className="admin-toolbar">
        <PostDialog handleImageChange={handleImageChange} open={open} setOpen={setOpen} handleClickOpen={handleClickOpen} handleClose={handleClose} handleInputChange={handleInputChange} handleSubmit={handleSubmit} newPost={newPost} setNewPost={setNewPost}/>
      </div>
      <AdminPosts allPosts={allPosts}/>
    </div>
  )
}

export default Admin