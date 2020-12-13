import React, { useState, useEffect} from 'react';
import '../../styles/admin.css';
import { AdminPosts } from './AdminPosts';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAction } from '../../store/actions/posts.actions';
import { getPostsSelector } from '../../store/selectors';
import { PostContentForm } from './PostContentForm';
import { AdminMenu } from './AdminMenu';

const Admin = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [ open, setOpen ] = useState(false);
  const [ showCreatePost, setShowCreatePost ] = useState(true);
  const [ showPosts, setShowPosts ] = useState(true);
  const [ newPost, setNewPost ] = useState({
    imageURL: '',
    catagory: '',
    title: '',
    description: '',
    content: ''
  });

  const [ editPost, setEditPost ] = useState({
    imageURL: '',
    catagory: '',
    title: '',
    description: '',
    content: ''
  })

  const dispatch = useDispatch();
  const allPosts = useSelector(getPostsSelector);

  useEffect(() => {
    dispatch(getPostsAction())
  }, [])

  const handleEdit = (post) => {
    setEditPost({
      imageURL: post.image,
      catagory: post.catagory,
      title: post.title,
      description: post.description,
      content: post.content
    }) 
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className="admin">
      <AdminMenu 
        setShowCreatePost={setShowCreatePost} 
        showCreatePost={showCreatePost} 
        showPosts={showPosts} 
        setShowPosts={setShowPosts} 
        handleClose={handleClose} 
        handleClick={handleClick} 
        anchorEl={anchorEl} 
        setAnchorEl={setAnchorEl}
      />
      {showPosts &&
        <AdminPosts 
          allPosts={allPosts} 
          handleEdit={handleEdit}
        />
      }
     
      <div className="post-create-area">
      {showCreatePost &&
        <PostContentForm
          open={open}
          setOpen={setOpen}
          newPost={newPost} 
          setNewPost={setNewPost}
          editPost={editPost}
          setEditPost={setEditPost}
        />
      }
      
      </div>
    </div>
  )
}

export default Admin