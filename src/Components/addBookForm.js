import React, { useRef } from 'react';
import styles from './Styles/addBookForm.module.css';
import { useDispatch } from 'react-redux/es/exports';
import { addBook } from '../Redux/books/books'
import uniqid from 'uniqid';

const AddBookForm = () => {
  // calling useDispatch to the component 
  const dispatch = useDispatch()
  const titleInput = useRef(null)
  const authorInput = useRef(null)

  // const handleChange = () => {

  // }
  return (<section className={styles.bookForm}>
    <hr />
    <form>
      <input ref={titleInput} type="text" name="title" className={styles['title-input']} placeholder="Book Title" />
      <input ref={authorInput} type="text" name="Author" className={styles['author-input']} placeholder="Book Author" />
      <button type="button" onClick={() => dispatch(addBook(titleInput.current.value, authorInput.current.value, uniqid()))}>ADD BOOK</button>
    </form>
  </section>
  )
}
  ;

export default AddBookForm;
