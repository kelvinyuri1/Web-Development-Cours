const age = 18;
const cnh = true;
if (age >= 18 && cnh) {
  console.log("Pode dirigir");
} else {
  console.log("Não pode dirigir");
}

console.log(3 > 2 > 1);

if (3 > 2 && 2 > 1) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

const option = 1;

switch (option) {
  case 1:
    console.log("Docinho");
    break;
  case 2:
    console.log("Barra de chocolate");
    break;
  case 3:
    console.log("Lata de refri");
    break;
  default:
    console.log("Por favor escolher um item");
    break;
}

const num = 2;
const isAdmin = true;
try {
  if (isAdmin) {
    console.log("Ver relatorio: " + num);
  } else {
    throw new Error("Sem autorização para executar tarefa!");
  }
} catch (error) {
  console.error(error);
} finally {
    console.log("Sempre executa!!");
    
}
// document.write("App is Online!");

const n1 = 7
const n2 = 8
const n3 = 9
const averege = (n1 + n2 + n3) / 3

if (averege >= 7) {
  console.log("Aprovado");
} else if (averege >= 3) {
  console.log("Recuperação");
  
} else {
  console.log("Burro");
  
} 