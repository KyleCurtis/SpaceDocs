/* HELLO WORLD
======================================================================================================== */
export const HelloWorld = `const greeting = 'Hello, World!';
console.log(greeting);`;

/* COMMENTS
======================================================================================================== */
export const Comments = `// This is a sing-line comment

/* This is a multi-
line comment*/`;

/* VARIABLES
======================================================================================================== */
export const Variables = `// let keyword (for mutable values)
let lunar_mission; // Initialize
lunar_mission = "Apollo 11"; // Declare

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

// Boolean
const is_habitable = true;

// Undefined
const value = undefined;

// Null
const selection = null;`;

/* TYPEOF
======================================================================================================== */
export const TypeOf = `// Let's take the variables from the previous section:
const name = 'John Smith';
const age = 32;
const is_javascript = true;
const value = undefined;
const selection = null;

// Getting the data type using typeof:
console.log(typeof name);
console.log(typeof age);
console.log(typeof is_javascript);
console.log(typeof value);
console.log(typeof selection);`;


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
