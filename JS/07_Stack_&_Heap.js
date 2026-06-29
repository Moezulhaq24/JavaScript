
// Primitive type uses stack . You get a copy of a var.
// Non primitive type uses heap. You got a reference

let myname = "Moez"
let anotherName = myname
anotherName = "Mahd"
console.log(myname)
console.log(anotherName)

//   Stack                      Heap
/*                           _______________
|      user2        | --->  |               |          
|      user1        | --->  |               |
|   nyname(Copy)    |       |  all details  |
|   anothername     |       |  of user 1    |
|   myname          |       |    is here    |
                            |_______________|
*/

let user1 = {
    email:"user@gmail.com",
    upi:"user.ybl"
}

let user2 = user1 

user2.email = "moez@gmail.com"

console.log(user1.email);
console.log(user2.email);