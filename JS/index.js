//Hosting

// console.log(x);
// var x = 7;
// getname();

// const getname = ()=> {
//   console.log("Helllo");
// }
// console.log(x);

//Lexical envirnoment
 var b=10;
function a(){
  y();
  function y(){
    // console.log(b);
  }
}
a();
console.log(b);

// #####################################################################################################

//higher order function

const radius = [2,3,4,5,6];

const area = function(radius){
  return Math.PI* radius * radius
}

const dia = function(radius){
  return 2 *radius ;
}

const circomference = function(radius){
  return 2 *Math.PI * radius
}

function calculate (arr, logic){
  let val =[];
  for(let i=0; i<radius.length;i++){
    val.push(logic(arr[i]))
  }
  return val;
}
// console.log(calculate(radius,area));
// console.log(calculate(radius,dia));
// console.log(calculate(radius,circomference));
// console.log(radius.map(circomference)); // instead of calculate function we are using map inbuild function


// #####################################################################################################

//map ,filter ,reduce

const arr = [7, 8, 6, 5, 4, 9, 100];

const findSum =(arr)=>{
   let sum =0
   for(let i in arr){
    sum = sum + arr[i]
   }
    return sum
}

const isOdd = (arr) =>{
  let odd =[];
  for(let i=0 ;i<arr.length; i++){
    if(arr[i] % 2 !== 0){
      odd.push(arr[i])
    }
  }
  return odd;
}

const isEven =(arr) =>{
  let even =[];
  for(let i=0 ;i<arr.length; i++){
    if(arr[i] % 2 === 0){
      even.push(arr[i])
    }
  }
  return even
}

const isEven1 = (arr)=>{
  return arr % 2 == 0
}

const isOdd1 = (arr)=>{
  return arr % 2 !==0;
}
const calc = function(arr ,logic){
   let newal =[];
   for(let i=0 ; i<arr.length;i++){
    if(logic(arr[i])){
      newal.push(arr[i])
    }
   }
   return newal;
}

// console.log(findSum(arr));
// console.log(isOdd(arr));
// // console.log(isEven(arr));
// console.log(calc(arr,isEven1));
// console.log(calc(arr,isOdd1));

// #####################################################################################################

// find max val using reduce
const output = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);

const findMax = arr.reduce(function (acc, curr) {
  if (acc < curr) {
    acc = curr;
  }
  return acc;
}, 0);

// console.log(output);
// console.log(findMax);

const middleList = {
  _id: 2221,
  title: "Get to Know Us",
  listItem: [
    {
      _id: "001",
      listData: [
        "Careers",
        "Blog",
        "About Amazon",
        "Investor Relations",
        "Amazon Devices",
        "Amazon Science",
      ],
    },
  ],
};

const allItems = [
  { id: "100", title: "All Categories" },
  { id: "100", title: "Amazon Devices" },
  { id: "100", title: "Amazon Pharmacy" },
  { id: "100", title: "Audible Audiobooks" },
  { id: "100", title: "Amazon Fresh" },
  { id: "100", title: "Car & Motorbike" },
  { id: "100", title: "Books" },
  { id: "100", title: "baby" },
  { id: "100", title: "Musical Instruments" },
  { id: "100", title: "Toys & Games" },
  { id: "100", title: "Beauty" },
  { id: "100", title: "Subscribe & Save" },
  { id: "100", title: "Movies & TV Shows" },
  { id: "100", title: "Health & Personal Care" },
  { id: "100", title: "Luggage & Bags" },
];

const items = allItems.filter((x) => {
  if (x.title.length > 10) {
    // console.log(x.title);
  }
});

const list = middleList.listItem.filter((x) => {
  if (x.listData.length > 5) {
    // console.log(x.listData);
  }
});

//this Keyword
// console.log(this);

// #####################################################################################################

//call ,apply ,bind

const std1 = {
  firstName: "Rohit",
  lastName: "Sharma",
};

const printName = function (place ,state) {
  console.log(this.firstName + " " + this.lastName + " " +place +"," + state);
};

printName.call(std1,"chennai","cricket");

const std2 = {
  firstName: "Virat",
  lastName: "Kholi",
};
// in the call methods we passing arrguments with comma separated
printName.call(std2,"Vellore","banglore");

// in the appy method wea are passing arrguments as a array
printName.apply(std2,["Vellore","banglore"]);

//bind
let bindmethod = printName.bind(std2,"Vellore","banglore");
// console.log(bindmethod);
bindmethod();

// #####################################################################################################

//function currying

//Function currying is a technique in JavaScript where a function is transformed into a sequence of functions,
//each taking a single argument.This allows you to partially apply arguments to a function,
//creating new functions with fewer parameters.

let multiply = function (x, y) {
  console.log(x * y);
};

//The this keyword is used in the context of the bind method.
//In the code you provided, this is used as the first argument to bind. The this value is not significant
// in this specific scenario because the multiply function doesn't rely on the value of this. 
//The primary purpose of using this here is to provide a valid context for the bind method.

const multiply2 = multiply.bind(this, 2);
multiply2(6);
const multiply3 = multiply.bind(this, 3);
multiply3(7);

// #####################################################################################################