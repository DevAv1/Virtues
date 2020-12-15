import { GET_POSTS, CREATE_POST, DELETE_POST, SET_POST } from '../actions/actions.types';

const initialState = {
  items: []
}

export const posts = (state = initialState, action) => {
  switch(action.type) {
    case GET_POSTS :
      return {
        ...state,
        items: action.posts || []
      }
    case CREATE_POST : 
      return {
        ...state,
        items: [
          ...state.items,
          action.post
        ]
      }
    case DELETE_POST :
      const filteredPosts = state.items.filter(item => item.id !== action.id)
      return {
        ...state,
        items: filteredPosts
      }

    case SET_POST :
      return {
        ...state,
        items: [
          ...state.items,
          {
            [action.post.id]: action.post
          }
        ]
      }
    
    default:
      return state;
  }
}