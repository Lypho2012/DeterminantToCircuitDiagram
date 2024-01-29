import React from 'react'

class Node {
    permutation: Array<number>;
    sign: boolean; // true is negative, false is positive
    next: Node | null = null;
    constructor(permutation:Array<number>, sign: boolean) {
        this.permutation = permutation;
        this.sign = sign;
    }
}
function Columns(props) { // props.n
    
    return (
        <div>Columns</div>
    )
}

export default Columns