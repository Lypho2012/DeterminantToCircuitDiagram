import React from 'react'

class Node {
    permutation: Array<number>;
    sign: boolean; // true is negative, false is positive
    next: Node | null = null;
    hash: number;
    constructor(permutation:Array<number>, sign: boolean) {
        this.permutation = permutation;
        this.sign = sign;

        let prime = 31;
        this.hash = prime;
        for (let i=0; i<permutation.length; i++) {
            this.hash = this.hash*prime + permutation[i];
        }
    }
}
function Columns(props) { // input: props.n
    let permutations = new Map<number,Node>();

    let original = Array<number>(props.n);
    for (let i=0; i<props.n; i++) {
        original[i] = i;
    }

    let first = new Node(original,false);
    let last = first;
    while (first != null) {
        if (permutations.has(first.hash)) {
            continue;
        }
        permutations.set(first.hash,first);
        for (let i=0; i<props.n; i++) {
            for (let j=0; j<props.n; j++) {
                let next = new Node(Array<number>(props.n),!first.sign);
                for (let i=0; i<props.n; i++) {
                    next.permutation[i] = first.permutation[i];
                }
                let temp = next.permutation[i];
                next.permutation[i] = next.permutation[j];
                next.permutation[j] = temp;
                if (permutations.has(next.hash)) {
                    continue;
                }
                last.next = next;
                last = next;
            }
        }
        first = first.next;
    }
    return permutations.values();
}

export default Columns