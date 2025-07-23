import "./App.css"
import { useEffect, useState } from "react"

const QUANTITIES = [
  { title: "33", value: 33 },
  { title: "100", value: 100 },
  { title: "1000", value: 1000 },
  { title: "2000", value: 2000 },
  { title: "Unlimited", value: 999999999 },
]

const LOCAL_STORAGE_KEY = "counter"

const isUnlimitedQuantityValue =
  QUANTITIES.find(({ title }) => title === "Unlimited").value ||
  QUANTITIES[QUANTITIES.length - 1].value

function App() {
  const [counter, setCounter] = useState(0)
  const [maxCounterNum, setMaxCounterNum] = useState(isUnlimitedQuantityValue)
  const isMax = counter >= maxCounterNum

  const saveCounterValue = (value) => {
    setCounter(value)
    localStorage.setItem(LOCAL_STORAGE_KEY, String(value))
  }

  const increment = () => {
    if (counter >= maxCounterNum) return
    saveCounterValue(counter + 1)
  }

  const decrement = () => {
    if (counter === 0) return
    if (counter > maxCounterNum) return saveCounterValue(maxCounterNum)
    saveCounterValue(counter - 1)
  }

  const reset = () => saveCounterValue(0)

  const handleQuantity = (quantity) => () => setMaxCounterNum(quantity)

  useEffect(() => {
    const storedCounter = Number(localStorage.getItem(LOCAL_STORAGE_KEY))

    if (storedCounter) setCounter(storedCounter)
  }, [])

  return (
    <div className="App">
      <div className="minus" onClick={decrement}>
        <span>&mdash;</span>
      </div>
      <div className="counter-wrapper">
        <div className={`counter${isMax ? " max" : ""}`} onClick={increment}>
          <p className="number">{counter}</p>
        </div>
        <div className="btnsWrapper">
          <button type="button" className="resetBtn btn" onClick={reset}>
            Reset
          </button>
          <div className="quantityBtns">
            {QUANTITIES.map(({ title, value }) => (
              <button
                key={title}
                type="button"
                className={`quantityBtn btn ${
                  value === maxCounterNum && "active"
                }`}
                onClick={handleQuantity(value)}
              >
                {title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
