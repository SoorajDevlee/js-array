let arr = [25, 69, 45, 32, 45, 78, 65, 41, 58, 96, 60];
let [a, ...c] = arr;
let newArr = [a, c.reverse()[0]]; // this will retuen [25,60]
console.log(newArr);

const userDetail = ["sooraj", 18, "Javascript"];
// normal way to acces each user deatil is given below
const userName = userDetail[0];
const userAge = userDetail[1];
const userCourse = userDetail[2];
console.log("User detail with normal way");
console.log(
  `user name is ${userName}. He is ${userAge} years old. He enrolled in ${userCourse} course`
);

// there is another way to acces all the detail from user
// you can destructur the array
// lets see how

const [myName, myAge, myCourse] = userDetail;
console.log("User detail with DESTRUCTURE way");
console.log(
  `user name is ${myName}. He is ${myAge} years old. He enrolled in ${myCourse} course`
);

const shopingCart = [
  { itemName: "Mobile", Price: 9999 },
  { itemName: "Charger", Price: 1500 },
  { itemName: "Treking Bag", Price: 3999 },
  { itemName: "Jeans", Price: 1200 },
  { itemName: "Shirt", Price: 900 },
  { itemName: "Sumsung Tab Pro", Price: 85000 },
  { itemName: "LG Washing Mashine", Price: 23000 },
];

const [product1, product2, product3, ...restProduct] = shopingCart;
console.log(restProduct);
