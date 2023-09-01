import React, { useState, useEffect, useReducer } from 'react';

// Define initial state for useReducer
const initialState = { count: 0 };

// Define reducer function for useReducer
function reducer(state: { count: number; }, action: { type: string; }) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function ExMixHook() {
  // useState for storing random color value
  const [color, setColor] = useState('');

  // useReducer for managing the count state
  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect for generating a random color when the count changes
  useEffect(() => {
    const randomColor = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`;
    setColor(randomColor);
  }, [state.count]);

  return (
    <div>
      <p>Count (useReducer): {state.count}</p>

      <div style={{ backgroundColor: color }} className="color-box">
        <p>Random Color: {state.count}</p>
      </div>

      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}

export default ExMixHook;
