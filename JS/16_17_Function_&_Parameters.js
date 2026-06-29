// console.log("M");
// console.log("O");
// console.log("I");
// console.log("Z");


function sayMyName() {
    console.log("M");
    console.log("O");
    console.log("I");
    console.log("Z");
}

// sayMyName()
// When you are defining th function and give some vars in it is called parameters
// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }

// addTwoNumbrs(2,3)
// When you are calling th function and give some values to the vars then it is called arguments

function addTwoNumbers(num1, num2) {
    // let num = num1+num2
    // return num
    return num1 + num2
}
const result = addTwoNumbers(3, 5)
// console.log("Result", result);


function loginUserMsg(username="sam"){
    if(username===undefined){
        console.log("Please enter the username.")
        return
    }
    return `${username} just logged in.`
}

console.log(loginUserMsg("Moez"));
console.log(loginUserMsg());
console.log(loginUserMsg(""));


function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500,2000))


const user = {
    username:"moez",
    price:200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    username:"moez",
    price:200
})

const myarr = [200,400,500,600]

function returnSecondValue(getarr){
    return getarr[1]
}

console.log(returnSecondValue(myarr))