import { 
  GET_POSTS
} from '../actions/actions.types';
import { setPosts } from '../../services/posts.firebase.api';

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