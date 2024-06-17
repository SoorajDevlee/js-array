// Creates a new array with the same length as the original array, but with each element transformed by the callback function.
// Used when you want to transform each element in an array
// Returns a new array with the same length as the original array.

const number = [25, 56, 89, 74, 63, 52];

const newNum = number.map((num) => {
  return num + 10;
});

console.log(newNum);

// get all the name in one aaray

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

// let names = []

const name = response.map((nameItem) => {
  let names = nameItem.name;
  return names;
});

console.log(name);
