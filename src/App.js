import './App.css';
import { useState } from 'react';

const QUANTITIES = [7, 33, 99, 100]

function App() {
  const [counter, setCounter] = useState(0)
  const [maxCounterNum, setMaxCounterNum] = useState(QUANTITIES[1])

  const isMax = counter >= maxCounterNum

  const increment = () => {
    if (counter >= maxCounterNum) return
    setCounter(prev => prev + 1)
  }

  const decrement = () => {
    if (counter === 0) return
    if (counter > maxCounterNum) {
      setCounter(maxCounterNum)
      return
    }
    setCounter(prev => prev - 1)
  }

  const reset = () => setCounter(0)

  const handleQuantity = (quantity) => () => {
    setMaxCounterNum(quantity)
  }

  return (
    <div className="App">
      <div className='minus' onClick={decrement}><span>&mdash;</span></div>       
      <div>
        <div className={`counter${isMax ? ' max' : ''}`} onClick={increment}>
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
    </div>
  );
}

export default App;
