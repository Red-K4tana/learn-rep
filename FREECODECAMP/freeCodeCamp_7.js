// EXERCISE - Accessing Nested Objects
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];
// ------------------------------------------------

// EXERCISE - Accessing Nested Arrays
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];
// ------------------------------------------------

// EXERCISE - Record Collection
// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (value === '') {
    delete records[id][prop];
  } else if (prop !== "tracks") {
    records[id][prop] = value;
  } else {
    if (!records[id].hasOwnProperty('tracks')) {
      records[id].tracks = [];
      records[id].tracks.push(value);
    } else {
      records[id].tracks.push(value);
    }
  }
  return records;
}
updateRecords(recordCollection, 5439, 'artist', 'ABBA');
// ------------------------------------------------

// EXERCISE - Iterate with JavaScript While Loops
// Setup
const myArray = [];

// Only change code below this line
let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}
// ------------------------------------------------

// EXERCISE - Iterate with JavaScript For Loops
// Setup
const myArray = [];

// Only change code below this line
for (let i = 1; i <= 5; i++) {
  myArray.push(i);
}
// ------------------------------------------------

// EXERCISE - Iterate Odd Numbers With a For Loop
// Setup
const myArray = [];

// Only change code below this line
for (let i = 1; i <= 9; i+=2) {
  myArray.push(i);
}
// ------------------------------------------------

// EXERCISE - Count Backwards With a For Loop
// Setup
const myArray = [];

// Only change code below this line
for (let i = 9; i >= 1; i -= 2) {
  myArray.push(i);
}
// ------------------------------------------------

// EXERCISE - Iterate Through an Array with a For Loop
// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;
for (let i = 0; i < myArr.length; i++) {
   total += myArr[i];
}
// ------------------------------------------------

// EXERCISE - Nesting For Loops
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for(let i=0; i< arr.length;i++){
    for(let j=0; j< arr[i].length;j++){
      product*= arr[i][j];
    }  
  }
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
// ------------------------------------------------

// EXERCISE - Iterate with JavaScript Do...While Loops
// Setup
const myArray = [];
let i = 10;

// Only change code below this line

do {
  myArray.push(i);
  i++;

} while (i < 11)
// ------------------------------------------------

// EXERCISE - Compare Scopes of the var and let Keywords
function checkScope() {
  "use strict";
    let i = "function scope";
    if (true) {
      let i = "block scope";
      console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
  }
// ------------------------------------------------

// EXERCISE - Mutate an Array Declared with const
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line
  s[0]=2;
  s[1]=5;
  s[2]=7;
  
  // change code above this line
}
editInPlace();
// ------------------------------------------------

// EXERCISE - Prevent Object Mutation
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line

  Object.freeze(MATH_CONSTANTS);
  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
// ------------------------------------------------

// EXERCISE - Write Arrow Functions with ParametersPassed
"use strict";
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));
// ------------------------------------------------

// EXERCISE - Set Default Parameters for Your Functions
// Only change code below this line
const increment = ( ()=> {
  "use strict";
  return (number, value=1) => {
    return number + value;
  };
})();
// Only change code above this line
// ------------------------------------------------

// EXERCISE - Use the Spread Operator to Evaluate Arrays In-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);
// ------------------------------------------------

// EXERCISE - 

// ------------------------------------------------

// EXERCISE - 

// ------------------------------------------------

// EXERCISE - 

// ------------------------------------------------

// EXERCISE - 

// ------------------------------------------------

// EXERCISE - 

// ------------------------------------------------

// EXERCISE - 

// ------------------------------------------------

// EXERCISE - 

// ------------------------------------------------

// EXERCISE - 

// ------------------------------------------------
