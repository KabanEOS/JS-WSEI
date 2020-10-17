// XXX Zadanie 1
let bool1 = true;
let bool2 = false;

console.log(bool1 == bool2);
console.log(bool1 === bool2);

// Zadanie 2
let num1 = 1;
let num2 = 2;

let moduloResult = 0;

moduloResult = num1 % num2

console.log(moduloResult);

// Zadanie 3
let txt1 = "buffalo ";
let txt2 = "buffalo";
let stringResult = "";

stringResult = txt1 + txt2;

console.log(stringResult);

//  Zadanie 4
var someNumber = 425;
var someString = "425";

console.log(someNumber == someString);
// Zwraca true jeżeli operandy są równe. Jeżeli operandy nie są tego samego typu, JavaScript próbuje przekształcić operandy na odpowiedni dla porównania typ.
console.log(someNumber === someString);
// Zwraca true jeżeli operandy są równe i tego samego typu.

// Zadanie 5
let counter = 30;
counter++;
console.log(counter);
counter--;
console.log(counter);

// Zadanie 6

let num1 = 42;
let num2 = 24;
let result = null;
result = num1 > num2;
console.log(result)