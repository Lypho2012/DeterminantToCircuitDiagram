import React from 'react'
import Columns from './Columns';
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import Draggable from "react-draggable";

/*
Cindy Zhang

INCOMPLETE
Uses the Leibniz formula for determinants to generate circuit diagram (only compatible with values of 1's and 0's)
*/
const boxStyle = {
  border: "grey solid 2px",
  borderRadius: "10px",
  padding: "5px"
};

const DraggableBox = ({ id, text }) => {
  const updateXarrow = useXarrow();
  return (
    <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
      <div id={id} style={boxStyle}>
        {text}
      </div>
    </Draggable>
  );
};

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
  for (let permutation of permutations) {
    if (permutation.sign) {negatives.push(new And(permutation.permutation,n,matrix));}
    else {positives.push(new And(permutation.permutation,n,matrix));}
  }

  // Input position vectors
  let inputs = new Array<String>();
  for (let i=0;i<n;i++) {
    for (let j=0;j<n;j++) {
      inputs.push(i+", "+j);
    }
  }

  return (
    <div className='horizontal'>
      <Xwrapper>
    
        {inputs.map((input) => {
          return (
            <DraggableBox id={""+input} text={input+": "+matrix[parseInt(input.split(", ")[0])][parseInt(input.split(", ")[1])]}/>
          )
        })}
        {positives.map((item) => {
          return (
            <DraggableBox id={item.permutation.toString()} text={"And = "+item.result}/>
          )
        })}
        {negatives.map((item) => {
          return (
            <DraggableBox id={""+item.permutation.toString()} text={"And = (-)"+item.result}/>
          )
        })}
        {positives.map((item) => {
          return (
            item.permutation.map((j,i=0) => {
              return (
                <Xarrow start={i+", "+j} end={""+item.permutation.toString()}/>
              )
            })
          )
        })}
        {negatives.map((item) => {
          return (
            item.permutation.map((j,i=0) => {
              return (
                <Xarrow start={i+", "+j} end={""+item.permutation.toString()}/>
              )
            })
          )
        })}
      </Xwrapper>
    </div>
  )
}
