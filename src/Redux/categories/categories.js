// Actions
const CHECK_STATUS = 'bookList/books/CHECK_STATUS'


// initial state
const defaultState = {
  categories: []
};

// Reducer
export default function categoriesReducer(state = defaultState, action) {
  switch (action.type) {
    case CHECK_STATE:
      return [action.text]
    default:
      return state
  }
}

// Action Creators 

export function addBook() {
  return {
    type: CHECK_STATUS,
    text: "Under construction"
  }
}