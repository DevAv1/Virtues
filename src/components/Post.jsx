import React, { useEffect, useState} from 'react'
import '../styles/post.css';
import { useLocation, Link} from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';
import image from '../assets/backgrounds/stones.jpg'

export const Post = () => {
  const location = useLocation();
  const [ currentPost, setCurrentPost] = useState({})

  useEffect(() => {
    setCurrentPost(location.post)
  }, [])

  return (
    <div className="post">
      { currentPost ?
        <div className="post-wrapper">
          <div className="post-header">
           <h1>{currentPost.catagory}</h1>
          </div>
          <div className="post-image">
            <img src={image}/>
          </div>
          <div className="post-content">
            <h1>{currentPost.title}</h1>
            <h3>{currentPost.description}</h3>
            <p>{currentPost.content}</p>
          </div>
        </div>
        :
        <LinearProgress />
      }
    
    </div>
  )
}
