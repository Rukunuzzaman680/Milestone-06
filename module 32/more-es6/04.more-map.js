const numbers = [11, 33, 44, 55, 66];
const half = numbers.map(n => n / 2);
const third = numbers.map(x => x / 3);
// console.log(half);
// console.log(third);

const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Holland'];
const firstLetters = friends.map(friend => friend[0]);
// console.log(firstLetters);
const nameLengths = friends.map(friend => friend.length);
// console.log(nameLengths);

const products = [
  { id: 1, name: 'laptop', price: 45000 },
  { id: 1, name: 'mobile', price: 15000 },
  { id: 1, name: 'tablet', price: 35000 },
  { id: 1, name: 'watch', price: 5000 },
];
const items = products.map(product => product.name);
console.log(items);
