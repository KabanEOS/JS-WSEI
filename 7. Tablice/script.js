// // Zadanie 1

// const tab = ["Marcin", "Ania", "Agnieszka"];
//
// for (let i=0; i<tab.length; i++) {
//     console.log(tab[i]);
// }
// //Zadanie 2
//
// let myTable = [1, 2, 3, 4, 'aaa', 'bbbb'];
//
// console.log(myTable[0]);
// console.log(myTable[myTable.length-1]);
// console.log(myTable);
//
// for(let i=0; i<myTable.length; i++){
//     if(i%2 == 0){
//         console.log(myTable[i])
//     }
//     if(typeof(myTable[i]) == 'string') {
//         console.log(myTable[i])
//     }
//     if(typeof(myTable[i]) == 'number') {
//         console.log(myTable[i])
//     }
// }

// // Zadanie 4
//
//TODO zrozumieć
//
// const arr = [42, 32, 12, 53, 12, 51];
//
// // 1
// console.log(arr.reduce((a, b) => a + b));
// // 2
// console.log(arr.reduce((a, b) => a - b));
// // 3
// console.log(arr.reduce((a, b) => a + b / arr.length));
// // 4
// arr.filter((v, i) => v % 2 === 0).forEach(v => {
//     console.log(v);
// });
// // 5
// arr.filter((v, i) => v % 2 !== 0).forEach(v => {
//     console.log(v);
// });
// // 6
// let biggest = 0;
// arr.forEach(v => {
//     if (v > biggest) {
//         biggest = v;
//     }
// });
// console.log(biggest);
// // 7
// let smallest = 0;
// arr.forEach(v => {
//     if (v < smallest) {
//         smallest = v;
//     }
// });
// console.log(smallest);
// // 8
// const arrLength = arr.length - 1;
// arr.forEach((v, i) => {
//     console.log(arr[arrLength - i]);
// });
//
//

// Zadanie 5
//
// function myTable(paramTable){
//
//     for(i=0; i<paramTable.length; i++){
//         console.log()
//     }
// };
//
// myTable([1,2,3,4]);
//
// // Zadanie 6
//
// myTable([1,2,3,4]);
//
// function myTable(paramTable){
//     var sum =0;
//     var length = 0;
//     for (i=0; i<paramTable.length; i++){
//         if(paramTable[i] % 2 == 0){
//
//             sum = sum + paramTable[i];
//             length++;
//         }
//
//     }
//     let avg = sum / length;
//     console.log(avg)
// };
//
// // Zadanie 10
//
// // nie moje
//
// function reserveSing(paramTable)
// {
//     return  paramTable.map(el => {
//         return el * (-1);
//     })
// }
// console.log(reserveSing([1,2,3,4,6,-6]));