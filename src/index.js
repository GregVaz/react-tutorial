import React from 'react';
import ReactDom from 'react-dom';
import './index.css'

// setup variables
const books = [
  {
    author: 'Josh Hawley',
    title: 'The Tyranny of Big Tech',
    img: 'https://images-na.ssl-images-amazon.com/images/I/91QrUUK6WQL._AC_UL200_SR200,200_.jpg'
  }, 
  {
    author: 'Don Miguel Ruiz',
    title: 'The Four Agreements: A Practical Guide to Personal Freedom',
    img: 'https://images-na.ssl-images-amazon.com/images/I/91p5b0UgbKL._AC_UL200_SR200,200_.jpg'
  },
  {
    author: 'Patricia Spigarelli Aston',
    title: 'Crisis Preparedness Handbook: A Comprehensive Guide to Home Storage and Physical Survival',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71q9ahmiwhL._AC_UL200_SR200,200_.jpg'
  }
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
          return <Book key={index} author={book.author} title={book.title} image={book.img}/>
      })}
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <Image image={props.image}/>
      <Title title={props.title}/>
      <Author author={props.author}/>
    </article>
  );
}

const Image = ({ image }) => {
  return (
    <img src={image} alt=""/>
  );
}

const Title = ({ title }) => {
  return (
    <h1>{title}</h1>
  );
}

const Author = ({ author }) => {
  return (
    <h4 style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>
      {author}
    </h4>
  );
}


ReactDom.render(<BookList />, document.getElementById('root'));