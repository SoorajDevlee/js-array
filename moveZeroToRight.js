// how to move zero element into right of the array and non-zero element to the left side of the element

// first way with for loop

let arr = [2, 5, 0, 9, 4, 0, 3, 7];

function arrangArray(getArr) {
  let nonZero = [];
  let withZero = [];
  for (let i = 0; i < getArr.length; i++)
    if (getArr[i] !== 0) {
      nonZero.push(getArr[i]);
    } else {
      withZero.push(getArr[i]);
    }
  return [...withZero, ...nonZero];
}
console.log("with for loop");
console.log(arrangArray(arr));

// with filter method

let arr2 = [5, 0, 9, 0, 3, 4, 6, 0, 4, 0, 5];

let withZero = [];
let nonZero = [];

function arrangArrayWithFilter(arr2) {
  withZero = arr2.filter((element) => element === 0);
  nonZero = arr2.filter((element) => element !== 0);
  return withZero.concat(nonZero);
}
console.log("with filter");
console.log(arrangArrayWithFilter(arr2));

// with for of loop

let arr3 = [5, 0, 9, 0, 3, 4, 6, 0, 4, 0, 5];

function arrangeArrayWithForOfLoop(getArr) {
  let withZero = [];
  let nonZero = [];
  for (const element of getArr) {
    if (element === 0) {
      withZero.push(element);
    } else {
      nonZero.push(element);
    }
  }
  return [...withZero, ...nonZero];
}
console.log("Arrange Array With For Of Loop");
console.log(arrangeArrayWithForOfLoop(arr3));
