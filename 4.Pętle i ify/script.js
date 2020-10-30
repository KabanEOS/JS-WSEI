// // Zadanie 1
// let num41 = 12;
// let num42 = 42;
//
// if(num41 < num42) console.log("num1 jest większy")
// else console.log("num1 jest mniejszy")
//
// // Zadanie 2
// let num43 = 35
// let num44 = 12
// let num45 = 389
//
// if(num43 > num44 && num44 > num45) {
//     console.log("num43: " + num43 + " is the biggest")
// } else if(num44 > num45) {
//     console.log("num44: " + num44 + " is the biggest")
// } else {
//     console.log("numn45: " + num45 + "is the biggest")
// }
//
// // Zadanie 3
// for (var i = 1; i<=10; i++) console.log("Lubię JS")
//
// // Zadanie 4
// let result = 0;
// for (j = 1; j<=10; j++){
//     result+=j;
//     console.log(result);
// }
//
// // Zadanie 5
// var n = 8;
// for (let k = 0; k<=n; k++) {
//     if(k%2==1) console.log(k + " - nieparzysta");
//     else console.log(k + " - parzysta");
// }
//
// // Zadanie 6
// for (let a = 1; a<=4 ;a++){
//     for (let b = 1; b<=4; b++){
//         console.log("a= " + a + ", b = " +b);
//     }
// }
//
// // Zadanie 7
//
// for(let d = 1; d<=100; d++){
//     if (d%3 == 0 && d%5 == 0) console.log("FizzBuzz");
//     else if (d%3 == 0) console.log ('Fizz');
//     else if (d%5 == 0) console.log ('Buzz');
//     else console.log (d)
// }
//
// // Zadanie 8
// // a)
//
// for (let line = 1; line<=5; line++){
//     console.log("*".repeat(line))
// }
//
// // b)
//
// let row = 5; // variable length
// let ceil = Math.ceil(row/2);
// for (z = row; z >= 0 ; z--){
//     console.log(" ".repeat(z) + "* ".repeat(row-z))
// }
//
// // c)
//
let row = 5; // variable length
let len = row + 1;
let ceil = Math.ceil(row/2);
for (z = len; z >= 0 ; z--){
    console.log(" ".repeat(z) + "* ".repeat(len-1-z))
}


