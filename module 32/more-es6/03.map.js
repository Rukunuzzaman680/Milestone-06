// const numbers = [2, 8, 4, 3, 5];
// const output = [];
// for (const number of numbers) {
//   const doubled = number * 2;
//   output.push(doubled);
// }

const numbers = [2, 8, 4, 3, 5];
function getDoubles(numbers) {
  const output = [];
  for (const number of numbers) {
    const doubled = doubleIt(number);
    output.push(doubled);
  }
  return output;
}
// old function
// function doubleItOld(num) {
//   return num * 2;
// }
const doubleIt = num => num * 2;
const result = getDoubles(numbers);
console.log(result);

// map
const makeDouble = numbers.map(doubleIt);
console.log(makeDouble);

const makeDouble2 = numbers.map(num => num * 2);
// console.log(makeDouble2);

const makeDouble3 = numbers.map(x => x * 2);
// console.log(makeDouble3);

const fiveTimes = [1, 2, 3, 4, 5].map(x => x * 5);
// console.log(fiveTimes);
/**
 * 1. get an array
 * 2. for every elements of the array do something
 * 3. store the result in an array
 * 4. return the result array
 */
