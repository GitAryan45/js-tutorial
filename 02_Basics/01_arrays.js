// arrays
//Array initialisation
// const myArray = [0, 1, 2, 3, 4, 5, true, "hitesh"] 
const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "nagraj", "batman"]
const myArr2 = new Array(1,2,3,4)
console.log(myArr2);

// Array methods
myArr.push(6) // this will add 6 in the last of the array
console.log(myArr);
myArr.pop() //removes last element of the array

myArr.unshift(9) // this will add 9 in the start of the array
myArr.shift() // this will remove one element from the start of the array

//questionnaire methods of array
console.log(myArr.includes(9)) // returns a boolean answer false/true
console.log(myArr.indexOf(9)) // return index of the asked value, if not found then return -1

const newArray = myArr.join()
console.log(newArray) // covert the array into string
console.log(typeof newArray) ;

// slice and splice 