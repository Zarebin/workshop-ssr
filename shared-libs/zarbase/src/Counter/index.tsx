import React, { useState } from 'react';
import './style.scss';

type CounterProps = {
  value: number;
};

const Counter: React.FC<CounterProps> = ({ value }) => {
  const [counter, setCounter] = useState(0);
  const setCounterUp = () => setCounter(counter + value);

  return (
    <div style={{ padding: 20 }}>
      I am a sample counter
      { counter}
      <button onClick={setCounterUp} style={{ marginLeft: 15 }}>
        Counter: +{value}
      </button>
    </div>
  );
};

export default Counter;
