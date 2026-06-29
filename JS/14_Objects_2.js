// const tinderuser = new Object() // singleton object which uss the constructor call

const tinderuser = {} // a literal object


tinderuser.id   = "1234asc"
tinderuser.name = "Sammy"
tinderuser.isLoggedin = false
console.log(tinderuser);

const regularuser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Moez",
            lastname:"ul haq"
        }
    }
}

console.log(regularuser.fullname);
console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {
    1:"a",
    2:"b",
}

const obj2 ={
    3:"a",
    4:"b"
}

// const obj = {obj1,obj2} // give me nested obj structur which i donot want
// console.log(obj)

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);

// you can us the above techniques to concatenate the two objects
// but the efficient way is to use spread operator
const obj3 = {...obj1,...obj2}

console.log(obj3)

// if values comes from db
const users = [
    {
        id:1,
        email:"moez@gmail.com"
    }
]

console.log(users[0].email)

console.log(tinderuser)

console.log(Object.keys(tinderuser)); // all keys are in an array now
console.log(Object.values(tinderuser)); // give the array in return with the values only
console.log(Object.entries(tinderuser)); // give the array in return with the key value in an array
console.log(tinderuser.hasOwnProperty('isLoggedin'))
