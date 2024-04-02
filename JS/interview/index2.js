//65 what is the entry point of the React application ?

//In a typical React application created using tools like Create React App or a custom webpack configuration,
// the entry point of the application is usually the file specified in the index.js

// index.js or index.jsx: This file serves as the entry point of the React application. It's where the ReactDOM library is
// typically used to render the root component of the application into the DOM.

import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Import the root component of your application

ReactDOM.render(<App />, document.getElementById("root"));

//ReactDOM.render() is used to render the <App /> component (or whatever your root component is) into the HTML element with the
//  ID of 'root'. This is typically where your React application will be mounted in the HTML document.

//index.html: The index.html file is the main HTML file of your application. It typically contains a <div> element with an ID of
//'root', which serves as the mount point for your React application.

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>React App</title>
// </head>
// <body>
//   <div id="root"></div> <!-- This is the mount point for your React application -->
// </body>
// </html>

// When you start your React application, the JavaScript code in index.js or index.jsx is executed first.
//  This code typically imports the root component of your application and renders it into the HTML element with the ID of 'root'.
//  From there, React takes over and manages the rendering and updating of your application based on changes to state and props.

// 66.Hoc ? uses ?

//HOC stands for Higher-Order Component in React. It's a pattern where a component takes another component as
//an argument and returns a new component with extended functionality.

// Authentication: Creating an HOC that checks if a user is authenticated before rendering a component.
// If the user is not authenticated, the HOC redirects them to a login page.

// Authorization: Implementing an HOC that checks if a user has permission to access a certain feature or
//  page before rendering it. If the user does not have permission, the HOC can redirect them to an error page or
//   display a message.

// 67.React optimization ?

//Code Splitting: Break your application into smaller chunks and load them asynchronously using techniques like React.lazy
//and dynamic imports. This reduces the initial bundle size and improves loading times, especially for larger applications.

//Lazy Loading Routes: Load components only when they are needed, particularly for routes that are not frequently visited.
//This reduces the initial load time of your application.

//Bundle Analysis: Analyze your bundle size using tools like webpack-bundle-analyzer to identify large dependencies or unnecessary code.
//Optimize your bundle by removing unused dependencies and splitting large chunks into smaller ones.

//Code Optimization: Write efficient and performant code. Avoid unnecessary re-renders by using PureComponent or React.memo
//for functional components

//Memoization: Memoize expensive computations using useMemo or useCallback hooks to prevent them from being recalculated on every render.
// This can improve performance, especially for complex components or computations.

//Caching: Implement client-side caching using techniques like memoization, browser caching, or service workers to store data locally
//and reduce the number of requests to the server.

// 68.explain controlled and Uncontrolled components ?

//In React, components can be categorized as controlled or uncontrolled based on how they manage their internal state and interact
//with user input.

// Controlled components are React components whose state is controlled entirely by React. This means that the component's state
// is managed by React, and any changes to the component's state are reflected in the component's render output.
// he component's render output depends on this state. User input, such as form inputs or checkboxes, is controlled by
// React through event handlers, and any changes to user input are reflected in the component's state.

// Uncontrolled components are React components whose state is managed by the DOM itself, rather than by React.
//  In uncontrolled components, the component's state is typically managed by the DOM using refs, and React does
//  not control the component's state directly.

// 69.How to avoid the mutating an array when performing an operation ?

// Use array methods like map, filter, reduce, concat, slice, spread operator (...), and Array.from which return
//  a new array instead of mutating the original array. This ensures that the original array remains unchanged.

// 70.SPA vs MPA ?

//Key Differences:

// Navigation: SPAs use client-side routing and dynamic content loading to navigate between views, while MPAs rely on server-side
//  routing and full page reloads.

// User Experience: SPAs offer a more seamless and interactive user experience with faster page transitions and smoother interactions,
// while MPAs provide a traditional web browsing experience with full page reloads.

// Architecture: SPAs are built around a single HTML page that is dynamically updated, whereas MPAs consist of multiple HTML pages
// served by the server.

// Both SPA and MPA have their advantages and disadvantages, and the choice between them depends on factors like application
// complexity, performance requirements, and development preferences. SPAs are often preferred for modern web applications that
//  require a highly interactive and responsive user experience, while MPAs are still commonly used for simpler websites and applications.

// 71.why reducer is called pure function ?

// Immutable Inputs: A pure function treats its input parameters as immutable and does not modify them. Instead,
// it creates and returns new values based on the input parameters.

//because it adheres to the principles of functional programming a

//Deterministic: A pure function always produces the same output for the same input. It does not depend on any external state or
// side effects, so its behavior is predictable and consistent.

// 72. [..."murali"] ??

// The string "murali" is an iterable, meaning it can be iterated over.
// The spread syntax ... is used to spread the characters of the string into individual elements.
// So, the expression [..."murali"] results in the array ["m", "u", "r", "a", "l", "i"],

// {} === {}

const obj1 = {};
const obj2 = {};

console.log(obj1 === obj2); // Output will be false

// In JavaScript, when you use the strict equality operator (===) to compare two objects, it checks whether the two
// objects refer to the exact same location in memory, not just whether they have the same properties and values.

// Even though obj1 and obj2 are both empty objects and appear to be the same, they are distinct objects stored in different memory
// locations. Therefore, obj1 === obj2 will return false.

// {}=={}?
// when you use {} twice with the loose equality operator like this: {} == {}, both {} represent two different objects,
// and since they are stored in different memory locations, the result of the comparison will be false.

//iterate over a string ?
const str = "Hello";

for (const char of str) {
  console.log(char);
}

// 73.console.log(typeof Array); // Output will be "function"

//In JavaScript, Array is a built-in constructor function used to create arrays

// console.log(typeof null);  Output will be "object"

//console.log(typeof undefined); // Output will be "undefined"

// 74.implement the pure components in Hooks ?

//React.memo() and useMemo() can help optimize functional components by preventing unnecessary re-renders,
// similar to the behavior of pure components in class components. However, it's important to note that these
// optimizations should be applied judiciously, as memoization can also introduce overhead and should only be used when necessary.

// 75. why unmounting of the component is needed ?

//unmounting of a component is necessary to manage the lifecycle of components effectively, optimize performance,
//and ensure proper memory management in your React application.

// The useEffect hook provides a clean-up function that is called when a component is unmounted, allowing you to clean up
//  any resources or subscriptions.

// Conditional Rendering: When a component should only be rendered under certain conditions, you may need to unmount it when those
// conditions are no longer met

// Optimizing Performance: Unmounting components can help optimize performance by reducing the number of components rendered
//  on the screen at any given time.

// 76.what is rest and spread operactor ?

// The rest and spread operators are both introduced in ES6 (ECMAScript 2015) and are denoted by the ellipsis (...) syntax.
///While they share a similar syntax, they serve different purposes.

// Rest Operator (...)
// The rest operator allows you to represent an indefinite number of arguments as an array in function parameter
//definitions or to capture the remaining elements of an array or iterable object.

function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10

// Spread Operator (...)
// The spread operator, on the other hand, allows an iterable (like an array) to be expanded into individual elements.
// It's commonly used in array literals, function calls, and object literals.

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log(arr2); // Output: [1, 2, 3, 4, 5, 6]

// 77.whare  you will get perform an api call if you need to get the data before componentDidMount ?

//If you need to fetch data before the component mounts or renders, you typically do this outside of the
// component itself. One common approach is to fetch the data in the parent component and then pass it down
// to the child component as props. This way, the child component can access the data as soon as it mounts.

// 78.useMemo and React.memo() difference ?

// useMemo
// useMemo is a hook used in functional components to memoize the result of a function. It is typically
// used to optimize expensive calculations or computations by caching the result and reusing it when the
// dependencies (specified as the second argument) remain unchanged. It returns a memoized value.

// React.memo()
// React.memo() is a higher-order component used to memoize the rendered output of a functional component.
//  It works similarly to PureComponent in class components by preventing unnecessary re-renders when
//  the props of a component haven't changed. It returns a memoized component.

// 79.can you tell me  How do you plan the design architexture ?

// understand Requirements: Start by thoroughly understanding the requirements and goals of the project. This includes functional requirements (what the system should do) as well as non-functional requirements (performance, scalability, security, etc.).

// Identify Components: Break down the system into smaller components or modules based on the requirements. Identify the major functionalities or features of the system and define separate components for each.

// Define Interfaces: Clearly define the interfaces and interactions between different components. Specify how each component will communicate with other components and define the inputs and outputs of each component.

// Choose Architecture Style: Select an appropriate architecture style that best fits the project requirements and goals. Common architecture styles include layered architecture, microservices architecture, event-driven architecture, and domain-driven design.

// Decide on Technology Stack: Choose the technologies and tools that will be used to implement the architecture. Consider factors such as programming languages, frameworks, libraries, databases, and third-party services.

// Consider Scalability and Performance: Design the architecture with scalability and performance in mind. Consider how the system will handle increasing loads over time and design for scalability by using techniques such as load balancing, caching, and horizontal scaling.

// Address Security Concerns: Implement security measures throughout the architecture to protect against common security threats such as data breaches, injection attacks, and authentication vulnerabilities. Use techniques such as encryption, access control, and secure coding practices.

// Plan for Testing and Quality Assurance: Define a testing strategy and plan for testing each component of the architecture. Include unit testing, integration testing, and end-to-end testing in the testing plan, and consider using tools and frameworks for automated testing.

// Document the Architecture: Document the architecture thoroughly to provide a clear understanding of the system for developers, stakeholders, and future maintainers. Include diagrams, descriptions, and rationale for design decisions in the documentation.

// Iterate and Refine: Architecture is not set in stone and may need to evolve over time as the project progresses and requirements change. Be prepared to iterate on the architecture and make refinements based on feedback, lessons learned, and evolving requirements.

// 80.How the total workflow of your application works right from pushing the code to repository ?

// Development:

// Developers write and modify code locally on their machines using code editors or integrated development environments (IDEs).
// They make changes to the codebase, fix bugs, and implement new features as required by the project.
// Version Control:

// Once developers are satisfied with their changes, they commit their code to a version control system (VCS) like Git.
// Before committing, developers review their changes and write descriptive commit messages explaining the purpose of the changes.
// Pull Request (PR):

// If the project follows a collaborative development model, developers may create a pull request (PR) to propose their changes for review.
// The PR includes details about the changes, and other developers or team members review the code, provide feedback, and suggest improvements.
// The PR may undergo multiple rounds of review and revisions before it's ready to be merged into the main branch.
// Continuous Integration (CI):

// As part of the PR process, or immediately after a commit is pushed to the repository, CI tools like Jenkins, Travis CI, or GitHub Actions automatically trigger build and test processes.
// These CI pipelines compile the code, run automated tests (unit tests, integration tests, etc.), and perform static code analysis to ensure code quality.
// CI pipelines provide immediate feedback to developers about the health and quality of the codebase.
// Deployment:

// Once the changes have been reviewed, approved, and merged into the main branch, they are ready to be deployed to the production environment.
// Depending on the project's deployment strategy, the deployment may be triggered manually by a developer or automatically through a continuous deployment (CD) pipeline.
// The deployment process may involve additional testing in staging or pre-production environments to ensure that the changes work as expected in a production-like environment.
// Finally, the changes are deployed to the production environment, making them available to end-users.
// Monitoring and Maintenance:

// After deployment, the application is monitored for performance, availability, and errors using monitoring tools like Prometheus, Grafana, or New Relic.
// Developers and operations teams monitor the application's health and address any issues that arise, such as performance bottlenecks or system failures.
// The development cycle continues with new features and bug fixes, and the process repeats.

// 81.meta tags

{
  /* <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Example Page</title>
    <meta name="description" content="This is an example page demonstrating the use of meta tags.">
    <meta name="keywords" content="meta tags, HTML, SEO, search engine optimization">
    <meta name="author" content="John Doe">
    <meta name="robots" content="index, follow">
    <meta property="og:title" content="Example Page">
    <meta property="og:description" content="This is an example page demonstrating the use of meta tags.">
    <meta property="og:image" content="https://example.com/image.jpg">
    <meta property="og:url" content="https://example.com">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="@example">
    <meta name="twitter:title" content="Example Page">
    <meta name="twitter:description" content="This is an example page demonstrating the use of meta tags.">
    <meta name="twitter:image" content="https://example.com/image.jpg">
</head> */
}

// The <meta charset="UTF-8"> tag specifies the character encoding of the document.
// The <meta name="viewport" content="width=device-width, initial-scale=1.0"> tag sets the viewport properties for responsive design.
// The <meta name="description"> and <meta name="keywords"> tags provide information for search engines.
// The <meta name="author"> tag specifies the author of the page.
// The <meta name="robots"> tag instructs search engine crawlers on how to index the page.
// The Open Graph (<meta property="og:...">) and Twitter Card (<meta name="twitter:...">) tags provide metadata for social media sharing, including titles, descriptions, images, and URLs.

// 82.http request life cycle ?

// Client Sends Request: When you type a website URL into your browser and hit enter, your browser sends a request to the server where the
// website is hosted.

// DNS Lookup: Your browser needs to find the server's address. It does this by looking up the website's domain name in the DNS
// (Domain Name System) to get the server's IP address.

// TCP Connection Establishment: Once your browser knows the server's address, it establishes a connection with the server using TCP
// (Transmission Control Protocol). Think of this like making a phone call and waiting for the other end to pick up.

// HTTP Request Transmission: Your browser sends the actual request (like asking for a specific page) to the server over the established
// connection.

// Server Processing: The server receives your request and figures out what you're asking for. It might need to fetch data from a
//  database, run some code, or simply fetch a file.

// HTTP Response Generation: After figuring out what you want, the server creates a response. This includes the content you requested
// (like a web page), along with some other information like whether the request was successful or not.

// HTTP Response Transmission: The server sends this response back to your browser over the same connection.

// Client Receives Response: Your browser receives the response and starts processing it. It looks at the response code
// to see if everything went well (like getting a "200 OK" response) or if there was an error (like a "404 Not Found" error).

// Connection Closure: Depending on the server settings, the connection might be closed after the response is sent. If not,
//  it might be kept open for a short time in case your browser needs to request more things from the same server.

// 83. explain css box model ? css specificity ? css sprite ? flexbox?

// CSS Box Model:

// The CSS Box Model is a fundamental concept in CSS (Cascading Style Sheets) that describes the layout and rendering of elements on a web page.
// Every HTML element is considered a box, and the box model describes how these boxes are structured and sized.
// It consists of four main components: content, padding, border, and margin.
// Content: The actual content of the element, such as text, images, or other HTML elements.
// Padding: The space between the content and the element's border. It's transparent by default but can be styled using CSS properties.
// Border: The border around the padding area. It can have a thickness, style, and color specified using CSS.
// Margin: The space outside the element's border. It creates space between the element and other elements on the page.
// These components combine to determine the total space an element occupies on the page.

// CSS Specificity:
// CSS Specificity is a set of rules used to determine which CSS styles are applied to an element when conflicting styles exist.
// Specificity is calculated based on the selectors used to target elements in CSS rules.
// It follows a hierarchy: Inline styles have the highest specificity, followed by IDs, classes, attributes, and elements.
// The more specific a selector is, the higher its specificity. For example, a selector targeting an ID (#example) is more specific than one targeting a class (.example).
// When conflicting styles exist, the browser applies the style with the highest specificity.

// CSS Sprite:

// CSS Sprite is a technique used to combine multiple images into a single image file and use CSS to display specific parts of the image as backgrounds for different elements.
// By combining images into a single file, CSS sprites reduce the number of HTTP requests needed to load a webpage, which can improve performance.
// Each individual image within the sprite is mapped to specific CSS properties (like background-position) to display the desired portion of the sprite for each element.
// CSS sprites are commonly used for icons, buttons, and other small graphical elements on web pages.

// Flexbox:

// Flexbox (Flexible Box Layout) is a layout model in CSS designed to create dynamic and responsive layouts with ease.
// It provides a more efficient way to distribute space among items in a container, even when their size is unknown or dynamic.
// Flexbox introduces two main concepts: flex containers and flex items.
// Flex Container: An element set to display: flex; becomes a flex container, and its child elements become flex items.
// Flex Items: The children of a flex container. They can be horizontally or vertically aligned, reordered, stretched, or shrunk based on flexible properties.
// Flexbox offers properties like justify-content, align-items, flex-grow, flex-shrink, and flex-basis to control the layout and behavior of flex items within a flex container.
// Flexbox is widely used for creating complex and responsive layouts in modern web design.

// 84.what is event bubbling how can we prevent it ?

// Event bubbling is a phenomenon in JavaScript where an event triggered on a specific element will "bubble up"
// through its ancestors in the DOM tree, triggering any event listeners attached to those ancestors.
// This means that if you have nested elements with event listeners, a click event on the innermost element
// will also trigger click events on its parent elements, propagating up the DOM tree until it reaches the
// root element (usually <html>).

// To prevent event bubbling, you can use the stopPropagation() method of the Event object.

<div id="outer" style="background-color: #f0f0f0; padding: 20px;">
  <div id="inner" style="background-color: #ccc; padding: 20px;">
    Click me
  </div>
</div>;

// Get the inner and outer elements
var inner = document.getElementById("inner");
var outer = document.getElementById("outer");

// Add event listener to the inner element
inner.addEventListener("click", function (event) {
  alert("Inner element clicked!");
  event.stopPropagation(); // Prevent event bubbling
});

// Add event listener to the outer element
outer.addEventListener("click", function () {
  alert("Outer element clicked!");
});

// In this example, clicking on the inner <div> element will trigger its click event listener, displaying an
// alert message. However, the event.stopPropagation() method prevents the click event from bubbling up to the
// outer <div> element, so the outer click event listener will not be triggered.

// 85.what is jsx how the browser understand the jsx ?

//SX (JavaScript XML) is a syntax extension for JavaScript, commonly used with React to describe what the UI
//  should look like. While browsers don't directly understand JSX, it's typically transpiled into regular
//  JavaScript using tools like Babel before being served to the browser.

// 86.why do we need keys in React ?

//  In React, the key attribute is used to uniquely identify elements in a list of components or elements.
// It's a special attribute that helps React identify which items have changed, are added, or are removed from a list.
//  Here are the main reasons why keys are important in React:

// Efficient Reconciliation:

// When React renders a list of elements or components, it needs a way to efficiently update the UI when the list changes.
// By providing a unique key for each item in the list, React can quickly identify which items have changed,
//been added, or been removed, without having to re-render the entire list.

// Optimizing Component Lifecycle Methods:

// React uses keys to determine whether a component should be re-rendered or not.
// When a component's key changes, React treats it as a new component instance. This allows React to efficiently update the
//  component without unmounting and remounting it, which can improve performance.

// 87.what is difference between React js and Next js ?

// React.js is a JavaScript library for building user interfaces, while Next.js is a React framework that adds features
// like server-side rendering, routing, static site generation, and API routes to facilitate building production-ready web
// applications. Depending on the requirements of your project, you may choose to use React.js alone or leverage the additional
//  features provided by Next.js.

// 88.Saas/css modules

//Sass:

// Sass (Syntactically Awesome Stylesheets) is a preprocessor scripting language that is interpreted into CSS.
// Sass extends the capabilities of CSS by providing features like variables, nesting, mixins, functions, and inheritance,
//  making it easier to write and maintain complex stylesheets.
// Sass allows you to write more concise and maintainable CSS code by enabling features such as nested selectors, reusable
// styles, and dynamic values.

/* styles.scss */
// $primary-color: #007bff;

// .button {
//     background-color: $primary-color;
//     color: white;
//     padding: 10px 20px;
// }

// CSS Modules:

// CSS Modules is a CSS styling approach that allows you to write modular and scoped CSS in your web applications.
// With CSS Modules, CSS files are treated as modular components, and classes are scoped locally to the component where they are defined.
// Each CSS class is automatically assigned a unique identifier (usually a hash) to prevent naming conflicts between different components.
// CSS Modules encourage a component-based approach to styling, where styles are tightly coupled with the components they style.

// CSS Modules focus on modular and scoped CSS at the component level, while Sass provides advanced features
// and enhancements to the CSS language, making it more powerful and expressive. Depending on the requirements
//  and preferences of your project, you may choose to use CSS Modules, Sass, or a combination of both.

// 89.can you tell me when to use functional and class components in React ?

// use functional components for simple, stateless UI components, and consider using class components for stateful
//  components or components requiring complex logic. However, with the introduction of hooks in React, functional
//  components with hooks have become the preferred approach for building components in most cases, as they offer
//   the benefits of both functional and class components.\

// 90.explain local stroage and session stroage cookies + lifecycle ?

// Local Storage:
// Data stored in Local Storage remains available even after the browser is closed and reopened.
//  It has no expiration date and can be accessed and manipulated using JavaScript.

// Session Storage:
//Data stored in Session Storage is available only for the duration of the page session.
// It is deleted when the user closes the browser tab or window and can be accessed and manipulated using JavaScript.

// Cookies:
// Cookies are small pieces of data stored in the browser. They are sent along with every HTTP request to the
// same domain from which they were set.

// 91.what is jwtand its advantages ?

// JWTs provide a secure, efficient, and flexible way of transmitting information between parties.
//  They enable stateless authentication, simplify the implementation of token-based authentication systems, a
//  nd offer advantages in terms of compactness, security, and versatility compared to traditional session-based
//  authentication mechanisms.

// 92.How to use JWT in out application ?

//Authentication:

// When a user logs in or signs up, the server generates a JWT containing information about the user, such as their user ID, username, role, and any other relevant data.
// The JWT is signed with a secret key known only to the server.
// Token Issuance:

// After generating the JWT, the server sends it back to the client as part of the authentication response, usually in the form of an HTTP response header or a JSON payload.
// Token Storage:

// The client (typically a web browser for web applications) stores the JWT securely. Common storage mechanisms include browser storage APIs such as localStorage or sessionStorage, or HTTP cookies with the Secure and HttpOnly flags set (for cookies).
// The client must ensure that the JWT is stored securely and cannot be accessed by malicious scripts.
// Token Verification:

// For subsequent requests to protected resources, the client includes the JWT in the request, typically in the form of an HTTP header (e.g., Authorization header with the value "Bearer <token>").
// When the server receives a request with a JWT, it verifies the token's signature using the secret key.
// If the signature is valid, the server extracts the user information from the JWT payload and proceeds with the request.
// If the signature is invalid or the token has expired, the server rejects the request with an appropriate error response.
// Authorization:

// Once the server has verified the JWT, it uses the user information contained within the token to determine whether the user is authorized to access the requested resource.
// This may involve checking the user's role, permissions, or other authorization rules defined by the application.
// Token Expiration and Renewal:

// JWTs typically have an expiration time (specified in the "exp" claim) to mitigate the risk of token misuse if it is compromised.
// When a JWT expires, the client must request a new JWT by authenticating again with the server. This helps to ensure that only valid, recently authenticated users can access protected resources.

// 93.what are the security measures while building the application ?

// Input Validation:

// Validate and sanitize all input received from users, including form data, URL parameters, and HTTP headers,
//  to prevent injection attacks such as SQL injection, XSS (Cross-Site Scripting), and CSRF (Cross-Site Request Forgery).
// Authentication and Authorization:

// Implement strong authentication mechanisms, such as multi-factor authentication (MFA) or OAuth, to verify the identity
//  of users accessing your application.
// Enforce proper authorization controls to ensure that users only have access to resources and functionalities they are
//  authorized to use based on their roles and permissions.

// Session Management:

// Use secure session management techniques to prevent session hijacking and fixation attacks. Generate unique session identifiers,
// enforce session expiration policies, and invalidate sessions after logout or inactivity.

//Error Handling:

// Implement robust error handling mechanisms to provide meaningful error messages to users without exposing sensitive
// information or internal system details that could be exploited by attackers.

// 94.difference b/w DOM and BOM ?

// the DOM tree consists of nodes representing elements, attributes, text, and other document components,
// each with properties and methods for interacting with them.

// The DOM is responsible for rendering and updating the visual representation of web pages in the browser
//  window based on the underlying document structure and content.

// BOM (Browser Object Model):

// The BOM represents the browser itself as an object-oriented hierarchy of objects and interfaces, separate from the document
// being displayed.

// It provides programmatic access to browser-specific features and functionalities, such as manipulating the browser window,
//  controlling navigation, managing cookies, and interacting with the user's system.

// The BOM includes objects like window, navigator, location, history, screen, and document, each providing methods and
// properties for interacting with different aspects of the browser environment.

// 95.why do we need arrow functions ?

// Concise Syntax:

// Arrow functions have a shorter syntax compared to traditional function expressions, making the code more concise and easier to read, especially for simple one-liner functions.
// They omit the function keyword and use a simple arrow (=>) syntax, reducing visual noise in the code.
// Lexical this Binding:

// Arrow functions capture the this value lexically from the surrounding context at the time of their definition. This means that they do not have their own this context but instead inherit this from the enclosing scope.
// This behavior can help avoid the confusion of this binding in traditional function expressions, where this can vary depending on how the function is called.
// No Binding of arguments object:

// Arrow functions do not have their own arguments object. Instead, they inherit arguments from the enclosing scope.
// This can prevent unexpected behavior in cases where arguments is unintentionally shadowed by a parameter or variable within the function.
// Implicit Return:

// Arrow functions with a single expression implicitly return the result of that expression without needing an explicit return statement.
// This simplifies the syntax for short, single-line functions and reduces boilerplate code.
// Benefits in Functional Programming:

// Arrow functions are commonly used in functional programming paradigms, such as with array methods like map, filter, and reduce.
// Their concise syntax and lexical this binding make them well-suited for use as callback functions and in functional programming patterns.
// Improved Context Binding:

// Arrow functions are often used in scenarios where preserving the lexical context (this) is desirable, such as event handlers or callback functions in object methods.
// They provide a cleaner and more concise alternative to traditional function expressions when working with context-sensitive code.

// 96.what does object.freeze does ?

//The Object.freeze() method in JavaScript is used to freeze an object, preventing any changes to its properties and preventing
//  new properties from being added or existing properties from being removed. Once an object is frozen, it becomes immutable,
//  meaning its state cannot be altered.

// https://chat.openai.com/share/fe340484-8abb-4ae2-909e-74e09fe31486
// https://chat.openai.com/share/24d09fcc-2443-4d4f-b748-9db0be691f25
// https://chat.openai.com/share/8bb97d2e-1bc6-4abd-b5df-7cb9ab48647a