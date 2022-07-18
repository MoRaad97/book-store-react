import booksReducer from "./books/books";
import categoriesReducer from "./categories/categories";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    booksReducer,
    categoriesReducer
  }
}) 
