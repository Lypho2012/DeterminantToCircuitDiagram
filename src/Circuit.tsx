import React from 'react'
import Columns from './Columns';
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
//import Draggable from "react-draggable";

/*
Cindy Zhang

Uses the Leibniz formula for determinants to generate circuit diagram (only compatible with values of 1's and 0's)
*/
const boxStyle = {
  border: "grey solid 2px",
  borderRadius: "10px",
  padding: "5px",
  axis: "none"
};

/*const DraggableBox = ({ id, text }) => {
  const updateXarrow = useXarrow();
  return (
    <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
      <div id={id} style={boxStyle}>
        {text}
      </div>
    </Draggable>
  );
};*/

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
  // Method 1: Add all numbers simplified
  let res1 = 0;
  for (let positive of positives) {
    res1 += positive.result;
  }
  for (let negative of negatives) {
    res1 -= negative.result;
  }

  // Method 2a: Add all positives

  // Method 2b: Add all negatives

  return (
    <div className='vertical'>
    <div className='horizontal'>
      <Xwrapper>
        {/*Inputs boxes*/}
        {inputs.map((input, count=1) => {
          return (
            <text id={""+input} style={{"position":"absolute", "left":"200px", "top":""+(700+count*40)+"px"}}> {input+": "+matrix[parseInt(input.split(", ")[0])][parseInt(input.split(", ")[1])]}</text>
            //<DraggableBox id={""+input} text={input+": "+matrix[parseInt(input.split(", ")[0])][parseInt(input.split(", ")[1])]}/>
          )
        })}
        {/*AND boxes*/}
        {positives.map((item, count=1) => {
          return (
            <text id={item.permutation.toString()} style={{"position":"absolute", "left":"400px", "top":""+(700+count*40)+"px"}}>{"And = "+item.result}</text>
            //<DraggableBox id={item.permutation.toString()} text={"And = "+item.result}/>
          )
        })}
        {negatives.map((item, count=1) => {
          return (
            <text id={item.permutation.toString()} style={{"position":"absolute", "left":"400px", "top":""+(700+count*40)+"px"}}>{"And = "+item.result}</text>
            //<DraggableBox id={item.permutation.toString()} text={"And = (-)"+item.result}/>
          )
        })}
        {/*Arrows between inputs and AND */}
        {positives.map((item) => {
          return (
            item.permutation.map((j,i=0) => {
              return (
                <Xarrow start={i+", "+j} end={item.permutation.toString()}/>
              )
            })
          )
        })}
        {negatives.map((item) => {
          return (
            item.permutation.map((j,i=0) => {
              return (
                <Xarrow start={i+", "+j} end={item.permutation.toString()}/>
              )
            })
          )
        })}
        {/* Result box */}
        <text id={"Adder"} style={{"position":"absolute", "left":"600px", "top":"700px"}}>{"Adder = "+res1}</text>
        {/*<DraggableBox id={"Adder"} text={"Adder = "+res1}/>*/}
        {/*Arrows between AND and result*/}
        {positives.map((item) => {
          return (
            <Xarrow start={item.permutation.toString()} end={"Adder"}/>
          )
        })}
        {negatives.map((item) => {
          return (
            <Xarrow start={item.permutation.toString()} end={"Adder"}/>
          )
        })}
      </Xwrapper>
    </div>
    </div>
  )
}