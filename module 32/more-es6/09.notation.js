const student = {
  name: 'Rony',
  age: 23,
  class: 'Honors',
  marks: {
    math: 70,
    islam: 87,
    english: 88,
  },
};

const marks = student.marks;
const math = student.marks.math;

const english = student['marks']['english'];
const subject = 'math';
const subjectMarks = student.marks[subject];
console.log(english, subjectMarks);
