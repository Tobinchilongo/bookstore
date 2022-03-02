/* eslint-disable react/prop-types */
import React from 'react';

function BookItem({ book }) {
  return (

    <li>
      <span>
        {' '}
        {book.name}
        {' '}
      </span>
      <span>
        {' '}
        {book.author}
        {' '}
      </span>
      <button type="button">Delete</button>
    </li>

  );
}

export default BookItem;
