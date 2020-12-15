import { 
  GET_POSTS,
  CREATE_POST,
  DELETE_POST,
  SET_POST,
} from '../actions/actions.types';

import { setPosts, createPost, deletePost, editPost } from '../../services/posts.firebase.api';

export const getPostsAction = () => {
  return async (dispatch) => {
    try {
      const posts = await setPosts();
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
      const newPost = await createPost(post);
      dispatch({
        type: CREATE_POST,
        post: newPost
      })
    } catch(err) {
      console.error(err)
    }
  }
}

export const deletePostAction = (post) => {
  return async (dispatch) => {
    try {
      const id = await deletePost(post)
      dispatch({
        type: DELETE_POST,
        id: id
      })
    } catch(err) {
      console.error(err)
    }
  }
}

export const setPostAction = (post) => {
  return async (dispatch) => {
    try {
      await editPost(post);
      dispatch({
        type: SET_POST,
        post: post
      })
    } catch(err) {
      console.error(err)
      console.log('action went wrong!')
    }
  }
}