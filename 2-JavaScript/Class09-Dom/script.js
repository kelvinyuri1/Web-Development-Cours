const box = document.querySelector(".box");
const title = document.querySelector("h1");
const calculator = document.querySelector(".calculator");
console.log(box);
console.log(title.innerHTML);

// inner quer dizer interno ou seja html interno (Dentro do html)
box.innerHTML = "Text";
box.innerHTML = "<p>Parágrafo</p>";
const paragraph = document.querySelector("p");

title.style.color = "red";
paragraph.style.color = "green";

// calculadora
for (let i = 0; i < 10; i++) {
  calculator.innerHTML += `<button class="btn"> ${i}</button>`;
}

const buttonsCalc = document.querySelectorAll(".btn");
buttonsCalc.forEach((button) => {
  button.addEventListener("click", () => {
    if (num1) {
      num2 = Number(button.innerHTML);
    } else {
      num1 = Number(button.innerHTML);
    }
  });
});
let num1;
let num2;

function basic() {
  console.log(num1 + num2);
  num1 = null
  num2 = null
}

//exemplo do listener
title.addEventListener("mouseenter", () => {
  console.log("title");
});

myInput.addEventListener("keyup", () => {
  console.log(myInput.value);
  
})
