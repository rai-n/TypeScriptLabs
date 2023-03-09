# Notes

## What is TypeScript 
TypeScript adds new features on top of JavaScript but browsers cannot execute it. TypeScript is a powerful tool, a compiler to compile TypeScript code to JavaScript. 

## TypeScript adds types 
Allows you to find errors before scripts run during development. 

## Code example
JavaScript would concatenate below instead of adding. 
```
const add = (a, b) => a + b; 
console.log(add('2','3')); 

```

## Types
1. `number` - 1, 1.2, -2
2. `string` - 'hi', "hi", ``hi``
3. `boolean` - true, false
4. `object` - {age: 30}
5. `array` - type of values in arrays can be *flexible or strict* - [1 ,2 3]
6. `any` - Elements within an array can be any type - `activities: any[]` 
* `typeof` method (dynamic type) can be used alongside TypeScript (static type) to validate dynamically changing values
```
if (typeof '10' !== 'number'){
    throw new Error("Invalid entry);
}
```

### Type inference
Assigning the number to the `age` variable causes type inference and any re-assignments to a different type could lead to type error. 
The type is also explicitly defined below using the `age : number` suffix which is redundant. 
```
const age : number = 29;
```

## Objects
For an object, each of its values can be validated during development by:
1. Type inference by not specifying the object key value types.  
```
const person = {
    name: "neer",
    age: 23
};
```
2. Using `: {}` and defining the type for each key value. 
const person : {
    name: string;
    age: number
}  = {
    name: "neer",
    age: 23
};

3. Accessing invalid keys
```
console.log(person.school);
```
School property does not exist and an error is flagged during development 
 
```
Property 'school' does not exist on type '{ name: string; age: number; }'.ts(2339)
```
 

