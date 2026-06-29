const coding = ['js', 'ruby', 'java', 'python']

const values = coding.forEach((item) => {
    return item
})

// console.log(values)  
//------------------Filters--------------------
const nums = [1, 2, 3, 4, , 6, 7, 8, 9, 10]

const newnums = nums.filter((num) =>
    num > 4
)

// console.log(newnums)

const newnums2 = []

nums.forEach((num) => {
    if (num > 4) {
        newnums2.push(num)
    }
})
// console.log(newnums2)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const userbooks = books.filter((bk) => bk.genre === "History")

let userbooks2 = books.filter((bk) => {
    return (bk.publish >= 1995 && bk.genre === "History")
})
// console.log(userbooks2)

//--------------------Map---------------

const nums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newnums3 = nums3.map((num2) => num2 + 10)
// console.log(newnums3)

//-----------------Chaining----------------

const numbers = nums3
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num)=>num>=30)

// console.log(numbers)

//------------------Reduce-------------------
const numbers2 = [1,2,3]

// const mynumbers2 = numbers2.reduce(function (acc,currval){
//     console.log(`acc:${acc} and currval: ${currval}`)
//     return acc+currval
// },0)


const mynumbers2 = numbers2.reduce((acc,currval)=>{
    return acc+currval
},0)
// console.log(mynumbers2) 

const shoppingCart = [
    {
        itemName:'JS Course',
        price:299
    },
    {
        itemName:'Python Course',
        price:999
    },
    {
        itemName:'Mobile Dev Course',
        price:4999
    }
]

const totalPrice = shoppingCart.reduce((acc,currval)=>{
    return acc + currval.price
},0)

console.log(totalPrice)
