//Strings

console.log("Teste");

let concept = "prototype (chain)";
let myName = "Kelvin Yuri";

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

let num = 123456789;
let num2 = 4.43333333;
console.log(String(num).length);
console.log(num2.toFixed(2));

//Biblioteca Math

console.log(Math.sqrt(81));
console.log(Math.pow(2, 10));

console.log(Math.abs(num2));
console.log(Math.trunc(num2));

console.log(Math.round(5.4)); // 0-4 5-9
console.log(Math.ceil(5.001));
console.log(Math.floor(5.999));

console.log(Math.random());
console.log(Math.ceil(Math.random() * 100));
console.log(Math.round(Math.random() * 10));

const times = [
  "corinthias",
  "Flamengo",
  "São paulo",
  "Fortaleza",
  "Ceará",
  "Vasco",
];

const randomNumber = Math.floor(Math.random() * times.length);

console.log(times[randomNumber]);

// array

const city = ["gramado", "Fortaleza", "Bahia", "sergipe", "alagoas"];

console.log(city.length);
console.log(city[1]);
city[0] = "jucás";
console.log(city);

let a = "Kelvin"
a[1] = "E" // String is immutable!
console.log(a);

console.log(city.join()); // Separação/Junção por virgula (Junção pq city é uma lista e fica sseparada por [] e join deixe sem)

console.log("Bem Vindo à aula".replaceAll(" ", "-"));

console.log(city.includes("jucás"));

console.log("Kelvin-Yuri-Silva-Felix".replaceAll("-", " "));
console.log("Kelvin Yuri Silva Felix".split(" "));

console.log(city.reverse());
console.log("Kelvin");
console.log("Kelvin".split("").reverse().join(""));

function Count() {
   let text = "é isso ai rapaziada deixa o like"
   let divido = text.split(" ").length
    return divido;
}

console.log(Count());


const tvPrograms = ["Domingo Legal", "Fantástico", "Domingão com Hulk"];

// LIFO
// tvPrograms.pop();
// tvPrograms.pop();
tvPrograms.push("Bom dia e Cia");
tvPrograms.push("TV Globinho");
tvPrograms.pop();

// FIFO
tvPrograms.unshift("TV Cruj");
tvPrograms.unshift("Castelo Ratimbum");
// tvPrograms.shift()

tvPrograms.splice(3, 2);
tvPrograms.splice(1, 4, "aaaa");

console.log(tvPrograms);

// Date

const dateNow = new Date();
console.log(dateNow);
console.log(dateNow.toLocaleString("pt-BR"));
console.log(dateNow.toLocaleDateString("pt-BR"));
console.log(dateNow.toLocaleTimeString("pt-BR"));

console.log(
  dateNow.toLocaleString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
);

const birthday = new Date("2006-10-30 00:00:00");

console.log(birthday);
console.log((dateNow - birthday) / 1000 / 60 / 60 / 24 / 365.25);

console.log(dateNow.getFullYear());
console.log(birthday.getFullYear());
console.log(dateNow.getFullYear() - birthday.getFullYear());

//Desafios

// Desafio 1: Uma função para verificar palíndromos e retorne true e false. A logica deve receber string com palavra ou texto
function verificar(text) {
  let text_miniscula = text.toLocaleLowerCase().replaceAll(" ", "");
  let inverso = text_miniscula.split("").reverse().join("");
  if (inverso == text_miniscula) {
    return true;
  } else {
    return false;
  }
}
document.write(verificar(prompt("Digite um nome pra verificar se é palindromo: ")));

// Desafio 2: Uma logica que verifique quantos dias faltam para o ano novo (01/01/2025)

const newYear = new Date("2025-01-01 00:00:00")
const today = new Date()
const daysToNewYear = newYear - today

console.log(Math.floor(daysToNewYear / 1000 / 60 / 60 / 24));