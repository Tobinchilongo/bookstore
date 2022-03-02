const ADD_BOOK = 'BookStores/books/ADD_BOOK';
const REMOVE_BOOK = 'BookStores/books/REMOVE_BOOK';

const initialState = [];

// This code displays Action Creators
export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});
export const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  id: bookId,
});

// This Code shows Reducers

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default reducer;
