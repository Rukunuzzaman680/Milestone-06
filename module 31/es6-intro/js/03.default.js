// function add(first, second) {
//   console.log(first, second);
//   second = second || 0;
//   if (second === 0) {
//     second = 0;
//   }
//   const total = first + second;
//   return total;
// }

function add(first, second = 0) {
  const total = first + second;
  return total;
}
const result = add(10);
console.log(result);

function fullName(first, last = 'Chowdhuri') {
  const name = first + ' ' + last;
  return name;
}
const name = fullName('Golam');
console.log(name);
