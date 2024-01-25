import React from 'react'

function Matrix(props) {
  let res = new Array(props.n);
  for (let i=0;i<props.n;i++) {
    res[i] = new Array(props.n);
    for (let j=0; j<props.n; j++) {
      res[i].push(<input key = {i+" "+j} type="text" name = {i+","+j}/>);
    }
  }
  return (
    <input/>
  )
}

export default Matrix