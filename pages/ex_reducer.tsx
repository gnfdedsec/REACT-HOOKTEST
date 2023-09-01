import React, { useReducer } from 'react';

// กำหนดชนิดข้อมูลสำหรับ state
type State = {
  count: number;
};

// กำหนดชนิดข้อมูลสำหรับ action
type Action = {
  type: 'increment' | 'decrement';
};

// กำหนด initial state และชนิดข้อมูลเริ่มต้น
const initialState: State = { count: 0 };

// กำหนด reducer function และชนิดข้อมูลของ state และ action
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function ex_reducer() {
  // เรียกใช้ Hook useReducer และระบุชนิดข้อมูลของ state และ action
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>เพิ่ม</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>ลด</button>
    </div>
  );
}

export default  ex_reducer;
