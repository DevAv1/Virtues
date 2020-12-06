import { combineReducers} from 'redux';
import { posts } from './posts';

export const reducers = () => {
  return combineReducers({
    posts
  })
}