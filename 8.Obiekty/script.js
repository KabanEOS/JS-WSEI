// // Zadanie 1
//
// let car = {
//     name: "BMW",
//     age: 6
// }
//
// console.log(car.name);
// console.log(car.age);
//
// // Zadanie 2
// let car = {
//     name: "BMW",
//     age: 6,
//     changeName: function(newName) {
//         this.name = newName;
//     }
// }
//
// car.changeName("polonez");
// console.log(car.name);
// console.log(car.age);

// Zadanie 3
//
// let newObject = {
//     sum: 0,
//     sumValues: function(array) {
//         let sum;
//         array.forEach(item => this.sum += item);
//     }
// }
//
// newObject.sumValues([1, 5, 7]);
// console.log(newObject.sum);

// Zadanie 4
//
// let car = {
//     name: "BMW",
//     age: 12,
// };
// const carCountryCity = {
//     country: 'Poland',
//     city: 'Krakow'
// };
// for(let key in car){
//     console.log(key + ":" + car[key]);
// }

// Zadanie 5

let car = {
    name: "BMW",
    age: 12,
};

car.hello = () => {
    console.log("Hello");
}

car.hello();