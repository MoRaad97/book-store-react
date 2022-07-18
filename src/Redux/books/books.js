// Actions
const ADD_BOOK = 'book-store-react/books/ADD_BOOK';
const REMOVE_BOOK = 'book-store-react/books/REMOVE_BOOK';

// initial state
const bookList = []

// Reducer
export default function booksReducer(state = bookList, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, {
        title: action.title,
        author: action.author,
        id: action.id,
      }];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}

// Action Creators

export function addBook(bookTitle, bookAuthor, bookId) {
  return {
    type: ADD_BOOK,
    title: bookTitle,
    author: bookAuthor,
    id: bookId,
  };
}

export function removeBook(bookId) {
  return {
    type: REMOVE_BOOK,
    id: bookId,
  };
}
