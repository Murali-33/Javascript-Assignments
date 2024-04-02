// 1.	what is IIFE? One use case ?

//IIFE stands for Immediately Invoked Function Expression. It's a design pattern used in JavaScript where a
//function is declared and invoked immediately after it's defined. This pattern is often employed to create a
//new scope for variables and avoid polluting the global namespace.

//Suppose you have two JavaScript files: file1.js and file2.js, and both contain a variable named counter.

//## file1.js
(function () {
  var counter = 0;

  function incrementCounter() {
    counter++;
  }

  console.log("Loaded file1.js");
})();

//file2.js

(function () {
  var counter = 100;

  function decrementCounter() {
    counter--;
  }

  console.log("Loaded file2.js");
})();

//2.Function Declaration / Function Expression ?

// Function declarations are defined using the function keyword followed by the function name and parameters.
// These functions are hoisted to the top of their scope during the compilation phase, meaning they can be
// called before they are defined in the code.

function add(a, b) {
  return a + b;
}

//Function expressions are not hoisted, so they cannot be called before they are defined.

var multiply = function multiply(a, b) {
  return a * b;
};

//Usage:

// Function Declarations:
//  Suitable for creating reusable blocks of code that need to be invoked multiple times throughout your script.

//Entire function declarations are hoisted to the top of their containing scope during the compilation phase. This
// means that you can call a function declaration before it appears in the code.

// Function Expressions:
// Useful when you need to create functions dynamically or as part of another expression. They are also great for
// creating anonymous functions that are only used in a specific context.

//More flexible because they can be passed as arguments to other functions, assigned dynamically, or created inline within other
// expressions.

//Function expressions are not hoisted. If you try to call a function expression before it's defined, you'll get an error because the
//variable assignment (containing the function expression) hasn't happened yet.

//3.How js event loop works ?

//The JavaScript event loop is a critical concept in understanding how asynchronous operations are handled in JavaScript.
// It's responsible for managing the execution of various tasks, including handling user interactions, network requests,
//and timers, in a non-blocking and efficient manner.

console.log("Start");

setTimeout(function () {
  console.log("Timeout callback");
}, 0);

Promise.resolve().then(function () {
  console.log("Promise resolved");
});

console.log("End");

//Microtask Queue:

//There's also a microtask queue (or job queue) that is checked after each task is completed. Microtasks include promises and mutation
//observer callbacks. Microtasks are prioritized over regular tasks and are processed before the event loop moves to the next
// task in the event queue

//Event Queue:

//When an asynchronous operation is initiated, such as fetching data from a server or setting a timer, it's not executed immediately.
//Instead, it's pushed into the event queue once it's completed.

// "Start" and "End" are logged immediately because they are synchronous.

// The setTimeout callback is placed in the event queue with a delay of 0 milliseconds.

// The Promise.resolve().then() callback is placed in the microtask queue.

// Once the execution stack is empty, the event loop processes microtasks first, logging "Promise resolved".

// Then, it processes the setTimeout callback from the event queue, logging "Timeout callback".

// 4.call apply bind ?

// Use call and apply for immediate function invocation with specified context and arguments.
// Use bind to create a new function with a bound context, which can be invoked later.

//call
var person1 = { name: "Alice" };
var person2 = { name: "Bob" };

function greet() {
  return "Hello, " + this.name;
}

console.log(greet.call(person1)); // Output: Hello, Alice
console.log(greet.call(person2)); // Output: Hello, Bob

//apply
var numbers = [2, 4, 6, 8, 10];

function sum() {
  return this.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum.apply(numbers)); // Output: 30

//bind

var person = { name: "Alice" };

function greet() {
  return "Hello, " + this.name;
}

var greetPerson = greet.bind(person);
console.log(greetPerson()); // Output: Hello, Alice

//5.difference between arrow function and norml function ?

// Regular functions have their own this context. And this is determined dynamically depending on how you call or execute the
//  function. Arrow functions, on the other hand, do not have their own this context. Instead, they capture the this value
//  from the surrounding lexical context in which the arrow function was created




// 6.How does browser reads the code ?


// Understanding how browsers interpret JavaScript code and render UI involves several steps, including parsing, creating an Abstract Syntax Tree (AST), optimizing, and executing the code. Here's an overview of the process:

// Fetching: The browser retrieves the HTML, CSS, and JavaScript files from the server.

// HTML Parsing: The browser parses the HTML to construct the Document Object Model (DOM) tree, representing the structure of the web page.

// CSS Parsing and Styling: CSS files are parsed to create the CSS Object Model (CSSOM), which is combined with the DOM to create the Render Tree. This tree contains all the visual elements of the page and their styles.

// JavaScript Parsing:

// Lexical Analysis: The browser tokenizes the JavaScript source code into tokens based on the ECMAScript grammar.
// Parsing: The tokens are parsed into a syntax tree known as the Abstract Syntax Tree (AST). This tree represents the syntactic structure of the code.
// Execution:

// Interpreter: The browser may initially interpret the JavaScript code directly using an interpreter. This involves executing each statement one by one.
// Optimization and Compilation:
// JIT (Just-In-Time) Compilation: Modern browsers often employ JIT compilers to optimize and compile JavaScript code for faster execution. This involves analyzing the code's behavior during execution and generating machine code for performance-critical parts.
// Optimization: Browsers may apply various optimization techniques such as inlining functions, loop unrolling, and dead code elimination to improve performance.
// Execution Context:

// JavaScript code is executed within execution contexts, which include the global context and function contexts. Each context maintains its own variable environment and reference to the outer lexical environment.
// Manipulating the DOM:

// As JavaScript executes, it can interact with the DOM and CSSOM, modifying their structure and styles.
// Rendering:

// The browser combines the updated DOM and CSSOM to create the Render Tree.
// Layout: The browser calculates the position and size of each element in the Render Tree.
// Painting: The browser paints the pixels on the screen according to the layout.
// Reflow and Repaint:

// Changes to the DOM or CSSOM may trigger reflow (recalculating layout) and repaint (updating pixels) operations, impacting performance.
// UI Updates:

// As the Render Tree changes, the browser updates the UI accordingly, reflecting any changes made by JavaScript.




// 7.Function currying ?

//https://www.linkedin.com/pulse/what-currying-javascript-arjunan-k/

// Function currying is a technique used in functional programming where a function with multiple parameters is converted into a
// sequence of nested functions, each taking a single parameter. This allows you to create specialized versions of the original
// function by partially applying arguments.

// /At its core, currying is a functional programming technique that involves breaking down a function that takes multiple arguments
//  into a series of functions that take one argument each. This creates a chain of functions, where each function returns another
//  function until the final result is achieved.

// Reusability: Currying breaks down a complex function into smaller, reusable units. Each curried function focuses on a single argument,
// making it easier to understand and maintain. These smaller functions can be reused across different parts of your codebase.

function add(num1) {
  return function (num2) {
    return function (num3) {
      return num1 + num2 + num3;
    };
  };
}

const R1 = add(5);
console.log(R1); //5
const R2 = add(10);
console.log(R1); //15
const R3 = add(5);
console.log(R1); //20




// 8. "useStrict"

//Many features introduced in newer versions of JavaScript are enabled by default in strict mode.

//It enforces stricter parsing and error handling on the code at runtime. It also helps you write cleaner code and catch errors
//and bugs that might otherwise go unnoticed.

// Strict mode makes it easier to write "secure" JavaScript.

// Strict mode changes previously accepted "bad syntax" into real errors.

// As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw
// an error, making it impossible to accidentally create a global variable.

// In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.

// In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable,
//  or a non-existing object, will throw an error.

// 9. output "3-1" ? a

//Ans=2
// In JavaScript, when you perform arithmetic operations involving strings and numbers, the JavaScript engine attempts to coerce the
//string into a number before performing the operation.

// So, "3" - 1 will result in the string "3" being coerced into a number, and then the subtraction operation will be performed.

// 10.what is coercion ?

//Coercion in JavaScript refers to the process of automatically converting values from one data type to another when needed



// 11.Closures and usescase?

function Counter() {
  for (let i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("hello world");
}

Counter();

// Encapsulation:
// Closures allow for the creation of private variables and functions. By enclosing variables and functions within a closure, you can
// control access to them and prevent them from being modified by external code.

// Data Hiding:

// Closures enable data hiding by keeping variables inaccessible from the outside world. This helps prevent unintended modifications
//  and ensures the integrity of the data.

// Maintaining State:

// Closures allow functions to retain their state across multiple calls. This is particularly useful for implementing functions that
// need to remember previous states or configurations.

// Callback Functions:

// Closures are commonly used in JavaScript to create callback functions. A closure can capture the surrounding context, including
// variables and functions, and pass them to another function for later execution. This is a powerful feature for implementing
// asynchronous behavior and event handling.



// 12. output 8>3>2 ?

// The result of true is coerced to the number 1 when compared to 2. This happens because JavaScript converts true to 1 and false to 0
// when used in arithmetic operations.

// 13.Hoisting ?

//In JavaScript, hoisting is a mechanism where variable and function declarations are moved to the top of their containing scope
// during the compilation phase, before the code is executed.


// 14.callback , Promises , and async await

// Callback:

// Callbacks are functions passed as arguments to other functions, to be executed later upon completion of an asynchronous operation.
// They were the traditional way of handling asynchronous code in JavaScript before Promises and Async/Await were introduced.
// Callbacks can lead to callback hell or pyramid of doom, where nested callbacks make code difficult to read and maintain.
// Error handling can be challenging, especially when dealing with multiple nested callbacks.

function fetchData(callback) {
  setTimeout(function () {
    callback("Data fetched successfully");
  }, 1000);
}

fetchData(function (result) {
  console.log(result);
});

// Promises:

new Promise((resolve, reject) => {
  resolve("ok");
})
  .then((result) => {
    throw new Error("Whoops!"); // rejects the promise
  })
  .catch(alert); // Error: Whoops!

// Promises provide a more structured way of handling asynchronous operations and represent a value that might be available now,
//  in the future, or never.

// Promises have methods like then() and catch() for handling success and error cases respectively, making the code more readable
//  and avoiding callback hell.

// Promises support chaining, allowing multiple asynchronous operations to be sequenced easily.
// Error handling is simplified with the use of the catch() method.

//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// Async/Await:

// Async/Await is built on top of Promises and provides a more synchronous-looking syntax for writing asynchronous code.
// The async keyword is used to define a function as asynchronous, and the await keyword is used to wait for a Promise to resolve before proceeding with the execution.
// Async/Await simplifies error handling using standard try/catch blocks.
// It makes asynchronous code more readable and easier to reason about compared to both callbacks and Promises.

async function fetchData() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Data fetched successfully");
    }, 1000);
  });
}

async function processData() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

processData();

// 15. what are generactions in js ?

// In JavaScript, generators are a feature introduced in ECMAScript 6 (ES6) that provide a new way to define functions capable
//  of pausing and resuming their execution. They allow you to control the flow of execution explicitly, enabling the creation
//  of iterators with custom iteration behavior.

function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = generateNumbers();

console.log(generator.next()); // Output: { value: 1, done: false }
console.log(generator.next()); // Output: { value: 2, done: false }
console.log(generator.next()); // Output: { value: 3, done: false }
console.log(generator.next()); // Output: { value: undefined, done: true }



// 16.PreventDefault() in forms ?

//In JavaScript, when you're working with HTML forms and handling form submissions using event listeners, the preventDefault()
//method is often used to prevent the default behavior of the form submission from occurring.

// Preventing Page Reloads:

// By default, when a form is submitted, the browser sends a request to the server and reloads the page to display the response.
// This behavior is undesirable in many cases, especially in single-page applications (SPAs) where you want to handle form submissions
// asynchronously without reloading the entire page

// With e.preventDefault(), you can intercept the form submission event and execute custom logic before submitting the form data.


// 17.render() in React ?

//In React.js, the render() method is a fundamental part of class components. It is responsible for rendering the component's UI
// (User Interface) based on its current state and props. The render() method returns a React element, which describes what should be
// displayed on the screen.


// Reconciliation:
// React compares the output of the render() method with the previously rendered UI to determine what changes need to be applied to the DOM.
// React uses a process called reconciliation to efficiently update the DOM only with the parts of the UI that have changed, minimizing
// unnecessary re-renders and improving performance.


// 18.what happen when we update the state directly ?

// In React, updating the state directly by directly modifying the state object (i.e., mutating state) is not recommended and can
// lead to unpredictable behavior and bugs. This is because React relies on immutable state and shallow comparisons to determine when
// to re-render components efficiently.

// When you update the state directly, React doesn't detect the change, and therefore, it doesn't trigger a re-render of the component.
// This can result in the UI not reflecting the updated state, leading to inconsistencies between the component's internal state and the
// rendered output.

// GPT =>https://chat.openai.com/c/ba9b2f93-99c5-4366-899a-a2e9d4fa9f2a


// 19.React drawbacks ?

// Backward Compatibility Issues:

// React occasionally introduces breaking changes in major releases, which can require updates to existing codebases. Managing
// backward compatibility and upgrading to newer versions of React may require effort and thorough testing


// Performance Overhead:

// React's virtual DOM and reconciliation algorithm provide efficient rendering and updates, but there can still be performance overhead,
//  especially for complex applications with deep component trees or frequent re-renders. Careful optimization may be necessary to avoid
//  performance issues.


// 20.ClassComponents vs Functional components ?

// Functional components are the simpler type of components in React. They’re basically JavaScript functions that return
//  JSX (which is like HTML).

//  Class components are a bit more complex. They’re based on ES6 classes and extend from React.Component



// 21.props vs state

// : Props are immutable and passed from parent to child, while state is mutable and local to the component.
// Ownership: Props are owned by the parent component and passed down to children, while state is owned and
//  managed by the component itself

// 22.React lifecycle methods

// A component's lifecycle has three main phases: the Mounting Phase, the Updating Phase, and the Unmounting Phase.

// Mounting
// The constructor() lifecycle method
// The constructor() method is called when the component is first created. You use it to initialize the component's
// state and bind methods to the component's instance

// In this example, the constructor() method sets the initial state of the component to an object with a count property set to 0,
// and binds the handleClick method to the component's instance.

// The render() lifecycle method
// The render() method is responsible for generating the component's virtual DOM representation based on its current props
//  and state. It is called every time the component needs to be re-rendered, either because its props or state have changed,
//  or because a parent component has been re-rendered.

// The componentDidMount() lifecycle method
// The componentDidMount() method is called once the component has been mounted into the DOM. It is typically used to set up any
//  necessary event listeners or timers, perform any necessary API calls or data fetching, and perform other initialization tasks
//  that require access to the browser's DOM API.

// Updating:

//shouldComponentUpdate()
// In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React should continue with the rendering or not.

// The default value is true.

// The example below shows what happens when the shouldComponentUpdate() method returns false:</Updating>

//The render() method is of course called when a component gets updated, it has to re-render the HTML to the DOM, with the new changes.

//componentDidUpdate()

// When the component is mounting it is rendered with the favorite color "red".

// When the component has been mounted, a timer changes the state, and the color becomes "yellow".

// This action triggers the update phase, and since this component has a componentDidUpdate method, this method is executed and writes a message in the empty DIV element:

// Unmounting:
// The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.

// React has only one built-in method that gets called when a component is unmounted:

// componentWillUnmount()



// 23.Reducers ?

// Pure Functions:

// Reducers are pure functions, meaning they produce the same output for a given input and have no side effects.
//  They don't modify the current state directly; instead, they return a new state object.

// State Mutation:

// Reducers should never mutate the current state. Instead, they create a new state object by applying transformations to
//  the current state based on the action type.


// Immutable Updates:

// When updating nested objects or arrays in the state, reducers should use immutable update patterns to ensure that the original
// state remains unchanged. This typically involves creating shallow copies of nested objects or arrays and applying modifications
// to the copies.


//Simplified Syntax: immer provides a simple and intuitive API for working with immutable updates. Developers can write code that looks like it's directly mutating the state, but behind the scenes, immer ensures that the mutations are applied immutably.


// Copy-on-Write: Instead of directly modifying the original state, immer creates a draft copy of the state. 
// This draft can be freely mutated as if it were mutable, but the original state remains unchanged.


// Automatic Immutability: When working with nested objects or arrays, immer automatically handles creating shallow copies 
// of the nested structures when mutations are made. This ensures that only the parts of the state that are affected by the
//  update are copied, making the process more efficient.


// middleware :

// In Redux, middleware is software that provides a way to extend the functionality of Redux by intercepting actions before they
// reach the reducers. Middleware sits between the dispatching of an action and the point it reaches the reducer, allowing you to
//  execute custom logic, modify the action, or dispatch additional actions asynchronously.

// Common use cases for middleware include logging actions and state changes for debugging purposes, handling asynchronous actions like
// fetching data from an API, and intercepting actions to implement authorization or authentication checks.



// 24. can we have multiple redux store ?

// In Redux, it's technically possible to create multiple Redux stores in an application, but it's generally not recommended.
// The Redux library is designed around a single centralized store that holds the entire state of your application.
//  Having multiple stores can lead to complexity, synchronization issues, and decreased performance.

// Data Duplication:

// Having multiple stores can lead to data duplication and inconsistency across stores. Different parts of the application
//  may have their own copies of the same data, making it difficult to maintain and synchronize.

// 25.what do you mean by web accessibility ?

//Web accessibility refers to the practice of ensuring that websites and web applications are designed and developed in a
//  way that makes them usable by people with disabilities. The goal of web accessibility is to provide equal access and opportunity
//   to people of all abilities, including those with visual, auditory, motor, cognitive, and other disabilities.


// 26.Html tags and properities
// <div> => id class style

// 27.difference between async/Defer while loading the Script ?

// Both async and defer are attributes used when loading external JavaScript files (<script> tags) in HTML, but they serve different
// purposes and affect the way scripts are loaded and executed.

// Here's the difference between async and defer:

// async:
// When you add the async attribute to a <script> tag, it tells the browser to fetch the script asynchronously while continuing to
// parse the HTML document.The script will be downloaded in the background and executed as soon as it's available, regardless of whether
// the HTML parsing is complete.Multiple scripts with the async attribute may be downloaded simultaneously, but they will be executed
// in the order they finish downloading.Use async for scripts that can be executed independently and don't depend on other scripts or
// the DOM being fully parsed.

// <script src="script.js" async></script>

// defer:
// The defer attribute also tells the browser to download the script asynchronously, but it defers the execution of the script until after
// the HTML document has been fully parsed.Scripts with the defer attribute will be executed in the order they appear in the document,
// after the DOMContentLoaded event but before the load event.Unlike async, scripts with defer are guaranteed to execute in the
// order they appear in the document, and they will not block rendering of the page.
// Use defer for scripts that need to access and modify the DOM, or that depend on other scripts being loaded or executed.
// html

// <script src="script.js" defer></script>
// In summary, both async and defer allow you to load scripts asynchronously, but they differ in when the scripts are executed relative to
// the parsing and loading of the HTML document. Use async for independent scripts that can execute immediately, and use defer for scripts
// that depend on the DOM being fully parsed or on other scripts being loaded.

//If the async attribute is present, then the script will be executed asynchronously as soon as it downloads. If the async attribute
// is absent but the defer attribute is present, then the script is executed when the page has finished parsing

//async and defer both load JavaScript asynchronously without render blocking, but async executes as soon as possible and in no
//particular order while defer runs in sequence toward the end of the loading process, just before the DOMContentLoaded event.



// 28.difference b/w flex/grid in css ?

//Flexbox and CSS Grid are both powerful layout systems in CSS, each with its own strengths and use cases. Flexbox is best suited
// for one-dimensional layouts and flexible content, while CSS Grid is ideal for two-dimensional grid-based layouts with precise control
//over rows and columns. In many cases, you may use a combination of both Flexbox and CSS Grid to achieve the desired layout for
//your web projects.

// 29.difference b/w em /rem

//The rem unit represents the font size of the root element (<html>), which is typically defined in the browser's stylesheet.
//The em unit represents the font size of the element's parent element.

//30.what is the difference ways to make a webpage responsive ?

//Media queries allow you to apply CSS styles based on the characteristics of the device, such as screen width, height, and orientation
//(landscape or portrait).

//Fluid Layouts:
//Use percentage-based widths and flexible units like em and rem instead of fixed pixel values for elements such as containers,
//columns, and images.

//Flexible Images and Media:
//Set images and media (such as videos and iframes) to have a maximum width of 100% so that they scale down proportionally
//to fit within their container.

//  Viewport Meta Tag:
// Use the viewport meta tag (<meta name="viewport">) in the <head> section of your HTML to control the viewport behavior on mobile devices.
// Specify the viewport width, initial scale, and other properties to ensure proper rendering and scaling on mobile devices.
// Example:
// html
// Copy code
// <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

// CSS Grid and Flexbox:
// CSS Grid and Flexbox provide powerful layout tools that make it easier to create responsive designs.
// Use CSS Grid for two-dimensional layouts with rows and columns, and Flexbox for one-dimensional layouts with flexible containers and items.



//31 .when a response is sent from server to browser what gets loaded first? Html css or JS ?

//When a response is sent from the server to the browser, the order in which HTML, CSS, and JavaScript are loaded and parsed depends
//on how they are included in the HTML document and whether they are loaded synchronously or asynchronously.

// HTML:
// The HTML content of the webpage is typically loaded and parsed first by the browser. This includes the structure of the webpage,
//as well as any inline CSS or JavaScript included directly within the HTML document.The browser starts rendering the HTML content as
//soon as it's received, which means users can start seeing and interacting with the webpage before CSS and JavaScript have finished
// loading.

// CSS:
// CSS files referenced in the HTML document using <link> tags or <style> tags are loaded and parsed after the HTML content.
// CSS rules are applied to the HTML content as they are parsed, which means the webpage's appearance may change as CSS rules are applied.
// Blocking CSS (i.e., CSS that affects the rendering of the page) can delay the rendering of the page until the CSS is loaded and parsed.

// JavaScript:
// JavaScript files referenced in the HTML document using <script> tags are loaded and parsed after the HTML and CSS content.
// JavaScript execution can be synchronous or asynchronous depending on how it's included in the HTML document:
// Synchronous JavaScript blocks the parsing of the HTML document until the JavaScript file is loaded and executed, which can
// delay the rendering of the page.Asynchronous JavaScript allows the HTML parsing to continue while the JavaScript file is being
// downloaded and executed. This can improve page load performance by allowing non-blocking scripts to be loaded in parallel with
// other resources.In summary, HTML content is loaded and parsed first, followed by CSS and JavaScript. However, the rendering
// of the webpage may be affected by the loading and execution of CSS and JavaScript resources, especially if they are blocking or
// synchronous. It's important to optimize the loading and execution of CSS and JavaScript resources to ensure fast and efficient
// webpage rendering.



// 32.Uses of mixins ?

// Mixins are a feature in CSS preprocessors like Sass and Less that allow you to define reusable sets of styles and include them
// in multiple CSS rules or selectors. They offer a way to encapsulate and share common styles across your stylesheet, leading to
//  more modular and maintainable code.



// 33 .why functions are called first class citizens in js ?

//functions in JavaScript are first-class citizens because they can be treated like any other value, including being assigned
//to variables, passed as arguments, returned from functions, and stored in data structures. This flexibility enables a wide
// range of programming techniques and patterns, contributing to JavaScript's expressive and dynamic nature.

// Stored in Data Structures:
// Functions can be stored in data structures like arrays and objects, allowing them to be organized and manipulated alongside other values.
// javascript
// Copy code
// const functionsArray = [
//     function(a, b) { return a + b; },
//     function(a, b) { return a - b; }
// ];

// const result1 = functionsArray[0](3, 4); // Accessing and using functions stored i



// 34.what is pass by value and pass by reference ?

// Pass by Value:

// In pass by value, a copy of the actual value (primitive data types) is passed to the function. Changes made to the parameter
// inside the function do not affect the original value outside the function.
// Primitive data types such as numbers, strings, booleans, and null are passed by value.
// When a variable containing a primitive value is passed to a function, a new memory space is created for that value inside the function

function increment(x) {
  x++;
  console.log(x); // Output: 6
}

let num = 5;
increment(num); // Pass by value
console.log(num); // Output: 5 (original value is unchanged)

// Pass by Reference:

// In pass by reference, a reference (memory address) to the actual variable is passed to the function. Changes made to the parameter inside
//  the function affect the original value outside the function.
// Non-primitive data types such as objects and arrays are passed by reference.
// When a variable containing a reference to an object or array is passed to a function, both the original variable and the parameter
//  inside the function reference the same object or array in memory.

function changeProperty(obj) {
  obj.name = "John";
}

let person = { name: "Alice" };
changeProperty(person); // Pass by reference
console.log(person.name); // Output: 'John' (original value is changed)

//n summary, pass by value creates a copy of the value being passed, while pass by reference passes a reference to the original value.
//  Understanding the difference between pass by value and pass by reference is important for understanding how changes to function
//   parameters affect the original data in a program.


// 35.difference b/w await and yield
//The main difference is that generators use the yield keyword to pause and resume the execution of a function, whereas async/await
// uses the await keyword to pause and resume the execution of a function.



// 36.benefits of Arrow functions ?

//Concise Syntax:
// Arrow functions have a shorter and more concise syntax compared to traditional function expressions, especially for simple one-liner
// functions.

// Implicit Return:
// Arrow functions automatically return the value of the expression without needing to explicitly use the return keyword when the
// function body consists of a single statement.

// Lexical this Binding:
// Arrow functions do not have their own this context. Instead, they inherit this from the surrounding lexical context
// (enclosing function or global scope).

//37.difference between event bubbling and event capturing ?

// Event bubbling and event capturing are two different phases of the event propagation process in the Document Object Model (DOM) in
//  web browsers. They represent the order in which events are dispatched and handled when multiple elements are nested within each other.
//   Here's a summary of the differences between event bubbling and event capturing:

// Event Bubbling:

// In event bubbling, when an event occurs on a DOM element, the event is first captured and handled by the innermost element and
// then propagated up the DOM tree to its ancestors.
// This means that the event handlers of the outer elements are executed after the event has been handled by the inner elements.
// Event bubbling is the default behavior in most modern browsers.

// Event Capturing:

// In event capturing (also known as event trickling), the event is first captured by the outermost element and then propagated
// down the DOM tree to the target element.
// This means that the event handlers of the outer elements are executed before the event reaches the innermost element.
// Event capturing is less commonly used but can be explicitly enabled by setting the third parameter of the addEventListener()
// method to true.

// In summary, event bubbling propagates the event from the innermost element to the outermost element, while event capturing
// propagates the event from the outermost element to the innermost element. The choice between event bubbling and event capturing
// depends on the specific requirements of the application and how the event handlers are structured. Most of the time, event bubbling
// is used as it is more intuitive and widely supported. However, event capturing can be useful in certain scenarios, such as event
// delegation or intercepting events before they reach their targets.


// 38.what do you mean by functional setState ?

// Functional setState is a pattern used in React for updating state that relies on the current state to compute the next state.
// Instead of passing an object directly to setState, you provide a function that receives the previous state as an argument and
// returns the new state. This pattern ensures that state updates are applied correctly, especially in scenarios where multiple
// state updates may occur asynchronously.

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // Using functional setState to increment the count
  const increment = () => {
    setCount((prevCount) => prevCount + 1); // prevCount is the previous state
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;



// 39.How do you decide when to use pure components ?

// Deciding when to use pure components in React depends on the specific requirements and performance considerations of your application.
//  Pure components are a type of React component that implements a performance optimization by implementing a shouldComponentUpdate
//  method that performs a shallow comparison of props and state to determine whether the component should re-render.

// Component Renders Frequently:
// If a component renders frequently, especially in response to frequent updates to its props or state, using a pure component can
//  help improve performance by reducing unnecessary re-renders.
// Pure components prevent re-rendering when props or state haven't changed, resulting in fewer DOM updates and better overall performance.

// Props or State Are Immutable:
// Pure components work best when props or state are immutable or undergo shallow changes. Immutable data structures, such
// as those provided by libraries like Immutable.js or Immer, ensure that props and state are compared by reference, making
// shallow comparisons more efficient.

// Performance Optimization is Needed:
// If your application experiences performance bottlenecks related to excessive re-renders, using pure components can be an effective
// optimization strategy.



// 40.code splitting ?

//Code splitting is a technique where we split our code into various bundles which can then be loaded on demand or in parallel.
//It allows you to split your JavaScript bundle into smaller chunks. With code splitting, you can only load the code that is
//needed in a particular context, reducing the initial load time and improving the overall user experience.



// 41.what happens if we call set State in render() ?

//Calling setState directly within the render method in React can lead to unexpected behavior and potential performance issues.
// This is because updating state triggers a re-render of the component, and calling setState within render creates a recursive loop
//  where the component continuously re-renders.



// 41.what is context Api and its uses ?

//The Context API is a feature in React that provides a way to pass data through the component tree without having to manually pass
// props down at every level. It allows you to share data between components that are nested at different levels of the component
//hierarchy.



// 42.error boundries in React ?

//Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors,
// and display a fallback UI instead of crashing the entire component tree. They are used to gracefully handle errors that occur
//  during rendering, in lifecycle methods, or in the constructors of any component below them in the hierarchy.



// 43.what are the semantic elements and how it is useful ?

// A semantic element clearly describes its meaning to both the browser and the developer. Examples of non-semantic elements:
{
  /* <div> and <span> - Tells nothing about its content. Examples of semantic elements: <form> , <table> , and <article> - Clearly 
  defines its content. */
}

//Semantic elements in HTML are elements that provide meaning and structure to the content of a webpage, making it more accessible
//to both users and search engines

// 44.what do you mean by request in lifecycle ?

//componentDidMount and componentDidUpdate

//the "request" phase in the component's lifecycle refers to the point in time when the component is fetching data from an external
// source, typically during the mounting or updating phases. The componentDidMount and componentDidUpdate lifecycle methods are commonly
//  used to initiate requests for data, ensuring that the component has been mounted or updated before fetching data and updating its
//  state accordingly.

//Mounting Phase:
// During the mounting phase, the component is being created and inserted into the DOM for the first time.
// This phase includes the constructor, render, and componentDidMount lifecycle methods.
// The componentDidMount method is commonly used to initiate requests for data from external sources, as it is called after
// the component has been mounted and rendered on the screen.

// Updating Phase:
// During the updating phase, the component is re-rendered due to changes in its props or state.
// This phase includes the shouldComponentUpdate, render, and componentDidUpdate lifecycle methods.
// The componentDidUpdate method can also be used to initiate requests for data based on changes in props or state, although
// care should be taken to avoid infinite loops by updating state conditionally.

// 45.How does the browsers understand the javascript code ??

// https://medium.com/@mustafa.abdelmogoud/how-the-browsers-understand-javascript-d9699dced89b

// 46.what is the uses of preconnect in css ?

// The preconnect link relation in CSS is used to instruct the browser to establish early connections to the specified origin,
// even before the browser knows that it will need to fetch resources from that origin. This can help reduce the latency when
// fetching resources, such as CSS files, JavaScript files, fonts, or images, from third-party domains or CDNs.

{
  /* <link rel="preconnect" href="https://example.com"> */
}

// This tells the browser to preconnect to the origin https://example.com, allowing it to establish connections early and optimize
//  resource fetching from that origin.

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <!-- Preconnect to Google Fonts CDN -->
//   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// </head>

// We have added a <link> element in the HTML <head> section with rel="preconnect" and href="https://fonts.gstatic.com".
// This tells the browser to establish an early connection to Google Fonts CDN.
// Additionally, we have specified crossorigin attribute to handle cross-origin requests properly.
// By preconnecting to the Google Fonts CDN, the browser can establish early connections to the CDN server, reducing
// the latency when fetching fonts or other resources from that CDN. This can lead to faster loading times and improved
// performance for the website.

// 47.specificity in css ?

//CSS specificity is a set of rules that determines which styles are applied to an element when multiple conflicting CSS
// rules target the same element. It defines the priority or weight of CSS selectors in determining which styles take precedence
// over others.

//   <style>
//     /* Rule 1: Specificity - ID Selector */
//     #content {
//       color: red;
//     }

//     /* Rule 2: Specificity - Class Selector */
//     .text-color {
//       color: blue;
//     }

//     /* Rule 3: Specificity - Type Selector */
//     p {
//       color: green;
//     }
//   </style>
// </head>
// <body>
//   <div id="content" class="text-color">
//     <p>This text should have green color.</p>
//   </div>
// </body>

//Based on the specificity calculation, the color of the text inside the <p> element should be green, as per Rule 3.
// This is because even though Rule 1 and Rule 2 have higher specificity (ID and class selectors, respectively), they target the
// <div> element (#content), not the <p> element itself.

// 48.Css selectors and css rules ?

// There are various types of CSS selectors, including:
// Type selectors: Select elements based on their HTML tag name (e.g., p, h1, div).
// Class selectors: Select elements based on their class attribute (e.g., .class-name).
// ID selectors: Select a single element based on its unique ID attribute (e.g., #id-name).
// Attribute selectors: Select elements based on their HTML attribute values (e.g., [attribute=value]).
// Pseudo-classes and pseudo-elements: Select elements based on their state or position within the document (e.g., :hover, ::before, ::after).

// For example, the following CSS rule sets the color of all <p> elements to red:
// p {
//   color: red;
// }
// Multiple CSS rules can be combined to style different elements within the same stylesheet or across multiple stylesheets.

// CSS selectors are patterns used to select HTML elements, while CSS rules define how selected elements should be styled.
// By combining selectors and declarations, you can apply styling to specific elements or groups of elements within your HTML
// documents, enhancing the visual presentation and layout of your web pages.

// 49.what are mixins ? how are js in css helpful ?

//Mixins are a feature in preprocessors like Sass or Less that allow you to define reusable blocks of CSS styles, which can
// then be included or "mixed in" to other CSS rules. They provide a way to encapsulate common styling patterns or sets of
// properties and reuse them across different elements or components in your stylesheet.

// $primary-color: #007bff;

// .button {
//   background-color: #{$primary-color}; // Using JavaScript interpolation to insert a variable
//   color: white;
//   padding: 10px;
//   &:hover {
//     background-color: darken(#{$primary-color}, 10%); // Using JavaScript functions (darken) within CSS
//   }
// }

// 50.what is scope chain in js ? how js engine reads scopechain ?

//The JavaScript engine reads the scope chain from the innermost scope to the outermost scope when resolving identifiers.
//  It first checks the local scope of the current function, then moves up the scope chain to the next outer scope, and
//  continues until it finds the identifier or reaches the global scope.

// When you reference a variable or function in your code, the JavaScript engine searches for that identifier within the scope chain to resolve it to a value.

// Here's how the scope chain works:

// Global Scope:

// The outermost scope in JavaScript is the global scope, which contains variables and functions declared outside of any function or block.
// All scripts and functions have access to the global scope, and it serves as the outermost scope in the scope chain.
// Local Scopes (Function Scope):

// Each time a function is called in JavaScript, a new scope is created for that function. This is known as a local scope or function scope.
// Inside the function, variables declared using var, let, or const are scoped to that function and are accessible only within that function's scope.
// When a variable or function is referenced within a function, the JavaScript engine first checks the local scope of that function to see if the identifier exists. If not found, it continues searching the outer scopes in the scope chain.
// Lexical Scoping (Static Scoping):

// JavaScript uses lexical scoping, which means that the scope chain is determined by the location of the code in the source code rather than the runtime execution context.
// When a function is defined, it captures the scope chain at the time of its definition. This means that the function retains access to variables and functions in its lexical scope, even if it is called from a different scope.
// The JavaScript engine reads the scope chain from the innermost scope to the outermost scope when resolving identifiers. It first checks the local scope of the current function, then moves up the scope chain to the next outer scope, and continues until it finds the identifier or reaches the global scope.

// 51.call apply bind ?

// In JavaScript, call, apply, and bind are methods that allow you to manipulate the this keyword and pass arguments to functions in
// different ways. Here's a brief definition of each:

// call:

// The call method is used to invoke a function with a specified this value and arguments provided individually.
// Syntax: function.call(thisArg, arg1, arg2, ...)
// The first argument (thisArg) is the value that should be passed as the this parameter when calling the function.
// Additional arguments are passed individually as arguments to the function.
// apply:

// The apply method is similar to call, but it accepts arguments as an array-like object rather than individually.
// Syntax: function.apply(thisArg, [argsArray])
// The first argument (thisArg) is the value that should be passed as the this parameter when calling the function.
// The second argument (argsArray) is an array-like object containing the arguments to be passed to the function.
// bind:

// The bind method is used to create a new function with a specified this value and initial arguments.
// Syntax: function.bind(thisArg, arg1, arg2, ...)
// The first argument (thisArg) is the value that should be bound to the this parameter when the new function is called.
// Additional arguments are partially applied to the function, meaning they are set as initial arguments for the new function.
// Here's a simple example to illustrate the usage of call, apply, and bind:

// javascript
// Copy code
const person = {
  name: "John",
  greet: function (message) {
    console.log(`${message}, ${this.name}!`);
  },
};

const anotherPerson = {
  name: "Alice",
};

// // Using call
person.greet.call(anotherPerson, "Hello");
// // Output: Hello, Alice!

// // Using apply
person.greet.apply(anotherPerson, ["Hi"]);
// // Output: Hi, Alice!

// // Using bind
const boundGreet = person.greet.bind(anotherPerson, "Hey");
boundGreet();
// Output: Hey, Alice!
// In this example, call and apply are used to invoke the greet method of the person object with anotherPerson as the value of this.
// bind is used to create a new function boundGreet where this is bound to anotherPerson and 'Hey' is partially applied as the initial
// argument.

// 52.major difference between es6 and es5 ?

//ES6 (ECMAScript 2015) introduced several significant improvements and new features to JavaScript compared to ES5 (ECMAScript 5), providing developers with more powerful and expressive tools for writing modern JavaScript code. Here are some of the major differences between ES6 and ES5:

// let and const Declarations:

// ES6 introduced let and const for declaring variables with block scope, replacing the function-scoped var keyword in ES5.
// let allows for block-scoped variables that can be reassigned, while const creates constants that cannot be reassigned.
// Arrow Functions:

// Arrow functions (=>) provide a more concise syntax for writing anonymous functions.
// They have a lexically scoped this, which means they inherit the this value from the surrounding code.
// Template Literals:

// Template literals allow for easier string interpolation and multiline strings using backticks (`).
// They support embedded expressions (${...}), making it simpler to include variables and expressions within strings.
// Destructuring Assignment:

// Destructuring assignment allows for extracting values from arrays or objects into distinct variables using a concise syntax.
// It simplifies working with complex data structures and function parameters.
// Default Parameters:

// ES6 supports default parameter values for function parameters, allowing you to specify default values that are used when arguments are omitted.
// Rest and Spread Operators:

// The rest (...) and spread (...) operators provide a convenient way to handle variable numbers of arguments in function parameters or to spread elements of arrays or objects.
// Classes:

// ES6 introduced class syntax for creating constructor functions and defining methods within a class.
// It provides a more familiar and concise syntax for working with object-oriented programming concepts in JavaScript.
// Promises:

// Promises are a built-in mechanism for handling asynchronous operations in JavaScript.
// They provide a cleaner alternative to callback-based asynchronous code, making it easier to manage and reason about asynchronous operations.
// Modules:

// ES6 introduced native support for modular JavaScript with the import and export keywords, allowing developers to organize code into reusable modules.
// Enhanced Object Literals:

// Object literals in ES6 support shorthand property and method definitions, computed property names, and the ability to define getters and setters.
// These are just some of the major differences between ES6 and ES5. ES6 brought many other features and improvements, making JavaScript more expressive, readable, and powerful for modern web development.

// 54.Encapsulaction in java script  ?

//Encapsulation is a fundamental concept in object-oriented programming that refers to the practice of hiding the internal details
//of an object and exposing only the necessary information to the outside world.

// Encapsulation can be achieved using two techniques:

// Using Closures
// Using Classes

// In JavaScript, closures are functions that have access to variables in their outer lexical environment, even after the outer
// function has returned. Private variables and methods can be created using closures.

function createCounter() {
  // Private variable
  let count = 0;

  // Private method
  function increment() {
    count++;
  }

  // Public method to access count value
  function getCount() {
    return count;
  }

  // Public method to increment count
  function increaseCount() {
    increment(); // Privileged method accessing private method increment
  }

  // Return an object with only public methods
  return {
    getCount: getCount,
    increaseCount: increaseCount,
  };
}

// Create a counter object
const counter = createCounter();

console.log(counter.getCount()); // Outputs: 0

counter.increaseCount();
console.log(counter.getCount()); // Outputs: 1

//increment() and count are still private because they're defined within the createCounter function scope.

// The increaseCount() method is a privileged method because it's defined within the same scope as increment() and count.

//  Therefore, it has access to these private members, even though it's returned from the outer scope and can be accessed externally.

// When you call counter.increaseCount(), it internally calls the private increment() method to increase the count.

// So, while you can't directly access private members from outside the scope where they're defined, you can create privileged

// methods that can access them. This way, you achieve encapsulation in JavaScript through closures.

// 55.how do you do error handling ?

// The try block contains the code that may potentially throw an error.
// If an error occurs within the try block, JavaScript stops executing the block and jumps to the catch block.
// The catch block contains the code to handle the error. It takes an error object as a parameter, which contains information about the error, including its message.
// If no error occurs within the try block, the catch block is skipped entirely.

try {
  // Attempt to execute code that may throw an error
  throw new Error("This is a custom error message.");
} catch (error) {
  // Handle the error
  console.error("An error occurred:", error.message);
} finally {
  // This block will always execute
  console.log("Cleanup code here.");
}
// Finally, the finally block executes, regardless of whether an error occurred or not, allowing you to perform any cleanup tasks.

// 56.promise.all Promise.race

// Behavior: Promise.all waits for all promises to resolve, while Promise.race resolves or
// rejects as soon as one of the promises resolves or rejects.

// Result: Promise.all returns an array of all resolved values, while Promise.race returns the value of the first
//  resolved promise (or the rejection reason of the first rejected promise).

//Promise.all is useful when you want to wait for all promises to resolve, and you need all their results. Promise.race,
//on the other hand, is useful when you want to respond as soon as any one of the promises resolves or rejects.

// If one of the promises provided to Promise.all is rejected, the entire Promise.all call will immediately reject with the
// rejection reason of the first promise that was rejected. It won't wait for the other promises to settle. This behavior is
// part of the specification of Promise.all

// 57.How promises are different form async and await ?

//Promises:
// Promises were introduced in ES6 (ECMAScript 2015) as a way to handle asynchronous operations more cleanly than using callbacks.
//  A Promise represents a value that may be available now, or in the future, or never.

// With promises, you typically create a new Promise object, and within its executor function, you perform an asynchronous operation.
// The Promise object has methods like .then() and .catch() to handle the resolved value or the rejection reason.

// Async/Await:
// Async/await is a more recent addition to JavaScript (introduced in ES8/ES2017) and provides a syntax for
// writing asynchronous code that looks synchronous. It's built on top of promises and provides a cleaner and more concise way
// to work with promises.

// The async keyword is used to define a function that returns a promise, and the await keyword is used within an
// async function to pause execution until a promise is resolved or rejected.

//Promises use .then() and .catch() methods to handle asynchronous operations, while async/await uses the async and await
//keywords directly within the code.

// 58.eslint ?

// ESLint is a static code analysis tool that checks your JavaScript code for common problems, such as syntax errors,
// formatting issues, code style violations, and potential bugs.

//ESLint is a popular static code analysis tool for JavaScript. It helps developers find and fix problems in their JavaScript code.
//ESLint statically analyzes your code to find issues related to syntax errors, code style, best practices, and potential bugs.

// 59.BOM ?

//The BOM allows JavaScript to “interact with” the browser.
//It provides access to various properties, methods, and events, allowing developers to control browser behavior, handle windows,
// manage cookies, manipulate URLs, and more

// 60.Null vs  undefined ?

// undefined usually means a variable has been declared but hasn't been assigned a value, or a function returns no value.
// null is used to explicitly indicate that a variable or object property holds no value.
// While undefined is automatically assigned by JavaScript, null needs to be explicitly assigned.
// null is often used to reset or clear a value, while undefined is more commonly seen as an unintentional absence of value.

console.log(5 == "5"); // true
console.log(null == undefined); // true
console.log(0 == false); // true

console.log(5 === "5"); // false
console.log(null === undefined); // false
console.log(0 === false); // false




// 61.difference between deepcopy and  shallow copy.?

// Shallow Copy	Deep Copy
// Shallow Copy stores the references of objects to the original memory address.
// Deep copy stores copies of the object’s value.

// Shallow Copy reflects changes made to the new/copied object in the original object.
// Deep copy doesn’t reflect changes made to the new/copied object in the original object.

// Shallow Copy stores the copy of the original object and points the references to the objects.
// 	Deep copy stores the copy of the original object and recursively copies the objects as well.

// A shallow copy is faster.
// Deep copy is comparatively slower.

// Shallow copy example in JavaScript
const original = { key: 'value', nested: [1, 2, 3] };
const shallowCopy = { ...original };

// Changing a nested value in the shallow copy affects the original
shallowCopy.nested[0] = 100;
console.log(original); // Output: { key: 'value', nested: [100, 2, 3] }


// Deep copy example in JavaScript
function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const original2 = { key: 'value', nested: [1, 2, 3] };
const deepCopyObj = deepCopy(original);

// Changing a nested value in the deep copy does not affect the original
deepCopyObj.nested[0] = 100;
console.log(original2); // Output: { key: 'value', nested: [1, 2, 3] }


// 62.can we update  state directely ?

// Mutability: React relies on immutability to efficiently detect changes in state and update the UI. 

//Performance: React uses a process called "reconciliation" to determine which parts of the UI need to be updated when state changes.
//  By updating state directly, you may prevent React from efficiently detecting these changes and optimizing the rendering process, 
//  leading to performance issues.



// 63.what is the uses of dangerouslySetInnerHTML ?

//dangerouslySetInnerHTML is a React attribute that allows you to set HTML directly into the DOM. It's called "dangerous" because 
//it exposes your application to Cross-Site Scripting (XSS) attacks if you're not careful.


//Security Concerns:
// It's important to use dangerouslySetInnerHTML with caution because it bypasses React's built-in 
// protections against XSS attacks. When using dangerouslySetInnerHTML, you're responsible for ensuring that 
// the HTML content you're rendering is safe and trusted.

//In summary, while dangerouslySetInnerHTML provides a way to render HTML content directly in React components, 
// it should be used sparingly and with caution due to the security risks associated with XSS attacks. Always prioritize
//  security when working with user input or third-party content.



// 64.Redux is a predictable state container for JavaScript applications, primarily used with frameworks like React for managing application state. Here's a high-level overview of how Redux works:

// Store: The Redux store is a single JavaScript object that represents the entire state of your application. It holds the application state and provides methods to access and update it.

// Actions: Actions are plain JavaScript objects that represent events or user actions that occur in your application. They have a type property that describes the action and may include additional data.

// Reducers: Reducers are pure functions that specify how the application's state changes in response to actions. Each reducer takes the current state and an action as arguments and returns the new state based on the action.

// Dispatch: The dispatch function is used to dispatch actions to the Redux store. When an action is dispatched, Redux calls the appropriate reducer to update the state based on the action.

// Selectors: Selectors are functions used to extract specific pieces of data from the Redux store. They provide a way to access and compute derived state from the store.