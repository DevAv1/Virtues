import React, { useState, useEffect} from 'react';
import '../../styles/admin.css';
import { AdminPosts } from './AdminPosts';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAction } from '../../store/actions/posts.actions';
import { getPostsSelector } from '../../store/selectors';
import { PostContentForm } from './PostContentForm';

const Admin = () => {
  const [ open, setOpen ] = useState(false);
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

  return (
    <div className="admin">
      <AdminPosts allPosts={allPosts}/>
      <div className="post-create-area">
      <PostContentForm
        open={open}
        setOpen={setOpen}
        newPost={newPost} 
        setNewPost={setNewPost}
      />
      </div>
    </div>
  )
}

export default Admin