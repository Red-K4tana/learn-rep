// EXERCISE - Chaining If Else Statements
function testSize(num) {
	// Only change code below this line
	if (num < 5) {
		return 'Tiny'
	} else if (num < 10) {
		return 'Small'
	} else if (num < 15) {
		return 'Medium'
	} else if (num < 20) {
		return 'Large'
	} else if (num >= 20) {
		return 'Huge'
	}

	return "Change Me";
	// Only change code above this line
}

testSize(7);
// ------------------------------------------------

// EXERCISE - Golf Code
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
	// Only change code below this line
	if (strokes === 1) {
		return "Hole-in-one!";
	} else if (strokes <= par - 2) {
		return "Eagle";
	} else if (strokes === par - 1) {
		return "Birdie";
	} else if (par === strokes) {
		return "Par";
	} else if (strokes === par + 1) {
		return "Bogey"
	} else if (strokes === par + 2) {
		return "Double Bogey"
	} else if (strokes >= par + 3) {
		return "Go Home!"
	}

	return "Change Me";
	// Only change code above this line
}

golfScore(5, 4);
// ------------------------------------------------

// EXERCISE - Selecting from Many Options with Switch Statements
function caseInSwitch(val) {
	let answer = "";
	// Only change code below this line
	switch (val) {
		case 1:
			answer = "alpha";
			break;
		case 2:
			answer = "beta";
			break;
		case 3:
			answer = "gamma";
			break;
		case 4:
			answer = "delta";
			break;
	}
	// Only change code above this line
	return answer;
}
caseInSwitch(1);
// ------------------------------------------------

// EXERCISE - Adding a Default Option in Switch Statements
function switchOfStuff(val) {
	let answer = "";
	// Only change code below this line
	switch (val) {
		case "a":
			answer = "apple";
			break;
		case "b":
			answer = "bird";
			break;
		case "c":
			answer = "cat";
			break;

		default:
			answer = "stuff";
	}
	// Only change code above this line
	return answer;
}
switchOfStuff(1);
// ------------------------------------------------

// EXERCISE - Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
	let answer = "";
	// Only change code below this line
	switch (val) {
		case 1:
		case 2:
		case 3:
			answer = "Low";
			break;
		case 4:
		case 5:
		case 6:
			answer = "Mid";
			break;
		case 7:
		case 8:
		case 9:
			answer = "High"
			break;
	}
	// Only change code above this line
	return answer;
}

sequentialSizes(1);
// ------------------------------------------------

// EXERCISE - Replacing If Else Chains with Switch
function chainToSwitch(val) {
	let answer = "";
	// Only change code below this line
	switch (val) {
		case "bob":
			answer = "Marley";
			break;
		case 42:
			answer = "The Answer";
			break;
		case 1:
			answer = "There is no #1";
			break;
		case 99:
			answer = "Missed me by this much!";
			break;
		case 7:
			answer = "Ate Nine";
			break;
	}
	// Only change code above this line
	return answer;
}

chainToSwitch(7);
// ------------------------------------------------

// EXERCISE - Returning Boolean Values from Functions
function isLess(a, b) {
	// Only change code below this line
	return a < b
	// Only change code above this line
}
isLess(10, 15);
// ------------------------------------------------

// EXERCISE - Return Early Pattern for Functions
// Setup
function abTest(a, b) {
	// Only change code below this line
	if (a < 0 || b < 0) {
		return undefined;
	}
	// Only change code above this line
	return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
abTest(2, 2);
// ------------------------------------------------

// EXERCISE - Counting Cards
let count = 0;

function cc(card) {
	// Only change code below this line
	switch (card) {
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			count++;
			break;
		case 7:
		case 8:
		case 9:
			break;
		case 10:
		case 'J':
		case 'Q':
		case 'K':
		case 'A':
			count--;
			break;

	}
	if (count > 0) {
		return count + ' Bet';
	} else {
		return count + ' Hold'
	}

	// Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
// ------------------------------------------------

// EXERCISE - Build JavaScript Objects
const myDog = {
	// Only change code below this line
	name: 'John',
	legs: 4,
	tails: 1,
	friends: ['Kate', 'Arty']

	// Only change code above this line
};
// ------------------------------------------------

// EXERCISE - Accessing Object Properties with Dot Notation
// Setup
const testObj = {
	"hat": "ballcap",
	"shirt": "jersey",
	"shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line
// ------------------------------------------------
