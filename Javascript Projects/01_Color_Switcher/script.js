const randomBtn = document.querySelector(".random-color");
const applyBtn = document.querySelector(".apply-color");
const colorInput = document.querySelector(".color-input");
const currentColor = document.querySelector(".current-color");
const body = document.body;

const colors = [
  "#cfcff4",
  "#f5e7cd",
  "#e7fbe7",
  "#2b2b2b",
  "#fdfdce",
  "#ffb5c3",
  "#fec7fe",
  "#dedede",
  "#f6bea9",
  "#e3f5c9",
];

function changeColor(color) {
  body.style.backgroundColor = color;
  currentColor.innerText = color;
}

function handleApplyColor() {
  let inputVal = colorInput.value.trim();
  changeColor(inputVal);
}

function handleRandomColor() {
  let colorIndex = Math.floor(Math.random() * colors.length);
  changeColor(colors[colorIndex]);
}

applyBtn.addEventListener("click", handleApplyColor);
randomBtn.addEventListener("click", handleRandomColor);
