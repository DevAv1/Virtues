import React, { useEffect } from 'react'
import '../styles/posts.css'
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAction } from '../store/actions/posts.actions';
import { getPostsSelector } from '../store/selectors';
import { Backdrop, CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { LatestPosts } from '../components/LatestPosts'

export const Posts = () => {
  const dispatch = useDispatch(); 
  const posts = useSelector(getPostsSelector)

  useEffect(() => {
    dispatch(getPostsAction());
  }, [])

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  
  const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));

  const classes = useStyles();

  return (
    <div className="posts">
      {posts.length > 0 ?
        <div className="band">
         { posts.map((item, index) => {
              return (
                <div className={`${!index && "item-1" }`} key={item.title} data-aos="fade-right">
                  <Link to={`/post/${item.id}`} params={item} className="card">
                    <div className="thumb" style={{backgroundImage: `url(${item.image})`}}></div>
                    <article>
                      <h1>{item.title}</h1>
                      <h5>{item.catagory}</h5>
                      <p>{truncate(item?.description, 150)}</p>
                      <span>{item.timestamp.toDate().toString()}</span>
                    </article>
                  </Link>
                </div>
              )
            })
          }
          </div>
          :
          <Backdrop className={classes.backdrop} open>
            <CircularProgress color="inherit" />
          </Backdrop>
      }
      <LatestPosts posts={posts}/>

      <div className="virtues-siders-wrapper">
        <div className="virtues-siders">
          <h1>VIRTUES</h1>
        </div>
        <div className="virtues-siders">
          <h1>VIRTUES</h1>
        </div>
      </div>      
  </div>
  )
}