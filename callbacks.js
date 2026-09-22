// Challenge 1
function addTwo(num) {
  return num + 2;
}

//console.log(addTwo(3));
//console.log(addTwo(10));

// Challenge 2
function addS(word) {
  return word + "s";
}

//console.log(addS("pizza"));
//console.log(addS("bagel"));

// Challenge 3
function map(array, callback) {
  const output = [];

  for (let i = 0; i < array.length; i++) {
    output.push(callback(array[i]));
  }
  return output;
}

//console.log(map([1, 2, 3], addTwo));

//--------------------------------------------------
// Extension
//--------------------------------------------------

// Extension 1
function mapWith(array, callback) {
  const output = [];

  array.forEach((element) => output.push(callback(element)));
  return output;
}

//console.log(mapWith([1, 2, 3], addTwo)); // should log [3, 4, 5]

// Extension 2
function reduce(array, callback, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < array.length; i++) {
    acc = callback(acc, array[i]);
  }
  return acc;
}

// const nums = [4, 1, 3];
// const add = function (a, b) {
//   return a + b;
// };
// console.log(reduce(nums, add, 0)); //-> 8

// Extension 3
function intersection(arrays) {
  const output = [];

  for (const array of arrays) {
    for (const element of array) {
      if (
        arrays.every((arr) => arr.includes(element)) &&
        !output.includes(element)
      ) {
        output.push(element);
      }
    }
  }
  return output;
}

function intersectionReduce(arrays) {
  return arrays.reduce((acc, current) => {
    return current.filter((element) => acc.includes(element));
  }, []);
}

// console.log(
//   intersection([
//     [5, 10, 15, 20],
//     [15, 88, 1, 5, 7],
//     [1, 10, 15, 5, 20],
//   ]),
// );
// console.log(
//   intersectionReduce([
//     [5, 10, 15, 20],
//     [15, 88, 1, 5, 7],
//     [1, 10, 15, 5, 20],
//   ]),
// );
// should log: [5, 15]

// Extension 4
function union(arrays) {
  const output = [];

  for (const array of arrays) {
    for (const element of array) {
      if (!output.includes(element)) {
        output.push(element);
      }
    }
  }
  return output;
}

function unionReduce(arrays) {
  return arrays.reduce((acc, current) => {
    console.log("acc", acc);
    const newElements = current.filter((element) => !acc.includes(element));
    console.log(newElements);
    return acc.concat(newElements);
  }, []);
}

// console.log(
//   union([
//     [5, 10, 15],
//     [15, 88, 1, 5, 7],
//     [100, 15, 10, 1, 5],
//   ]),
// );
// console.log(
//   unionReduce([
//     [5, 10, 15],
//     [15, 88, 1, 5, 7],
//     [100, 15, 10, 1, 5],
//   ]),
// );
// should log: [5, 10, 15, 88, 1, 7, 100]

// Extension 5
function objOfMatches(array1, array2, callback) {
  let output = {};
  for (let i = 0; i < array1.length; i++) {
    if (callback(array1[i]) === array2[i]) {
      output[array1[i]] = array2[i];
    }
  }
  return output;
}

// console.log(
//   objOfMatches(
//     ["hi", "howdy", "bye", "later", "hello"],
//     ["HI", "Howdy", "BYE", "LATER", "hello"],
//     function (str) {
//       return str.toUpperCase();
//     },
//   ),
// );
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// Extension 6
function multiMap(arrVals, arrCallbacks) {
  const output = {};
  for (let i = 0; i < arrVals.length; i++) {
    output[arrVals[i]] = [];
    for (let j = 0; j < arrCallbacks.length; j++) {
      output[arrVals[i]].push(arrCallbacks[j](arrVals[i]));
    }
  }
  return output;
}

// console.log(
//   multiMap(
//     ["catfood", "glue", "beer"],
//     [
//       function (str) {
//         return str.toUpperCase();
//       },
//       function (str) {
//         return str[0].toUpperCase() + str.slice(1).toLowerCase();
//       },
//       function (str) {
//         return str + str;
//       },
//     ],
//   ),
// );
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// Extension 7
function objectFilter(obj, callback) {
  const output = {};

  for (let key in obj) {
    if (callback(key) === obj[key]) {
      output[key] = callback(key);
    }
  }
  return output;
}

// const cities = {
//   London: "LONDON",
//   LA: "Los Angeles",
//   Paris: "PARIS",
// };
// console.log(objectFilter(cities, (city) => city.toUpperCase())); // Should log { London: 'LONDON', Paris: 'PARIS'}

// Extension 8
function majority(array, callback) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      count++;
    }
  }
  return count > array.length / 2;
}

// /*** Uncomment these to check your work! ***/
// const isOdd = function (num) {
//   return num % 2 === 1;
// };
// console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
// console.log(majority([2, 3, 4, 5], isOdd)); // should log: false

// Extension 9
function prioritize(array, callback) {
  const first = [];
  const rest = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      first.push(array[i]);
    } else {
      rest.push(array[i]);
    }
  }
  return first.concat(rest);
}

// const startsWithS = function (str) {
//   return str[0] === "s" || str[0] === "S";
// };
// console.log(
//   prioritize(
//     ["curb", "rickandmorty", "seinfeld", "sunny", "friends"],
//     startsWithS,
//   ),
// );
// should log: ["seinfeld", "sunny", "curb", "rickandmorty", "friends"];

// Extension 10
function countBy(array, callback) {
  let obj = {};

  for (let i = 0; i < array.length; i++) {
    const key = callback(array[i]);
    if (obj[key] === undefined) {
      obj[key] = 0;
    }
    obj[key]++;
  }
  return obj;
}

// console.log(
//   countBy([1, 2, 3, 4, 5], function (num) {
//     if (num % 2 === 0) return "even";
//     else return "odd";
//   }),
// ); // should log: { odd: 3, even: 2 }

// Extension 11
function groupBy(array, callback) {
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    const key = callback(num);
    if (obj[key] === undefined) {
      obj[key] = [];
    }
    obj[key].push(num);
  }
  return obj;
}

// const decimals = [1.3, 2.1, 2.4];
// const floored = function (num) {
//   return Math.floor(num);
// };
// console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

// Extension 12
function commutative(func1, func2, value) {
  return func2(func1(value)) === func1(func2(value));
}

const multBy3 = (n) => n * 3;
const divBy4 = (n) => n / 4;
const subtract5 = (n) => n - 5;
console.log(commutative(multBy3, divBy4, 11)); // should log: true
console.log(commutative(multBy3, subtract5, 10)); // should log: false
console.log(commutative(divBy4, subtract5, 48)); // should log: false

// Extension 13

function objFilter(obj, callback) {}

// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = n => n / 2;
// console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }

// Extension 14

function rating(arrOfFuncs, value) {}

// const capitalize = str => str.toUpperCase();
// const addLowerCase = str => str + str.toLowerCase();
// const repeat = str => str + str;
// const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'

// Extension 15
function highestFunc(objOfFuncs, subject) {}

// const groupOfFuncs = {};
// groupOfFuncs.double = n => n * 2;
// groupOfFuncs.addTen = n => n + 10;
// groupOfFuncs.inverse = n => n * -1;
// console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
// console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
// console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'
