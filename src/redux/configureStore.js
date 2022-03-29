import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/books';
import CategoriesReducer from './categories/categories';

const reducer = combineReducers({
  books: booksReducer,
  Categories: CategoriesReducer,
  // additional reducers could be added here
});

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

export default store;
