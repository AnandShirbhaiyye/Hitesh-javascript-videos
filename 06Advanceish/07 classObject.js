//import User from "./06classjs.js";

const User = require("./06classjs.js");

const anand = new User("Anand", "anand@gmail.com");

console.log(anand.getInfo());

anand.enrollCourse("JavaScript");
anand.enrollCourse("HTML");
anand.enrollCourse("CSS");

console.log(anand.getCourseList());

let courses = anand.getCourseList();

courses.forEach((course) => console.log(course));