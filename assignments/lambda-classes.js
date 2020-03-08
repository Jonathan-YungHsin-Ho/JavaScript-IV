// CODE here for your Lambda Classes

class Person {
  constructor(attrs) {
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
  }
  speak() {
    console.log(`Hello, my name is ${this.name}. I am from ${this.location}.`);
  }
}

class Instructor extends Person {
  constructor(insAttrs) {
    super(insAttrs);
    this.specialty = insAttrs.specialty;
    this.favLanguage = insAttrs.favLanguage;
    this.catchPhrase = insAttrs.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}!`);
  }
  randomPoints(student) {
    let points = Math.floor(Math.random() * 41 - 20);
    student.grade += points;
    console.log(
      `${this.name} changes ${student.name}'s grade by ${points} points!`
    );
  }
}

class Student extends Person {
  constructor(studAttrs) {
    super(studAttrs);
    this.previousBackground = studAttrs.previousBackground;
    this.className = studAttrs.className;
    this.favSubjects = studAttrs.favSubjects;
    this.grade = studAttrs.grade;
  }
  listsSubjects() {
    this.favSubjects.forEach(element => console.log(element));
  }
  pRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}.`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun Sprint Challenge on ${subject}.`);
  }
  shareGrade() {
    console.log(`${this.name}'s grade is ${this.grade}.`);
  }
  graduate() {
    this.shareGrade();
    console.log(this.grade > 70 ? `Cue Pomp and Circumstance... ${this.name} is ready to graduate from Lambda School!` : `Sorry, ${this.name} isn't ready to graduate from Lambda School... Go back and increase your score!`);
  }
}

class ProjectManager extends Instructor {
  constructor(pmAttrs) {
    super(pmAttrs);
    this.gradClassName = pmAttrs.gradClassName;
    this.favInstructor = pmAttrs.favInstructor;
  }
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
  }
}

const drogo = new Person({
  name: "Khal Drogo",
  age: 30,
  location: "Vaes Dothrak"
});

const cersei = new Person({
  name: "Cersei",
  age: 31,
  location: `King's Landing`
});

const fred = new Instructor({
  name: "Fred",
  location: "Bedrock",
  age: 37,
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Don't forget the homies`
});

const brit = new Instructor({
  name: "Brit",
  location: "Ottawa",
  age: `I'll never tell`,
  favLanguage: "CSS",
  specialty: "Front-end",
  catchPhrase: `Let's git "this" party started`
});

const jonathan = new Student({
  name: "Jonathan",
  age: 36,
  location: "Brooklyn",
  previousBackground: "high school teacher",
  className: "WEB22",
  favSubjects: ["HTML", "CSS", "JavaScript"],
  grade: Math.floor(Math.random() * 100 + 1)
});

const samwell = new Student({
  name: "Samwell",
  age: 25,
  location: "The Citadel",
  previousBackground: `The Night's Watch`,
  className: "DS1",
  favSubjects: ["Materials Science", "Greyscale Remedies"],
  grade: Math.floor(Math.random() * 100 + 1)
});

const brandon = new ProjectManager({
  name: "Brandon",
  location: "Chicago",
  age: "unknown",
  favLanguage: "JavaScript",
  specialty: "Full-Stack",
  catchPhrase: "Stand up! Hop in when you can!",
  gradClassName: "CS1",
  favInstructor: "Brit"
});

const amanda = new ProjectManager({
  name: "Amanda",
  location: "n/a",
  age: "n/a",
  favLanguage: "JavaScript",
  specialty: "Full-Stack",
  catchPhrase: "Here is your JavaScript code challenge for today!",
  gradClassName: "CS1",
  favInstructor: "Brit"
});

// drogo.speak();
// cersei.speak();

// console.log(fred.catchPhrase);
// console.log(brit.catchPhrase);

// jonathan.listsSubjects();
// samwell.listsSubjects();

// jonathan.pRAssignment("JavaScript-III");
// samwell.pRAssignment("JavaScript-II");

// jonathan.sprintChallenge("JavaScript-III");
// samwell.sprintChallenge("JavaScript-II");

// brandon.standUp('web22_brandon');
// amanda.debugsCode(samwell, 'JavaScript-II');

jonathan.shareGrade();
brit.randomPoints(jonathan);
brandon.randomPoints(jonathan);
jonathan.graduate();
