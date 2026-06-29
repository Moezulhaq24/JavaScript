const marvel_heros = ["thor","ironman","sipderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);


// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const allheros = [...marvel_heros,...dc_heros]
console.log(allheros)

const anarr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realarr = anarr.flat(Infinity)
console.log(realarr);


console.log(Array.isArray("Moez"));
// console.log(Array.from({name:"moez"})); gives the empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));