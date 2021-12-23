"use strict";

// Условия 


// if (4 === 4) {
//     console.log('OK');
// }

// const num = 60;

// if (num < 49){
//     console.log('Error');
// } else if (num >100){
//     console.log('Слишком много');
// } else {
//     console.log('OK');
// }

// (num === 50) ? console.log('Ok') : console.log('Error');

// switch (num) {
//     case 49:
//         console.log('Error');
//         break;
//     case 100:
//         console.log('Too much');
//         break;
//     case 50:
//         console.log('Bingo');
//         break;
//     default:
//         console.log('Not now');
//         break;
// }

// Циклы

// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }


// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }

// ФУНКЦИИ
// let num = 9;
// function showFirstMessage(text) {
//     console.log(text);
//     num = 4;
// }
// showFirstMessage('text');

// console.log(num);


// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4,6));

// let val1 = 2;
//  function multiplyThis(n) {
//         let ret = n * val1;
//   return ret;
//  }
//  let multiplied = multiplyThis(6);

//  console.log('example of scope:', multiplied);

// function createCounter() {
//     let counter = 0;
//     const myFunction = function () {
//         counter = counter + 1;
//         return counter;
//     };
//     return myFunction;
// }
// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();
// console.log('example increment', c1, c2, c3);


// МЕТОДЫ И СВОЙСТВА 

// const str = 'test method';

// console.log(str.indexOf('e'));


// const nameOfPerson = 'Olga Antonchikova';
// console.log(nameOfPerson.slice(5, 10));
// console.log(nameOfPerson.substr(5, 5));

// const num = 12.5;
// console.log(Math.round(num));

// МАССИВЫ

// const arr = [1, 59, 3, 49, 5];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(function(item,i,arr){
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });


// const str = prompt('','');
// const products = str.split(', ');

// console.log(products.join(', '));


// ПЕРЕДАЧА ПО ССЫЛКЕ ИЛИ ПО ЗНАЧЕНИЮ. spread оператор

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(a);
// console.log(b);

// const obj = {
//     a: 1,
//     b: 4
// };

// const copy=obj;

// copy.a=10;
// console.log(obj);
// console.log(copy);

// function copy(mainObj) {
//     let objCopy = {};
//     let key;

//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 5,
//     b: 6,
//     x: {
//         d: 7,
//         r: 8
//     }
// };

// const newNumbers = copy(numbers);
// newNumbers.b = 12;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//     d:17,
//     i:20
// };


// console.log(Object.assign(numbers , add)); 

const obj = {
    a: 1,
    b: 4
};

const meObj = { ...obj };
meObj.a = 10;
console.log(meObj);
console.log(obj);





