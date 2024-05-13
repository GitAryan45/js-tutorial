//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

//++++++++++++++++++++++++ interesting kuch ++++++

console.log(addOne(5)) //function declase krne se pehle bhi function call kr skte h
function addOne(num){  //function ko aise bhio define kr skte h 
    return num+1
}
console.log(addOne(5))

const addTwo = function(num){  // or function ko aise bhi define kr skte h(variable me hold krke function declare krna)
    return num+2
}
addTwo(5)
// but agr function declaration hm kisi variable me hold krte h to hm usse phle function call nhi kr skte

