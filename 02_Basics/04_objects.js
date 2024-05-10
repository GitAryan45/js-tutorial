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

// database se iss form me data ata h 
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email // like this we can acces properties of above objects
// console.log(tinderUser);

console.log(Object.keys(tinderUser)); // output: [ 'id', 'name', 'isLoggedIn' ]
// object.key() method is used to get keys of object as an array
console.log(Object.values(tinderUser)); // output: [ '123abc', 'Sammy', false ]
//similary for values
console.log(Object.entries(tinderUser)); // output: [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //output: true
// this property is used to check weather a property exists in the object or not

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor // normally we access properties of object like this

// now lets see ki we can access proprty using destructure of object
const {courseInstructor: instructor} = course //destructuring of objects

// console.log(courseInstructor); //courseInstructor ya usko koi naam dedo jaise ki yaha instructor de diya, to usko hm uss alag naam(here instructor) se bhi acces kr skte h 
// output: hitesh
console.log(instructor); 
// output: hitesh  ...dono se same hi output ayega


//API ke baare me kch batein
// API se jo data aata h wo JSON format me aata h (pehle wo xml me aata tha jo ki bhot complex hota tha)

//JSON format(object jaisa hi hota h same object nhi hota)
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// ye bhi JSON ka format k arrya ke adar ek se jyada objects
// [
//     {},
//     {},
//     {}
// ]                       