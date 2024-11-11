// timeout and interval

//Explicação : A função em baixo imprime teste imediatamente enquanto o setInterval ele vai imprimir interval de 5 em 5 segundos que em milessimo (5000).

function test() {
  console.log("teste");
}

// setInterval(() => {
//     console.log("interval");
// }, 5000)

//Relogio(Abaixo)

// setInterval(() => {
//     const clock = new Date()
//     console.log(clock.toLocaleTimeString());
// }, 1000)

// TIMEOUT basicamente é a mesma coisa que o de cima so que ele executa uma vez so depois de 5 segundos
setTimeout(() => {
  console.log("interval");
}, 5000);

//promises

const urlApi = "https://jsonplaceholder.typicode.com";

fetch(urlApi + "/users")
    .then((response) => response.json())
    .then((data) => console.log(data));

// timeout e interval

// console.log("Antes");

// setTimeout(() => {
//     console.log("Timeout");
// },0)

// setInterval(() => {
//     console.log("Interval");
// },0)

// console.log("Depois");

for (let i = 0; i < 10000; i++) {
    console.log(i);
}

setTimeout(() => {
    console.log("Timeout!");
}, 1000)