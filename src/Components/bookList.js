import React, {useState} from "react";
import BookCard from "./bookCard";
import styles from './Styles/bookList.module.css'
const BookList = () => {

  const props = [{title: "MOhammed Book title111", author:"Book Author111"}]

  return (
    <section className={styles.books}>
     <div className={styles.booksContainer}>
      <BookCard books={props}/>
     </div>
     
    </section>
  )
}

export default BookList