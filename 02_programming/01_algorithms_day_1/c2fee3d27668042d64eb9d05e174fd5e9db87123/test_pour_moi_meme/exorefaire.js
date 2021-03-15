const digits = [];

digits.push(1);
digits.push(2);
digits.push(3);
digits.push(4);
digits.push(5);
digits.push(6);
digits.push(7);
digits.push(8);
digits.push(9);

const digits2 = [];
for (let i = 0; i < 10; i++){
  digits2.push(i);
}

const digits3 =[];
let i = 1;
while ( i < 9){
  i++;
  digits3.push(i);
}

const last = digits.length;
const last2 = digits[8];
const first = digits[0];

const litteralDigitsde = ["un","deux","trois","quatre","cinq","six","sept","huit","neuf"];
const alldigits = litteralDigitsde.join(" , ");


/*console.log(first);
console.log(last);
console.log(last2);
console.log(digits);
console.log(digits2);
console.log(digits3);*/
console.log(alldigits);