const abdel = {
  firstname: "Abdel",
  lastname: "Sadki",
  fullname: function () {
    console.log( `${this.firstname} ${this.lastname}`);
  },
};
const frieda = {
  firstname: "Frieda",
  lastname: "Reiss",
  fullname: function () {
    console.log( `${this.firstname} ${this.lastname}`);
  },
};

function greet(someone) {
  console.log( `${this.firstname} says hello to ${someone.firstname}`);
}

abdel.greet = greet;
frieda.greet = greet;

abdel.greet(frieda); // returns "Albel says hello to Frieda"
frieda.greet(abdel); // returns "Frieda says hello to Abdel"

//console.log(abdel.greet(frieda));
//console.log(frieda.greet(abdel));
