const account_Id = 144553
let accountEmail = "moez@gmail.com"
var accountPassword = "12345678"
accountCity = "Islamabad"
let accountState;

// account_Id = 2 Not allowed to change the value of account_Id because it is declared with const
accountEmail = "mo@gmail.com"
accountPassword="222"
accountCity= "Karachi"

console.log(account_Id)
console.table([accountState,account_Id,accountEmail,accountPassword,accountCity])


// Prefer not to use var because it is function 
// scoped and can lead to unexpected behavior. 
// Use let for variables that may change and const 
// for variables that should not change.