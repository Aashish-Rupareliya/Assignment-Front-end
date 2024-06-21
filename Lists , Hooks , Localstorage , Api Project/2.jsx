import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component did mount');

    return () => {
      console.log('Component will unmount');
    };
  }, []);

  useEffect(() => {
    if (count !== 0) {
      console.log('Component did update');
    }
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
