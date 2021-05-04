import React from 'react';
import ReactDom from 'react-dom';
import './index.css'

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
}

const Image = () => {
  return (
    <img src="https://images-na.ssl-images-amazon.com/images/I/91QrUUK6WQL._AC_UL200_SR200,200_.jpg" alt=""/>
  );
}

const Title = () => <h1>The Tyranny of Big Tech</h1>;
const Author = () => <h4>Josh Hawley</h4>;
ReactDom.render(<BookList />, document.getElementById('root'));