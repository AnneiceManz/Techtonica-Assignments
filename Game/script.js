const defaultColor = "#000000";
const defaultSize = 32;
const defaultMode = "color";

let currentMode = defaultMode;
let currentColor = defaultColor;
let currentSize = defaultSize;

const gridSlider = document.getElementById("gridSlider");
const gridSize = document.getElementById("gridSize");
const colorWheel = document.getElementById("colorWheel");
const grid = document.getElementById("grid");
const colorBtn = document.getElementById("colorBtn");
const eraserBtn = document.getElementById("eraserBtn");
const clearBtn = document.getElementById("clearBtn");

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

//When slider is moved by the mouse the gridSize will change to match the value of the slider.

//Connect color picker to grid

function setCurrentSize(newSize) {
  currentSize = newSize;
}

function changeSize(value) {
  setCurrentSize(value);
  updateGridSize(value);
  reloadGrid();
}

function updateGridSize(value) {
  gridSize.innerHTML = `${value} x ${value}`;
}

function colorGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("gridElement");
    gridElement.addEventListener("mouseover", color);
    gridElement.addEventListener("mousedown", color);
    grid.appendChild(gridElement);
  }
}

gridSlider.onmousemove = (e) => updateGridSize(e.target.value);
gridSlider.onchange = (e) => changeSize(e.target.value);

function setCurrentColor(newColor) {
  currentColor = newColor;
}

function color(e) {
  if (e.type === "mouseover" && !mouseDown) return;
  if (currentMode === "color") {
    e.target.style.backgroundColor = currentColor;
  } else if (currentMode === "eraser") {
    e.target.style.backgroundColor = "#fefefe";
  }
}
colorWheel.oninput = (e) => setCurrentColor(e.target.value);

function setCurrentMode(newMode) {
  activateButton(newMode);
  currentMode = newMode;
}

function activateButton(newMode) {
  if (currentMode === "color") {
    colorBtn.classList.remove("active");
  } else if (currentMode === "eraser") {
    eraserBtn.classList.remove("active");
  }

  if (newMode === "color") {
    colorBtn.classList.add("active");
  } else if (newMode === "eraser") {
    eraserBtn.classList.add("active");
  }
}
colorBtn.onclick = () => setCurrentMode("color");
eraserBtn.onclick = () => setCurrentMode("eraser");

function clearGrid() {
  grid.innerHTML = "";
}

function reloadGrid() {
  clearGrid();
  colorGrid(currentSize);
}

clearBtn.onclick = () => reloadGrid();
