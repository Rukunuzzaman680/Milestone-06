// array like object
function sum(a, b, c) {
  const args = [...arguments];
  console.log(args);
  const result = a + b + c;
  return result;
}
const total = sum(35, 66, 77, 23, 64);
console.log(total);
