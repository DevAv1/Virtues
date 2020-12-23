import React, { useEffect, useState} from 'react'
import '../styles/post.css';
import { useSelector, useDispatch } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import { getPostsSelector } from '../store/selectors';
import { getPostsAction } from '../store/actions/posts.actions';

export const Post = ({ match }) => {
  const [ currentPost, setCurrentPost] = useState({})
  const posts = useSelector(getPostsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsAction());
  }, [])

  useEffect(() => {
    posts.map(post => {
      if(post.id === match.params.post) {
        setCurrentPost(post)
      } else return;
    })
  })


  return (
    <div className="post">
      { currentPost && 
        <div className="post-wrapper">
          <div className="post-header">
           <h1>{currentPost.catagory}</h1>
          </div>
          <div className="post-image">
            <img src={currentPost.image}/>
          </div>
          <div className="post-content">
            <h1>{currentPost.title}</h1>
            <h3>{currentPost.description}</h3>
            <p>{ReactHtmlParser(currentPost.content)}</p>
          </div>
        </div>
       
      }
    
    </div>
  )
}
