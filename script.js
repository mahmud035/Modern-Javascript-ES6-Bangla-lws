'use strict';

//* #2 - JavaScript Fat Arrow Functions

/* const addTwoNumbers = (num1, num2) => {
  return num1 + num2;
};

const result = addTwoNumbers(1, 2);
console.log(result);

const javascript = {
  name: 'Javascript',
  libraries: ['jQuery', 'React', 'Angular'],
  printLibraries: function () {
    this.libraries.forEach((library) =>
      console.log(`${this.name} loves ${library}`)
    );
  },
};

javascript.printLibraries(); */

//* #3 - Truthy / Falsy values

// falsy values:
/* false, 0, '', null, NaN, undefined */

// truthy values
/* everything else which is not falsy is truthy value */

/* let myVar = '';

if (myVar) {
  console.log('myVar is truthy');
} else {
  console.log('myVar is falsy');
} */

//* #4 - Ternary Operator

// Syntax: condition ? valueIfTrue : valueIfFalse

/* let age = 26;
age > 18 ? console.log('You are an adult') : console.log('You are a child'); */

//* #5 - Array find() method

/* let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = numbers.find((number) => number > 4);

console.log(result); */

//* #6 - Array findIndex() method

/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers.findIndex((number) => number > 23);

console.log(result); */

// #7 - Array filter() method
/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers.filter((number) => number > 4);

console.log(numbers)
console.log(result); */

//* #8 - Array slice() method
/* const numbers = [1, 2, 3, 4, 5];

const result = numbers.slice(0, 3);

console.log(numbers);

console.log(result); */

//* #9 - Array splice() method
/* const numbers = [1, 2, 3, 4, 5];

const result = numbers.splice(1, 3, 6, 7, 8);

console.log(numbers);
console.log(result); */

//* #12 - Array map() method

/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const result = numbers.map((number) => number * 2);

console.log(result); */

//* #13 - Array reduce() method

const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers.reduce((prevValue, currentValue) => {
  return prevValue + currentValue;
}, 0);

console.log(result);

//* #14 - for loop, for in & for of





