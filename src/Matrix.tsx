import { useState } from "react";
import Circuit from './Circuit'
import Laplace from './LaplaceExpansion';

/*
Cindy Zhang

Textboxes for taking user input for entries to matrix
Calls function to find determinant, which can be changed in code to call either the Leibniz formula (incomplete) or Laplace expansion
*/

function Matrix(props) {
  const handleSubmit = (event) => {
    event.preventDefault();

    let new_matrix = Array(props.n);
    let k = 0;
    for (let i=0;i<props.n;i++) {
      new_matrix[i] = new Array(props.n).fill(0);
      for (let j=0;j<props.n;j++) {
        new_matrix[i][j] = parseInt(event.target[k].value);
        k += 1;
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
      <button>Calculate determinant</button>
      </form>
      {
        isMatrixReady ? (<Circuit matrix={matrix}/>)//(<Laplace matrix={matrix}/>)//
        :(<div></div>)
      }
    </div>
  )
}

export default Matrix