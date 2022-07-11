import React from "react";

const BookList = () => {
  return (
    <section className="books">
     <div className="book-list">
      <div className="book-card">
        <div className="book-title">
          <p>Action</p>
          <h2>Book Title</h2>
          <p>Book Author</p>
          <ul>
            <li>comment</li>
            <li>Remove</li>
            <li>Edit</li>
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
      </div>
     </div>
    </section>
  )
}

export default BookList