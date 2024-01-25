import { SetStateAction, useState } from 'react'
import ReactDOM from 'react-dom/client';
import './App.css'
import Form from './Form'
import Matrix from './Matrix'

function App() {
  
  return (
    <>
      <h1>Determinant to Circuit Diagram Converter</h1>
      <div className="matrix">
        <Form/>
        <Matrix/>
      </div>
    </>
  )
}

export default App
