import React, { useState } from 'react';

const UseStateBasic = () => {
  const [title, setTitle] = useState('random title')

  const handleClick = () => {
    if (title === 'random title') {
      setTitle('Hello World');
    } else {
      setTitle('random title');
    }
  }

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        Change title
      </button>
    </React.Fragment>
  );
}

export default UseStateBasic;