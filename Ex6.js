//1. What are arrow functions in ES6, and how are they different from regular functions?
Answer:
`Arrow functions, introduced in ES6, provide a more concise syntax for writing functions in JavaScript. They are especially useful for inline functions, like callbacks, and have some differences from traditional function expressions. `
// Syntax
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;

`Differences from Regular Functions
  Lexical this Binding:

   1. One of the biggest differences is that arrow functions do not have their own this context. Instead, they inherit this from the enclosing lexical scope.
   2. Regular functions have their own this, which is dynamically bound based on how the function is called.`

//    Example:
function Person() {
    this.age = 0;

    setInterval(function() {
        this.age++;
    }, 1000);
}

const p = new Person();

// Using an arrow function:
function Person() {
    this.age = 0;

    setInterval(() => {
        this.age++;
    }, 1000);
}



//2. What is destructuring assignment in ES6, and how does it work with arrays and objects?
Answer:
`Destructuring assignment is a convenient way to extract values from arrays or properties from objects and assign them to variables.

Destructuring Arrays-
With array destructuring, you can extract values from an array into individual variables based on their position.`

//Basic Syntax-
const [a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

Skipping Elements-

const [first, , third] = [10, 20, 30];
console.log(first); // 10
console.log(third); // 30

Default Values

const [a = 5, b = 10] = [7];
console.log(a); // 7
console.log(b);

Using the Rest Operator

const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest); 

`Destructuring Objects-
With object destructuring, you can extract properties by their names and assign them to variables. The syntax uses curly braces { } instead of square brackets.`

Basic Syntax
const person = { name: 'Mamun', age: 20 };
const { name, age } = person;
console.log(name); 
console.log(age);

Nested Destructuring
const person = { name: 'Alice', address: { city: 'Wonderland', zip: 12345 } };
const { name, address: { city, zip } } = person;
console.log(city); 
console.log(zip); 

// Project
`Heres a JavaScript function that takes an object as input, iterates over its properties, and logs each property name and its value individually. This function uses a for...in loop to go through each property in the object.`

// Example
function logProperties(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) { // Check if the property is the object's own
            console.log(`${key}: ${obj[key]}`);
        }
    }
}


//3. Explain let, const, and var keywords. When should you use each?
Answer:
`In JavaScript, let, const, and var are keywords for declaring variables, but they have different characteristics in terms of scoping, reassignability, and hoisting. Here’s a breakdown of each:

var

1. Function-Scoped:
 i. var declarations are function-scoped, meaning they are only accessible within the function where they are defined. If declared outside of any function, they become global.

 ii. Variables declared with var ignore block scope (e.g., if, for blocks), which can lead to unexpected behavior.

2. Hoisting:

  i. var declarations are hoisted to the top of their function scope, which means they are accessible throughout the function, even before the actual line where they are declared. However, they are initialized with undefined until the line where the assignment occurs.

3. Reassignable:

 i. Variables declared with var can be reassigned and redeclared within the same scope without errors.
When to Use var:

 ii. var is now largely avoided due to its function scope and hoisting behavior, which can make code harder to understand and debug. However, you may encounter it in legacy code.`

//  Example
var x = 10;
if (true) {
    var x = 20; // This `x` is the same as the outer `x`
    console.log(x); // 20
}
console.log(x); 

let

`1. Block-Scoped:

    let is block-scoped, meaning it’s only accessible within the block (e.g., { }) where it’s defined, including if, for, and while statements.
2. Not Hoisted in the Same Way as var:

    let declarations are hoisted, but they are not initialized before they are defined. This is known as the Temporal Dead Zone (TDZ), which means you cannot use a let variable before its declaration.
3. Reassignable but Not Redeclarable:

    You can reassign let variables, but you cannot redeclare them within the same scope.
4. When to Use let:

    Use let for variables that need to be reassigned later in the code. let is ideal for for loop counters or variables that will change over time.`

// Example
let x = 10;
if (true) {
    let x = 20; 
    console.log(x); 
}
console.log(x);

const

`1. Block-Scoped:

    Like let, const is block-scoped and is only accessible within the block where it’s declared.
2. Not Hoisted in the Same Way as var:

   const variables are also affected by the Temporal Dead Zone (TDZ), so they cannot be accessed before their declaration.
3. Not Reassignable:

   const stands for "constant," meaning once a variable is assigned a value with const, it cannot be reassigned.
   However, if the const variable is an object or array, you can still modify its properties or elements (though you can’t reassign the variable itself).
4. When to Use const:

   Use const whenever you don’t plan to reassign a variable, which makes it the preferred choice for variables that represent fixed values or configurations.`

// Example
const x = 10;
x = 20; 
const person = { name: "Alice" };
person.name = "Bob"; 
person = { name: "Charlie" };


//4. What is the spread operator, and how can it be used with arrays and objects?
Answer:
`The spread operator (...) is a convenient syntax in JavaScript that allows an iterable (like an array or an object) to be expanded in places where multiple elements or properties are expected. `

`Spread Operator with Arrays-
In arrays, the spread operator allows you to:

  1. Copy an Array: Create a shallow copy of an existing array.
  2. Concatenate Arrays: Merge two or more arrays.
  3. Pass Elements as Arguments: Pass elements of an array as individual arguments to a function.

1. Copying an Array
The spread operator creates a shallow copy of an array, meaning nested objects or arrays inside the copied array are still referenced, not duplicated.`
const original = [1, 2, 3];
const copy = [...original];
console.log(copy); // [1, 2, 3]

`2. Concatenating Arrays
You can use the spread operator to merge arrays in a more readable way than concat().`
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];
console.log(merged)

`3. Passing Array Elements as Function Arguments
When calling functions that accept multiple arguments, you can use the spread operator to expand an array into individual arguments.`
const numbers = [1, 2, 3];
console.log(Math.max(...numbers));


// Spread Operator with Objects-
`1. Copying an Object
  The spread operator allows you to create a shallow copy of an object, similar to Object.assign().`
  const original = { name: 'Alice', age: 25 };
const copy = { ...original };
console.log(copy);

`2. Merging Objects
You can combine multiple objects, with properties from later objects overriding those from earlier ones if they have the same key.`
const obj1 = { name: 'Alice' };
const obj2 = { age: 25, city: 'Wonderland' };
const merged = { ...obj1, ...obj2 };
console.log(merged);

`3. Adding or Overriding Properties
The spread operator is also helpful when you want to expand an object and simultaneously add or update properties.`
const person = { name: 'Alice', age: 25 };
const updatedPerson = { ...person, age: 30, city: 'Wonderland' };
console.log(updatedPerson); 

//Project: Merge two arrays using the spread operator.
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}


//5. How does template literals work in ES6, and how does it make string interpolation easier?
Answer:
`Template literals, introduced in ES6, are a new way to work with strings in JavaScript, making it easier to create multi-line strings and perform string interpolation (inserting expressions directly within strings). `

`Key Features of Template Literals
1. String Interpolation:

    i. Template literals allow you to embed expressions directly within the string using ${expression} syntax.
    ii. This is much cleaner and more readable than the traditional concatenation approach.`

// Example
const name = 'Alice';
const age = 25;
const message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message); 

`2. Multi-Line Strings:

   Template literals preserve line breaks, making it easy to write multi-line strings without the need for \n (newline) characters or + concatenation.`

// Example
const multiLineString = `This is a line
and this is another line.
And here’s yet another line.`;

console.log(multiLineString);
// Output:
// This is a line
// and this is another line.
// And here’s yet another line.

3. Expression Evaluation:

Inside ${}`, you can perform calculations or call functions directly.`

const a = 5;
const b = 10;
console.log(`The sum of ${a} and ${b} is ${a + b}.`);

`4. Tagged Templates (Advanced Use):

    Tagged templates let you parse a template literal with a custom function. This is useful for tasks like sanitizing or formatting input strings.`

function tag(strings, ...values) {
        return strings[0] + values.map((v, i) => `${v}${strings[i + 1]}`).join('');
}
const name = "Alice";
const age = 25;
console.log(tag`Name: ${name}, Age: ${age}`);


//6. What are default parameters in ES6, and how do they improve function flexibility?
Answer:
`Default parameters in ES6 allow you to set default values for function parameters. If a parameter is not provided (or is undefined), the function will use the default value specified.`

// Syntax
function greet(name = 'Guest') {
    return `Hello, ${name}!`;
}
console.log(greet());
console.log(greet('Alice'));

`Default Parameters Work-

1. Using the Default When Argument is Omitted or undefined:

    If an argument is not provided or explicitly set to undefined, the default value is used.
    However, if an argument is set to any other falsy value (like null, 0, or ''), the default is not applied.`

// Example
function add(a = 5, b = 10) {
    return a + b;
}
console.log(add());
console.log(add(7));
console.log(add(7, 3));
console.log(add(undefined, 3));

`2. Dynamic Default Values:

    Default parameters can be expressions, allowing them to be dynamically calculated based on other parameters or external data.`

function multiply(a, b = a * 2) {
        return a * b;
}
console.log(multiply(5));
console.log(multiply(5, 3));

`3. Parameter Order:

   Default parameters are often placed after required parameters. This makes it clear which arguments can be omitted and helps avoid accidentally overwriting defaults.`


//7. Explain what Map and Set are in ES6 and how they differ from objects and arrays.
Answer:
`In ES6, Map and Set were introduced as new data structures to complement objects and arrays, each offering specific advantages and serving unique purposes.

1. Map
A Map is a collection of key-value pairs, where keys can be of any data type (not limited to strings, like in objects).

Key Characteristics of Map
  i. Any Type of Key: Unlike objects, which only allow string or symbol keys, a Map can use any data type (including objects, functions, etc.) as keys.
  ii. Ordered: The keys in a Map are ordered by insertion order, which means you can iterate over entries in the same order they were added.
  iii. Size Property: A Map has a size property that reflects the number of entries in it.
  iv. Direct Access to Values: Methods like .get() and .set() provide a straightforward way to access and update values.`

//  Basic Usage of Map
const map = new Map();
map.set('name', 'Alice');
map.set(42, 'The answer');
map.set({ key: 'object' }, 'An object key');

console.log(map.get('name')); // 'Alice'
console.log(map.get(42)); // 'The answer'
console.log(map.size); // 3

// Iterating over a Map
for (const [key, value] of map) {
    console.log(key, value);
}

`2. Set
A Set is a collection of unique values (duplicates are not allowed).

Key Characteristics of Set
  i, Uniqueness: Each value in a Set is unique; duplicates are automatically filtered out.
  ii. Any Type of Value: Similar to Map, Set can store any type of value, including objects.
  iii. Ordered by Insertion: A Set keeps elements in insertion order, which means elements can be iterated in the order they were added.
  iv. Size Property: A Set also has a size property to show the number of elements.`

//   Basic Usage of Set
const set = new Set();
set.add(1);
set.add(2);
set.add(2); // Duplicate, will not be added
set.add('hello');
set.add({ key: 'value' });

console.log(set.size); // 4
console.log(set.has(1)); // true

// Iterating over a Set
for (const value of set) {
    console.log(value);
}
// Project: Create a simple dictionary with Map to store key-value pairs.
class Dictionary {
    constructor() {
        this.map = new Map();
    }

    // Method to add or update a key-value pair
    set(key, value) {
        this.map.set(key, value);
    }

    // Method to get the value associated with a key
    get(key) {
        return this.map.get(key) || "Key not found";
    }

    // Method to check if a key exists in the dictionary
    hasKey(key) {
        return this.map.has(key);
    }

    // Method to delete a key-value pair
    delete(key) {
        if (this.map.delete(key)) {
            console.log(`Deleted key: ${key}`);
        } else {
            console.log("Key not found");
        }
    }

    // Method to display all key-value pairs
    display() {
        console.log("Dictionary contents:");
        for (const [key, value] of this.map) {
            console.log(`${key}: ${value}`);
        }
    }
}


//8. What is the purpose of the for...of loop, and how is it different from for...in?
Answer:
`The for...of loop and the for...in loop are both used to iterate over collections in JavaScript, but they serve different purposes and operate on different types of data structures.

for...of Loop
The for...of loop is used to iterate over iterable objects, such as arrays, strings, maps, sets, and more. It iterates over the values of the iterable, allowing you to access each element directly.`

//Example
const array = [10, 20, 30];
for (const value of array) {
    console.log(value); // Outputs: 10, 20, 30
}
const string = "Hello";
for (const char of string) {
    console.log(char); // Outputs: H, e, l, l, o
}


`for...in Loop
The for...in loop is used to iterate over the enumerable properties (keys) of an object. It is primarily used for objects, including arrays, but it is important to note that it iterates over the keys, not the values.`

//Example
const object = {
    name: "Alice",
    age: 25,
    city: "Wonderland"
};
for (const key in object) {
    console.log(`${key}: ${object[key]}`); 
}


//9. Explain the concept of Promise in JavaScript. How do you use .then() and .catch()?
Answer:
`A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises provide a way to handle asynchronous operations more effectively and make the code more readable compared to traditional callback methods.`

`Using .then() and .catch()
  After a promise is created, you can use .then() to handle the fulfilled state and .catch() to handle the rejected state. ` 

`1. .then() Method:
  The .then() method is called when the promise is fulfilled. It takes up to two arguments: a callback function for the fulfilled case and an optional callback for the rejected case.`

myPromise
.then(result => {
      console.log(result); // "Operation was successful!"
})
.catch(error => {
      console.error(error);
});

`2. .catch() Method:
  The .catch() method is used to handle any errors or rejections from the promise. It is equivalent to calling .then(null, rejection) but is more readable and is typically placed at the end of a promise chain.`

  myPromise
  .then(result => {
      console.log(result); // Handle the successful result
  })
  .catch(error => {
      console.error(error); // Handle the error
  });

//Project: Create a promise that resolves after 2 seconds and logs a message.

`Here’s a simple project that creates a promise that resolves after 2 seconds and logs a message to the console. This example demonstrates how to create a promise, use the setTimeout function to simulate a delay, and handle the promise resolution.`

// Example

// Function that returns a promise
const delayedMessage = () => {
    return new Promise((resolve) => {
        // Set a timeout to simulate a delay of 2 seconds
        setTimeout(() => {
            resolve("This message is logged after 2 seconds!");
        }, 2000);
    });
};
// Using the promise
delayedMessage()
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.error("An error occurred:", error); 
    });


//10. What is async/await, and how does it work with Promises?
Answer:
`async and await are syntactic features introduced in ES2017 (ES8) that provide a more straightforward way to work with asynchronous code in JavaScript, particularly when dealing with Promises. They allow you to write asynchronous code that looks and behaves more like synchronous code, making it easier to read and maintain.

Understanding async and await

1. async Functions:

An async function is a function that always returns a promise. If the function returns a value, the promise will be resolved with that value. If the function throws an error, the promise will be rejected with that error.
You declare a function as async by placing the async keyword before the function definition.`

// Example
async function example() {
    return "Hello, World!";
}
example().then(result => console.log(result));


`2. await Keyword:

The await keyword can only be used inside an async function. It pauses the execution of the function until the promise is resolved or rejected.
When await is used, it returns the resolved value of the promise. If the promise is rejected, it throws an error that can be caught using try...catch.`

// Example
async function fetchData() {
    const data = await someAsyncOperation(); // Wait for the promise to resolve
    console.log(data);
}


`Promises Works-
async/await simplifies the way we work with Promises, making the code more readable and avoiding the "callback hell" that can occur with chained .then() methods.`

// Example of Using async/await with 

// Function that returns a promise
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // Simulate success
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Failed to fetch data.");
            }
        }, 2000);
    });
};

// Async function to handle the promise
const getData = async () => {
    try {
        const result = await fetchData(); // Wait for the promise to resolve
        console.log(result); // Logs the result: "Data fetched successfully!"
    } catch (error) {
        console.error(error); // Handle any errors
    }
};

// Call the async function
getData();
