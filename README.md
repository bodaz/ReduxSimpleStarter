### Notes ###
---
1. Redux serves the application states
2. React provides the view to that state
3. Two libraries are connect by the 'react-redux' library.
---
1. Application state is generated by reducer functions, eg reducer_books.js
2. BooksReducer always return an array of books, an array contains objects, and each object returns the detail of the book.
3. we added BooksReducer into rootReducer in reducers/index.js
4. rootReducer adds a key to our global application state called books, where key is books and value is whatever returned by BooksReducer
---
1. we have a component called BookList
2. since BookList needs to be aware of the state, we promoted it to a container
3. a contaienr is a normal React component that gets bonded to that application state
4. to do so, we imported 'connect' from 'react-redux', and mapStateToProps function 
---
1. app renders BookList
2. redux generated a state object that contains our books, and mapped that state as props to our component.
3. because state was update through our reducer, our component re-rendered with that list of books. 
