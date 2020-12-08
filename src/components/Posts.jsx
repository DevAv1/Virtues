import React, { useEffect } from 'react'
import '../styles/posts.css'

import { useDispatch, useSelector } from 'react-redux';
import { getPostsAction } from '../store/actions/posts.actions';
import { getPostsSelector } from '../store/selectors';
import { LinearProgress } from '@material-ui/core';
 
export const Posts = () => {
  const dispatch = useDispatch(); 
  const posts = useSelector(getPostsSelector)

  useEffect(() => {
    dispatch(getPostsAction());
  }, [])

  console.log(posts);

  return (
    <div className="posts">
      { posts.length > 0 ?
        <div className="band">
          <div className="item-1 main-item">
              <a href="#" className="card">
                <div className="thumb" style={{backgroundImage: "url(https://image.freepik.com/free-vector/nice-spa-background-flat-design_23-2147789551.jpg)" }}></div>
                <article>
                  <h1>{posts[0].title}</h1>
                  <span>{posts[0].description}</span>
                  <span>{Date.now()}</span>
                </article>
              </a>
          </div>
          {
            posts.map((item) => {
              return (
                <div className="item" key={item.title}>
                  <a href="https://webdesign.tutsplus.com/articles/how-to-conduct-remote-usability-testing--cms-27045" className="card">
                    <div className="thumb" style={{backgroundImage: "url(https://image.freepik.com/free-vector/nice-spa-background-flat-design_23-2147789551.jpg)" }}></div>
                    <article>
                      <h1>{item.title}</h1>
                      <span>{item.description}</span>
                    </article>
                  </a>
                </div>
              )
            })
          }
          </div>
          :
          <div className="progression">
            <LinearProgress color="secondary" className="progress-bar"/>
            <h1>Loading feed please wait...</h1>
          </div>
          
      }
      
  </div>
  )
}