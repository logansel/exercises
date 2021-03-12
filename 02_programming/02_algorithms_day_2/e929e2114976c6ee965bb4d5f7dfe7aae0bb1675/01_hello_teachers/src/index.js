function sayHelloToTeachers(teachers) {
  return ` Hello ${teachers}!`;
}
// Do not remove last lines, it is for tests

const spartaTeachers = ["Clément", "Fenn", "Nicolas", "Martin", "Louis"];
spartaTeachers.forEach(prof => console.log(sayHelloToTeachers(prof)));
sayHelloToTeachers(spartaTeachers);