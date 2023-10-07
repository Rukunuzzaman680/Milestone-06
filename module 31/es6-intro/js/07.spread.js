const max = Math.max(12, 44, 11, 66, 77);
// console.log(max);

const numbers = [44, 55, 66, 77];
const largest = Math.max(...numbers);
// console.log(...numbers);
// console.log(largest);

const numbers2 = [...numbers];
numbers.push(88);
numbers2.push(888);
console.log(numbers);
console.log(numbers2);

const numbers3 = [11, 22, 33, ...numbers, 99];
console.log(numbers3);
