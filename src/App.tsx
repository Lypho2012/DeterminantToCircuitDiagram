import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function createMatrix(n:number) {
  const res = [];
  for (let i=0;i<n;i++) {
    for (let j=0; j<n; j++) {
      res.push({i:i,j:j});
    }
  }
  return res;
}

function App() {
  const [matrixEntries, setMatrixEntries] = useState(createMatrix(0));

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
        {matrixEntries.map((item) => {
          return <input type="text" name={item.i+" "+item.j}/>
        })}
      </div>
    </>
  )
}

export default App
