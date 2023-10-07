// 1. var let const
// do not use var
const numbers = [12, 455, 33, 64];
let salary = 455;
salary = 333;

// 2. default parameters
function calculateSalary(salary, tax, bonus = 0) {
  const remaining = salary - salary * tax;
  const total = remaining + bonus;
  return total;
}

// 3. template string
const elemenHTML = `
<div>
   <h3>Name: Rony</h3>
   <p>Address: Rangpur</p>
   <p>Salary: ${calculateSalary(1000, 0, 10)}</p>
   <p>Others: ${numbers[2]}</p>
</div>
`;

// 4. arrow function
const doubleIt = x => x * 2;
const calculateSalary2 = (salary, tax, bonus) => salary - salary * tax + bonus;

// 5. spread
const age = [11, 22, 33, 44, 55, 66];
const newAge = [...age, 77, 88, 99];

//  destructuring
const { x, y, z, ...c } = { x: 34, y: 33, z: 44, name: 'rony', salary: 5000 };
const [a, b, ...r] = [11, 222, 333, 564, 5654];
