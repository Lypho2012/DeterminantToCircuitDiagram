import React from 'react'
import Columns from './Columns';

/*
Cindy Zhang

INCOMPLETE
Uses the Leibniz formula for determinants to generate circuit diagram (only compatible with values of 1's and 0's)
*/

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
  console.log("columns "+n);
  let permutations = Columns(n);
  /*let positives = new Array<And>;
  let negatives = new Array<And>;
  for (let permutation of permutations) {
    console.log(permutation);
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
  }*/

  return (
    <div>circuit</div>
  )
}
