// create a funtion that used to chunk the data in multiple sets of array

//  for example if i have an array arr = [1,5,6,9,4,3,5,4,7,9,10]

//  i want to divin into chunks of array in given size for example
//  if the chunk size is 2
//  the outptut should be [[1,5],[6,9],[4,3],[5,4],[7,9],[10]]
// if the chunk size is 3
// [[1,5,6],[9,4,3],[5,4,7],[9,10]]

function chunk(arr, size) {
  let mainArr = [];
  let chunkArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let k = i; k <= size + 1; k++) {
      chunkArr.push(arr[k]);
    }
    console.log(chunkArr);
    // mainArr.push(chunkArr);
  }
  //   console.log(mainArr);
}

let arr = [1, 5, 7, 9, 4, 3, 5, 4, 7, 9, 10];
size = 2;

chunk(arr, 2);
