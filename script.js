const gridContainer = document.querySelector('.grid-container');
const sideButtons = document.querySelectorAll('button');
const colorPicker = document.querySelector('#colour-picker');
let pixelColour = '#000000';
let activatedButton = 'black';


/**
 * Creation and modifcation of etch-a-sketch canvas
 */

for (let i = 0; i < 625; i++) {
    let blankGridSquare = document.createElement('div');
    blankGridSquare.className = 'blank-grid-square';
    gridContainer.appendChild(blankGridSquare);
};


/**
 * Colour grid squares on mouseover
 */

let blankGridSquares = document.querySelectorAll('.blank-grid-square');

blankGridSquares.forEach(square => {
    square.addEventListener('mouseenter', () => {
        
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
    })
});

function returnDarkerColour(square) {
    let squareColor = window.getComputedStyle(square).getPropertyValue('background-color');
    let rgbSquareColor = squareColor.match(/\d+/g);
    return `rgb(${+rgbSquareColor[0] * 0.90}, ${+rgbSquareColor[1] * 0.90}, ${+rgbSquareColor[2] * 0.90})`
};

function returnRandomRGBValue() {
    return Math.floor(Math.random() * 256);
}


/**
 * Sidebar Buttons functionality (active/deactive/colour picker/clear)
 */

function disableBtns() {
    sideButtons.forEach(btn => {
        btn.className = 'inactive'
    })
}

function activateCurrentBtn(btn) {
        btn.className = 'active';
        activatedButton = btn.id;
}

sideButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.id === 'clear') {
            blankGridSquares.forEach(square => {
                square.style.backgroundColor = '#ffffff';
            })
        } else if (btn.className !== 'active') {
                disableBtns();
                activateCurrentBtn(btn);
        };
    })
});

colorPicker.addEventListener('click', () => {
    activatedButton = 'custom';
    if (sideButtons[3].className !== 'active') {
        disableBtns();
        sideButtons[3].className = 'active';
    }
})

