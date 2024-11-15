function control(temp) {
  console.log(temp);
}
class Control {
  constructor(temp, color) {
    this.temp = temp;
    this.color = color;
    this.isOn = false;
  }

  power() {
    this.isOn = !this.isOn;
    return "Plin!!";
  }

  upper() {
    //this.temp += 1;
    //this.temp = this.temp + 1;
    if (this.temp < 30) {
      this.temp++;
    }
    return this.temp;
  }

  down() {
    //this.temp += 1;
    //this.temp = this.temp + 1;
    if (this.temp > 16) {
      this.temp--;
    }
    return this.temp;
  }
}

control(17);
const control1 = new Control(17);
const control2 = new Control(20);
console.log(control1.qualquer);
console.log(control1.color);
console.log(control2.color);
console.log(control1.isOn);
console.log(control1.power());
console.log(control2.isOn);
console.log(control1.power());
console.log(control2.isOn);
console.log(control1.power());
console.log(control1.power());

const powerButton = document.querySelector(".power");
const upButton = document.querySelector(".up");
const downButton = document.querySelector(".down");
const displayValue = document.querySelector(".display");

const airButton = new Control(17, "Cinza");
powerButton.addEventListener("click", () => {
  airButton.power();
  displayValue.innerHTML = airButton.isOn ? `${airButton.temp}°c` : "";
});

upButton.addEventListener("click", () => {
  if (airButton.isOn) {
    displayValue.innerHTML = `${airButton.upper()}°c`;
  }
});

downButton.addEventListener("click", () => {
  if (airButton.isOn) {
    displayValue.innerHTML = `${airButton.down()}°c`;
  }
});
