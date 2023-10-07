const student = {
  name: 'Rony',
  study: 'Math',
  money: 5000,
  subject: ['calculus', 'algebra', 'geometry'],
  exam: function () {
    return this.name + ' is participating in exam';
  },
  improveExam: function (subject) {
    this.exam();
    return `${this.study} is taking improve exam ${subject}`;
  },
  treat: function (amount, tips) {
    this.money = this.money - amount - tips;
    return this.money;
  },
};

const person = {
  name: 'rony',
  money: 6000,
  subject: 'History',
};

const result1 = student.exam.call(person);
console.log(result1);

const result2 = student.treat.call(person, 2000, 100);
console.log(result2);

const result3 = student.treat.apply(person, [2000, 100]);
console.log(result3);

const result4 = student.treat.bind(person);
const remaining = result4(500, 50);
console.log(remaining);
