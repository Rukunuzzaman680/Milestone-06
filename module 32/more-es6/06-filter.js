const numbers = [11, 22, 33, 44, 55, 66, 77];
const bigNum = numbers.filter(number => number > 30);
const smallNum = numbers.filter(n => n < 40);
const even = numbers.filter(num => num % 2 === 0);

// console.log(bigNum, smallNum, even);

const products = [
  { id: 1, name: 'laptop', price: 45000 },
  { id: 1, name: 'mobile', price: 85000 },
  { id: 1, name: 'tablet', price: 35000 },
  { id: 1, name: 'watch', price: 5000 },
];
const expensive = products.filter(product => product.price < 40000);
console.log(expensive);
