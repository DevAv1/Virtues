import React, { useState, useEffect} from 'react';
import '../../styles/admin.css';
import { AdminPosts } from './AdminPosts';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAction } from '../../store/actions/posts.actions';
import { getPostsSelector } from '../../store/selectors';
import { PostContentForm } from './PostContentForm';
import { AdminMenu } from './AdminMenu';

const Admin = () => {
  const [ showCreatePost, setShowCreatePost ] = useState(true);
  const [ showPosts, setShowPosts ] = useState(true);

  const [ editPost, setEditPost ] = useState({
    id:'',
    catagory: '',
    title: '',
    description: '',
    content: '',
    image: '',
    timestamp: null
  })

  const dispatch = useDispatch();
  const allPosts = useSelector(getPostsSelector);

  useEffect(() => {
    dispatch(getPostsAction())
  }, [])

  const handleEdit = (post) => {
    setEditPost({
      id: post.id,
      catagory: post.catagory,
      title: post.title,
      description: post.description,
      content: post.content,
      image: post.image,
      timestamp: post.timestamp
    }) 
  }

  return (
    <div className="admin">
      <AdminMenu 
        setShowCreatePost={setShowCreatePost} 
        showCreatePost={showCreatePost} 
        showPosts={showPosts} 
        setShowPosts={setShowPosts} 
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
          editPost={editPost}
          setEditPost={setEditPost}
        />
      }
      
      </div>
    </div>
  )
}

export default Admin