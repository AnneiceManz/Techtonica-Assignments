//Slider changes size output

const defaultSize=32;
const gridSlider=document.getElementById('gridSlider')
const gridSize=document.getElementById('gridSize')
let currentSize= defaultSize;


function updateGridSize(value) {
    gridSize.innerHTML = `${value} x ${value}`
}

gridSlider.onmousemove = (e) => updateGridSize(e.target.value)