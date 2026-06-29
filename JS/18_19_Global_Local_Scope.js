// var c = 300

let a = 300
if (true){
    let a = 10
    const b = 20
    // console.log("Inner", a);
    // var c = 30
}


// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "moez"
    function two(){
        const website="youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}

// one()
// two()

if(true){
    const username="moez"
    if(username==="moez"){
        const website = "youtube"
        // console.log(username+website);
    }
    // console.log(website);
}

// console.log(username)

//----------interesting---------------

console.log(addone(5))
function addone(value){
    return value+1
}


console.log(addtwo(5)) // now this will give an error because of the variable we assigned it named as addtwwo
// and this is also called hoisting(execution context banata hai)
const addtwo = function(num){
    return num+2
} // function but also called expression
