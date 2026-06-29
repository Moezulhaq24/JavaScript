/*
Two types of DT
1. Primitive
2. Non-Primitive

---Primitive---
call by value
7 types: String, Number, Boolean,
null, undefined, Symbol, BigInt

// JavaScript is a dynamically typed language. 
// Because data type will automatically assigned 
// at the time of compilation or code execution.

---Non Primitive---
call by reference
Arrays, Objects, Functions

*/

// Primitive 
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id===anotherid);

const bigNumber = 839423783748273887n

// Non-Primitive

const heros = ["Superman","Batman","Thor"]

const user = {
    name:"moez",
    age:22
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myFunction);