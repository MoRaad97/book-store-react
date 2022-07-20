// Actions
const CHECK_STATUS = 'book-store-react/books/CHECK_STATUS';

// initial state
const categories = [];

// Reducer
export default function categoriesReducer(state = categories, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return action.text;
    default:
      return state;
  }
}

// Action Creators

export function CheckStatus() {
  return {
    type: CHECK_STATUS,
    text: 'Under construction...',
  };
}
