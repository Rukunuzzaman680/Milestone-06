// no more use var
// let: let it to reassign
// const: do not allow it to reassign

let money = 25;
money = 35;
console.log(money);

const bird = 'jaan pakhi ';
// bird = 'moyna pakhi';
const message = bird + 'fly in sky';
console.log(message);

const numbers = [11, 222, 33, 444, 55, 555];
// reassign is not allowed
// numbers = [66, 88, 44, 22, 77];
numbers.push(2424);
numbers[1] = 90;
console.log(numbers);

const student = {
  name: 'rony',
  address: 'rangpur',
};
// student = { name: 'Umme' };
student.name = 'umme';
console.log(student);

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  sum = sum + number;
}
console.log(number);
