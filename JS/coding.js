// Question No:1  print the fibonachi series based on the length given
const fibonachi = (length) => {
  const fibo = [0, 1];
  for (let i = 2; i < length; i++) {
    fibo.push(fibo[i - 1] + fibo[i - 2]);
  }
  return fibo;
};
// console.log(fibonachi(7));

//Question No:2 Write a function that reverses a given string.

const reverseStr = (str) => {
  const reverse = str.split("").reverse().join('');
  return reverse;
};
// console.log(reverseStr("Hello world"));


//Question No:3 Write a function that reverses a given string dont use inbuilt methods
const reverseString = (str1) => {
  let reverseStr = '';
  for(let i=str1.length-1 ; i >= 0;i--){
    reverseStr += str1[i];
  }
  return reverseStr
}
// console.log(reverseString('Murali'));

//Question No:4 Write a function that finds the longest word in a sentence

const findlongestWord = (sentence) =>{
   const word = sentence.split(' ');
   let longestword = '';
   for(let i=0 ;i< word.length ;i++){
      if(word[i].length > longestword.length){
        longestword = word[i]
      }
   }
   return longestword
}
// console.log(findlongestWord("Hello world, this is javascript"));

//5.Question: Write a function that removes duplicates from an array.
const removeDup = (arr) =>{
   let newArray = [];
   for(let i=0 ;i< arr.length; i++){
     if(!newArray.includes(arr[i])){
      newArray.push(arr[i])
     }
   }
   return newArray
}
// console.log(removeDup([1,2,3,4,5,5,2,3,1,7,9]));

//6.Question: Write a function that removes duplicates from an array
const removeDuplicate = (array) =>{
    return [...new Set(array)]
}

// console.log(removeDuplicate([1,1,2,3,3,4,4,6,6,7,7,8,8,9,9]));

//7.Question: Given an array containing numbers from 1 to N, with one number missing, find the missing number;
const findMissingNum = (arr)=>{
     const num = arr.length +1;
     const expectedSum = (num * (num + 1)) / 2;
     const actualSum = arr.reduce((acc,curr)=> acc + curr,0);
     return expectedSum - actualSum
}
// console.log(findMissingNum([1,2,3,5]));

//8. Question: Write a function that checks if a given string is a palindrome.
 const palindrome = (str)=>{
   let rev = '';
   for(let i=str.length-1 ;i>=0 ;i--){
    rev += str[i];
    if(rev === str){
      console.log('it is a palindrome');
    }else{
      console.log("its not a palindrome");
    }
   }
 }

 palindrome("icici");

 //9. Question: What will be the output of the following code?
  for (var i = 1; i <= 5; i++) {
  setTimeout(function() {
    // console.log(i);
  }, 1000);
}

//10 implement the javascript debounce

//Purpose: Debouncing ensures that a function is not called until a certain amount of time has passed since 
//the last invocation of the triggering event.

function debounce(func,delay = 1000){
  let timer;
  return function(...args){
    clearTimeout(timer)
    timer = setTimeout(()=> func(...args),delay)
  }
}

function handleDebounce(){
  // console.log("data saved Debounce have applied");
}

const debounceInput = debounce(handleDebounce);


// 11) Purpose: Throttling ensures that a function is not called more often than a specified time interval,
// regardless of how frequently the triggering event occurs.

function throttle(func, delay = 2000){
    let run = false;
    return function(...args){
      if(!run){
        run=true;
        func(...args);
        setTimeout(()=> run=false,delay)
      }
    }
}

function handleMouseMove(){
  // console.log('Throttle implemented');
}

window.addEventListener('mousemove',throttle(handleMouseMove))