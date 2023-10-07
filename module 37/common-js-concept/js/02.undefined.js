/**
 * 8 way to get Undefined
 1. variable that is not initialized will give undefined

 2. function with no return

 3. parameter that is not passed will be undefined

 4. if return has nothing on the right side will return undefined

 5. property that does't exists on an object will give you undefined

 6. accessing array elements outside of the index range

 7. deleting an element inside an array

 8. set a value directly to undefined
 */

//  1 no. way
let first;
// console.log(first)

// 2 no. way
function second(a, b) {
  const total = a + b;
}
const result = second();
// console.log(result);

// 3 no. way
function third(a, b, c, d) {
  // console.log(a, b, c, d);
}
third(3, 5);

// 4 no. way
function noNegative(a, b) {
  if (a < 0 || b < 0) {
    return;
  }
  return a + b;
}
const total = noNegative(2, -5);
// console.log(total);

// 5 no. way
const fifth = { id: 3, name: 'rony', age: 23 };
console.log(fifth.age, fifth.salary);

// 6 no. way
const sixth = [4, 80, 34, 53, 634];
// 7 no. way (you should not use)
delete sixth[1];
console.log(sixth[1], sixth[5], sixth[10]);

// 8 no. way
const eight = undefined;
const nine = null;
console.log(typeof null);
