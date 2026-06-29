const user = {
    username:"Moez",
    price:1000,
    // 'this' is used to capture the current context
    welcomeMsg:function(){
        console.log(`${this.username} , Welcome to website`)
        console.log(this)
    }
}

// user.welcomeMsg()
// user.username="sam"
// user.welcomeMsg()
 
// console.log(this)   

function chai(){
    let username = "moez"
    console.log(this.username)
}

// chai()

const chai2 = function(){
    let username="moez"
    console.log(this.username)
}
// chai2()


const chai3 = () =>{
    let username="moez"
    console.log(this.username)
    console.log(this);
}

// chai3()

// const addTwo = (num1,num2) => num1+num2 // implicit return

const addTwo = (num1,num2) => ({username:"moez"})
console.log(addTwo(3,4))


const myarr = [2,5,3,7,8]

