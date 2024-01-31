import './App.css'
import Form from './Form'
import React, { StrictMode } from 'react'

/*
Cindy Zhang

Main function that runs the rest of the program
*/

function App() {
  
  return (
    <StrictMode>
      <h1>Determinant Calculator</h1>
      <div className="matrix">
        <Form/>
      </div>
    </StrictMode>
  )
}

export default App
