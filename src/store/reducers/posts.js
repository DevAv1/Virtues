import { GET_POSTS, CREATE_POST } from '../actions/actions.types';

const initialState = {
  items: {}
}

export const posts = (state = initialState, action) => {
  switch(action.type) {
    case GET_POSTS :
      return {
        ...state,
        items: action.posts
      }
    case CREATE_POST : {
      return {
        ...state,
        items: {
          ...state.items,
          items: action.newPost
        }
      }
    }
    default:
      return state;
  }
}