// Globals

    // total grid width is 608px, 38 for 16x16
totalSize = 608; size = 16;

const main = document.querySelector('#main');

// Execution Area
createNewGridBtn();
createGrid(size);

// Function Area
function createNewGridBtn() {
    newGridBtn = document.createElement('button');
    newGridBtn.textContent = "New Grid";
    main.appendChild(newGridBtn);
    newGridBtn.addEventListener('click', () => {
        getSize();
        main.removeChild(gridContainer);
        createGrid(size);
    })
}

function createGrid(size) {
    gridContainer = document.createElement('div');
    main.appendChild(gridContainer);

    for (let i = 1; i <= size; i++) {
        window[`row${i}`] = document.createElement('span');
        window[`row${i}`].className = "row";
        gridContainer.appendChild(window[`row${i}`]);
        for (let k = 1; k <= size; k++) {
            let q = totalSize / size -2;
            console.log("total: " + totalSize + ", size: " + size + " divided: " + q);
            window[`square${i}${k}`] = document.createElement('div');
            window[`square${i}${k}`].className = `square`;
            window[`square${i}${k}`].style.width = `${q}px`;
            window[`square${i}${k}`].style.height = `${q}px`;
            window[`row${i}`].appendChild(window[`square${i}${k}`]);

                // hover effect
            window[`square${i}${k}`].addEventListener('mouseover', () => {
                window[`square${i}${k}`].style.backgroundColor = 'purple';
            })
        }
    }
}

function getSize() {
    size = parseFloat(prompt("Gimme a Size!"));
    if (size > 0 && size < 101) {
        return size;
    }
    else {
        alert("Not a legal size. Choose between 1 and 100.");
        getSize();
    }
}