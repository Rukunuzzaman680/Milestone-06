let num1 = 5;
let num2 = 7;

function multiple(a, b) {
  const result = a * b;
  return result;
}
console.log(num1);
const output = multiple(num1, num1);
console.log(output);

let student1 = { name: 'Rony', partner: 'Ratul' };
let student2 = { name: 'Ahmed', partner: 'Islam' };

function makeMovie(couple1, couple2) {
  couple1.name = 'Rukunuzzaman';
  couple2.partner = 'Mustafa';
}
console.log(student1, student2);
makeMovie(student1, student2);
console.log(student1, student2);
