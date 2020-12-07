import { 
  GET_POSTS,
  CREATE_POST
} from '../actions/actions.types';

import { setPosts } from '../../services/posts.firebase.api';
import { createPost } from '../../services/createPost.firebase.api'



export const getPostsAction = () => {
  return async (dispatch) => {
    try {
      const posts = await setPosts;
      dispatch({
        type: GET_POSTS,
        posts
      })
    } catch (err) {
      console.error(err)
    }
  }
}

export const createPostAction = (post) => {
  return async (dispatch) => {
    try {
      const newPost = createPost(post); 
      dispatch({
        type: CREATE_POST,
        post: newPost
      })
    } catch(err) {
      console.error(err)
    }
  }
}