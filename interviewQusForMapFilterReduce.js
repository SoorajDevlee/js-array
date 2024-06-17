// i have multiple shopping product and i want to add 10% discount in every product and if the product is less than 250 RS, remove it from cart and show all the rest product

const shopingCart = [
  { itemName: "Mobile", Price: 9999 },
  { itemName: "Charger", Price: 1500 },
  { itemName: "Treking Bag", Price: 3999 },
  { itemName: "Bottle", Price: 299 },
];

const cartTotle = shopingCart
  .map((priceDiscount) => {
    return parseFloat(priceDiscount.Price / 10);
  })
  .filter((priceAfterDiscount) => {
    return priceAfterDiscount >= 250;
  })
  .reduce((accumlator, currentValue) => {
    return currentValue + accumlator;
  }, 0);

console.log(cartTotle);
