import React, { useState, useEffect } from 'react'
import '../styles/category.css'; 
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPostsSelector } from '../store/selectors';
import { getPostsAction } from '../store/actions/posts.actions';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export const Category = ({ match }) => {
  const [ category , setCategory ] = useState([])
  const posts = useSelector(getPostsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    setCategory([])
    dispatch(getPostsAction);

    posts.map(post => {
      if(post.catagory === match.params.categoryName) {
       setCategory([...category, post])
      }
    })
  }, [])  
  
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="category">
      <h1 id="category_title">{match.params.categoryName}</h1>
      <hr id="title_line"/>
      <div className="category_wrapper">
        
          {
            posts.map((post) => {
              if(post.catagory === match.params.categoryName) {
                return (
                  <Link to={`/post/${post.id}`} className="category_card">
                    <img src={post.image} alt=""/>
                    <div className="__content">
                      <h1 className="__title">{post.title}</h1>
                      <p className="__description">{truncate(post.description, 150)}</p>
                   </div>
                  </Link>
                )
              }
            })
          }
         
      </div>
    </div>
  )
}