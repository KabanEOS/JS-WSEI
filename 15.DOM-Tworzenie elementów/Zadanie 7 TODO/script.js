btn1 = document.querySelector("#btn1");
btn2 = document.querySelector("#btn2");

// var list1 = document.getElementById("list1")
var list1 = document.querySelector("#list1");

// var list2 = document.getElementById("list2")
var list2 = document.querySelector("#list2");

var childrenLi1 = list1.children;
var childrenLi2 = list2.children;

console.log(childrenLi1);
console.log(childrenLi2);

var li1lon = childrenLi1.length;
var li2lon = childrenLi2.length;

var newItem;

// if (childrenLi1.length == 0) {
//     btn1.disabled = true;
// }else {
//     btn1.disabled = false;
// }

// if (childrenLi2.length == 0) {
//     btn2.disabled = true;
// }else {
//     btn2.disabled = false;
// }

// TODO on last jump
// script.js:119 Uncaught TypeError: Cannot read property 'removeChild' of null
// and btn.disabled doesn't work

function jump1() {
    if (childrenLi1.length > 0) {
        newItem = list1.lastElementChild;
        list2.appendChild(newItem);
        list1.lastElementChild.removeChild;

        console.log(childrenLi1.length);
        console.log(childrenLi2.length);
    }
}

function jump2() {
    if (childrenLi2.length > 0) {
        newItem = list2.lastElementChild;
        list1.appendChild(newItem);
        list2.lastElementChild.removeChild;

    }
}