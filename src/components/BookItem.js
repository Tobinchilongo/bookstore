import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function BookItem({ book }) {
  const dispatch = useDispatch();

  const handleRemoveBook = (e) => {
    dispatch(removeBook(e.target.value));
  };

  return (
    <li>
      <h3>{book.category}</h3>
      <h2>{book.title}</h2>
      <h5>{book.author}</h5>
      <div>
        <button type="button" value={book.id} onClick={handleRemoveBook}>Remove</button>
      </div>
    </li>
  );
}

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
export default BookItem;
