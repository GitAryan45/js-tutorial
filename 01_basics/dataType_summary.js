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

//*************** MEMORY ******************************************
//Stack(primitive) and heap(non-primitive (mtlb non primtive datatype k liye heap memory use hoti h ))

// lets see how variables stores on stack memory
let myYoutubename="AryanGuptadotcom"
let anothername=myYoutubename //stores copy of myYoutubename not a refrence in case of stack memory
console.log(anothername) // "AryanGuptadotcom" 

anothername="mojodotcom"
console.log(myYoutubename);//"AryanGuptadotcom" output
console.log(anothername); //"mojodotcom"

let userOne={                  // creating a object in js
    upi:"user@ybl",
    email: "user@google.com"
    

}
//lets see how variables stores in heap memory
let userTwo = userOne // (here value of userOne is not copied to user2 instead reference of userOne is assigned to usertwo)
userTwo.email = "Aryan@google.com" // we are doing changes in usertwo wala object

// now lets see ki kya changes ayege agr hm user2 me changes krte h
console.log(userOne); // return upi='user@ybl' and email="Aryan@google.com"
console.log(userTwo); // return upi='user@ybl' and email="Aryan@google.com"
//mtlb ki agr second wale me chenge kroge to first m bhi change ho jaega kuki by referece assign hua tha