import React from 'react'
import { useState } from "react";
import Circuit from './Circuit'

function Matrix(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    let new_matrix = Array(props.n);
    for (let i=0;i<props.n;i++) {
      new_matrix[i] = new Array(props.n).fill(0);
      for (let j=0;j<props.n;j++) {
        const cell = document.getElementById(i+" "+j);
        if (cell) {
          if (cell.value > 0) {new_matrix[i][j] = 1;}
        }
      }
    }
    setMatrix(new_matrix);
    setIsMatrixReady(true);
  }
  const [isMatrixReady,setIsMatrixReady] = useState(false);
  const [matrix,setMatrix] = useState(Array(props.n));

  let res = Array(props.n);
  for (let i=0;i<props.n;i++) {
    res[i] = new Array(props.n).fill(0);
    for (let j=0;j<props.n;j++) {
      res[i][j] = <input key = {i+" "+j} type="text" name = {i+","+j} size={1}/>;
      
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      {res.map((row, i = 1) => {
        return (
          <div key={i}>
            {
              row.map((item, j = 1) => {
                return (
                  item
                )
              })
            }
          </div>
        )
      })}
      <button>Display circuit diagram</button>
      </form>
      {
        isMatrixReady ? (<Circuit matrix={matrix}/>)
        :(<div></div>)
      }
    </div>
  )
}

export default Matrix