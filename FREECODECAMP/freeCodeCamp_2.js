// EXERCISE - Access Multi-Dimensional Arrays With Indexes
const myArray = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];
// ------------------------------------------------

// EXERCISE - Manipulate Arrays With push()
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3]);
// ------------------------------------------------

// EXERCISE - Manipulate Arrays With pop()
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
let removedFromMyArray = myArray.pop();
// ------------------------------------------------

// EXERCISE - Manipulate Arrays With shift()
// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
let removedFromMyArray = myArray.shift();
// ------------------------------------------------

// EXERCISE - Manipulate Arrays With unshift()
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);
// ------------------------------------------------

// EXERCISE - Shopping List
const myList = [];
myList.push(["Cola", 2], ["bread", 1], ["cheese", 3], ["haribo", 1], ["crisps", 5]);
// ------------------------------------------------

// EXERCISE - Write Reusable JavaScript with Functions
function reusableFunction() {
	console.log("Hi World");
}
reusableFunction();
// ------------------------------------------------

// EXERCISE - Passing Values to Functions with Arguments
function functionWithArgs(x, y) {
	console.log(x + y);
}
functionWithArgs(1, 2);
functionWithArgs(7, 9);
// ------------------------------------------------