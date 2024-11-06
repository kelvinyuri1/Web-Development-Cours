// MAP (immutable)🌟

const numbers = [10, 20, 30];
console.log(numbers.map((num) => num + 1));
console.log(numbers.map((num) => num * 5.74));

const devs = [
  { name: "Kelvin", salary: 5500 },
  { name: "edson", salary: 150 },
  { name: "fred", salary: 7000 },
];

console.log(
  devs.map((dev) => {
    return dev;
  })
);

const newSalaries = devs.map((dev) => {
  return parseFloat(dev.salary * 1.1).toFixed(0);
});
console.log(newSalaries);

//filter (immutable)🌟

// const devFiltered = devs.filter((dev) => dev.salary > 6000);
// console.log(devFiltered);

// const resp = prompt("Digite o nome: ").toLocaleLowerCase();

// const resultFilter = devs.filter((dev) =>
//   dev.name.toLocaleLowerCase().includes(resp)
// );
// console.log(resultFilter);

// sort

const numbers2 = [1, 4, 9, "a", "A", 2, 10, 33, "Kelvin"];
console.log(numbers2);
numbers2.sort();
numbers2.sort((a, b) => a - b); // Organiza os numericos

console.log(numbers2);

// Para organizar tudo tanto caractere quanto numero por ordem alfabetica
numbers2.sort((a, b) => {
  if (typeof a == "string" && typeof b == "string") {
    a = String(a).toLocaleLowerCase();
    b = String(b).toLocaleLowerCase();
  }

  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});

console.log(numbers2);

// reduce

const expenses = [100,20, 32, 38, 220, 50];
const total = expenses.reduce((acc , b) => acc + b)
console.log(total);