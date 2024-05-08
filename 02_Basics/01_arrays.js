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
console.log(typeof newArray) ;//string


// slice and splice ...............................................
console.log("A ", myArr); // we are writing this to mark A position coz we want see ids there any changes in array at this position
// output: A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3) //slice operation on array
console.log(myn1); //output: [ 1, 2 ]

console.log("B ", myArr);// checking changes in array at position B(or after slice operation).
// output: B  [ 0, 1, 2, 3, 4, 5 ] ...means no changes to array

const myn2 = myArr.splice(1, 3) //splice opertion on array here range(3) will be included
console.log(myn2); //output: [ 1, 2, 3 ]

console.log("C ", myArr); // checking changes in array by printing initial array at position C(or after splicce operation)
//output: C  [ 0, 4, 5 ]...means there is changes to initial array
// mtlb splice method given range ko kaat ke alag nikal leta h array se isliye initial array me baaki k bache hue elements hi rhte h  


