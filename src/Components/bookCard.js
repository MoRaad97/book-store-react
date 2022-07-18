import React from 'react';
import styles from './Styles/bookCard.module.css';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { removeBook } from '../Redux/books/books';
const BookCard = () => {
  // state from store - booksReducer
  const books = useSelector(state => state.booksReducer)
  const dispatch = useDispatch()
  // render the books using the state
  return (books.map((book) => (
    <div className={styles.bookCard} key={book.id}>
      <div className={styles.bookTitle}>
        <p>Category</p>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <ul>
          <li><button type="button">Comment</button></li>
          <li><button type="button" onClick={() => dispatch(removeBook(book.id))}>Remove</button></li>
          <li><button type="button">Edit</button></li>
        </ul>
      </div>
      <div className="book-progress">
        <img src="#" alt="prograss bar" />
        <div>
          <p className="progress-percent">70%</p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="current-chapter">
        <p className="current-chapter-p1">Current Chapter</p>
        <p className="current-chapter-p2">Chapter 20</p>
        <button type="button" className="current-chapter-btn">Update Progress</button>
      </div>
    </div>
  ))
  )

};

export default BookCard;
