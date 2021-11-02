// EXERCISE - Accessing Object Properties with Bracket Notation
// Setup
const testObj = {
	"an entree": "hamburger",
	"my side": "veggies",
	"the drink": "water"
};

// Only change code below this line
const entreeValue = testObj["an entree"];   // Change this line
const drinkValue = testObj["the drink"];    // Change this line
// ------------------------------------------------

// EXERCISE - Accessing Object Properties with Variables
// Setup
const testObj = {
	12: "Namath",
	16: "Montana",
	19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line
// ------------------------------------------------

// EXERCISE - Updating Object Properties
// Setup
const myDog = {
	"name": "Coder",
	"legs": 4,
	"tails": 1,
	"friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog['name'] = 'Happy Coder'
// ------------------------------------------------

// EXERCISE - Add New Properties to a JavaScript Object
const myDog = {
	"name": "Happy Coder",
	"legs": 4,
	"tails": 1,
	"friends": ["freeCodeCamp Campers"]
};

myDog.bark = 'woof';
// ------------------------------------------------

// EXERCISE - Delete Properties from a JavaScript Object
// Setup
const myDog = {
	"name": "Happy Coder",
	"legs": 4,
	"tails": 1,
	"friends": ["freeCodeCamp Campers"],
	"bark": "woof"
};

// Only change code below this line
delete myDog.tails
// ------------------------------------------------

// EXERCISE - Using Objects for Lookups
// Setup
function phoneticLookup(val) {
	let result = "";

	// Only change code below this line
	const lookup = {
		"alpha": "Adams",
		"bravo": "Boston",
		"charlie": "Chicago",
		"delta": "Denver",
		"echo": "Easy",
		"foxtrot": "Frank"
	}
	result = lookup[val]

	// Only change code above this line
	return result;
}

phoneticLookup("charlie");
// ------------------------------------------------

// EXERCISE - Testing Objects for Properties
function checkObj(obj, checkProp) {
	// Only change code below this line
	if (obj.hasOwnProperty(checkProp)) {
		return obj[checkProp];
	} else {
		return "Not Found"
	}
	// Only change code above this line
}
// ------------------------------------------------

// EXERCISE - Manipulating Complex Objects
const myMusic = [
	{
		"artist": "Billy Joel",
		"title": "Piano Man",
		"release_year": 1973,
		"formats": [
			"CD",
			"8T",
			"LP"
		],
		"gold": true
	},
	{
		"artist": "Til Lindeman",
		"title": "Benzin",
		"release_year": 1995,
		"formats": [
			"CD",
			"MP3"
		]

	}
];
// ------------------------------------------------
