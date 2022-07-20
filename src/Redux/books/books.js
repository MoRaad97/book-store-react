import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';
// Actions
const ADD_BOOK = 'book-store-react/books/ADD_BOOK';
const REMOVE_BOOK = 'book-store-react/books/REMOVE_BOOK';
const LOAD_BOOKS = 'book-store-react/books/LOAD_BOOKS';

// App id
const appId = 'wkX5Bv9pHLpGLiFaAgpo';
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';

// create ASYNC Thunks
export const loadBooksThunk = createAsyncThunk(LOAD_BOOKS, async () => {
  // fetch Books
  const response = await axios.get(`${baseUrl}/${appId}/books/`).catch((err) => {
    console.log('Error', err);
  });
  const res = response.data;
  const spreadData = Object.keys(res).map((key) => ({
    id: key,
    ...res[key][0],
  }));

  return spreadData;
});

export const addBookThunk = createAsyncThunk(ADD_BOOK, async (
  { title, author, category },
  thunkAPI,
) => {
  const book = {
    item_id: uniqid(),
    title,
    author,
    category,
  };
  // fetch Books
  await axios.post(`${baseUrl}/${appId}/books`, book)
    .then(() => thunkAPI.dispatch(loadBooksThunk()))
    .catch((err) => { console.log('Error', err); });
  const books = thunkAPI.getState().booksList;
  return books;
});

export const removeBookThunk = createAsyncThunk(REMOVE_BOOK, async (id, thunkAPI) => {
  // fetch Books
  await axios.delete(`${baseUrl}/${appId}/books/${id}`)
    .then(() => thunkAPI.dispatch(loadBooksThunk()))
    .catch((err) => { console.log('Error', err); });
  const books = thunkAPI.getState().booksList;
  return books;
});

const storeSlice = createSlice({
  name: 'book-store-react/books',
  initialState: [],
  extraReducers: {
    [loadBooksThunk.fulfilled]: (state, action) => action.payload,
    [addBookThunk.fulfilled]: (state, action) => action.payload,
    [removeBookThunk.fulfilled]: (state, action) => action.payload,
  },
});
export const booksList = (state) => state.bookList;
export default storeSlice.reducer;

// Action Creators
