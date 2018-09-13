import React from 'react';

function Controls(props) {

  const functionPlus = () => props.onChange(props.count + 1);
  const functionMinus = () => props.onChange(props.count - 1);

  return (
    <div>
      <h1>Controls {props.count}</h1>

      <button onClick={() => functionPlus()}>PLUS</button>
      <button onClick={() => functionMinus()}>MINUS</button>

    </div>
  );
}

export default Controls;