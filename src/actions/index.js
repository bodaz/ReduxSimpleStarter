// actions/index.js
// contains all of our action curators

// since we want to export multiple action creators from a single action creator file
// we'll use export function rather than export default
export function selectBook(book) {
  // console.log('a book has been selected: ', book.title);
  // selectBook is an ActionCreator, it needs to return an action
  // an object with a type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}