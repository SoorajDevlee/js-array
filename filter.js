// Creates a new array with only the elements that pass the conditions implemented by the callback function.
// Used when you want to select only certain elements that meet a specific condition.
// Returns a new array with a length that is equal to or less than the original array.

const numbers = [1, 56, 4, 23, 95, 4, 8, 6, 45, 18, 78, 36, 47];

const newNumber = numbers.filter((num) => {
  return num > 10;
});

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

console.log("History books afetr 1995");
const userBook = books.filter((newBook) => {
  return newBook.publish >= 1995 && newBook.genre === "History";
});
console.log(userBook);

console.log("all books after 2000");
const newUserBooks = books.filter((newBook) => {
  return newBook.publish >= 2000;
});

console.log(newUserBooks);
