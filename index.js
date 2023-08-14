console.log('Hello');

// Comment

/* 

long comment

*/

// variables
// var - ES5
// let, const - ES6

// keyword - var, let, const

var person = 'John';
person = 'Rock';

let person1 = 'Cena';
person1 = 'Shaw';

const person2 = 'Johnny'; // cannot be changed

// JS interactions

// alert("Hello world!");
const age = Number(prompt("What is your age?"));
// const isLegal = confirm('Are you 18 years and above?');

// value      type     strict
// =            =        =           (===)

if (age<10){
    alert('Your are not allowed');
}
else{
    alert('You are allowed');
}


console.log({person, person1, person2, age})


/** 
 * Assignment: User variable and interaction to check user login
 * 1. prompt username and password
 * 2. check if username and password is correct
 * alert welcome message else denied.
 */
