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

// // Zadanie 6

// const obj = {
//   div1: "to jest div1",
//   span1: "to jest span1",
//   div2: { div3: "to jest div3" },
//   span2: "to jest span2",
// };

// // console.log(Object.values(obj))

// const div1 = document.createElement("div");
// div1.innerHTML = obj.div1;
// document.body.appendChild(div1);

// const span1 = document.createElement("span");
// span1.innerHTML = obj.span1;
// document.body.appendChild(span1);

// const div2 = document.createElement("div");
// const div3 = document.createElement("div");
// div3.innerHTML = obj.div2.div3;
// div2.appendChild(div3);
// document.body.appendChild(div2);

// const span2 = document.createElement("span");
// span2.innerHTML = obj.span2;
// document.body.appendChild(span2);

// // Zadanie 7

// btn1 = document.querySelector("#btn1");
// btn2 = document.querySelector("#btn2");

// // var list1 = document.getElementById("list1")
// var list1 = document.querySelector("#list1");

// // var list2 = document.getElementById("list2")
// var list2 = document.querySelector("#list2");

// var childrenLi1 = list1.children;
// var childrenLi2 = list2.children;

// console.log(childrenLi1);
// console.log(childrenLi2);

// var li1lon = childrenLi1.length;
// var li2lon = childrenLi2.length;



// var newItem;

// // if (childrenLi1.length == 0) {
// //     btn1.disabled = true;
// // }else {
// //     btn1.disabled = false;
// // }

// // if (childrenLi2.length == 0) {
// //     btn2.disabled = true;
// // }else {
// //     btn2.disabled = false;
// // }

// // TODO on last jump 
// // script.js:119 Uncaught TypeError: Cannot read property 'removeChild' of null
// // and btn.disabled doesn't work

// function jump1() {
//     if (childrenLi1.length > 0) {
//         newItem = list1.lastElementChild;
//         list2.appendChild(newItem);
//         list1.lastElementChild.removeChild;

//         console.log(childrenLi1.length);
//         console.log(childrenLi2.length);
//     }
// }

// function jump2() {
//     if (childrenLi2.length > 0) {
//         newItem = list2.lastElementChild;
//         list1.appendChild(newItem);
//         list2.lastElementChild.removeChild;


//     }
// }

// // Zadanie 8

function check_welcome()
{
    var pole_name = document.forms['pozdrowienie'].name;
    // odczyt namenia
    var name = pole_name.value;
    // sprawdzenie czy name jest wpisane
    if (name != '')
        alert('Witaj, ' + name + '!');
    else
    {
        alert('Wpisz swoje imię!');
        pole_name.focus();
    }
    return false;
}