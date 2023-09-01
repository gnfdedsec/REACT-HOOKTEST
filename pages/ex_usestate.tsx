import React, { useState } from 'react';

function ex_usestate() {
  // ใช้ useState เพื่อสร้าง state ชื่อ count และฟังก์ชันในการอัปเดต state ชื่อ setCount
  const [count, setCount] = useState(0);

  // สร้างฟังก์ชันเพื่อเพิ่มค่า count ขึ้นทีละ 1 เมื่อคลิกปุ่ม
  const incrementCount = () => {
    setCount(count + 1);
  };

  // สร้างฟังก์ชันเพื่อลดค่า count ลงทีละ 1 เมื่อคลิกปุ่ม
  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter Example</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
}

export default ex_usestate;