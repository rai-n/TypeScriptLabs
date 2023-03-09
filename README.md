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
5. `array` - type of values in arrays can be *flexible or strict* - `[1, 2, 3]`
6. `any` - Elements within an array can be any type - `activities: any[]`. Not recommended for most cases.  
7. `tuple` - Elements in tuple are fixed length and type - `[2, 'author']`
* With tuples TypeScript sets the possible types of it to the type above as `string | number` therefore, incorrect entries can be made. To resolve this, the type can be explicitly defined. E.g. `role: [number, string]`. However, incorrect types can be inserted using `push`
8. `enum` - Access identifier that is not a string - `enum Role { ADMIN, AUTHOR }`
9. `literal` - Literal types are specific types. E.g. `conversion: 'ft' | 'cm'`. Literal type can be combined with union pipe to allow only two types for a value.
10. `type` - Type alias can group multiple types as one.
```
type conversion = 'ft' | 'cm'; 
type text = number | string;
```
* Complex objects can be defined using custom types which reduce code repetition. 
```
type User = {name : string, greeting: string};
const user : User = {name:  "Neer", greeting: "Hello" };
const greet = (user : User) => console.log(user.greeting); 
```

* `typeof` method (dynamic type) can be used alongside TypeScript (static type) to validate dynamically changing values
```
if (typeof '10' !== 'number'){
    throw new Error("Invalid entry);
}
```
* Unions can be used alongside types to allow parameters to be accepted as multiple types. E.g. `input 1: number | string | boolean`
To achieve this, type check can be done during runtime using `typeof` to resolve the variable types: 
```
function combine(input1: number | string, input2: number | string){
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2;
    } else {
        result = input1.toString() + " " + input2.toString();
    } 
    return result;
}

console.log(combine(30, 20)); 
> 50
console.log(combine('Hello', 'World!'));
> Hello World!
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
 

