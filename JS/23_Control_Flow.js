// if else, else if

const isUserloggedIn = true
const temp = 41

// if (temp===41){
//     console.log("less than 50")
// }else{
//     console.log("temp is greater than 50")
// }

// Comparison Operators
// <, >, <=, >=, ==,===,!=

const score = 200 

if (score>100){
    const power = "fly"
    console.log(`User power: ${power}`)
}

const balance = 1000

// if(balance>500) console.log("test"),console.log("test2")

if(balance<500){
    console.log("less than 500")
} else if(balance<750){
    console.log("less than 750")
} else if(balance<900){
    console.log("less than 900")
} else{
    console.log("less than 1200")
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn  && debitCard){
    console.log("Allow to buy course")
}
if(loggedInFromGoogle  || loggedInFromEmail){
    console.log("User logged in")
}

// Switch 

const month = 3

switch (month) {
    case 1: 
        console.log("January")
        break;
    case 2: 
        console.log("Feb")
        break;
    case 3: 
        console.log("March")
        break;
    case 4: 
        console.log("April")
        break;

    default:
        console.log("Errored")
        break;
}

// truthy and falsy values concept

const userEmail = "moez@gmail.com"

if(userEmail){
    console.log("Got user email")
} else{
    console.log("Dont have user email")
}
/*
falsy values:
    false, 0, -0, BigInt -> 0n, "", null, undefined, NaN
truthy values:
    "0", true, 1, "false", " ", [], {}, function(){}

false==0, false=="" , 0=="" (All trues)
    */

const emptyobj = {}

if(Object.keys(emptyobj).length === 0){
    console.log("object is empty")
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5??10
// val1 =null??10
// val1 =undefined??15
val1 = null ?? 10 ?? 20

console.log(val1)

// Ternary operator

// condition ? true:false

const iceTeaPrice = 100

iceTeaPrice>=80?console.log("True"):console.log("false")


