const container = document.getElementById('grid-container');
const gridSizeInput = document.getElementById('gridSize');
const createGridBtn = document.getElementById('createGridBtn');
const clearButton = document.getElementById('clearButton');
const colorPicker = document.getElementById('colorPicker');
var color = 'blue'; 

function createGrid(rows, columns) {
    container.innerHTML = '';
    const squareSize = 1000 / Math.max(rows, columns) + '%';
    container.style.setProperty('--square-size', squareSize);
    for (let i = 0; i < rows * columns; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }

    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('mouseenter', () => {
            // Change the background color on hover
            squares[i].style.backgroundColor = color; // Change to the desired hover color
        });
    }
}

const squares = document.getElementsByClassName("square"); 

window.addEventListener('load', () => {
    createGrid(16,16);
});

createGridBtn.addEventListener('click', () => {
    const gridSize = parseInt(gridSizeInput.value, 10);
    if (gridSize >= 1 && gridSize <= 100) {
        createGrid(gridSize, gridSize);
        container.style.setProperty('--grid-columns', gridSize);
        const width = 400 / gridSize;
        for (let i = 0; i < squares.length; i++) {
            squares[i].style.setProperty('--square-size', `${width}px`);
        }
    } else {
        alert('Please enter a grid size between 1 and 100.');
    }
});

clearButton.addEventListener('click', () => {
    // Loop through each square and reset the background color to white
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = 'white'; // Change to the original color
    }
});

colorPicker.addEventListener('input', (event) => {
    color = event.target.value; // Get the selected color from the input
});