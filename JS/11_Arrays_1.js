// Arrays

const myarr = [0,1,2,3,4,5]
const myHeros = ["Thor","Superman","BAtman"]
const newArray = new Array(1,2,3,4)

console.log(myarr[0]);

// Arrays methods

myarr.push(6) // append the value in the end
myarr.pop() // remove the last value

// myarr.unshift(9) // add element at start
// myarr.shift() // remove element from start

console.log(myarr.includes(9));
console.log(myarr.indexOf(3));

const newarr = myarr.join()

console.log(myarr);
console.log(typeof newarr);

// slice and splice

console.log("A",myarr);

const myn1 = myarr.slice(1,3); // it takes some portion of an array but it is also available in the original array
console.log(myn1);
console.log("B",myarr);

const myn2 = myarr.splice(1,3); // it takes some portion of an array but it removed from the original array
console.log(myarr)
console.log(myn2);