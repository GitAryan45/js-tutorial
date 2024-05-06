// dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString()); //Mon May 06 2024 20:45:42 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //Mon May 06 2024
console.log(myDate.toLocaleString()); //5/6/2024, 8:45:42 PM 
console.log(typeof myDate ); //date is a object type

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023") //if you want print particular date then pass the date as parameter
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.getTime()) // this method returns the date and time into miliseconds 

let myTimeStamp = Date.now()
console.log(myTimeStamp); //output: some long numbers/digits eg.1673654400000 (miliseconds)
console.log(Math.floor(myTimeStamp/1000)); // this will convert milisecond into seconds and floor prop will remove digits after decimal.

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth());
// `Date ${newDate.getDate()} and the time is ${newDate.getTime()} ` // this is how we can apply these dates into strings and industry applications

console.log(newDate.toLocaleString('default', {weekday:"long"}));

