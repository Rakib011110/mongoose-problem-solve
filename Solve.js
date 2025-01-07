const Person = require("./model/model");

const filterAndMapNames = async () => {
  const males = await Person.find({ gender: { $ne: "female" } }, "name");
  console.log(males.map((person) => person.name));
};

filterAndMapNames();
// ------------
const people = [
  { name: "John", age: 25, gender: "male" },
  { name: "Sarah", age: 30, gender: "female" },
  { name: "Mike", age: 20, gender: "male" },
];

const getMaleNames = (people) =>
  people
    .filter((person) => person.gender === "male")
    .map((person) => person.name);

console.log(getMaleNames(people));
// -----------------

const books = [
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
];

const getBookTitles = (books) => books.map((book) => book.title);

console.log(getBookTitles(books));
// --------------------

const square = (num) => num * num;
const double = (num) => num * 2;
const addFive = (num) => num + 5;

const compose = (num) => addFive(double(square(num)));

console.log(compose(3));
// -----------------

const cars = [
  { make: "Toyota", model: "Corolla", year: 2020 },
  { make: "Honda", model: "Civic", year: 2018 },
  { make: "Ford", model: "Fiesta", year: 2019 },
];

const sortCarsByYear = (cars) => cars.sort((a, b) => a.year - b.year);

console.log(sortCarsByYear(cars));
// ------------------

const updatePersonAge = async (name, newAge) => {
  const updatedPerson = await Person.findOneAndUpdate(
    { name },
    { age: newAge },
    { new: true }
  );
  console.log(updatedPerson);
};

updatePersonAge("John", 35);
// -------------------------
const peoples = [
  { name: "John", age: 25, gender: "male" },
  { name: "Sarah", age: 30, gender: "female" },
];

const updateAge = (name, newAge) => {
  const person = peoples.find((person) => person.name === name);
  if (person) person.age = newAge;
  return people;
};

console.log(updateAge("John", 35));
// ----------------------
const numbers = [1, 2, 3, 4, 5, 6];

const sumEvenNumbers = (numbers) =>
  numbers.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);

console.log(sumEvenNumbers(numbers));
// --------------
const isLeapYear = (year) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

console.log(isLeapYear(2024)); // true
console.log(isLeapYear(2023)); // false
