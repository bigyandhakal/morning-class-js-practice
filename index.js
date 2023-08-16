// console.log('Hello');

// // Comment

// /* 

// long comment

// */

// // variables
// // var - ES5
// // let, const - ES6

// // keyword - var, let, const

// var person = 'John';
// person = 'Rock';

// let person1 = 'Cena';
// person1 = 'Shaw';

// const person2 = 'Johnny'; // cannot be changed

// // JS interactions

// // alert("Hello world!");
// const age = Number(prompt("What is your age?"));
// // const isLegal = confirm('Are you 18 years and above?');

// // value      type     strict
// // =            =        =           (===)

// if (age<10){
//     alert('Your are not allowed');
// }
// else{
//     alert('You are allowed');
// }


// console.log({person, person1, person2, age})


// /** 
//  * Assignment: User variable and interaction to check user login
//  * 1. prompt username and password
//  * 2. check if username and password is correct
//  * alert welcome message else denied.
//  */

// const user = "bigyan";
// const pass = "123";

// const login = prompt("Username:");
// const login2 = prompt("Password:");

// if (login === user && login2 === pass){
//     alert("Welcome to the Javascript");
// }
// else {
//     alert("Invalid username and password.");
// }

// If, else if and else statement 
// if (a===0){
// }else if (a===1){
// }else if (a===2){
// }else if (a===3){
// }
// else {
//     "Not a day"
// }

// switch case 
// switch (a===0){
//     case value:
//     case value:
//     default:
// }


// if (a===0){
//     console.log("it' 0");
// }
// else{
//     console.log("it's not a 0");
// }

//  Ternary Operator
// const answer = a === 0 ? console.log("it's 0") : console.log("it's not 0");


// Task 1
// prompt user to enter a number
// check if the number is which day of the week
// Example 0 = Sunday, 1 = Monday, 2 = Tuesday


// const number = Number(prompt("Provide a number:"));

// if (number === 0){
//     alert("Sunday");
// }
// else if (number == 1){
//     alert("Monday");
// }
// else if (number == 2){
//     alert("Tuesday");
// }
// else if (number == 3){
//     alert("Wednesday");
// }
// else if (number == 4){
//     alert("Thursday");
// }
// else if (number == 5){
//     alert("Friday");
// }
// else if(number == 6){
//     alert("Saturday");
// }
// else {
//     alert("Invalid number");
// }

// a===0 ? x : (a ===1) ? z : y

// const number = Number(prompt("Provide a number:"))
// number === 0 ? alert("Sunday") : (number === 1) ? alert("Monday") : number


//  Task 2
//  prompt user to enter a first number
//  prompt user to enter a second number
//  prompt user to enter a operator
//  using switch case
//  perform the operation and display result

// const firstNumber = Number(prompt("Enter first number:"));
// const secondNumber = Number(prompt("Enter second number:"));
// const operator = prompt("Provide a operator eg. + , -, *, /") // "+"

// console.log(operator)

// switch (operator){
//     case "+":{
//         alert(firstNumber + secondNumber);
//         break
//     }
//     case "-":{
//         alert(firstNumber - secondNumber);
//         break
//     }
//     case "*":{
//         alert(firstNumber * secondNumber);
//         break
//     }
//     case "/":{
//         alert(firstNumber / secondNumber);
//     }
//     default:{
//         alert("Invalid");
//     }
// }

// for loop

// let i;
// for (i=0; i< 10; i++){
//     console.log("The value of i :", i)
// }

// while

// let j = 0;
// while (j < 10){
//     console.log('the value of j:', j);
//     j ++;
// }

// // do  while

// let k = 0;
// do {
//     console.log("the value of k:", k);
//     k ++;
// } while(k < 10);

// function

const userName = prompt("Username:");
const passWord = prompt("Password:");

function userLogin(user, pass){
    if (user === userName && pass === passWord){
        alert("Login with success");
    }
    else {
        alert("Login denied.")
    }
}

userLogin("bigyan", "123");

