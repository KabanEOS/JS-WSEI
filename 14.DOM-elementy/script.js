// // Zadanie 1
//
// function  getElements(param){
//     let tags = [];
//      for(let i = 0; i < param.length; i++){
//          tags.push(param[i].tagName);
//      }
//      console.log(tags)
//  }

//  const elems = document.getElementsByClassName("more-divs");

//  getElements(elems);

// // Zadanie 2
//
//
// const shortList=document.querySelector('ul.short-list');

// function zad2(element){
//     console.log(element.innerHTML);
//     console.log(element.outerHTML);
//     console.log(element.className);
//     console.log(...[element.classList]);
//     console.log( element.dataset);
// }

// zad2(shortList)

// // Zadanie 3

// function mathematic(){
//     let element = document.getElementById('datasetCheck');
//     console.log(element.dataset)
//     let num1 = Number(element.dataset.numberone);
//     let num2 = Number(element.dataset.numbertwo);
//     let num3 = Number(element.dataset.numberThree);
//     console.log(num1+num2+num3);
//     console.log(num1-num2-num3);
// }

// mathematic();

// // Zadanie 5

// document.getElementById("spanText").innerHTML ="new text";

// document.getElementById("spanText").className ="newclass";

// // Zadanie 6

// const div = document.getElementById("classes");
// const classes = div.classList;

// function showClasses(classesToShow){

//     var str = "";

//     classesToShow.forEach(className => {
//         console.log(className);
//         str += `+${className}`;
//     });

//     str = str.substring(1);

//     console.log(str);
// }

// showClasses(classes);

// div.classList = "";

// console.log("Usunięto wszystkie klasy")

// // Zadanie 7

// const func5 = (els) => {
// 	for (let el of [...els]) if (!el.getAttribute('data-text')) el.setAttribute('data-text', 'text');
// };
// func5(document.querySelectorAll('#longList>li'));

// // Zadanie 8

// function makeObject(string)
// {
//     let obj = {
//         newClass: string
//     };

//     return obj;
// }

// function readAndAssign(obj)
// {
//     let div = document.getElementById("myDiv");
//     let newClass = obj.newClass;
//     div.classList.add(newClass);
// }

// let myObj = makeObject("string_z_parametru");
// readAndAssign(myObj);

// // Zadanie 9

// const div = document.getElementById('numbers');

// const addClass = () => {
//   let params = Math.floor(Math.random() * 10);

//   if(params % 2 == 0) div.className = "even";
//     else div.className = "odd";
// };

// addClass();

// Zadanie 10


// function toArray(items) {

//     tab = [];
//   for (var i = 0; i < items.length; i++) {
//     tab.push(items[i].innerHTML);
//   }

//   return tab;
// }

// console.log(toArray(document.querySelectorAll("#longList li")))


// // Zadanie 11

var items = document.querySelector("#longList")

var children = items.children;

function rndVal(children) {
    for (var i = 0; i < children.length; i++){
        children[i].dataset.value = children[i].innerHTML;
        children[i].innerHTML = Math.floor(Math.random() * (10));
    }
}

rndVal(children);