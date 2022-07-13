import React from 'react';
import styles from './Styles/addBookForm.module.css';

const AddBookForm = () => (
  <section className={styles.bookForm}>
    <hr />
    <form>
      <input type="text" name="title" className={styles['title-input']} placeholder="Book Title" />
      <input type="text" name="Author" className={styles['author-input']} placeholder="Book Author" />
      <button type="button">ADD BOOK</button>
    </form>
  </section>
);

export default AddBookForm;
