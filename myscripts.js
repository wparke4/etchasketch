const container = document.querySelector('.cellContainer');
const eraserButton = document.getElementById('eraserButton');
const blackButton = document.getElementById('blackButton');
const randButton = document.getElementById('randButton');
const resetButton = document.getElementById('resetButton');
const rainbowButton = document.getElementById('rainbowButton');

let r = 0;
let g = 0;
let b = 0;

let activeMode;

eraserButton.addEventListener('click', () => {
    activeMode = 'eraser';
    setMode(activeMode);
})

blackButton.addEventListener('click', () => {
    activeMode = 'black';
    setMode(activeMode);
})

randButton.addEventListener('click', () => {
    activeMode = 'random';
    setMode(activeMode);
})

rainbowButton.addEventListener('click', () => {
    activeMode = 'rainbow';
    return activeMode;
})

function randomNumber() {
    let number = Math.floor(Math.random() * 255);
    return number;
}

function setMode(activeMode) {
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
                setMode(activeMode);
            }
            cell.style.backgroundColor = "rgb("+ r +","+ g +","+ b +")";
        })

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

slider.addEventListener('change', () => {
    let num = slider.value;
    removeCells();
    makeRows(num, num);
    displayValue.textContent = num + ' x ' + num;
})

makeRows(num, num);