import React, { useEffect, useState } from 'react';

function LifecycleExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // ช่วง componentDidMount เรียกเมื่อคอมโพเนนต์ถูกเรนเดอร์และแสดงผลครั้งแรก
    console.log('Component did mount.');

    // สร้าง effect สำหรับ componentWillUnmount
    return () => {
      // ช่วง componentWillUnmount เรียกเมื่อคอมโพเนนต์ถูกถอดการแสดงผล
      console.log('Component will unmount. Count:', count);
    };
  }, [count]); // เพิ่ม count เข้าไปใน dependency array เพื่อให้ useEffect รู้ถึงการเปลี่ยนแปลงของ count

  useEffect(() => {
    // ช่วง componentDidUpdate เรียกเมื่อค่า count เปลี่ยนแปลง
    console.log('Component did update. New count:', count);
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Lifecycle Example</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default LifecycleExample;
