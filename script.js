const gridContainer = document.querySelector('.grid-container');
const sideButtons = document.querySelectorAll('button');
const colorPicker = document.querySelector('#colour-picker');
const pixelRange = document.querySelector('#pixel-range');
const pixelValue = document.querySelector('#value');
let activatedButton = document.querySelector('.active').id;

createCanvas(25);

/**
 * Creation and modifcation of etch-a-sketch canvas
 */

function createCanvas (pixelSize) {
    gridContainer.style.gridTemplateColumns = `repeat(${pixelSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${pixelSize}, 1fr)`;
    let numOfSquares = pixelSize * pixelSize;

    for (let i = 0; i < numOfSquares; i++) {
        let blankGridSquare = document.createElement('div');
        blankGridSquare.className = 'blank-grid-square';
        gridContainer.appendChild(blankGridSquare);
    };

    // Changes the colours of the squares on mouseover
    let blankGridSquares = document.querySelectorAll('.blank-grid-square');
    
    blankGridSquares.forEach(square => {
        square.addEventListener('mouseenter', () => {
            ColourSquaresOnHover(square);
        })
    });
}

/**
 * Different colour modes which change the background of the grid squares on mouseover
 */

function ColourSquaresOnHover(square) {
    let pixelColour;
    switch (activatedButton) {
        case 'black':
            pixelColour = 'rgb(0, 0, 0)';
            break;
        case 'rainbow':
            pixelColour = `rgb(${returnRandomRGBValue()}, ${returnRandomRGBValue()}, ${returnRandomRGBValue()})`
            break;
        case 'darker':
            pixelColour = returnDarkerColour(square);
            break;
        case 'custom':
            pixelColour = document.querySelector('#colour-picker').value;
            break;
        default:
            pixelColour = '#ffffff';
            break;
    }

    square.style.backgroundColor = pixelColour;
};

function returnDarkerColour(square) {
    let squareColor = window.getComputedStyle(square).getPropertyValue('background-color');
    let rgbSquareColor = squareColor.match(/\d+/g);
    return `rgb(${+rgbSquareColor[0] * 0.90}, ${+rgbSquareColor[1] * 0.90}, ${+rgbSquareColor[2] * 0.90})`
};

function returnRandomRGBValue() {
    return Math.floor(Math.random() * 256);
}


/**
 * Assign functionality to sidebar buttons and inputs
 */

// 'Activate' current button, and deactivate other buttons
sideButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.id === 'clear') {
            clearContents();
        } else if (btn.className !== 'active') {
                disableBtns();
                activateCurrentBtn(btn);
        };
    })
});

// Activate the 'custom' button if the user changes the color picker
colorPicker.addEventListener('click', () => {
    activatedButton = 'custom';
    if (sideButtons[3].className !== 'active') {
        disableBtns();
        sideButtons[3].className = 'active';
    }
})

// Change grid and value text if the user changes the pixel size range
pixelRange.addEventListener('change', () => {
    gridContainer.innerHTML = '';
    pixelValue.textContent = `${+pixelRange.value} x ${+pixelRange.value}`;
    createCanvas(+pixelRange.value);
});

function clearContents() {
    let blankGridSquares = document.querySelectorAll('.blank-grid-square');
    blankGridSquares.forEach(square => {
        square.style.backgroundColor = '#ffffff';
    })
}

function disableBtns() {
    sideButtons.forEach(btn => {
        btn.className = 'inactive'
    })
}

function activateCurrentBtn(btn) {
        btn.className = 'active';
        activatedButton = btn.id;
}