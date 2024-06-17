const names = [
  "sooraj",
  "vipin",
  "vikas",
  "parveen",
  "vikas",
  "gorav",
  "sooraj",
  "vipin",
];

const uniqueName = new Set(names);
//   the Set() object create a new object({}) with the variable name uniqueName
console.log("unique Name");
console.log(names);
console.log(uniqueName);
//   { 'sooraj', 'vipin', 'vikas', 'parveen', 'gorav' }

const uniqueNameArray = [...uniqueName];
console.log(uniqueNameArray);
