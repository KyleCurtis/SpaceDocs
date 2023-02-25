export const Output = `const message: string = "All systems go!";
console.log(message);`

export const Comments = `// As you can see from the previous section, the double forward-slash declares a 
// single-line comment, and can be stacked when needed.

/* If you have multiple lines of comments, it's recommended to use the multi-
line comment syntax like this. */`;

/* VARIABLES
======================================================================================================== */
export const Variables = `// let keyword (for mutable values)
let mission; // Declare
mission = "Apollo 11"; // Initialize

// It's recommended to declare and initialize a variable at the same time:
let commander = "Neil Armstrong";

// Declaring multiple variables on same line
let lunar_pilot = "Edwin Aldrin", commander_pilot = "Michael Collins";

// const keyword (for immutable values)
const year = 1969;

/* Output
========================================================== */
console.log(mission, year);
console.log(commander, lunar_pilot, commander_pilot);`