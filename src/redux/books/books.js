import * as api from '../../api/bookinfo';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';
const CLEAR_BOOKS = 'bookStore/books/CLEAR_BOOKS';

const initialState = [];

const handleData = (data) => {
  const books = [];
  const keys = Object.keys(data);
  keys.forEach((key, index) => {
    const book = data[key[index]];
    book[0].item_id = key;

    books.push(book[0]);
  });
};

export const fetchBooks = () => async (dispatch) => api
  .fetchBooks().then((data) => dispatch({ type: GET_BOOKS, payload: handleData(data) }));

export const addBook = (book) => async (dispatch) => {
  try {
    await api.postBook(book);
    dispatch({ type: ADD_BOOK, payload: book });
  } catch (error) {
    throw new Error(error.message);
  }
};
export const getBooks = (payload) => ({ type: GET_BOOKS, payload });

export const removeBook = (bookId) => async (dispatch) => {
  try {
    await api.deleteBook(bookId);
    dispatch({ type: REMOVE_BOOK, payload: bookId });
  } catch (error) {
    throw new Error(error.message);
  }
};
export const deleBook = (payload) => ({ type: REMOVE_BOOK, payload });

const Booksreducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return state.concat(action.payload);
    case CLEAR_BOOKS:
      return [];
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default Booksreducer;
