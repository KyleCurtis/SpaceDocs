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
export const Variables = `// let keyword
let first_num = 32;

// const keyword
const days_in_week = 7;`;

/* PRIMITIVE DATA TYPES
======================================================================================================== */
export const Types = `// String
const name = 'John Smith;'

// Number
const age = 32;

// Boolean
const is_pavascript = true;

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



















