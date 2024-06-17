const arr = [0, 5, 4, 6, 8, 1, 55, 47, 66];

// arr.forEach(function (ar, index) {
//   console.log(`Value of index[${index}]: ${ar}`);
// });

arr.forEach((ar, index) => {
  console.log(`Value of index[${index}]: ${ar}`);
});

// if there is a array and i want to convert all the string elements into uppercase
// forEach function will not return the new array
// forEach Loop does not mutate (effext) the original array

const fruits = ["Apple", "Banana", "Orange"];
fruits.forEach((fruit) => {
  console.log(fruit.toUpperCase());
});
/*
APPLE
BANANA
ORANGE */
console.log(fruits);
// [ 'Apple', 'Banana', 'Orange' ]

// for each loop with array having objects

let response = [
  {
    name: "sooraj devlee",
    email: "sooraj@test.com",
    work: "frontend devleoper",
    id: 154568,
    profile_link: "https://avatars.githubusercontent.com/u/456450?v=4",
    license: {
      key: "gpl-3.0",
      name: "GNU General Public License v3.0",
      spdx_id: "GPL-3.0",
      url: "https://api.github.com/licenses/gpl-3.0",
      node_id: "MDc6TGldRW5zZTk=",
    },
  },
  {
    name: "vipin joshi",
    email: "vipin@test.com",
    work: "full stack devleoper",
    id: 156648,
    profile_link: "https://avatars.githubusercontent.com/u/457620?v=4",
    license: {
      key: "gpl-3.0",
      name: "GNU General Public License v3.0",
      spdx_id: "GPL-3.0",
      url: "https://api.github.com/licenses/gpl-3.0",
      node_id: "MDc6TGljSdzZTk=",
    },
  },
  {
    name: "aman sharma",
    email: "aman@test.com",
    work: "php devleoper",
    id: 158848,
    profile_link: "https://avatars.githubusercontent.com/u/436450?v=4",
    license: {
      key: "gpl-3.0",
      name: "GNU General Public License v3.0",
      spdx_id: "GPL-3.0",
      url: "https://api.github.com/licenses/gpl-3.0",
      node_id: "MDc6TGljZW5zZTk=",
    },
  },
  {
    name: "pradeep verma",
    email: "pradeep@test.com",
    work: "frontend devleoper",
    id: 156848,
    profile_link: "https://avatars.githubusercontent.com/u/457450?v=4",
    license: {
      key: "gpl-3.0",
      name: "GNU General Public License v3.0",
      spdx_id: "GPL-3.0",
      url: "https://api.github.com/licenses/gpl-3.0",
      node_id: "MDc6TGldJk5zZTk=",
    },
  },
  {
    name: "deepak",
    email: "deepak@test.com",
    work: "QA",
    id: 156696,
    profile_link: "https://avatars.githubusercontent.com/u/457450?v=4",
    license: {
      key: "gpl-3.0",
      name: "GNU General Public License v3.0",
      spdx_id: "GPL-3.0",
      url: "https://api.github.com/licenses/gpl-3.0",
      node_id: "MDc6TGljZW5zZTk=",
    },
  },
  {
    name: "pankaj rawat",
    email: "pankaj@test.com",
    work: "frontend devleoper",
    id: 156674,
    profile_link: "https://avatars.githubusercontent.com/u/457450?v=4",
    license: {
      key: "gpl-3.0",
      name: "GNU General Public License v3.0",
      spdx_id: "GPL-3.0",
      url: "https://api.github.com/licenses/gpl-3.0",
      node_id: "MDc6TGljSd5zZTk=",
    },
  },
];

response.forEach((data) => {
  let id = data.id;
  let name = data.name;
  let licenseKey = data.license.key;
  console.log(`name ${name}, id: ${id}, licenseKey: ${licenseKey}`);
});

// get the string length of every element

const strLengthArr = ["Sooraj Delee", "Mayank", "jfndfg", 25, "ghfdgh"];

// for (item of strLengthArr) {
//   if (typeof item === "string") {
//     console.log(item.length);
//   }
// }

// second way with map

const strLength = strLengthArr
  .filter((item) => typeof item === "string")
  .map((item) => {
    let strLen = item.length;
    return strLen;
  });

console.log(strLength);
