import React from "react";
import styles from './Styles/bookCard.module.css'
const BookCard = (props) => {
  return (
    props.books.map((book) => {
      return (
      <div className={styles.bookCard}>
      <div className={styles.bookTitle}>
        <p>Category</p>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <ul>
          <li><button>Comment</button></li>
          <li><button>Remove</button></li>
          <li><button>Edit</button></li>
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
        <button className="current-chapter-btn">Update Progress</button>
      </div>
    </div>)
    })
    
  )
}

export default BookCard