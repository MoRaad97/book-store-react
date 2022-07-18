import React from 'react';
import BookCard from './bookCard';
import styles from './Styles/bookList.module.css';

const BookList = () => (
  <section className={styles.books}>
    <div className={styles.booksContainer}>
      <BookCard />
    </div>

  </section>
);
export default BookList;
