//Create default values that page returns to when refreshed
const defaultColor = "#000000";
const defaultSize = 32;
const defaultMode = "color";

let currentMode = defaultMode;
let currentColor = defaultColor;
let currentSize = defaultSize;

//Grabbing important elements from the HTML
const gridSlider = document.getElementById("gridSlider");
const gridSize = document.getElementById("gridSize");
const colorWheel = document.getElementById("colorWheel");
const grid = document.getElementById("grid");
const colorBtn = document.getElementById("colorBtn");
const eraserBtn = document.getElementById("eraserBtn");
const clearBtn = document.getElementById("clearBtn");

//create event for when the mouse is clicked and dragged in the grid or released
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

//Sets the currentSize of the grid
function setCurrentSize(newSize) {
  currentSize = newSize;
}

//Changes the size of the grid when slider is moved
function changeSize(value) {
  setCurrentSize(value);
  updateGridSize(value);
  reloadGrid();
}

//Changes the span that shows grid size to the current value of the slider
function updateGridSize(value) {
  gridSize.innerHTML = `${value} x ${value}`;
}

//changes the amount of grid columns and rows to the current value of the slider
function colorGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
//creates a new div element the color slected from the color wheel
  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("gridElement");
    gridElement.addEventListener("mouseover", color);
    gridElement.addEventListener("mousedown", color);
    grid.appendChild(gridElement);
  }
}

//Event listerners that change the grid size and span that displays grid size
gridSlider.onmousemove = (e) => updateGridSize(e.target.value);
gridSlider.onchange = (e) => changeSize(e.target.value);

//sets the current slected color
function setCurrentColor(newColor) {
  currentColor = newColor;
}

//if current mode is color, color will appear on the grid when the mouse is pressed and dragged. If current mode is eraser any colored elements on the grid will be set back to the default background color or "erased"
function color(e) {
  if (e.type === "mouseover" && !mouseDown) return;
  if (currentMode === "color") {
    e.target.style.backgroundColor = currentColor;
  } else if (currentMode === "eraser") {
    e.target.style.backgroundColor = "#fefefe";
  }
}

// event listener that set the color to the slected color of the color input
colorWheel.oninput = (e) => setCurrentColor(e.target.value);

//sets current mode
function setCurrentMode(newMode) {
  activateButton(newMode);
  currentMode = newMode;
}

//makes eraser button and color button change colors based on current mode
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

//event listener that activates whether we are coloring or erasing
colorBtn.onclick = () => setCurrentMode("color");
eraserBtn.onclick = () => setCurrentMode("eraser");

//clears the grid. Makes it empty
function clearGrid() {
  grid.innerHTML = "";
}

//when grid is cleared the grid is set to the last current size
function reloadGrid() {
  clearGrid();
  colorGrid(currentSize);
  shakeElement(grid);
  rotateElement(grid);
}

//function to make selected element shake and rotate.
const wiggletime = 100;
function shakeElement(element) {
  element.classList.add('rotateable');
  element.style.marginLeft = '20px';

  setTimeout(function() {
    element.style.marginLeft = '-120px';
    setTimeout(function() {
      element.style.marginLeft = '0px';
    }, wiggletime);
  }, wiggletime);

  return true;
}

function rotateElement(element) {
  element.classList.add('rotateable');
  element.style.transform = 'rotate(20deg)';

  setTimeout(function() {
    element.style.transform = 'rotate(-20deg)';
    setTimeout(function() {
      element.style.transform = 'rotate(0deg)';
    }, wiggletime);
  }, wiggletime);

  return true;
}


//event listerner for clear button
clearBtn.onclick = () => reloadGrid();

//function to setDefaults on load
function setDefaults(){
    colorGrid(defaultSize);
    activateButton(defaultMode);
}

window.onload= setDefaults;
