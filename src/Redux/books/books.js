// Actions
const ADD_BOOK = 'bookList/books/ADD_BOOK'
const REMOVE_BOOK = 'bookList/books/REMOVE_BOOK'

// initial state
const defaultState = {
  bookList: []
};

// Reducer
export default function booksReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return state.bookList.push({
        title: action.title,
        author: action.bookAuthor,
        id: action.bookId
      })
    case REMOVE_BOOK:
      state.bookList.filter((book) => {
        return book.id !== action.id
      })
    default:
      return state
  }
}

// Action Creators 

export function addBook(bookTitle, bookAuthor, bookId) {
  return {
    type: ADD_BOOK,
    title: bookTitle,
    author: bookAuthor,
    id: bookId
  }
}

export function removeBook(bookId) {
  return {
    type: REMOVE_BOOK,
    id: bookId
  }
} 