let gridSize = 16;
const GRID_PIXELS = 960;

const mainContainer = document.querySelector('.main-container');

function getNewGridSize() {
    gridSize = prompt('How many rows and columns would you like?');
    gridSize = Number(gridSize);
    return gridSize;
}

function getRandomColor() {
    return Math.random() * 1000 % 255;
}

function buildGrid(gridSize) {

    mainContainer.innerHTML = '';

    if (gridSize < 1 || gridSize > 101) {
        prompt('Please pick a number between 1 and 100');
        buildGrid(getNewGridSize());
    }

    const newGridButton = document.createElement('button');
    newGridButton.className = 'new-grid-button';
    newGridButton.textContent = 'Customize Grid';
    newGridButton.addEventListener('click', () => {
        buildGrid(getNewGridSize());
})
    mainContainer.appendChild(newGridButton);

    const gridContainer = document.createElement('div');
    gridContainer.className = 'grid-container';
    gridContainer.height = `${GRID_PIXELS}px`;
    gridContainer.width = `${GRID_PIXELS}px`;
    mainContainer.appendChild(gridContainer);

    for(i=0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        row.id = `row-${i}`;
        row.width = `${GRID_PIXELS}px`;
        row.height = `${GRID_PIXELS / gridSize}px`;
        gridContainer.appendChild(row);

        for(j=0; j < gridSize; j++) {
            const square = document.createElement('div');
            square.className = 'square';
            square.id = `square-${i}${j}`;
            square.addEventListener("mouseover", (event) => {
                var red = getRandomColor();
                var green = getRandomColor();
                var blue = getRandomColor();
                square.setAttribute("style", `background-color:rgb(${red}, ${green}, ${blue}`)
            });
            row.appendChild(square);
        }
    }
}

buildGrid(gridSize);
