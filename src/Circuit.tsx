import React from 'react'
import Columns from './Columns';

export default function Circuit(props) {
  let matrix = props.matrix;
  let n = matrix.length;

  class And {
    permutation: Array<number>;
    result: number;
    constructor(permutation: Array<number>, n:number, matrix: Array<Array<number>>) {
      this.permutation = permutation;
      this.result = 1;
      for (let i=0; i<n; i++) {
        this.result &= matrix[i][permutation[i]];
        if (!this.result) {break;}
      }
    }
  }

  // Leibniz permutations of columns
  let permutations = Columns(n);
  let positives = new Array<And>;
  let negatives = new Array<And>;
  for (var permutation of permutations) {
    for (let i=0; i<n; i++) {
      console.log(i+" "+permutation.permutation[i]);
    }
    if (permutation.sign) {negatives.push(new And(permutation.permutation,n,matrix));}
    else {positives.push(new And(permutation.permutation,n,matrix));}
  }
  for (var a of positives) {
    let line = "";
    for (let i=0; i<n; i++) {
      console.log(i+" "+a.permutation[i]);
      line += matrix[i][a.permutation[i]]+" ";
    }
    console.log(line);
    console.log(a.result);
  }

  return (
    <div>circuit</div>
  )
}
