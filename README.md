# Determinant Calculator

This program has implementations for calculating the determinant using either the Leibniz formula for determinants or Laplace expansion. 

To run the program, clone the project onto your local IDE. In the command line interface, type
```js
npm run dev
```
Open the local link [a link](http://localhost:5173/).

To change which formula is used, in Matrix.tsx, replace
```js
(<Circuit matrix={matrix}/>)
```
with
```js
(<Laplace matrix={matrix}/>)
```
,or vice versa, in
```js
{
  isMatrixReady ? (<Circuit matrix={matrix}/>)//(<Laplace matrix={matrix}/>)//
  :(<div></div>)
}
```

## Laplace Expansion
This method was implemented with recursion and takes in any integer values in the matrix.

## Leibniz Formula
This method was implemented using breadth first search and only takes in 0's and 1's in the matrix to reduce complexity of circuit diagram.
