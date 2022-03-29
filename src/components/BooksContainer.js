import React from 'react';
<<<<<<< HEAD
import { useSelector } from 'react-redux';
import BooksList from './BooksList';
import FormAddBook from './FormAddBook';

function BooksContainer() {
  const books = useSelector((state) => state.books);
=======
import BooksList from './BooksList';
import FormAddBook from './FormAddBook';

const books = [
  {
    id: 1,
    category: 'Action',
    name: 'The hunger games',
    author: 'Suzane Collins',
  },
  {
    id: 2,
    category: 'Science Fiction',
    name: 'Dune',
    author: 'Frank Herbert',
  },
  {
    id: 3,
    category: 'Economy',
    name: 'Capital in the Twenty-First Century',
    author: 'Suzzane Collins',
  },
];

function BooksContainer() {
>>>>>>> 57daad16aa2126a1c72e487de9f6dc62b748b257
  return (
    <div className="container">
      <BooksList books={books} />
      <FormAddBook />
    </div>
  );
}

export default BooksContainer;
