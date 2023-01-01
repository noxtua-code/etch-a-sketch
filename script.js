const gridContainer = document.querySelector('.grid-container');

for (let i = 0; i < 625; i++) {
    let blankGridSquare = document.createElement('div');
    blankGridSquare.className = 'blank-grid-square';
    gridContainer.appendChild(blankGridSquare);
};


let blankGridSquares = document.querySelectorAll('.blank-grid-square');

blankGridSquares.forEach(square => {
    square.addEventListener('mouseenter', () => {
        square.className = 'colour-grid-square';
    })
});
