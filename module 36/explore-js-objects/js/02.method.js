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

const output = student.exam();
console.log(output);
const improveExam = student.improveExam('Algebra');
console.log(improveExam);
const treat = student.treat(900, 100);
console.log(treat);
const otherCost = student.treat(400, 100);
console.log(otherCost);
