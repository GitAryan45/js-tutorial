const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {            // ye aise hm check kr skte h ki array empty h ya nhi
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {             // object empty h ya nhi aise check krte h ..(pehle hmne object.keys()se object ko array me convert kr liya fir .length==0 se khaali h ya nhi ye check krliya )
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined se bachne k liye  use krte h


let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator 
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")


// note // ternary operator(?) and nullish coaliascing  operator(??) alalg alag hote h
