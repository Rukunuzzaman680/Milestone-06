// \n Meta Character
const multiple =
  'First Line Text \n' +
  'Second Line of Code \n' +
  'Third Line of Code \n' +
  'Forth line of Code \n';
// console.log(multiple);

// Template literals multiline string (backtick { `` })
const newMultiple = `First Line Text
Second Line of Code
Third Line of Code
Forth line of Code
`;
// console.log(newMultiple);

const a = 20;
const b = 30;
const summary = 'sum of; ' + a + ' and ' + b + ' is: ' + (a + b);
// console.log(summary);

// Template Literals (Interpolation ${} )
const newSummary = `sub of ${a} and ${b} is: ${a + b}`;
console.log(newSummary);
