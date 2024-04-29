// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


console.log("2" > 1); //true ("2"converted to number and then compared)
console.log("02" > 1); //true
console.log("02" > true) //true (boolean to number then compared)

console.log(null > 0); //false (null=0 and 0>0 = false)
console.log(null == 0); //equality rules of js dont allow this so false
console.log(null >= 0); // true (bcoz dono opreator me se ek true ho rha h )

console.log(undefined == 0);//false
console.log(undefined > 0); //false (undefined=Nan which cant be comparable so it returns false)
console.log(undefined < 0); //false

// === 

console.log("2" === 2); //strict equality operartor( it compare value as well as data type )