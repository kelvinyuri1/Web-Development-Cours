// Avaliação JavaScript

// Questão 1 (Data Types):

// Declare as seguntes variáveis e atribua os valores por tipo:
// Sting, Number, Boolean, Function, Array, Object

const text = "Isso";
const number = 10;
const Boolean = true;
function isso() {
  return "iai";
}
const list = [1, 2];
const Object = { name: "Kelvin", age: 18 };

// Questão 2 (Operators):

// Imprima as operações de soma, subtração, multiplicação, divisão, resto da divisão e potenciação de 2 e 3 e raiz quadrada de 144

console.log(2 + 3);
console.log(2 - 3);
console.log(2 * 3);
console.log(2 % 3);
console.log(2 ** 3);
console.log(144 ** (1 / 2));

// Questão 3 (Functions):

// Crie e execute uma função de nome "concat" que retorne "JavaScript" concatenado com um valor passado como argumento e imprima seu retorno

function concat(typedText) {
  return typedText + " JavaScript";
}
console.log(concat("typedText"));

// Questão 4 (Data Manipulation):

// Usando os métodos FIFO e LIFO, crie um array com 3 valos e posteriormente insira mais um valor no final e substitua o do início por outro

const films = ["O Poderoso Chefão", "Avatar", "Titanic"];
films.push("Harry potter");
films.unshift("Free Guy");
films.shift()
console.log(films);

// Questão 5 (for):

// Liste todos os valores do array criado na questão anterior ultilizando o for


for (let index = 0; index < films.length; index++) {
  console.log(films[index]);
}

// Questão 6 (while):

// Escreva os números de 0 a 100 sem os que pertencem à familía do 40, do 50 e do 60
let numbers = 0;
while (numbers <= 100) {
  numbers += 1;

  if (numbers < 40 || numbers > 69) {
    console.log(numbers);
  }
}

// Questão 7 (if):

//Crie uma lógica para verificar se o motorista foi multado
// A infração pode ser por velocidade alta (quando ultrapassar a máxima)
// E por velocidade baixa (quando estiver inferior à metade da máxima
// A velocidade da pista é de 60km/h

let speed = 49;
if (speed < 30) {
  console.log("o motorista foi multado por velocidade baixa");
} else if (speed > 60) {
  console.log("o motorista foi multado por velocidade alta");
} else {
  console.log("De buenas");
}

// Questão 8 (array methods):

// Uma empresa vai dar 10% de aumento para seus funcionários
// Abaixo tem a lista com todos os salários atuais de cada um deles
// Apresente os novos salários e o novo total em folha dessa empresa

const salary = [2000, 2800, 3000, 4000, 2200, 7500, 3650, 8000, 2000, 5000];
const newSalary = salary.map((salary) => {
  return salary * 0.1 + salary;
});
console.log(newSalary);
