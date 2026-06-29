const name = "moez"
const repoCount = 33

// Dont use this syntax out dated
// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`);

const gameName = new String("Metro-card");

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('R'));


const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-9,4)
console.log(anotherString);

const otherString = "      moez        "
console.log(otherString);
console.log(otherString.trim());

const url = "https://moez.com/moez%13ulhaq"

console.log(url.replace('%13','-'));
console.log(url.includes("moez"));

const gameName2 = new String("moez-ul-haq");

console.log(gameName2.split('-'));

console.log(gameName2.at(2));

console.log(gameName2.big())

console.log(gameName2.blink());
console.log(gameName2.bold());

console.log(gameName2.concat(gameName));

console.log(gameName2.endsWith('q'))
console.log(gameName2.startsWith('z'))