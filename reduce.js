const number = [25, 56, 89, 74, 63, 52];
const i = 0;

// const newNumber = number.reduce((a, c) => a + c, i);

// const newNumber = number.reduce((a, c) => {
//   console.log(`acc : ${a} and cur : ${c}`);
//   return a + c;
// }, 25);

// console.log(newNumber);

// add all the price in shoping cart

const shopingCart = [
  { itemName: "Mobile", Price: 9999 },
  { itemName: "Charger", Price: 1500 },
  { itemName: "Treking Bag", Price: 3999 },
];

const tottlePrice = shopingCart.reduce((a, c) => {
  return a + c.Price;
}, 0);

console.log(tottlePrice);
