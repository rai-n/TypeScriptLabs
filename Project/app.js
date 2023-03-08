// 
var add = function (n1, n2) { return n1 + n2; };
// 1. Using '5' causes res to be concat of n1 and n2 resulting on console log of 55.1 
// const n1 = '5';
var n1 = '5';
var n2 = 5.1;
var res = add(+n1, n2);
console.log(res);
