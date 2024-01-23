import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Determinant to Circuit Diagram Converter</h1>
      <div className="matrix">
        <form>
          <label>
            n = 
            <input type="text" name="n" />
          </label>
          <input type="submit" value="Generate empty matrix" />
        </form>
        <form>
          <label>
            n = 
            <input type="text" name="n" />
          </label>
          <input type="submit" value="Generate empty matrix" />
        </form>
      </div>
    </>
  )
}

export default App
