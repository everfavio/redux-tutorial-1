import { CombineReducers, combineReducers } from 'redux';
import products from './productReducer';

export default combineReducers({
  products,
})