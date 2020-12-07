import React, { useState, useEffect} from 'react';
import '../../styles/admin.css';

import { useDispatch, useSelector } from 'react-redux';
import { getPostsAction } from '../../store/actions/posts.actions';
import { getPostsSelector } from '../../store/selectors';

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core'

const newPostDialog = ({open, setOpen}) => {

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
      Open form dialog
    </Button>
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We will send updates
          occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
          Subscribe
        </Button>
      </DialogActions>
    </Dialog>
  </div>
  )
}

const Admin = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch(getPostsSelector);
  const allPosts = useSelector(getPostsSelector);

  useEffect(() => {
    dispatch(getPostsAction())
  }, [])

 
  return (
    <div className="admin">
      <div className="admin_header">
        <h1>Hi Limor,</h1>
        <p style={{fontWeight:"bolder"}}>Lets make some changes...</p>
      </div>
      <div className="admin-toolbar">
        
      </div>
      <div className="admin-create-post">
        
        <newPostDialog/>
      </div>

      <div className="posts">
        <div className="all-posts">
         
        </div>
      </div>
    </div>
  )
}

export default Admin
