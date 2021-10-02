const container = document.querySelector('.container');

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
        container.appendChild(cell).className = "grid-item";
        cell.addEventListener('mouseover', () => {
            cell.classList.add('hovering');
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