import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0)

  const increment = () => setCounter(prev => prev + 1)
  const reset = () => setCounter(0)

  return (
    <div className="App">
      <div className='counter' onClick={increment}>
        <p className='number'>{counter}</p>
      </div>
      <button type='button' className='resetBtn' onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
