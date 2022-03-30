import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addBook } from '../redux/books/books';

function FormAddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('motivation');
  const dispatch = useDispatch();

  function submitBookToStore(event) {
    event.preventDefault();
    const handleChange = {
      id: nanoid(),
      title,
      author,
      category,
    };
    dispatch(addBook(handleChange));
    setTitle('');
    setAuthor('');
    setCategory('motivation');
  }

  return (
    <div>
      <h2>Add new book</h2>
      <form onSubmit={submitBookToStore}>
        <input onChange={(e) => setTitle(e.target.value)} type="text" name="name" placeholder="Book Title" id="title" value={title} required />
        <input onChange={(e) => setAuthor(e.target.value)} type="text" name="author" placeholder="author" id="author" value={author} required />
        <select onChange={(e) => setCategory(e.target.value)} placeholder="Category">
          <option value="motivation">Motivation</option>
          <option value="romance">Romance</option>
          <option value="business">Business</option>
          <option value="fiction">Fiction</option>
          <option value="adventure">Adventure</option>
          <option value="horror">Horror</option>

        </select>

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default FormAddBook;
