import './App.css';
import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addBook } from '../redux/books/books';

function FormAddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Motivation');
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
    setCategory('Motivation');
  }

  return (
    <div className="book-form">
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form onSubmit={submitBookToStore}>
        <input onChange={(e) => setTitle(e.target.value)} type="text" className="title-field" name="name" placeholder="Book Title" id="title" value={title} required />
        <input onChange={(e) => setAuthor(e.target.value)} type="text" name="author" placeholder="Author" id="author" value={author} required />
        <select onChange={(e) => setCategory(e.target.value)} placeholder="Category">
          <option value="Motivation">Motivation</option>
          <option value="Romance">Romance</option>
          <option value="Business">Business</option>
          <option value="Fiction">Fiction</option>
          <option value="Adventure">Adventure</option>
          <option value="Horror">Horror</option>

        </select>

        <button className="add-btn additional" type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default FormAddBook;
