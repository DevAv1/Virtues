import React, { useEffect } from 'react'
import '../styles/posts.css'

import { useDispatch, useSelector } from 'react-redux';
import { getPostsAction } from '../store/actions/posts.actions';
import { getPostsSelector } from '../store/selectors';
 
export const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(getPostsSelector)
  
  useEffect(() => {
    dispatch(getPostsAction());
  }, [])
  
  return (
    <div className="posts">
      <div className="band">
        <div className="item-1">
          <a href="#" class="card">
            <div className="thumb" style={{backgroundImage: "url(https://image.freepik.com/free-vector/nice-spa-background-flat-design_23-2147789551.jpg)" }}></div>
            <article>
              <h1>Title</h1>
              <span>Description</span>
              <span>{Date.now()}</span>
              {/* <button>Read more</button> */}
            </article>
          </a>
        </div>
        <div className="item-2">
          <a href="https://webdesign.tutsplus.com/articles/how-to-conduct-remote-usability-testing--cms-27045" class="card">
            <div className="thumb" style={{backgroundImage: "url(https://image.freepik.com/free-vector/nice-spa-background-flat-design_23-2147789551.jpg)" }}></div>
            <article>
              <h1>How to Conduct Remote Usability Testing</h1>
              <span>Harry Brignull</span>
            </article>
          </a>
        </div>
        <div className="item-3">
          <a href="https://design.tutsplus.com/articles/envato-tuts-community-challenge-created-by-you-july-edition--cms-26724" class="card">
            <div class="thumb" style={{backgroundImage: "url(https://image.freepik.com/free-vector/nice-spa-background-flat-design_23-2147789551.jpg)" }}></div>
            <article>
              <h1>Created by You, July Edition</h1>
              <p>Welcome to our monthly feature of fantastic tutorial results created by you, the Envato Tuts+ community! </p>
              <span>Melody Nieves</span>
            </article>
          </a>
        </div>
        <div className="item-4">
          <a href="https://webdesign.tutsplus.com/tutorials/how-to-code-a-scrolling-alien-lander-website--cms-26826" class="card">
            <div class="thumb" style={{backgroundImage: "url(https://image.freepik.com/free-vector/nice-spa-background-flat-design_23-2147789551.jpg)" }}></div>
            <article>
              <h1>How to Code a Scrolling “Alien Lander” Website</h1>
              <p>We’ll be putting things together so that as you scroll down from the top of the page you’ll see an “Alien Lander” making its way to touch down.</p>
              <span>Kezz Bracey</span>
            </article>
          </a>
        </div>
        <div className="item-5">
          <a href="https://design.tutsplus.com/tutorials/stranger-things-inspired-text-effect--cms-27139" class="card">
            <div class="thumb" style={{backgroundImage: "url(https://image.freepik.com/free-vector/nice-spa-background-flat-design_23-2147789551.jpg)" }}></div>
            <article>
              <h1>How to Create a “Stranger Things” Text Effect in Adobe Photoshop</h1>
              <span>Rose</span>
            </article>
          </a>
        </div>
        <div className="item-6">
          <a href="https://photography.tutsplus.com/articles/5-inspirational-business-portraits-and-how-to-make-your-own--cms-27338" class="card">
            <div className="thumb" style={{backgroundImage: "url(https://image.freepik.com/free-vector/nice-spa-background-flat-design_23-2147789551.jpg)" }}></div>
            <article>
              <h1>5 Inspirational Business Portraits and How to Make Your Own</h1>

              <span>Marie Gardiner</span>
            </article>
          </a>
        </div>
        <div className="item-7">
          <a href="https://webdesign.tutsplus.com/articles/notes-from-behind-the-firewall-the-state-of-web-design-in-china--cms-22281" class="card">
            <div class="thumb" style={{backgroundImage: "url(https://image.freepik.com/free-vector/nice-spa-background-flat-design_23-2147789551.jpg)" }}></div>
            <article>
              <h1>Notes From Behind the Firewall: The State of Web Design in China</h1>
              <span>Kendra Schaefer</span>
            </article>
          </a>
        </div>
      </div>
  </div>
  )
}