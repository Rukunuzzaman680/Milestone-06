// JavaScript is a dynamic type Language

// primitive type
const a = 5;
const b = 'this is type js';
const c = true;

// non-primitive
const ages = [43, 63, 66];
const student = { id: 23, class: 5 };

// console.log(typeof a, typeof b, typeof c, typeof ages, typeof student);

let x = 5;
let y = x;
y = 7;
console.log(x, y);

let p = { job: 'web developer' };
let q = p;
q.job = 'front developer';
q = { job: 'backend end' };
