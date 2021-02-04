// // Zadanie 1
// let sayHi = () => {
//     console.log("Udało się!")
// };
// sayHi();
//

// // Zadanie 2

// let txt = 'wow';
// returnString  = (txt) => {
//     return txt;
// }
// console.log(returnString(txt));

// // Zadanie 3

// let txt = ['omg','wow','itd'];
// returnTable  = (txt) => {
//     return txt;
// }
// console.log(returnTable(txt));

// // Zadanie 4

counter = 0;

function idle() {
  myInterval = setInterval(count, 3000);
}

function count() {
  console.log("bum");
  counter++;
  if (counter == 5) {
    console.log("Koniec");
    stop();
  }
}

function stop() {
  clearInterval(myInterval);
}

idle();
