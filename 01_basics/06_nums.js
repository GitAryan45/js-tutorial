const score = 400 // its a number type automatically by compiler
console.log(score);
console.log(score.toString());
console.log(score.toString().length);

const balance = new Number(100) // here we are initialising number object 
console.log(balance);
// Number type properties/prototype trial
console.log(balance.toString()) // return 100 as a string
console.log(balance.toString().length) //return length =3
console.log(balance.toFixed(2)) //return 100.00

const newNumber=23.8966
console.log(newNumber.toPrecision(3)) // expected output: 23.9
const newNumber1 = 123.8996
console.log(newNumber1.toPrecision(3))// output: 124
const newNumber2= 1123.8996
console.log(newNumber2.toPrecision(3))//output: 1.12e+3  

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));
//expected output: 10,00,000 indian number system using ('en-IN')
// other wise 1,000,000 US number system

//++++++++++++++++++++++++++++++++Maths++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); //absolute method used to convert negative number to positive Number, Output: 4
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)