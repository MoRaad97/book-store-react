import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import styles from './Styles/Categories.module.css';
import { CheckStatus } from '../Redux/categories/categories';

const Categories = () => {
  const checkingState = useSelector((state) => state.categoriesReducer);
  const dispatch = useDispatch();
  return (
    <div className={styles.CategoriesContainer}>
      <button type="button" className={styles.checkStateBtn} onClick={() => dispatch(CheckStatus())}>Check State</button>
      <h1>{checkingState}</h1>
    </div>
  );
};
export default Categories;
