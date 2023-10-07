/**
 Truly:
 1. true
 2. any positive and negative number is truthy
 3. any string
 4. except empty string (' ')
 5. ('0'), 'false'
 6. empty object and array '{}', '[]'

 Falsy:
 1. false
 2. 0
 3. empty string ('')
 4. null

 */
console.log('my name is rony');
const x = '4';
if (x) {
  // console.log('value of x is truthy');
} else {
  // console.log('value od x is falsy');
}

// optional --- check falsy
const y = null;
if (!y) {
  console.log('value is falsy');
} else {
  console.log('value is truthy');
}

// check truthy
const z = 34;
if (!!z) {
  console.log('value is truthy');
}
