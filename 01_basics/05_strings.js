const name ="Aryan" // initialising a string normal method
const repoCount = 50

// console.log(name+repoCount); outdated syntax to concatenate strings

console.log(`hello my name is ${name} and my repo count is ${repoCount}`); //modern way of adding strings named interpolation

const gameName=new String('Aryan-Gu') //initialising a string using objectand classes
console.log(gameName);
//methods
// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('y'));

const newString = gameName.substring(0,7)
console.log(newString); // return Aryan-G

const anotherString = gameName.slice(-8, 4)// this is a slicing method similar to substring method difference is that we can use -ve inexes here
console.log(anotherString); //output Arya

const newStringOne = "   Aryan   "
console.log(newStringOne); //return "  Aryan   "
console.log(newStringOne.trim()); // this is  a trim method used to remove unwanted spaces or whitespaces before and after String
// return "Aryan"

const url = "https://Aryan.com/hitesh%20choudhry" 

console.log(url.replace('%20', "_")); //this will replace %20 into a "_"

console.log(url.includes('sundar')); // returns false (it checks given string if finds returns true else false)

//split method trial
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"
console.log(words);
// Expected output : ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.']


const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]
