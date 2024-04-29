let score="33www"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);//conversion to number datatype using Number object(capital N ka mtlb ydd h?)
console.log(typeof valueInNumber);

console.log(valueInNumber);

//(score)"33"=>33(valueInNumber) after conversion to number datatype
// "33abc" => NaN
//true => 1, false => 0
//null => 0
// undefined => 0


let isloggedIn = 1;

let booleanIsLoggedIn = Boolean(isloggedIn); //conversion to boolean 

console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

// (isloggedin) 1 => true (booleanisloggedIn)
// 0 => false
// "empty string" => 0
// "string" => 1

let somenumber = 33;

let StringNumber = String(somenumber);//conversion to string datatype
console.log(typeof StringNumber);
console.log(StringNumber);

// ***************** OPERATIONS *************

let value = 3;
let negValue = -value;
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " Aryan"

let str3 = str1 + str2  //concatenation
console.log(str3);

// console.log("1" + 2);       //this will return 12
// console.log(1 + "2");       // =>12 (isme bhi pehla element number h to pehle addition hoga fir string concatenation hoga ,,,,,, lekin pehle element k sath koi number nhi h to waisa hi rh jaega isi liye 12 print huA )
// console.log("1" + 2 + 2);   // =>122
// console.log(1 + 2 + "2");   // => 32 (kuki agr pehla element number h to addition wala concaenation hoga and last me string concatenate ho jaegi)

console.log(+true); // + operator convert the anyother datatype to number datatype
// kuki + operator ko increment operation perform krana hota h uske liye usko apne baad wale element ko number me convert krna padta h)
// pr agr value/element k baad lgaige to error dega(console.log(true+))

console.log(+" ");  //we know that empty string to number me convert krenge to 0 ayega 

let x = 3n;
let y = ++x; // prefix increment 
console.log(x,y);

let x2 = 3;
const y2 = x2++; //postfix Increment
console.log(x2,y2);// x is 4; y is 3

// link to study conversion wala topic yourself
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion