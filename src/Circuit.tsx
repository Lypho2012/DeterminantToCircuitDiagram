import React from 'react'
import Columns from './Columns';

export default function Circuit(props) {
  let matrix = props.matrix;
  let n = matrix.length;

  class And {
    permutation: Array<number>;
    result: number;
    constructor(permutation: Array<number>) {
      this.permutation = permutation;
      this.result = 1;
      for (let i=0; i<n; i++) {
        this.result &= matrix[i][permutation[i]];
        if (!this.result) {break;}
      }
    }
  }

  // permutations of columns
  let permutations = Columns(n);
  let positives = new Array<And>;
  let negatives = new Array<And>;
  for (var permutation of permutations) {
    if (permutation.sign) {negatives.push(new And(permutation.permutation));}
    else {positives.push(new And(permutation.permutation));}
  }
  for (var a of positives) {
    let line = "";
    for (var num of a.permutation) {line += num + " ";}
    console.log(line);
    console.log(a.result);
  }

  return (
    <div>circuit</div>
  )
}
