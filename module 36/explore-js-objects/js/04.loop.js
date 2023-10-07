// for of loop do not use of objects

const bottle = {
  color: 'yellow',
  capacity: 2,
  isCleaned: true,
  price: 200,
};

// first option to loop throw an object

/**
 * 3 ways to read object properties
1. bottle.color
2. bottle['color']
3. bottle[key]
 */

const keys = Object.keys(bottle);
// console.log(keys);

for (const key of keys) {
  // console.log(key, bottle[key]);
}

// for in loop
for (const key in bottle) {
  const value = bottle[key];
  // console.log(key, value);
}

// advanced
const key = Object.entries(bottle);
// console.log(key);

for (const [key, value] of Object.entries(bottle)) {
  console.log(key, value);
}
