// literal object
const player = {};
player.name = 'Rony Ahmed';
player.specialty = 'batsman';
player.bat = function () {
  console.log('swing your bat');
};
// console.log(player);
// player.bat();

const student = {
  name: 'Rukunuzzaman',
  job: 'developer',
  ball: function () {
    console.log('develop web design');
  },
  salary: 100000,
};

// 2. object constructor
const person = new Object(student);
// console.log(person.name);

// 3. object create method
// const item = Object.create(null);
const developer = Object.create(student);
console.log(developer.name);

// 4. class
class Person {
  name = 'abul';
  address = 'sundar ban';
  constructor(age) {
    this.age = age;
  }
}
const person1 = new Person(45);
console.log(person1);

// 5. Function
function Car(model, price) {
  this.model = model;
  this.price = price;
}
const tesla = new Car('Mask', 32);
console.log(tesla);
