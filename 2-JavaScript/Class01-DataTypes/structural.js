const user = {
  name: "Goku",
  age: 51,
  rule: "Saiyajin",
  Saiyajin1: true,
  Saiyajin2: true,
  Saiyajin3: true,
};

const user2 = {
  name: "Gohan",
  age: 15,
  rule: "Saiyajin",
  Saiyajin1: true,
  Saiyajin2: true,
  Saiyajin2: false,
};

console.log(typeof user);
console.log(user);
console.log(user.name);
console.log(user.rule);

console.log(user2.name);
console.log(user2.Saiyajin3);

// arrays (Vector or list)

const animes = [
  "Os cavaleiros dos zodíacos",
  "Dragon ball",
  "Naruto",
  "Thundercats",
  "Heeman",
];
console.log(animes[2]);

const pokemon = [
  { name: "charmander", level: 6 },
  { name: "bulbasaur", level: 5 },
  { name: "squirtle", level: 4 },
];

console.log(pokemon);
console.log(pokemon[2].name);
