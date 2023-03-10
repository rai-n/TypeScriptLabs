// Basic types

// 2. Using `: number` on param as sanity check during development to make sure correct type is entered
const add = (n1: number, n2: number) => n1 + n2;

// 1. Using '5' causes res to be concat of n1 and n2 resulting on console log of 55.1 
// const n1 = '5';
const n1 = '5';

const n2 = 5.1;

// 3. string type can be used, with + prefix to convert string to number
const res = add(+n1, n2);
console.log(res);

// For an object, each of its values can be validated during development
 
const person : {
    name: string;
    age: number;
}  = {
    name: "neer",
    age: 23
};

console.log(person.name);

// School property does not exist and an error is flagged during development 
//Property 'school' does not exist on type '{ name: string; age: number; }'.ts(2339)
// console.log(person.school);
