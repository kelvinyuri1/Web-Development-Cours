// Var, Let or Const
// Let é melhor pois ele tanto serve para variavel local e global separadamentes já o var ele serve pros dois independentemente.

let myName = "Kelvin";
let age = 11;
const cpf = "123";
let isAdmin = true;

console.log(myName);
console.log(cpf);
console.log(age + 1); // Type cohesion
console.log(isAdmin);

console.log(typeof myName);
console.log(typeof cpf);
console.log(typeof age);
console.log(typeof isAdmin);

console.log("Bem-Vindo ao sistema, " + myName);
document.write("Bem-Vindo ao sistema, " + myName);

console.log(Number("2") + 3); // type coversion

// template literals (Sring)
// placeholder ${}
console.log(`Meu nome é ${myName} e tenho ${age} anos `)