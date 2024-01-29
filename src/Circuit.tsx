import React from 'react'

export default function Circuit(props) {
  // permutations of columns
  

  // associate permutations with matrix
  let matrix = props.matrix;
  
  let n = matrix.length;
  for (let i=0; i<n; i++) {
    for (let j=0; j<n; j++) {
      let cell = matrix[i][j];
    }
  }
  return (
    <div>circuit</div>
  )
}
