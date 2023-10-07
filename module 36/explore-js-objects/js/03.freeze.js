const bottle = {
  color: 'yellow',
  capacity: 2,
  isCleaned: true,
  price: 200,
};
const keys = Object.keys(bottle);
// console.log(keys);
const values = Object.values(bottle);
// console.log(values);
const entires = Object.entries(bottle);
// console.log(entires);

console.log(bottle);

Object.seal(bottle);
// Object.freeze(bottle);
delete bottle.isCleaned;
bottle.price = 400;
bottle.height = 10;

console.log(bottle);

/** " Summary "
 * keys
 * values
 * entires
 * seal
 * freeze
 * delete
 */
