// const tinderUser = new Object()  // agr is trh se object declare krenge toh singleton object crete hoga 
const tinderUser = {} // iss trh se object literal se declare hoga, internally koi fifference nhi dono me 

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser); // output: { id: '123abc', name: 'Sammy', isLoggedIn: false }

// lets see object ke andar object declare hota h and kaise unko access krte h 
const regularUser = {              
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname);               //output: { userfullname: { firstname: 'hitesh', lastname: 'choudhary' } }
// console.log(regularUser.fullname.userfullname);  //output: { firstname: 'hitesh', lastname: 'choudhary' }
console.log(regularUser.fullname.userfullname.firstname); //output: hitesh

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // merge two or more objects
// console.log(obj3); 
//output: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }...but aise shi se combine ho nhi rha ek k andr ek object bn rha h but we want a single object containing all values.

// const obj3 = Object.assign({}, obj1, obj2, obj4) // merge objects using assign 
// console.log(obj3);
// output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' } ...now its okk

const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3) // ouput: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }