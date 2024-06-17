// What is chaning
//  we can use multiple map and filter function in an array
//  for example

const number = [25, 56, 89, 74, 63, 52];

const newArray = number
  .map((num) => {
    return num * 10;
  }) // this map function will pass the updated value to the next map function
  .map((num) => {
    return num + 1;
  }) // this map function will pass the updated value to the next map function
  .filter((num) => {
    return num >= 600;
  });

console.log(newArray);
