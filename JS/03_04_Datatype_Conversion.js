// -----Conversions------

// let score = "33abc"
// let score = null
// let score = undefined
// let score = true
let score = "moez"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof (valueInNumber));
console.log(valueInNumber)

/*
"33" -> 33
"33abc" -> NaN
true -> 1 otherwise 0
*/

let isLoggedIn = 1
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);

/*
1 -> true , 0 -> false
"" -> false
"moez" -> true
*/

let someNo = 33
let stringNo = String(someNo)
console.log(stringNo)
console.log(typeof stringNo)

// -----------Operations-----------------

let value = 3
let negvalue = -value
console.log(negvalue)

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 3);
console.log(2 / 3);
console.log(2 % 3);

let str1 = "hello"
let str2 = " moez"
let str3 = str1 + str2
console.log(str3)

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2")

console.log(+true)
console.log(+"")


// Do no write these type of codes make readability high
let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);
++gameCounter
console.log(gameCounter);