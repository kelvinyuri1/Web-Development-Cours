function addNumber(num1, num2) {
  return num1 + num2;
}

console.log(addNumber(225, 10));
console.log(addNumber(23, 56));
console.log(addNumber(225, 10));

function calcAvg(n1, n2) {
  const avg = (n1 + n2) / 2;
  return avg;
}

console.log(calcAvg(7, 8));

const myName = prompt("Digite seu nome: ")
const grade1 = Number(prompt("Digite seu nota 1: "))
const grade2 = Number(prompt("Digite seu nota 2: "))
const studentAvg = calcAvg(grade1, grade2)
const sumGrades = addNumber(grade1, grade2)

alert(`Oi ${myName}, sua primeira nota foi ${grade1} e a segunda foi ${grade2} a soma das notas é ${sumGrades} e sua media é ${studentAvg}`)


