const user={
    username: "Aryan",
    price: 999 ,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
user.welcomeMessage()
user.username='sam'
user.welcomeMessage()

// console.log(this); 

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// arrow function starts from here
const chai = () => {
    let usernname = "hitesh"
    console.log(this);
}
// chai()



// // arrow function declaration

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// another way to declare a arrow function called implicit return 

// const addTwo = (num1, num2) => num1+num2

// const addTwo = (num1, num2)=>(num1+num2)

const addTwo = (num1, num2)=>({username:"hitesh"})
// yaha hm object ko return kr rhe h, lekin usko paranthesis me wrap krna hi padega 

console.log(addTwo(3,4))