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
         { posts.map((item, index) => {
              return (
                <div className={`${!index && "item-1" }`} key={item.title} onClick={()=>{
                  //dispatch()...
                }}>
                  <Link to={{
                    pathname:"/post",
                    post: item
                  }} params={item} className="card">
                    <div className="thumb" style={{backgroundImage: `url(${item.image})`}}></div>
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