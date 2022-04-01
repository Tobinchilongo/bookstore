import './App.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookItem from './BookItem';
import { fetchBooks } from '../redux/books/books';

function BooksList() {
  const books = useSelector((state) => state.books);
  // console.log(books);

  const dispatch = useDispatch();

  useEffect(() => {
    if (books === null) {
      dispatch(fetchBooks());
    }
  });

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

export default BooksList;
