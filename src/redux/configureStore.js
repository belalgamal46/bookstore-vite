import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books';
import categoriesReducer from './categories';

const store = configureStore({
  reducer: {
    booksReducer,
    categoriesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      // Ignore these field paths in all actions
      ignoredActionPaths: ['bookstore/books'],
    },
  }),
});

export default store;
