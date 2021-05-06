import React, {useState} from 'react';

const UseStateCounter = () => {
  const [counter, setCounter] = useState(0);
  const btnStyle = {
    margin: '20px',
    padding: '10px'
  };
  return (
    <>
      <h2>Counter</h2>
      <h4>{counter}</h4>

      <button onClick={() => setCounter(counter - 1)} style={btnStyle}>-</button>
      <button onClick={() => setCounter(counter + 1)} style={btnStyle}>+</button>
      <button onClick={() => setCounter(0)} style={btnStyle}>X</button>
    </>
  );
};

export default UseStateCounter;