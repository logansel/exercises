const tri = ["Martin"];
const firstletter = tri[0][0].toUpperCase();

console.log(
  tri[0][0].substr(0, 1) !== "A" &&
    tri[0][0].substr(0, 1) !== "E" &&
    tri[0][0].substr(0, 1) !== "I" &&
    tri[0][0].substr(0, 1) !== "O" &&
    tri[0][0].substr(0, 1) !== "U" &&
    tri[0][0].substr(0, 1) !== "Y",
);

console.log(firstletter);
