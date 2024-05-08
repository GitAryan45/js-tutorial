// singleton
// Object.create // constructor method to declare object 

// object literals

const mySym = Symbol("key1") // just try to create a symbol datatype key

// initialiZation of object using object literals 
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)  // access a element of object 
console.log(JsUser["email"]) // another way to acces a element of object 
// console.log(JsUser["full name"])
console.log(JsUser[mySym]) // to acces a Symbol key of a object

JsUser.email = "hitesh@chatgpt.com" //update email 

// Object.freeze(JsUser) // this freeze method is uded to freeze changes. iske baad koi changes nhi ho skta

JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser); //changes nhi honge due to freeze

JsUser.greeting = function(){      // object me function initialize bhi kr skte h 
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting()); //output: Hello JS user
console.log(JsUser.greetingTwo()); //output: Hello JS user, Hitesh