import React from "react";

const AddBookForm = () => {
  return (
    <section className="book-form">
      <form >
        <input type="text" name="title" className="title-input" />
        <input type="text" name="" className="category-input" />
        <button>ADD BOOK</button>
      </form>
    </section>
  )
}

export default AddBookForm