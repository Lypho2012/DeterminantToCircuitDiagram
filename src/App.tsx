import './App.css'
import Form from './Form'
import React, { StrictMode } from 'react'

/*
Cindy Zhang

Main function that runs the rest of the program
*/

function App() {
  
  const handleScroll = (event) => {
    const container = event.target;
    const scrollAmount = event.deltaY;
    container.scrollTo({
      top: container.scrollTop + scrollAmount,
      left: container.scrollLeft + scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div onWheel={handleScroll}>
      <h1>Determinant Calculator</h1>
      <div className="matrix">
        <Form/>
      </div>
    </div>
  )
}

export default App
