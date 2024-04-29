//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3 // datatype number idhr koi float wgera nhi hota

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //false (kuki symbol datatype unique values ko store krna h even ki dono ke data type number h and value bhi same h fir bhi ye equal nhi h 

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions  (ye tino(primitive datatpes) ka return type object hi hota h )

const heros = ["shaktiman", "naagraj", "doga"]; //array

let myObj = {          //object
    name: "hitesh",
    age: 22,
}

const myFunction = function(){ //function
    console.log("Hello world");
}

console.log(typeof anotherId); //returns symbol type
console.log(typeof heros); //returns object type
console.log(typeof myObj); //returns object type
console.log(typeof myFunction); // return function object

//this is the link to study about datatypes 
// https://262.ecma-international.org/5.1/#sec-11.4.3