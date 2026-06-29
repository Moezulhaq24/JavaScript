// for of

const arr = [1,2,3,4,5]

for (const element of arr) {
    // console.log(element);
}

const greetings = "Hello world"

for (const greet of greetings) {
    // console.log(greet)
}

//Maps-> Unique values
const map = new Map()
map.set('IN',"India")
map.set('PK',"Pakistan")
console.log(map)

for (const [key,value] of map) {
    // console.log(key,":=",value)
}

const myobj = {
    'game1':'NFS',
    'game2':'Spiderman'
}

// for (const [key,value] of myobj) {
//      console.log(key,value)
// }

const myobj2 = {
    js:"Javascript",
    cpp:"C++",
    rb:"Ruby",
    swift:"Swift by apple"
}

for (const key in myobj2) {
    // console.log(key)
    // console.log(myobj2[key])
}

myarr2 = ['flash','batman','superman']
for (const key in myarr2) {
    // console.log(myarr2[key]) 
}

// Map is not iteratable that's why we cannont apply the for in loop on the map

// for each

const coding = ['js','ruby','java','python','cpp']

// for simple functions
// coding.forEach(function (item) {
//     console.log(item)
// })

// for arrow functions
// coding.forEach(  (item) => {
//     console.log(item)
// })

function printme(item){
    console.log(item)
}

// coding.forEach(printme)

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr)
})

const mycoding = [
    {
        langName:'Javascript',
        langFile:'js'
    },
    {
        langName:'Python',
        langFile:'py'
    },
    {
        langName:'Java',
        langFile:'java'
    }

]

mycoding.forEach((item)=>{
    console.log(item.langName)
})