// object destructing

const { age, name } = { name: 'Rony', age: 56, profession: 'developer' };
// console.log(age, name);

const fish = {
  name: 'Hilsa fish',
  address: 'Chadpur',
  color: 'silver',
  phone: '01890267920',
  price: 400,
};
// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;
const { color, price, phone } = fish;
// console.log(color, price);

// array destructuring
const [first, another] = [44, 55, 66, 767];
// console.log(first, another);

const players = ['Tamim', 'Musfiqur', 'Mahmudullah'];
const [opening, middle, last] = players;
// console.log(middle);

// destructuring in function
function getNames() {
  return ['Shafiul', 'Soyadul'];
}
const [baba, chaca] = getNames();
console.log(baba, chaca);
