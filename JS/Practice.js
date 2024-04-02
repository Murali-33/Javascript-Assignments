let arr = [1, 6, 7, 2, 3, 4, 5, 6, 6, 7, 7, [3, 4, 5, 6], [4, 5, 6, 7]];

//flat the array
let flattenArray = function (arr) {
  return arr.reduce((acc, curr) => {
    return acc.concat(Array.isArray(curr) ? flattenArray(curr) : curr);
  }, []);
};
const flatArr = flattenArray(arr);
console.log(flatArr);

// remove the duplicate elements
let newArr = flatArr.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc.sort();
}, []);
console.log(newArr);

//count the duplicates in an Array ? sort of an array ?
//Remove the duplivates from an array and count the duplicates ?
//count the maximum number of repetating charceters in a string
//write the logic to move all the zero to the end of an array

// sum of the array

let sumArr = (arr) => {
  return arr.reduce((acc, curr) => {
    return acc + curr;
  });
};
console.log(sumArr(flatArr));

//Write a function that finds the longest word in a sentence
const nameStr = (str)=>{
  const word = str.split(' ');
  let newWord =''
  for(let i=0 ;i<word.length;i++){
    if(word[i].length > newWord.length){
      newWord = word[i]
    }
  }
  return newWord
}
console.log(nameStr("Hii this is javascript"));


//slice
let arrayIntegers = [1, 2, 3, 4, 5];
let arrayIntegers1 = arrayIntegers.slice(0, 2); // returns [1,2]
let arrayIntegers2 = arrayIntegers.slice(2, 3); // returns [3]
let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]


//What is currying function in JavaScript ?

//currying is a functional programming technique that involves breaking down a function that 
//takes multiple arguments into a series of functions that take one argument each. This creates a chain of 
//functions, where each function returns another function until the final result is achieved.

function calculateVolume(length) {
	return function (breadth) {
		return function (height) {
			return length * breadth * height;
		}
	}
}
console.log(calculateVolume(4)(5)(6));


//Pure Functions in JavaScript

//A Pure Function is a function (a block of code) that always returns the same result if the same arguments 
//are passed. It does not depend on any state or data change during a program’s execution. Rather, it only
// depends on its input arguments.

//The above function will always return the same result if we pass the same product price. In other words, 
//its output doesn’t get affected by any other values/state changes.

function calculateGST(productPrice) {
	return productPrice * 0.05;
}
console.log(calculateGST(15))


//Temporal Dead Zone is the period of time during which the let and const declarations cannot be accessed. Temporal Dead Zone starts when the code execution enters
//the block which contains the let or const declaration and continues until the declaration has executed.

// ###########################################################################################################

// What is an IIFE (Immediately Invoked Function Expression)

//The primary reason to use an IIFE is to obtain data privacy because any variables declared within the IIFE 
//cannot be accessed by the outside world. i.e, If you try to access variables from the IIFE then it throws an 
//error as below,

// (function () {
//   var message = "IIFE";
//   console.log(message);
// })();
// console.log(message); //Error: message is not defined

// ###########################################################################################################
//memoization

let cache={};
function add(num){
  if(cache[num]){
   console.log("Inside the Cache");
   return cache[num];
  }
   cache[num] = num + 12;
   console.log("Normal iteration");
   return cache[num];
}

console.log(add(2));
console.log(add(2));
console.log(add(6));
console.log(add(6));
console.log(add(6));

