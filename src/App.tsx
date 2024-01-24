import { SetStateAction, useState } from 'react'
import ReactDOM from 'react-dom/client';
import './App.css'
import Form, {matrixEntries} from './Form'

function App() {
  
  return (
    <>
      <h1>Determinant to Circuit Diagram Converter</h1>
      <div className="matrix">
        <Form/>
        {/*matrixEntries.map((item) => {
          return <input type="text" name={item.i+" "+item.j}/>
        })*/}
      </div>
    </>
  )
}

export default App
