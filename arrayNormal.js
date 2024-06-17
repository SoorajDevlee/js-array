const arr = [0, 5, 4, 6, 8, 1, 55, 47, 66];
console.log("push function");
arr.push(99);
console.log(arr);
// [0, 5, 4, 6, 8, 1, 55, 47, 66,99];

console.log("pop function");
arr.pop();
console.log(arr);
// [0, 5, 4, 6, 8, 1, 55, 47, 66];

// most important

// the slice function usefull to pick particular elements from array
// but it does not effect the original array

console.log("slice function");
console.log(arr.slice(2, 6));
// [4, 6, 8, 1]
// it is a run time function, thats why it will not change the real array elements
console.log(arr);
// [0, 5, 4, 6, 8, 1, 55, 47, 66];

console.log("splice function");
console.log(arr);
// [0, 5, 4, 6, 8, 1, 55, 47, 66];  <= orignal array
arr.splice(2, 6);
console.log(arr);
// [ 0, 5, 66 ]

// splice function effect on the array, and change the orignal aaray
// with this array we can remove the particular elements and add new elements in their palce
// for example

const newArr = [5, 11, 56, 48, 3, 6, 8, 10, 59, 56, 23];
newArr.splice(3, 5, "these", "are", "new", "elements");
console.log("splice function with new elements added");
console.log(newArr);
// [ 5, 11, 56, 'these', 'are', 'new', 'elements', 59, 56, 23 ]

// what if i will add two array
// lets see
console.log("how to merge two arraycs");
arr.push(newArr); // commenting this line to make original array as it was
console.log(arr);

// [ 0, 5, 66, [ 5, 11, 56, 'these', 'are', 'new', 'elements', 59, 56, 23 ] ]

// but it is not good way to merge two array together
// another way

const arrMerge = arr.concat(newArr);
console.log("concat funtion for add tow array together");
console.log(arrMerge);

// [0, 5, 66, 5, 11, 56,'these', 'are','new', 'elements', 59, 56, 23]

// third way

const spreadArrOne = [1, 56, 45, 89, 4, 5];
const spreadArrtwo = [5, 66, 7, 9, 5];

arrMergeThird = [...spreadArrOne, ...spreadArrtwo];
console.log("spread for add two array together");
console.log(arrMergeThird);

// what if we have an array with multiple nested array and we want to add all elements of nested array in only one array how we will do the same

// for example

const nestedArr = [
  1,
  5,
  6,
  ["fgf", "dfd", "fd"],
  [9, 4, 5, [11, 56, 56], 56],
  [95, 64, 65],
  6,
];
console.log("flat funtion to add all these nested array element into on array");
const nestedArrInOne = nestedArr.flat(Infinity);
console.log(nestedArrInOne);

//  how to find index(position) of particular elemets from array
console.log("find index(position) of particular elemets from array");
console.log(nestedArr.indexOf(6));

// how to convert a string into array

const myName = "Sooraj Devlee";
console.log("conver string into array");
console.log(Array.from(myName));

// how to convert an array into string

const fruits = ["Apple", "Banana", "Orange"];
console.log("convert array into string");
const newFruits = fruits.join();
console.log(newFruits);
const newSepFruits = fruits.join("_"); // in join function we parameter to separat the string
console.log(newSepFruits);

// how to create a Array from different variable

const score1 = 100;
const score2 = 200;
const score3 = 300;

const combineArray = Array.of(score1, score2, score3);
console.log("array from differnt variable");
console.log(combineArray);
