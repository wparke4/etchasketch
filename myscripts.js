const container = document.querySelector('.cellContainer');
const eraserButton = document.getElementById('eraserButton');
const blackButton = document.getElementById('blackButton');
const randButton = document.getElementById('randButton');
const resetButton = document.getElementById('resetButton');

let r = 0;
let g = 0;
let b = 0;

eraserButton.addEventListener('click', () => {
    r = 255;
    g = 255;
    b = 255;
})

blackButton.addEventListener('click', () => {
    r = 0;
    g = 0;
    b = 0;
})

randButton.addEventListener('click', () => {
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
})

function makeRows(rows, cols) {
    //set the css variables (--grid-rows) equal to the argument passed into this function
    //therefore, we can change the amount of rows and cols of our grid by passing different values while calling this function
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    //the amount of cells created will be equal to rows * cols
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        //making the new div created (named cell) to be a child of the container div 
        //also applying the grid-item class and therefore all of its styling to the cell divs
        container.appendChild(cell);
        cell.classList.add('grid-item');
        //when cell is hovered, adding class of hovering
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = "rgb("+ r +","+ g +","+ b +")";
        })
    };
};

/* To-Do: 
    Allow user to select amount of cells to make
        either allow them to select the amount of cells (values need to be perfect squares)
            or
        allow to select number of columns which will then make an equal amount of rows

        this can be in the form of:
            sliding selector 
            buttons with given values
            input field
    
    Add reset button which will clear the classes on all cells

    All user to select between:
        rainbow mode: each cell hovered over receives a random color
        increasing shade of black with each pass
*/

makeRows(16, 16);