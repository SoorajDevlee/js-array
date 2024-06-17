//1.)))) remove duplicte data from array

const names = [
  "sooraj",
  "vipin",
  "parveen",
  "manish",
  "abhishek",
  "karam",
  "vipin",
  "sooraj",
];

// without using loop method
// fist way to use Set object to remove duplicate data

// but it will convert an array into object
// we have to convert this object into array
//  lets see

const removeDuplicateData = new Set(names); //this will create new object with filter names(item)
console.log(removeDuplicateData);
const newNameList = [...removeDuplicateData]; // here i am changing the data type onject to array (removeDuplicateData)
console.log(newNameList);

// using filter function

const names2 = [
  "sooraj",
  "vipin",
  "parveen",
  "manish",
  "abhishek",
  "karam",
  "vipin",
  "sooraj",
];

const newNameList2 = names2.filter((name, index) => {
  return names2.indexOf(name) === index;
});

console.log(newNameList2);

//  for better understanding

console.log(names2);
const newFilterList = names2.filter((name, index) => {
  console.log(name);
  console.log(names2.indexOf(name));
  return names2.indexOf(name) === index;
});

console.log(newFilterList);

// *************************************************************

// 2.)))) Sort an array using sort method

let arr = [25, 65, 84, 79, 41, 56, 45, 65, 21, 56];
console.log("sorting the array using sort method");
arr.sort((a, b) => a - b); // sort method effect the original array
console.log(arr);

// create a list(array) of object of top 3 highest price product

const shopingCart = [
  { itemName: "Mobile", Price: 9999 },
  { itemName: "Charger", Price: 1500 },
  { itemName: "Treking Bag", Price: 3999 },
  { itemName: "Jeans", Price: 1200 },
  { itemName: "Shirt", Price: 900 },
  { itemName: "Sumsung Tab Pro", Price: 85000 },
  { itemName: "LG Washing Mashine", Price: 23000 },
];

// i going to use this sorting using map and chaning

const sortedPriceList = shopingCart
  .map((item) => item.Price)
  .sort((a, b) => a - b)
  .slice(0, 3);
// with the help of map method we can make an array of price
console.log("Price list");
console.log(sortedPriceList);

// sort the top three product

const filterProduct = shopingCart.sort((a, b) => a.Price - b.Price).slice(0, 3);
console.log("filter product");
console.log(filterProduct);

// filter the product which is above 2000 rs

const aboveTwoKProduct = shopingCart.filter((item) => item.Price > 2000);
console.log("Above 2000 Rs product");
console.log(aboveTwoKProduct);

// add the amount of all the product

const totleCart = shopingCart.reduce((a, c) => a + c.Price, 0);
console.log("Totle price of products");
console.log(totleCart);

// filter even number from an array

const allNumber = [0, 1, 25, 65, 84, 79, 41, 56, 45, 65, 21, 56];
const evenNumber = allNumber.filter((en) => en % 2 === 0);
console.log("original arrya");
console.log(allNumber);
console.log("Even Number Array");
console.log(evenNumber);

// filter practice

const names3 = [
  "sooraj",
  "vipin",
  "parveen",
  "manish",
  "abhishek",
  "karam",
  "vipin",
  "sooraj",
];

const newFilterName = names3.filter(
  (name, index) => names3.indexOf(name) === index
);
console.log(newFilterName);

// i want to create new array in new array i want 1st element from first array and second element from second array and so on

const itemKey = ["itemName", "Price", "cartDate"];
const itemDetail = ["Mobile", 9999, "15/07/2024"];

function mergeDetail(arr1, arr2) {
  let allItemDetail = [];
  for (let i = 0; i < Math.min(arr1.length, arr2.length); i++) {
    allItemDetail.push(arr1[i], arr2[i]);
  }
  return allItemDetail;
}

const newDetail = mergeDetail(itemKey, itemDetail);
console.log(newDetail);

// find 3 time repeat element from an aaray

let findRepeatArr = [
  1, 6, 8, 3, 1, 4, 2, 5, 1, 6, 8, 3, 4, 2, 1, 6, 8, 3, 4, 8,
];

console.log(findRepeatArr.indexOf(1));

let newRepArr = findRepeatArr.filter(
  (item, index) => findRepeatArr.indexOf(item) === index
);

console.log(newRepArr);

//

let str = "my name is sooraj";
let strArr = [];
let revStr = "";
for (let i = str.length; i >= 0; i--) {
  let strChar = Array.of(str.charAt(i));
  strArr.push(strChar);
}

console.log(strArr.join(""));

let str2 = "my name is sooraj";
let char = "";
for (let i = str.length; i >= 0; i--) {
  char += str.charAt(i);
}

let str3 = "my name is sooraj"; // string
let strArr3 = str3.split(" "); // function to convert string into array
console.log(strArr3);
let newArr4 = [];
for (let i = strArr3.length - 1; i >= 0; i--) {
  newArr4.push(strArr3[i]);
}
console.log(newArr4.join(" "));

// find the missing element from and array

let misEle = [];
// let missingArr = [1, 3, 5, 7, 9, 13];

// for (let i = 0; i < missingArr.length; i++) {
//   if (missingArr[i] + 2 !== missingArr[i + 1]) {
//     console.log(missingArr[i] + 2);
//     break;
//   }
// }

let missingArr = [1, 3, 5, 7, 9, 13];
let i = 0;
// let add = -2;
missingArr.forEach((el) => {
  if (missingArr[i + 1] !== el + 2) {
    console.log(missingArr[i] + 2);
  }
  i++;
});

const arr3 = ["a", "b", "c", "d"];
const slicedArr = arr3.slice(1, 4);
console.log(slicedArr);

// create a new set of array from one array

let hand = [1, 2, 3, 6, 2, 3, 4, 7, 8];
let groupSize = 3;
