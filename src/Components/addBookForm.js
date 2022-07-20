import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Styles/addBookForm.module.css';
// import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { addBookThunk } from '../Redux/books/books';

const AddBookForm = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    title: '',
    author: '',
    category: '',
  });

  const handle = (e) => {
    setState({
      ...state, [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBookThunk(state));
    setState({
      title: '',
      author: '',
      category: '',
    });
  };
  return (
    <section className={styles.bookForm}>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={handle}
          value={state.title}
          className={styles['title-input']}
          placeholder="Book Title"
        />
        <input
          type="text"
          name="author"
          onChange={handle}
          value={state.author}
          className={styles['author-input']}
          placeholder="Book Author"
        />
        <button type="submit">ADD BOOK</button>
      </form>
    </section>
  );
};
export default AddBookForm;
