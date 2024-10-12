import './App.css';
import { useState } from 'react';

const QUANTITIES = [
  { title: '7', value: 7 }, 
  { title: '33', value: 33 }, 
  { title: '99', value: 99 }, 
  { title: '100', value: 100 }, 
  { title: 'Unlimited', value: 999999999 }
]

const isUnlimitedQuantityValue = QUANTITIES.find(({ title }) => title === 'Unlimited').value || 999999999

function App() {
  const [counter, setCounter] = useState(99)
  const [maxCounterNum, setMaxCounterNum] = useState(isUnlimitedQuantityValue)

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
            {QUANTITIES.map(({ title, value }) => 
              <button 
                key={title} 
                type='button' 
                className={`quantityBtn btn ${value === maxCounterNum && 'active'}`} 
                onClick={handleQuantity(value)}
              >
                {title}
              </button>)}
          </div>
        </div>
      </div> 
    </div>
  );
}

export default App;
