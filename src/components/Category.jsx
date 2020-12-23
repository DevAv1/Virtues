import React, { useState, useEffect } from 'react'
import '../styles/category.css'; 
import { useSelector, useDispatch } from 'react-redux';
import { getPostsSelector } from '../store/selectors';
import { getPostsAction } from '../store/actions/posts.actions';

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

  return (
    <div className="category">
      <h1 id="category_title">{match.params.categoryName}</h1>
      <div className="category_wrapper">
          {
            posts.map(post => {
              if(post.catagory === match.params.categoryName) {
                return (
                  <div class="card_item">
                    <div class="card_image">
                      <img src={post.image} />
                    </div>
                    <div class="card_content">
                      <div class="card__title">{post.title}</div>
                      <p class="card__text">{post.description}</p>
                      {/* <button class="card__btn">Button</button> */}
                    </div>
                  </div>
                )
              }
            })
          }
      </div>
    </div>
  )
}