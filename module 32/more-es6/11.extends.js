class TeamMember {
  name;
  location;
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  provideFeedback() {
    console.log(`${this.name} Thank you for your feedback`);
  }
}

class Instructor extends TeamMember {
  designation = 'Web Course Instructor';
  team = 'Web Team';
  constructor(name, location) {
    super(name, location);
  }
  startSupportSession(time) {
    console.log(`start the support session at ${time}`);
  }
  createQuiz(module) {
    console.log(`please create quiz for module ${module}`);
  }
}

class Developer extends TeamMember {
  designation = 'Web Course Instructor';
  team = 'Web Team';
  tech;
  constructor(name, location, tech) {
    super(name, location);
    this.tech = tech;
  }
  developFeature(feature) {
    console.log(`Please develop the ${feature}`);
  }
  createQuiz(version) {
    console.log(`please release the ${version}`);
  }
}

class JobPlacement extends TeamMember {
  designation = 'Job Placement Commandos';
  team = 'Job Placement';
  region;
  constructor(name, location, region) {
    super(name, location);
    this.region = region;
  }
  provideResume(feature) {
    console.log(`Please develop the ${feature}`);
  }
  prepareStudent(version) {
    console.log(`please release the ${version}`);
  }
}

const Ahmed = new Instructor('Ahmed', 'Rangpur');
console.log(Ahmed);

const Ummme = new Developer('Ummme', 'Nilphamary', 'React');
console.log(Ummme);
