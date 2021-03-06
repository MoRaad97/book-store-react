import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import styles from './Styles/bookCard.module.css';
import { loadBooksThunk, removeBookThunk } from '../Redux/books/books';

const BookCard = () => {
  // state from store - booksReducer
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.bookList);

  useEffect(() => {
    dispatch(loadBooksThunk());
  }, []);

  const handle = (e) => {
    dispatch(removeBookThunk(e.target.id));
  };
  // render the books using the state
  return (bookList.map((book) => (
    <div className={styles.bookCard} key={book.id}>
      <div className={styles.bookTitle}>
        <h3>Category</h3>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <ul>
          <li><button type="button">Comment</button></li>
          <li><button type="button" id={book.id} onClick={handle}>Remove</button></li>
          <li><button type="button">Edit</button></li>
        </ul>
      </div>
      <div className={styles['progress-container']}>
        <div className={styles['book-progress']}>
          {/* <img src="#" alt="prograss bar" /> */}
          <div className={styles['progress-bar']} />
          <div>
            <p className="progress-percent">70%</p>
            <p className="completed">Completed</p>
          </div>
        </div>
        <div className={styles['current-chapter']}>
          <p>Current Chapter</p>
          <p className="current-chapter-p2">Chapter 20</p>
          <button type="button" className="current-chapter-btn">Update Progress</button>
        </div>
      </div>
    </div>
  ))
  );
};

export default BookCard;
