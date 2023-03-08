
// 2. Using : number on param forces the compiler to validate the param type to number
const add = (n1: number, n2: number) => n1 + n2;

// 1. Using '5' causes res to be concat of n1 and n2 resulting on console log of 55.1 
// const n1 = '5';
const n1 = '5';

const n2 = 5.1;

// 3. string type can be used, with + prefix to convert string to number
const res = add(+n1, n2);
console.log(res);
