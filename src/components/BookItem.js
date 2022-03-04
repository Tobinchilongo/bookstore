import React, { useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks, removeBook } from '../redux/books/books';

function BookItem() {
  const bookStore = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!bookStore.length) {
      dispatch(getBooks());
    }
  }, []);

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };

  const percentage = Math.floor(Math.random() * 99);

  return (
    bookStore.map((book) => (
      <>
        <li key={book.item_id} className="book-container d-flex">
          <div className="general-info d-flex">
            <span className="genre">{}</span>
            <h3 className="title">{book.title}</h3>
            <span className="author">{book.category}</span>
            <ul className="book-management d-flex">
              <li><button type="button">Comments</button></li>
              <li>
                {' '}
                <button type="button" onClick={() => handleRemove(book.item_id)}>Delete</button>
              </li>
              <li><button type="button">Edit</button></li>
            </ul>
          </div>
          <div className="progress-bar">
            <div className="round-bar" style={{ width: 60, height: 60 }}>
              <CircularProgressbar
                value={percentage}
                styles={buildStyles({
                  pathColor: '#0290ff',
                })}
              />
            </div>
            <div className="count">
              <p>
                {percentage}
                %
              </p>
              <span>Completed</span>
            </div>
            <i className="bg-ling" />
          </div>
          <div className="current-chapter d-flex">
            <span className="current-chapter-span">Current Chapter</span>
            <span className="current-chapter-value">
              Chapter
              {' '}
              {}
            </span>
            <button type="button">Update Changes</button>
          </div>
        </li>
      </>
    ))

  );
}

export default BookItem;
