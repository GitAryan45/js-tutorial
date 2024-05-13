function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()


// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)
console.log("Result: ", result);


function loginUserMessage(username='Guestuser'){ //yaha se bhi argument pass kr skte h ye as a default argument work krega agr function calling pe koi argument pass nhi hota h to, to ye by default print ho jaega or username kbhi undefined hoga hi nhi
    if(!username){ //this is equivalent to (username === undefined) ...mtlb agr hm usename nhi denge to uss condition me wo undefined hoga 
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage('Aryan'))

//**********************************************************************
// shopping cart me functions kaise kaam krte h ?? kuki hme pata nhi hota h ki user kitne item add krega cart me to hmm kitne parameter ya argument define kre kaise pata chalega..
// isiliye yaha use hota h rest operator ka (...variable_name)
function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000)); //....abb hm kitne bhi argument pass kr skte h 
// output: [ 200, 400, 500, 2000 ]

function calculateCartPrice(val1, val2, ...num1){  // aise bhi use kr skte h rest operator ko 
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))
// output: [ 500, 2000 ]  // starting ki do values val1 and val2 variables me chali jaegi and bachi hui num1 m1 as a array store ho jaegi


// how functions handles a object 
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){ // pass anyobject name (any name its generic)
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); //but properties access bhi usi object se hogi jo naam pass kiya h
}

// handleObject(user) // yaha pe jo object argument me jana h wo pass krna hoga
//we can also initialize object as an argument:
handleObject({
    username: "sam",
    price: 399
})


// Array kaise handle karega function?
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){ // koi bhi naam parameter me daal skte h 
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray)); // array ka variable pass kra 
console.log(returnSecondValue([200, 400, 500, 1000])); // direct array hi pass kr diya just like abho upar object me kiya tha 

