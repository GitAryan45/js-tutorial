const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

//console.log(marvel_heros); //output:  [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros); //output: [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heros = [...marvel_heros, ...dc_heros] //this is a spread method to concatenate or join two or more arrays.
console.log(all_new_heros); // output: [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //flat to flat the the array in one line. flat me parameter pass krna hota h jo ki depth hota h ya depth infinity rkha h ,usualy utna hona chahiye jitna array ke andar array ho
console.log(real_another_array); //output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

//some others
console.log(Array.isArray("Hitesh")) // output: false ....check krta h array h ya nhi h 
console.log(Array.from("Hitesh")) // output: [ 'H', 'i', 't', 'e', 's', 'h' ] ... convert string into array
console.log(Array.from({name: "hitesh"})) // interesting aage kaam ayega projects me  // converting objeect to array
// output: [] ...jb bhi ye conversion nhi ho pata h to ye '[]' return krta h

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //output: [ 100, 200, 300 ]