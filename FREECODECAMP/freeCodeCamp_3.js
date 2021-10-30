// EXERCISE - Return a Value from a Function with Return
function timesFive (num) {
  return num * 5;
}
// ------------------------------------------------

// EXERCISE - Global Scope and Functions
// Declare the myGlobal variable below this line
const myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = myGlobal / 2;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// ------------------------------------------------

// EXERCISE - Local Scope and Functions
function myLocalScope() {
  // Only change code below this line
 let myVar;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
// ------------------------------------------------

// EXERCISE - Global vs. Local Scope in Functions
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  const outerWear = 'sweater';
  // Only change code above this line
  return outerWear;
}

myOutfit();
// ------------------------------------------------

// EXERCISE - Understanding Undefined Value returned from a Function
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive () {
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();
// ------------------------------------------------

// EXERCISE - Assignment with a Returned Value
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);
// ------------------------------------------------

// EXERCISE - Stand in Line
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  return arr.shift();
  // Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
// ------------------------------------------------

// EXERCISE - Understanding Boolean Values
function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}
// ------------------------------------------------