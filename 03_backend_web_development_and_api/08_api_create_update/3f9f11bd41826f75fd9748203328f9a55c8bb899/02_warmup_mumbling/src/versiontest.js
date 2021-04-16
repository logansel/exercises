const tab = "AbCd";
const lowercaseSeparate = tab.toLowerCase().split("");

const multiply = lowercaseSeparate.map((element, index) => {
  return element.repeat(index + 1);
});

const sentencefinish = multiply.join("-");
console.log(sentencefinish);
