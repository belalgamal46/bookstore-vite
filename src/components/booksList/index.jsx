import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getBooks } from '../../redux/books';
import Book from '../book';
import './styles/booksList.css';

const BooksList = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const books = useSelector((state) => state.booksReducer.books);
  const booksKeys = Object.keys(books);

  return (
    <section className="hero-section">
      <ul className="books-list">
        {booksKeys?.map((key) => {
          const book = books[key];
          const { title, author, category } = book[0];
          return (
            <Book
              key={key}
              id={key}
              bookTitle={title}
              bookAuthor={author}
              bookCategory={category}
            />
          );
        })}
      </ul>
      <span className="horizontal-divider" />
      {children}
    </section>
  );
};

BooksList.propTypes = {
  children: PropTypes.element.isRequired,
};

export default BooksList;
