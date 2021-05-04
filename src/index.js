import React from 'react';
import ReactDom from 'react-dom';

// Nested components, React tools

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>Greg Vaz</h2>;
const Message = () => {
  return <p>This is my message</p>;
};

ReactDom.render(<Greeting />, document.getElementById('root'));