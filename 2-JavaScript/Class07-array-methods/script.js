// MAP

const numbers = [10, 20, 30]
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
  })
console.log(newSalaries);

