//Connects gridSlider to gridSize element

const defaultSize=32;
const gridSlider=document.getElementById('gridSlider');
const gridSize=document.getElementById('gridSize');
let currentSize= defaultSize;


function updateGridSize(value) {
    gridSize.innerHTML = `${value} x ${value}`;
};
//When slider is moved by the mouse the gridSize will change to match the value of the slider.
gridSlider.onmousemove = (e) => updateGridSize(e.target.value)

//Connect color picker to grid
const defaultColor= '#000000';
const colorWheel=document.getElementById('colorWheel')
const grid =document.getElementById('grid');
const 
let currentColor= defaultColor;

function setCurrentColor(newColor){
    currentColor=newColor;
};

function setCurrentSize(newSize) {
    currentSize=newSize
}

let mouseDown = false;
document.body.onmousedown = () => (mouseDown=true);
document.body.onmouseup =() => (mouseDown=false);


function colorGrid(size){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for (let i=0; i<size * size; i++) {
        const gridElement=document.createElement('div');
        gridElement.classList.add('gridElement');
        gridElement.addEventListener('mouseover', color);
        gridElement.addEventListener('mousedown', color);
        grid.appendChild(gridElement)
        
    }
}

function color(e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    e.target.style.backgroundColor =currentColor;
}
colorWheel.oninput = (e) => setCurrentColor(e.target.value)


