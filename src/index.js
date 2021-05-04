import React from 'react';
import ReactDom from 'react-dom';

// stateless functional component
// always return JSX or display an error
// JSX Rules
/*
  return a single element
  div / section / article or Fragment
  udr vsmrlVsdr got html attribute
  className instead of class
  close every element
  formatting
*/

function Greeting() {
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}

ReactDom.render(<Greeting />, document.getElementById('root'));