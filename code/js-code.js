/* HELLO WORLD
======================================================================================================== */
export const HelloWorld = `// Hello, World!

const greeting = 'Hello, World!';
console.log(greeting);`;

/* COMMENTS
======================================================================================================== */
export const Comments = `// Comments

// As you can see from the previous section, the double forward-slash declares a 
// single-line comment, and can be stacked when needed.

/* If you have multiple lines of comments, it's recommended to use the multi-
line comment syntax like this. */`;

/* VARIABLES
======================================================================================================== */
export const Variables = `// Variables 

// let keyword (for mutable values)
let lunar_mission; // Declare
lunar_mission = "Apollo 11"; // Initialize

// It's recommended to declare and initialize a variable at the same time:
let mission_commander = "Neil Armstrong";

// Declaring multiple variables on same line
let lunar_mod_pilot = "Edwin Aldrin", commander_mod_pilot = "Michael Collins";

// const keyword (for immutable values)
const year = 1969;

/* Output
========================================================== */
console.log(lunar_mission, year);
console.log(mission_commander, lunar_mod_pilot, commander_mod_pilot);`

/* PRIMITIVE DATA TYPES
======================================================================================================== */
export const Types = `// String
const planet = 'Earth;'

// Number
const orbit_in_days = 365;

// Big Integer
const moon_distance_ft = 1261000000n;

// Boolean
const is_habitable = true;

// Undefined
const value = undefined;

// Null
const selection = null;`;

/* TYPEOF
======================================================================================================== */
export const TypeOf = `// Let's take the variables from the previous section:
const planet = "Earth";
const orbit_in_days = 365;
const is_habitable = true;
const value = undefined;
const selection = null;

// Getting the data type using typeof:
console.log(typeof planet);
console.log(typeof orbit_in_days);
console.log(typeof is_habitable);
console.log(typeof value);
console.log(typeof selection);

// Getting the data type after a calculation
// typeof() is the same as typeof, except it can contain multiple arguments
console.log(typeof(150 + 150))`;


/* TYPE CONVERSIONS
======================================================================================================== */
export const TypeConversions = `let value = "32"; // notice how 32 starts as a string
console.log(typeof value); // we can verify the type with typeof

/* Using Methods
========================================================== */
// Number() Method
let num1 = Number(value);
console.log(typeof num1); // verification

// String() Method
let num2 = String(value);
console.log(typeof num2); // verification

/* Using Parse
========================================================== */
`

/* OBJECTS
======================================================================================================== */
export const Objects = `// Object Example ()
const planet = {
    name: "Earth",
    position_from_sun: 3,
    orbit_in_days: 365,
    is_habitable: true,
}

/* Modifying & Reading Objects (Dot Notation)
========================================================== */
player.level = 2;

console.log(player.name);
console.log(player.level);
console.log(player.is_alive);

/* Modifying & Reading Objects (Bracket Notation)
========================================================== */
player['level'] = 3;
console.log(player.level);

let username = 'name';
player[username] = 'Player01';
console.log(player.name);
`


/* ARRAYS
======================================================================================================== */
export const Arrays = `/* Initializing Arrays
========================================================== */
// empty array
const example = [];

// custom arrays 
const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupyter", "Saturn", "Uranus", "Neptune"];

/* Array Index (elements)
========================================================== */
// Getting the length of array (# of elements)
console.log(planets.length); // 8

// Getting specific element by index
console.log(planets[0]); // Mercury
console.log(planets[1]); // Venus
console.log(planets[2]); // Earth

// Getting the last element of an array
console.log(planets[planets.length -1]); // Neptune

// Could also use: planets.at(-1)
console.log(planets.at(-1)); // Neptune

/* Modifying Arrays
========================================================== */
// Adding element to end of array
planets.push("Pluto");
console.log(planets);

// Adding element to the beginning of array
planets.unshift("Pandora");
console.log(planets);

// Removing the first element from array
planets.shift();
console.log(planets);

// Remove last element from array
planets.pop();
console.log(planets);
`

/* FUNCTIONS
======================================================================================================== */
export const Functions = `/* Function Basics
========================================================== */
// Function example
function greet() {
    console.log("Hello, World!");
}
greet(); // Call the function

/* Function Parameters
========================================================== */
function custom_greeting(name) {
    console.log("Hello, " + name);
}
custom_greeting("World"); // Call (w/ arguments)


/* Multiple Parameters
========================================================== */
function sum(x, y) {
    return x + y;
}
console.log(sum(20, 12));`; 

/* ARITHMETIC OPERATORS
======================================================================================================== */
export const Arithmetic_Operators = `let x = 100, y = 10, z = 2;

console.log(x + y); // Addition (Sum)
console.log(x - y); // Subtraction (Difference)
console.log(x * y); // Multiplication (Product)
console.log(x / y); // Division (Quotient)
console.log(x % y); // Modulus (Remainder after division)
console.log(x ** z); // Exponent (Power of)`;

/* PLUS AND MINUS OPERATORS
======================================================================================================== */
export const Plus_Minus_Operators = `let x = 12;

console.log(++x); // Increment will happen before logging to console
console.log(x);

console.log(x++); // Increment will happen after logging to console
console.log(x);`;

/* ASSIGNMENT OPERATORS
======================================================================================================== */
export const Assignment_Operators = `/* Assignment operators 
========================================================== */
x += 10; // Addition (x = x + 10)
console.log(x);

x -= 10; // Subtraction (x = x - 10)
console.log(x);

x *= 10; // Multiplication (x = x * 10)
console.log(x);

x /= 10; // Division (x = x / 10)
console.log(x);

x %= 10; // Modulus (x = x % 10)
console.log(x);`;

/* COMPARISON OPERATORS
======================================================================================================== */
export const Comparison_Operators = `x = 10; 

/* Comparison operators 
========================================================== */
console.log(x > 1); // Greater than
console.log(x >= 1); // Greater than or equal to
console.log(x < 1); // Less than
console.log(x <= 1); // Less than or equal to

// Strict and lose equality
console.log(x == 1); // Equal to (loose)
console.log(x === 1); // Equal to (strict)
console.log(x != 1); // Not equal (loose)
console.log(x !== 1); // Not equal (strict)
`;

export const Ternary_Operators = ``;