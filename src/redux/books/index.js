import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBooks, createBook, deleteBook } from '../../apis/books';

const FETCH_BOOKS = 'bookstore/books/fetchBooks';
const ADD_BOOK = 'bookstore/books/addBook';
const DELETE_BOOK = 'bookstore/books/deleteBook';
const ADD_BOOK_UI = 'bookstore/books/addBookUi';
const REMOVE_BOOK_UI = 'bookstore/books/removeBookUi';

const initialState = {
  books: {},
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case `${FETCH_BOOKS}/fulfilled`:
      return {
        ...state,
        books: { ...payload },
      };

    case `${ADD_BOOK}/fulfilled`: {
      return state;
    }

    case `${DELETE_BOOK}/fulfilled`:
      return state;

    case ADD_BOOK_UI: {
      const { itemId, ...rest } = payload;
      return {
        ...state,
        books: { ...state.books, [itemId]: [rest] },
      };
    }

    case REMOVE_BOOK_UI: {
      const { [payload.id]: id, ...rest } = state.books;
      return {
        ...state,
        books: { ...rest },
      };
    }
    default:
      return state;
  }
};

export const addBook = createAsyncThunk(ADD_BOOK, createBook);

export const removeBook = createAsyncThunk(DELETE_BOOK, deleteBook);

export const getBooks = createAsyncThunk(FETCH_BOOKS, fetchBooks);

export const addBookUi = (book = {}) => ({ type: ADD_BOOK_UI, payload: book });

export const removeBookUi = (book) => ({ type: REMOVE_BOOK_UI, payload: book });

export default reducer;
