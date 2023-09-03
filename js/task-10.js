function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector("input");
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.backgroundColor = getRandomHexColor();

    boxes.appendChild(div);
  }
}

function destroyBoxes() {
  inputNumber.value = "";
  boxes.innerHTML = "";
}

createBtn.addEventListener('click', (event) => {
  createBoxes(inputNumber.value);
});

destroyBtn.addEventListener('click', (event) => {
  destroyBoxes();
});