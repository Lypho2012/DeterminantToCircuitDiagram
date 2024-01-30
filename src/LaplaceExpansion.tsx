import React from 'react'

function determinant(matrix: Array<Array<number>>) {
    //console.log("start calculating");
    let n = matrix.length;
    if (n == 1) {return matrix[0][0];}
    let res = 0;
    for (let i = 0; i < n; i++) {
        let minor_matrix = Array(n-1);
        let x = 1;
        for (let j=0;j<n-1;j++) {
            let y = 0;
            minor_matrix[j] = new Array(n-1).fill(0);
            for (let k=0; k<n-1; k++) {
                if (y == i) {y ++;}
                console.log(i+" "+j+" "+k+" "+x+" "+y+" "+matrix[x][y]);
                minor_matrix[j][k] = matrix[x][y];
                y ++;
            }
            x ++;
        }
        // debug
        /*console.log("0 "+i);
        for (let p=0; p<n-1;p++) {
            let log = "";
            for (let q=0; q<n-1; q++) {
                log += minor_matrix[p][q]+" ";
            }
            console.log(log);
        }*/
        //
        let minor = determinant(minor_matrix);
        if (i%2 == 0) {res += matrix[0][i]*minor;}
        else {res -= matrix[0][i]*minor;}
    }
    return res;
}

export default function Laplace(props) {
  let matrix = props.matrix;
  let det = determinant(matrix);
  return (
    <div>The determinant is {det}</div>
  )
}
