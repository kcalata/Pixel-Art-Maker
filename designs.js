// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// sets various variables that will be used throughout program
let dimensions = document.getElementById('sizePicker');
let height = document.getElementById('inputHeight');
let width = document.getElementById('inputWidth');
let grid = document.getElementById('pixelCanvas');
let color = document.getElementById('colorPicker');

// clears the grid
function clearGrid() {
    grid.innerHTML = '';
}

// makes a grid with the dimensions the user chooses
function makeGrid() {
    for (let r = 0; r < height.value; ++r) {
      const row = grid.appendChild(document.createElement('tr'));
      for (let c = 0; c < width.value; ++ c) {
        const cell = row.appendChild(document.createElement('td'));
        cell.addEventListener('click',function(){
          this.style.backgroundColor = color.value;
        });
      }
    }
}

// when submit is clicked on, it clears and creates a grid
dimensions.onsubmit = function(event) {
    event.preventDefault();
    clearGrid();
    makeGrid();
}
