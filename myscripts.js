const container = document.querySelector('.cellContainer');
const eraserButton = document.getElementById('eraserButton');
const blackButton = document.getElementById('blackButton');
const randButton = document.getElementById('randButton');
const resetButton = document.getElementById('resetButton');
const rainbowButton = document.getElementById('rainbowButton');

//defining r g b variables, initial value of 000 which is black
let r = 0;
let g = 0;
let b = 0;

//creating variable to be used to determine which color button was most recently selected
let activeMode;

//when eraser, black, rand, or rainbow button is clicked the associated code will then run
//eraser, black, rand change value of activeMode then call on setColorValues function 
eraserButton.addEventListener('click', () => {
    activeMode = 'eraser';
    setColorValues(activeMode);
})

blackButton.addEventListener('click', () => {
    activeMode = 'black';
    setColorValues(activeMode);
})

randButton.addEventListener('click', () => {
    activeMode = 'random';
    setColorValues(activeMode);
})

//rainbow does not call on setMode function, just returns the activeMode which is now set to 'rainbow'
//if activeMode = rainbow when cell is hovered over then the setColorValues will be called on to create a random color
//therefore each cell hovered over will call the function and generate its own color
rainbowButton.addEventListener('click', () => {
    activeMode = 'rainbow';
    return activeMode;
})

//used to generate a random integer between 0 and 255 inclusive (rgb each takes a value from 0 - 255)
function randomNumber() {
    let number = Math.floor(Math.random() * 255);
    return number;
}

//
function setColorValues(activeMode) {
    if (activeMode === 'eraser') {
        r = 255;
        g = 255;
        b = 255;
    }
    else if (activeMode === 'black') {
        r = 0;
        g = 0;
        b = 0;
    } 
    else if (activeMode === 'random') {
        r = randomNumber();
        g = randomNumber();
        b = randomNumber();
    }
    else if (activeMode === 'rainbow') {
        r = randomNumber();
        g = randomNumber();
        b = randomNumber();
    }
    }


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
            if (activeMode === 'rainbow') {
                setColorValues(activeMode);
            }
            cell.style.backgroundColor = "rgb("+ r +","+ g +","+ b +")";
        })

        //all cells reset back to white when reset button is clicked
        resetButton.addEventListener('click', () => {
            cell.style.backgroundColor = 'white';
        })
    };
};



//deletes all of the cells created and appended to container
function removeCells() {
    container.innerHTML = '';
}

//on page load, there will be 16 columns and 16 rows
let num = 16;

const slider = document.getElementById('valueSlider');
const displayValue = document.querySelector('.displayValue');

//when the slider value changes, existing cells are deleted and new cells created
slider.addEventListener('change', () => {
    let num = slider.value;
    removeCells();
    makeRows(num, num);
    displayValue.textContent = num + ' x ' + num;
})

makeRows(num, num);