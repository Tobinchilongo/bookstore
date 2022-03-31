const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';
const CLEAR_BOOKS = 'bookStore/books/CLEAR_BOOKS';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const Booksreducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return state.concat(action.payload);
    case CLEAR_BOOKS:
      return [];
    case ADD_BOOK:
      return [...state, {
        ...action.payload,
      }];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.id);
    default:
      return state;
  }
};

export default Booksreducer;
