//object deconstuctor explain
// https://www.youtube.com/watch?v=G4T2ZgJPKbw
//learned from this youtube channel
const person ={
    name: 'Aryan',
    age:21,
    gender: 'Male'
    
}

let {name, age, gender='female'} = person

console.log(name);
console.log(age);
console.log(gender);

//mainly iss deconstructor object ka use function me krte kuch iss trh:
function printDetails({name, age}){
    console.log(`The name is ${name} and age is ${age} `);
}
printDetails(person)