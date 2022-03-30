import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
=======
>>>>>>> 57daad16aa2126a1c72e487de9f6dc62b748b257

function BookItem({ book }) {
  const dispatch = useDispatch();

  const handleRemoveBook = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <li>
      <h3>{book.category}</h3>
<<<<<<< HEAD
      <h2>{book.title}</h2>
      <h5>{book.author}</h5>
      <div>
        <button type="button" onClick={() => handleRemoveBook(book.id)}>Remove</button>
=======
      <h2>{book.name}</h2>
      <h5>{book.author}</h5>
      <div>
        <button type="button">Remove</button>
>>>>>>> 57daad16aa2126a1c72e487de9f6dc62b748b257
      </div>
    </li>
  );
}

BookItem.propTypes = {
<<<<<<< HEAD
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
=======
  book: PropTypes.arrayOf.isRequired,
};

>>>>>>> 57daad16aa2126a1c72e487de9f6dc62b748b257
export default BookItem;
