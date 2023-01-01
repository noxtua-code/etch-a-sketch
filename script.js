const gridContainer = document.querySelector('.grid-container');

// Creation of default etch-a-sketch canvas
for (let i = 0; i < 625; i++) {
    let blankGridSquare = document.createElement('div');
    blankGridSquare.className = 'blank-grid-square';
    gridContainer.appendChild(blankGridSquare);
};


let blankGridSquares = document.querySelectorAll('.blank-grid-square');

blankGridSquares.forEach(square => {
    square.addEventListener('mouseenter', (element) => {
        square.className = 'colour-grid-square';

        // Testing for incrementally darker button
        let squareColor = window.getComputedStyle(square).getPropertyValue('background-color')
        let rgbSquareColor = squareColor.match(/\d+/g);
        let darkerSquareColor = `rgb(${+rgbSquareColor[0] * 0.75}, ${+rgbSquareColor[1] * 0.75}, ${+rgbSquareColor[2] * 0.75})`
        console.log(darkerSquareColor)
        
    })
});

blackBtn = document.querySelector('#black')
rainbowBtn = document.querySelector('#rainbow')
darkerBtn = document.querySelector('#darker')
customBtn = document.querySelector('#custom')
eraserBtn = document.querySelector('#eraser')
clearBtn = document.querySelector('#clear')

// if active, then inactive, else active. change css colour to new colour
// figure out how to get colour picker - 
// eraser - remove hover tag?  or back to white with border? 

