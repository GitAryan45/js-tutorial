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