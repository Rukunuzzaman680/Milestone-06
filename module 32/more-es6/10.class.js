// syntactic sugar
class Instructor {
  name;
  designation = 'Web Course Instructor';
  team = 'Web Team';
  location;
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  startSupportSession(time) {
    console.log(`start the support session at ${time}`);
  }
  createQuiz(module) {
    console.log(`please create quiz for module ${module}`);
  }
}
const rony = new Instructor('Ahmed', 'Rajshahi');
console.log(rony);
rony.startSupportSession('9.00');
rony.createQuiz(60);

const sulaiman = new Instructor('Sulaiman khan', 'Rajshahi');
console.log(sulaiman);
