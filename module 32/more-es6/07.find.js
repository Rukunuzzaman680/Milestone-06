const numbers = [11, 225, 335, 443, 55, 660, 77];
const fives = numbers.find(num => num % 5 === 0);
const fivesAll = numbers.filter(num => num % 5 === 0);
// console.log(fives, fivesAll);

const products = [
  { id: 1, name: 'laptop', price: 45000 },
  { id: 1, name: 'mobile', price: 15000 },
  { id: 1, name: 'tablet', price: 35000 },
  { id: 1, name: 'watch', price: 5000 },
];
const cheap = products.find(product => product.price < 40000);
console.log(cheap);
