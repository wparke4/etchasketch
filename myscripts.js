const container = document.querySelector('.cellContainer');
const eraserButton = document.getElementById('eraserButton');
const blackButton = document.getElementById('blackButton');
const randButton = document.getElementById('randButton');
const resetButton = document.getElementById('resetButton');
const rainbowButton = document.getElementById('rainbowButton');

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
    r = randomNumber();
    g = randomNumber();
    b = randomNumber();
})

function randomNumber() {
    let number = Math.floor(Math.random() * 255);
    return number;
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

        rainbowButton.addEventListener('click', () => {
            cell.addEventListener('mouseover', () => {
                r = randomNumber();
                g = randomNumber();
                b = randomNumber();
                cell.style.backgroundColor = "rgb("+ r +","+ g +","+ b +")";
            })
        })

        //when cell is hovered, adding class of hovering
        cell.addEventListener('mouseover', () => {
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

let num = 16;

const slider = document.getElementById('valueSlider');

slider.addEventListener('change', () => {
    let num = slider.value;
    removeCells();
    makeRows(num, num);
})

/*const sixteen = document.getElementById('button16');
const eightteen = document.getElementById('button18');
const twenty = document.getElementById('button20');
const thirty = document.getElementById('button30');

sixteen.addEventListener('click', () => {
    num = 16;
    removeCells();
    makeRows(num, num);
})

eightteen.addEventListener('click', () => {
    num = 18;
    removeCells();
    makeRows(num, num);
})

twenty.addEventListener('click', () => {
    num = 20;
    removeCells();
    makeRows(num, num);
})

thirty.addEventListener('click', () => {
    num = 30;
    removeCells();
    makeRows(num, num);
})*/


makeRows(num, num);