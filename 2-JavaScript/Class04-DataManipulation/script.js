//Strings

console.log("Teste");

let concept = "prototype (chain)"
let myName = "Kelvin Yuri"

console.log(myName.__proto__);
console.log(myName.toLocaleLowerCase());
console.log(myName.toLocaleUpperCase());
console.log(myName.slice(0));

console.log(myName.slice(1));
console.log(myName.slice(-4));
console.log(myName.slice(1, -1));

console.log(concept.length);
console.log(concept.indexOf("("));

//Numbers

let num = 123456789
let num2 = 4.43333333
console.log(String(num).length);
console.log(num2.toFixed(2));

//Biblioteca Math

console.log(Math.sqrt(81));
console.log(Math.pow(2, 10));

console.log(Math.abs(num2));
console.log(Math.trunc(num2));

console.log(Math.round(5.4));// 0-4 5-9
console.log(Math.ceil(5.001));
console.log(Math.floor(5.999));

console.log(Math.random());
console.log(Math.ceil(Math.random() * 100))
console.log(Math.round(Math.random() * 10))

const times = ["corinthias", "Flamengo", "São paulo", "Fortaleza", "Ceará", "Vasco"]

const randomNumber = Math.floor(Math.random() * times.length);

console.log(times[randomNumber]);








