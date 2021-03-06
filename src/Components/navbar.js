import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Styles/navbar.module.css';
import userImg from './imgs/user.png';

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.linkLogoContainer}>
      <h2 className={styles.logo}>Bookstore CMS</h2>
      <ul className={styles.links}>
        <li><Link to="/" className={styles.bookNav}>Books</Link></li>
        <li><Link to="/Categories" className={styles.CategoriesNav}>Categories</Link></li>
      </ul>
    </div>
    <div className={styles.userLogo}><img src={userImg} alt="user" /></div>
  </nav>
);

export default Navbar;
