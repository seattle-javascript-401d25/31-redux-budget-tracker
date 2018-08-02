import { combineReducers } from 'redux';
import categories from './category';
import cards from './card';

export default combineReducers({
  categories,
  cards,
});
