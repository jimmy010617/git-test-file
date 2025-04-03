import React, { useState } from 'react'

export default function CountState() {
  const [count, setCount] = useState(0);

  function handlleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handlleClick}>
        Clicked {count} times
      </button>
    </div>
  );
}
