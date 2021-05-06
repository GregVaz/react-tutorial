import React, {useState} from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Wolf',
    age: 30,
    message: 'random message'
  });

  const changeMessage = () => {
    setPerson({...person, message: 'New message'})
  }

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>{person.message}</h4>
      <button className='btn' onClick={changeMessage}>
        Change message
      </button>
    </>
  );
}

export default UseStateObject;