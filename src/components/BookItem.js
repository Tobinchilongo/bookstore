import './App.css';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function BookItem({ book }) {
  const dispatch = useDispatch();

  const handleRemoveBook = (e) => {
    dispatch(removeBook(e.target.value));
  };

  const percentage = 70;
  return (
    <li className="book-layout">
      <div className="book-item">
        <h3 className="grey-color">{book.category}</h3>
        <h2 className="book-title">{book.title}</h2>
        <h5 className="blue-color">{book.author}</h5>
        <div className="alterBtn">
          <button className="action-btn" type="button">Comment</button>
          <button className="action-btn" type="button" value={book.id} onClick={handleRemoveBook}>Remove</button>
          <button className="action-btn" type="button">Edit</button>
        </div>
      </div>
      <div className="complete-chapter">
        <div className="progress">
          <div className="progress-bar">
            <div style={{ width: 50, height: 60 }}>
              <CircularProgressbar value={percentage} />
            </div>
          </div>
          <div className="progress-info">
            <span className="big-percent">64%</span>
            <span className="progress-status grey-color">Completed</span>
          </div>
        </div>
        <div className="border-line" />
        <div className="chapter-info">
          <p className="grey1 -color">Current Chapter</p>
          <p className="grey2-color">Chapter 17</p>
          <button className="update-progress-btn" type="button">UPDATE PROGRESS</button>
        </div>
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
