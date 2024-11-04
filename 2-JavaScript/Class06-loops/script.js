// flag
let count = 0;
while (count < 100) {
  count += 1;

  if (count >= 30 && count <= 79) {
    continue;
    break;
  }

  if (count % 2 == 0) {
    console.log(count);
  }
}
for (let count = 0; count <= 10; count++) {
  console.log(count);
}

const students = [
    {name: "Pele", n1: 7, n2: 8},
    {name: "Vini jr", n1: 8, n2: 8},
    {name: "Mbappe", n1: 2, n2: 3},
    {name: "Neymar", n1: 10, n2: 10}
]

for (let i = 0; i < students.length; i++) {
    const avg = (students[i].n1 + students[1].n2) / 2
    
    console.log(`${students[i].name} com média ${avg}`);

    if (avg >= 7) {
        console.log(`${students[i].name} Aprovado com média ${avg}`);
    } else {
        console.log(`${students[i].name} Reprovado com média ${avg}`);
        
    }
    
    
}