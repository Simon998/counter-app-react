import { useState } from 'react';
import './Counter.scss';

function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className='counter-wrapper'>
      <h1 className='counter-heading'>Counter {counter}</h1>
      <div className='counter-buttons'>
        <button className='counter-btn counter-btn-increase' onClick={increment}>Increase</button>
        <button className='counter-btn counter-btn-decrease' onClick={decrement}>Decrease</button>
      </div>
    </div>
  );
}

export default Counter;
