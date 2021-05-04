import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

// Component
import Book from './Book';
// Data
import {books} from './books';

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
          return <Book key={book.id} {...book}/>
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById('root'));