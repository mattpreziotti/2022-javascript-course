/*
1.1 Values and Variables
*/

/*
let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Jonas';
console.log(firstName);

// Variable name conventions
let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';
*/

/*
1.2 Data Types

Every value in JavaScript is an Object or primitive

let me = {name: 'Jonas'} // Object
let firstName = 'Jonas' // Primitive

7 primitive data types
1. Number: Floating point numbers (decimals and integers)
let age = 23; 
2. String: sequence of characters
let name = 'Jonas';
3. Boolean: used for taking decisions
let fullAge = 'true';
4. Undefined: variable that is not yet defined (empty value)
let children;
5. Null: Also means (empty value)
6. Symbol (ES2015) value that is unique and cannot be changed
7. BigInt (ES2020) Larger integers than Number type can hold

JavaScript has dynamic typing.
    Value has the type, NOT the variable.
    data types are determined automatically.
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun)

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);
*/

/*
1.3 let, const, var

let and const introduced in ES6
var is old way (don't use)
*/

/*
let age = 30;
age = 31;

const birthyear = 1991;
// birthyear = 1990;

// const needs an initial value
// const job; (illegal)

// This variable declaration isn't scoped (don't do it)
lastName = 'Preziotti'
console.log(lastName)
*/

/*
1.4 Basic Operators 
*/

/*
// Mathemtical operators
const currentYear = 2037;
const ageJonas = currentYear - 1991;
const ageSarah = currentYear - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2**3);
// 2 ** 3 means 2 to the power of 3

// String concat operator
const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// typeof is an operator

// Assignment operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
console.log(x);

// Comparisson operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

console.log(currentYear - 1991 > currentYear - 2018);
*/

/*
1.5 Operator Precedence

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table
    math operator before comparisson
    Assignment is one of the lowest
*/

/*
const currentYear = 2037;
const ageJonas = currentYear - 1991;
const ageSarah = currentYear - 2020;

console.log(currentYear - 1991 > currentYear - 2018);

// left to right
console.log(25-10-5);

let x, y;
x = y = 25-10-5; // x = y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah);
console.log(averageAge);
*/
