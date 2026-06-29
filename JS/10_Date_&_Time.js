// Dates

let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toTimeString());
console.log(mydate.toLocaleTimeString());
console.log(typeof mydate)

// let mycreateddate= new Date(2026,0,23)
// let mycreateddate= new Date("2026-01-14")
let mycreateddate= new Date("01-14-2023")
console.log(mycreateddate.toDateString());

let mytimestamp = Date.now()
// console.log(mytimestamp);
// console.log(mycreateddate.getTime());

console.log(Math.floor(Date.now()/1000)); // seconds

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"short"
    // timeZone:""

})

