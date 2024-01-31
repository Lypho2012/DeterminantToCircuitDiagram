import React from 'react'

/*
Cindy Zhang

Uses the Leibniz formula for determinants to generate permutations of products in the summation
*/

// LinkedList Node
class Node {
    permutation: Array<number>;
    sign: boolean; // true is negative, false is positive
    next: Node | null = null;
    hash: number;
    constructor(permutation:Array<number>, sign: boolean) {
        this.permutation = permutation;
        this.sign = sign;

        this.hash = 0;
    }
    updateHash() {
        let prime = 31;
        this.hash = prime;
        for (let i=0; i<this.permutation.length; i++) {
            this.hash = this.hash*prime + this.permutation[i];
        }
    }
}
function Columns(n: number) { // input: props.n
    let permutations = new Map<number,Node>();

    let original = Array<number>(n);
    for (let i=0; i<n; i++) {
        original[i] = i;
    }

    let first = new Node(original,false);
    first.updateHash();
    let last = first;
    while (first != null) {
        if (permutations.has(first.hash)) {
            if (first.next == null) break;
            first = first.next;
            continue;
        }
        console.log(first);
        permutations.set(first.hash,first);
        for (let i=0; i<n; i++) {
            for (let j=i+1; j<n; j++) {
                let next = new Node(new Array<number>(n),!first.sign);
                for (let k=0; k<n; k++) {
                    next.permutation[k] = first.permutation[k];
                }
                let temp = next.permutation[i];
                next.permutation[i] = next.permutation[j];
                next.permutation[j] = temp;
                next.updateHash();
                if (permutations.has(next.hash)) {
                    continue;
                }
                last.next = next;
                last = next;
            }
        }
        if (first.next == null) {
            break;
        }
        first = first.next;
    }
    return permutations.values();
}

export default Columns