// Immediately Invoked Function Expression
// When we got a problem of global scope pollution so we can use IIFE instead of simple functions

(function chai(){
    //named IIFE
    console.log("DB Connected")
})();

( (name)=>{
    //Simple IIFE
    console.log(`DB Connected two ${name} `)
}
)("moez");