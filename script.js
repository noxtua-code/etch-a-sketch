const gridContainer = document.querySelector('.grid-container');

for (let i = 0; i < 625; i++) {
    let blankGridSquare = document.createElement('div');
    blankGridSquare.className = 'blank-grid-square';
    gridContainer.appendChild(blankGridSquare);
}