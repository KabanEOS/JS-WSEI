// Zadanie 1
//
// const buz = document.querySelector("#buz");
// const baz = document.querySelector("#baz");
// const foo = document.querySelector("#foo");
//
// console.log(buz.parentElement);
// console.log(baz.previousElementSibling);
// console.log(foo.children);
// console.log(foo.parentNode);
// console.log(foo.firstElementChild);
// console.log(foo.children[Math.floor(foo.children.length / 2)]);

// // Zadanie 2
//
// function foo(element) {
//     var element1 = document.getElementById(element);
//     element1.addEventListener('click', function(){
//         var txt = this.children[0].children[0].children[0].children[1].children[0].children[0].innerText;
//         console.log(txt);
//     })
// }
//
// foo("ex2");

// // Zadanie 3
//
// function foo() {
//     const root = document.getElementById('ex3');
//     const buttons = root.querySelector('button')
// }
//
// // Zadanie 4
//
// function foo(){
//     const root = document.getElementById('ex3');
//     const buttons = root.querySelectorAll('button');
//
//     buttons.forEach(key => {
//         console.log(key)
//
//         key.addEventListener('click', e => {
//             if(key.nextElementSibling.style.display === 'none'){
//                 key.nextElementSibling.style.display='block';
//             }else {
//                 key.nextElementSibling.style.display='none';
//             }
//         })
//     })
// }
//
// foo()

// Zadanie 4

// const ex3Divs = document.querySelectorAll('#ex3 button');
//
// ex3Divs.forEach((div) => {
//     div.addEventListener('click', (event) => {
//         const parentElement = event.target.parentElement;
//         let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
//         parentElement.style.backgroundColor = randomColor;
//     })
// })

// Zadanie 5

var elements = document.querySelectorAll("div#ex5 div");

var listElements = document.querySelectorAll("div#ex5 li");

for(var i = 0; i < elements.length; i++){
    elements[i].addEventListener('mouseover', function(){
        var color = this.style.backgroundColor;

        //listElements[0].style.backgroundColor = color;
        //listElements[listElements.length - 1].style.backgroundColor = color;
        /*for(var j = 0; j < listElements.length; j++) {
            if(j % 2 !== 0) {
                listElements[j].style.backgroundColor = color;
            }
        }*/
        /*for(var j = 0; j < listElements.length; j++) {
            listElements[j].style.backgroundColor = color;
        }*/

        ulElement.style.backgroundColor = color;
        
    })
}



