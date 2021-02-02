// // Do zadania (2) i 3
//
// function delFruit() {
//   let fList = document.getElementById("fList");
//   let toDelete = [];
//   for (i = 0; i < fList.childElementCount; i++) {
//     console.log(i);
//     if (i % 2 != 0) {
//       toDelete.push(fList.children[i]);
//     }
//   }
//   toDelete.forEach((el) => el.remove());
// }
//
//
// // Zadanie 4
//
// function generateDiv() {
//   var gen = document.createDocumentFragment();
//   var count = Math.floor(Math.random() * 10); // random ale do 10 żeby nie scrollować wieczność
//   var i = 0;
//   for (var i = 1; i < count; i++) {
//     let divElement = document.createElement("div");

//     // create text node
//     let divElementText = document.createTextNode(
//       `to jest div numer ${i}`
//     );

//     // append text node to div
//     divElement.appendChild(divElementText);

//     // append div element to document
//     document.body.appendChild(divElement);
//   }
// }
// generateDiv();


