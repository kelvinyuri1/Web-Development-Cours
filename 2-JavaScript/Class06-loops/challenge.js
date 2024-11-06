// Minha tentativa

let numerosM = [];

for (let megaSena = 0; megaSena < 6; megaSena++) {
  let aleatorio = Math.ceil(Math.random() * 60);
  numerosM.push(aleatorio);
}

while (new Set(numerosM).size !== numerosM.length) {
  numerosM = [];

  for (let megaSena = 0; megaSena < 6; megaSena++) {
    let aleatorio = Math.ceil(Math.random() * 60);
    numerosM.push(aleatorio);
  }
}
console.log(numerosM.join().replaceAll(",", "-"));
console.log("Todos os números são únicos");

// Emanuel fazendo

// const numbers = [];

// while (numbers.length < 6) {
//   const draw = Math.ceil(Math.random() * 60);
//   const formatted = String(draw).padStart(2, 0);

//   if (numbers.includes(formatted)) {
//     continue;
//   } else {
//     numbers.push(formatted);
//   }
// }

// console.log(numbers.sort((a, b) => a - b).join("-"));
