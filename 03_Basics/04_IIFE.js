// immediately invoked function expression (IIFE)
// global scope ke variables se function me pollution na ho isliyee IIFE use krte h

// named IIFE
(function chai() {  
    console.log(`DB CONNNECTED`);
})(); // yaha pe semicolon lagana jaruri h IIFE me (ye code editor ko batata h context rokna kaha h)... ye do IFFE saath me likhte h tabb lagana padta h
//syntax of above ()() (first paranthesis is wrapped function and second parenthesis is function call (like chai())

// arrow funcion IN IIFE ( unnammed IFFE)
( (name) => {
    console.log(`DB CONNNECTED TWO ${name}`);
} )("Aryan")
