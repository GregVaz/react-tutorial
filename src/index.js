import React from 'react';
import ReactDom from 'react-dom';

// Nested components, React tools

function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
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