import React from 'react';

const Book = ({ img, title, author }) => {
  const clickHandler = () => {
    console.log("Hello world")
  }
  return (
    <article className="book">
      <Image image={img}/>
      <Title title={title}/>
      <Author author={author}/>
      <button type="button" onClick={clickHandler}>
        Reference example
      </button>
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

export default Book
