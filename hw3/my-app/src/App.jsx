import { useState, useEffect } from 'react'
import './App.css'

export default function Timer() {
  const [inputValue, setInputValue] = useState("")
  const [seconds, setSeconds] = useState(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let timer = null
    if (isActive && seconds > 0) {
      timer = setInterval(() => {
        setSeconds(prev => prev - 1)
      }, 1000)
    } else if (seconds === 0 && isActive) {
      alert("Время вышло!")
      setIsActive(false)
    }
    return () => clearInterval(timer)
  }, [isActive, seconds])

  const handleStart = () => {
    const value = parseInt(inputValue, 10)
    if (!isNaN(value) && value > 0) {
      setSeconds(value)
      setIsActive(true)
    } else {
      alert("Введите корректное количество секунд")
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Таймер</h2>
      <input
        type="number"
        placeholder="Введите секунды"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleStart}>Start</button>

      {seconds !== null && <h3>Осталось: {seconds} секунд</h3>}
    </div>
  )
}
