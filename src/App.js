import './App.css';
import { useState } from 'react';

const QUANTITIES = [5, 10, 99, 100]

function App() {
  const [counter, setCounter] = useState(0)
  const [maxCounterNum, setMaxCounterNum] = useState(QUANTITIES[0])

  const isMax = counter >= maxCounterNum

  const increment = () => {
    if (counter >= maxCounterNum) return
    setCounter(prev => prev + 1)
  }
  const reset = () => setCounter(0)

  const handleQuantity = (quantity) => () => {
    setMaxCounterNum(quantity)
  }

  return (
    <div className="App">
      <div className={`counter ${isMax && 'max'}`} onClick={increment}>
        <p className='number'>{counter}</p>
      </div>
      <div className='btnsWrapper'>
        <button type='button' className='resetBtn btn' onClick={reset}>Reset</button>
        <div className='quantityBtns'>
          {QUANTITIES.map(quantity => 
            <button 
              key={quantity} 
              type='button' 
              className={`quantityBtn btn ${quantity === maxCounterNum && 'active'}`} 
              onClick={handleQuantity(quantity)}
            >
              {quantity}
            </button>)}
        </div>
      </div>
    </div>
  );
}

export default App;
