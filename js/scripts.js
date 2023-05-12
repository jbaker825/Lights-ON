const NUM_ROWS = 5;
const NUM_COLS = 5;

// ON color = orange
// OFF color = gray
const LIGHTS_OFF_COLOR = 'gray';
const LIGHTS_ON_COLOR = 'orange';

// When td element clicked with mouse,
// toggle the td background color

document.addEventListener('DOMContentLoaded', () => {
    initializeGame();
});


function initializeGame() {
    const gameGrid = document.getElementById('game-grid');

    for (let row = 0; row < NUM_ROWS; row++) {

        // Create a single table row element
        const eachRowE1 = document.createElement('tr');

        for (let col = 0; col < NUM_COLS; col++) {

            const cellNumber = (row * NUM_COLS) + col;

            // Create a single table data element
            const eachTdEl = document.createElement('td');
            eachTdEl.setAttribute('id', cellNumber);
            eachTdEl.style.backgroundColor = LIGHTS_OFF_COLOR;
            eachTdEl.innerText = cellNumber;
            eachTdEl.addEventListener('click', (event) => {

                // TODO: this is only for debugging purposes
                if (event.ctrlKey) {
                    toggleLight(event.target);
                    checkWin();
                } else {
                    toggleLights(event.target);
                }
            });

            // Add td element to the table row
            eachRowE1.appendChild(eachTdEl);
        }

        // Add the table row to the gameGrid
        gameGrid.appendChild(eachRowE1);
    }

    initializeSetupButtons();
}
function initializeSetupButtons() {
    // 1. Select the button 
    const randomButton = document.getElementById('randomize');

    // 2. Add the event listener 
    randomButton.addEventListener('click', randomizeLights);

    const clearButton = document.getElementById('clear');
    clearButton.addEventListener('click', clearLights);
}

function clearLights() {
    const allCells = document.querySelectorAll('td');

    allCells.forEach((eachCell) => {
        eachCell.style.backgroundColor = LIGHTS_OFF_COLOR;
    });
}

function randomizeLights() {

    // Go through each cell
    const allCells = document.querySelectorAll('td');

    allCells.forEach((eachCell) => {

        // Find a way to get a value that's true 50% of the time
        // Math.random() is a random value between 0 and 1
        const randomOn = math.random() < 0.5;

        // If true, then set backgroundColor to ON
        if (randomOn) {
            toggleLight(eachCell);
        }

        // Otherwise, set backgroundColor to OFF
    });

}

function toggleLights(cellClicked) {

    const cellNumber = parseInt(cellClicked.getAttribute('id'));

    // toggle target/clicked light 
    toggleLight(cellClicked);

    // toggle TOP light 
    if (Math.floor(cellNumber / NUM_COLS) != 0) {
        const topCellNumber = cellNumber - 5;
        const topElement = document.getElementById(topCellNumber.toFixed());
        toggleLight(topElement);
    }

    // toggle BOTTOM light 
    if (Math.floor(cellNumber / NUM_COLS) != NUM_ROWS - 1) {
        const bottomCellNumber = cellNumber + 5;
        const bottomElement = document.getElementById(bottomCellNumber.toFixed());
        toggleLight(bottomElement);
    }

    // toggle LEFT light 
    if (Math.floor(cellNumber % NUM_COLS) != 0) {
        const leftCellNumber = cellNumber - 1;
        const leftElement = document.getElementById(leftCellNumber.toFixed());
        toggleLight(leftElement);
    }

    // toggle RIGHT light
    if (Math.floor(cellNumber % NUM_COLS) != NUM_COLS - 1) {
        const rightCellNumber = cellNumber + 1;
        const rightElement = document.getElementById(rightCellNumber.toFixed());
        toggleLight(rightElement);
    }
}


function toggleLight(cellClicked) {

    // Get the cell that was clicked
    //const cellClicked = event.target;

    // Get the current background color 
    const currentColor = cellClicked.style.backgroundColor;

    // If the background color is OFF, switch to ON
    if (currentColor === LIGHTS_OFF_COLOR) {
        cellClicked.style.backgroundColor = LIGHTS_ON_COLOR;
    } else {
        // If the background color is ON, switch to OFF
        cellClicked.style.backgroundColor = LIGHTS_OFF_COLOR;
    }
}

function checkWin() {

    // Get all the cells
    const allCells = document.querySelectorAll('td');

    // Go through all the cells 
    for (let i = o; i < allCells.length; i++) {

        // Check the background color of a cell
        const bgColor = allCells[i].style.backgroundColor;

        // If the background color is OFF,
        // return FALSE
        if (bgColor === LIGHTS_OFF_COLOR) {
            return false;
        }
    }

    // No cells have bg color OFF, so return true
    return true;
}