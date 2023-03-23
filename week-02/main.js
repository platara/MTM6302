//1.Variables https://imdac.github.io/modules/js/js-basics/variables.html
// Valid name variables:
// - variable name may only start with a letter, the dollar sign ($), or an underscore (_).
// - variable name may contain letters, numbers, dollar signs, and underscores, but no other characters, like periods or hyphens.
// - can't start a variable name with a number
/*
const 2ndName = 'James' // invalid 
const first%Name = 'John' // invalid 
const first-name = 'John' // invalid 
*/
const first_name = 'John' // valid 
const _firstName = 'John' // valid 
const $firstName = 'John' // valid

// variable names are case-sensitive
const name = 'John' // This is a different variable ...
const Name = 'James' // ... from this variable ...
const nAme = 'Peter' // ... and this variable.

//Avoid Keywords https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords
// reserved words that are part of the language


//Avoid variable names already assigned
// browsers define global standard variables like: alert, document, window



//2. let
// variables that can be reasign. used when it is known that a variable value will change.
let currentStatus = "active" // valid - declaration and asignment
currentStatus = "inactive"   // valid - reasignment



//3. const
// variables that cannot be reasign. These are written completely in uppercase
const MAXIMUM = 5000 //valid - declaration and asignment
/*
MAXIMUM = 4711 // invalid -  reasignment is not allowed. potential runtime error.
*/


//4. Strings
// sequences of characters used to represent text
const firstName = 'John'    // single quotes
const lastName = "Doe"      // double quotes
const age = "22"            // not a number, but a string

// string concatenation
let message = 'My name is ' + firstName + ', I am ' + age + ' years old.'

// template literals using the backticks `` 
message = `My name is ${firstName}, I am ${age} years old.`

//5. Number
// represent floating-point numbers.
const number1 = 5          // integer
const number2 = 0.5        // decimal
const number3 = -22        // negative integer
const number4 = -0.9       // negative decimal
const number5 = 12_300     // separator for decimal representation

// JavaScript includes useful methods and functions for working with numbers.

//6. Boolean
// data type that can only have two values: true or false.
const isLoggedIn = true 
const isAdmin = false

//7. Arrays
// can contain several values. It's an ordered list of values.
// array literal notation []
// index-based structure (every element in an array is stored at a particular index/position)
const shoppingCart = [  // start of array definition
    'Record player',    // first entry
    'Loudspeaker',      // second entry
    'Preamplifier',     // third entry
    'Loudspeaker cables'// fourth entry
];                      // end of array definition

console.log( shoppingCart )     //display the whole array
console.log( shoppingCart[0] )  //display a specific element in the array
console.log( shoppingCart[1] )  

// Multidimensional Arrays
const shoppingCartMultidimensional = [      //opening the main array
    [                                       //first entry - index 0
        'Record player',                    //first element in the first array
        99,                                 //second element in the first array
        'index-0'                           //third element in the first array
    ],
    [                                       //second entry - index 1
        'Loudspeaker',                      //first element in the second array
        120,                                //...
        'index-1',
    ]
]                                           //closing the main array

console.log( shoppingCartMultidimensional )         //display the whole array
console.log( shoppingCartMultidimensional[1][0] )  //display a specific element

//8. Objects
// can contain several values. Can be seen as an unordered list of values wih a key and a value pair.
// In the context of objects, variables are called properties or attributes, and functions are referred to as methods.
// object literal notation {}
const student = {
    firstName: 'Jane',
    lastName: 'Doe',
    isActive: false
}


//Common use of arrays and objects
const students = [
    {
        firstName: 'Jane',
        lastName: 'Doe',
        isActive: false
    },
    {
        firstName: 'Emma',
        lastName: 'Anderson',
        isActive: true
    },
    {
        firstName: 'Liam',
        lastName: 'Jackson',
        isActive: true
    }
]

//9. Operators and expresions
// https://imdac.github.io/modules/js/js-basics/operators.html

//shorthand operators
let result = 5;
result += 11; // the variable now has a value of 16 ...
result -= 1; // ... now a value of 15 ...
result /= 3; // ... now a value of 5 ...
result *= 4; // ... now a value of 20 ...
result %= 5; // ... and now a value of 0.

// comparison operators
console.log(false == 0)     // Output: true
console.log(false == 1)     // Output: false
console.log(true == 1)      // Output: true
console.log(true == 0)      // Output: false
console.log("4711" == 4711) // Output: true
console.log(false != 0)     // Output: false
console.log(false != 1)     // Output: true
console.log(true != 1)      // Output: false
console.log(true != 0)      // Output: true
console.log("4711" != 4711) // Output: false

// logical operators
const isLoggedInAndAdmin = isLoggedIn && isAdmin; // AND operator 
const isLoggedInOrAdmin = isLoggedIn || isAdmin; // OR operator 
const isLoggedOut = !isLoggedIn; // negation
console.log(isLoggedInAndAdmin); // false
console.log(isLoggedInOrAdmin); // true
console.log(isLoggedOut); // false
