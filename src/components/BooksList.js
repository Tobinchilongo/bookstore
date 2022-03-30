import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

function BooksList({ books }) {
  return (
    <ul>
      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
        />
      ))}
    </ul>
  );
}

BooksList.propTypes = {
<<<<<<< HEAD
  books: PropTypes.arrayOf(BookItem.propTypes.book).isRequired,
=======
  books: PropTypes.arrayOf.isRequired,
>>>>>>> 57daad16aa2126a1c72e487de9f6dc62b748b257
};

export default BooksList;
