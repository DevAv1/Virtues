import React, { useEffect } from 'react'
import '../styles/posts.css'
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAction } from '../store/actions/posts.actions';
import { getPostsSelector } from '../store/selectors';
import { LinearProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const Posts = () => {
  const dispatch = useDispatch(); 
  const posts = useSelector(getPostsSelector)

  useEffect(() => {
    dispatch(getPostsAction());
  }, [])

  // console.log(posts);

  return (
    <div className="posts">
      {posts.length > 0 ?
        <div className="band">
          <div className="item-1 main-item">
              <Link to={{
                    pathname:"/post",
                    post: posts[0]
                  }} className="card">
                <div className="thumb" style={{backgroundImage: "url(https://image.freepik.com/free-vector/nice-spa-background-flat-design_23-2147789551.jpg)" }}></div>
                <article>
                  <h1>{posts[0].title}</h1>
                  <h3>{posts[0].catagory}</h3>
                  <br></br>
                  <p>{posts[0].description}</p>
                  <span>{posts[0].timestamp.toDate().toString()}</span>
                </article>
              </Link>
          </div>
          {posts.length > 1 &&
            posts.map((item) => {
              return (
                <div className="item" key={item.title}>
                  <Link to={{
                    pathname:"/post",
                    post: item
                  }} params={item} className="card">
                    <div className="thumb" style={{backgroundImage: "url(https://image.freepik.com/free-vector/nice-spa-background-flat-design_23-2147789551.jpg)" }}></div>
                    <article>
                      <h1>{item.title}</h1>
                      <h3>{item.catagory}</h3>
                      <p>{item.description}</p>
                      <span>{item.timestamp.toDate().toString()}</span>
                    </article>
                  </Link>
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
      {/* <div className="virtues-siders-wrapper">
        <div className="virtues-siders">
          <h1>VIRTUES</h1>
        </div>
        <div className="virtues-siders">
          <h1>VIRTUES</h1>
        </div>
      </div>       */}
  </div>
  )
}