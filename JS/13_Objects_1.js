// singleton-->if we declare like literal way it is not singleton and if we use constructor then its singleton
// Object.create()


//object literals
const mysym = Symbol("key1")

const user = {
    name:"Moez",
    "full name":"Moez ul haq",
    [mysym]:"mykey1",
    age:22,
    location:"Islamabad",
    email:"moez@gmail.com",
    isLoggedIn:false,
    lastloginDays:["Mondays","Saturday"]
}

console.log(user["full name"]);
// console.log(user.full name); this wiill thorw an error
console.log(user.age);
console.log(user[mysym]); // thats how you can access or use the Symbol DT in your objects

user.email = "moez@chatgpt.com"
// Object.freeze(user) // when you freezes the object it does not alter the property even if you change
user.email = "moez@microsoft.com"

console.log(user)

user.greeting = function(){
    console.log("Hi, MOez");
}
user.greeting2 = function(){
    console.log(`Hello, JS User , ${this.name}`);
}

console.log(user.greeting());
console.log(user.greeting);
//When u call the function directly instead of console.log - "undefined" 
//doesn''t show on the console.


console.log(user.greeting2());