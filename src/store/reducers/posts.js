import { GET_POSTS } from '../actions/actions.types';

const initialState = {
  items: []
}

export const posts = (state = initialState, action) => {
  switch(action.type) {
    case GET_POSTS :
      return {
        ...state,
        items: action.posts
      }
    default:
      return state;
  }
}