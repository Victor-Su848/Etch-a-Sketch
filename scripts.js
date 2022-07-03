//selects html body
const body = document.querySelector('body');
//selects grid container
const gridContainer = document.querySelector('#grid-container')
createNewGrid(16);

function createSizeStyle(size) {
    let css = `.size { grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr);  }`,
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');

    head.appendChild(style);

    style.type = 'text/css';
    if (style.styleSheet) {
        // This is required for IE8 and below.
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
}
function createNewGrid(size) {
    createSizeStyle(size);
    gridContainer.innerHTML = '';
    for (let i = 0; i < (size*size); i++) {
        const gridChild = document.createElement('div');
        gridChild.setAttribute(
            'style',
            'border: 1px solid none; aspect-ratio: 1;',
        );
        gridChild.addEventListener('mouseover', () => {
            gridChild.classList.add('grid-child-fill');
        });
        gridContainer.appendChild(gridChild);
    }
}
function inputGridSize() {
    let gridLength;
    do {
        gridLength = prompt('Enter a size for the box (less than or equal to 100)', '16')
    } while (isNaN(gridLength) || gridLength > 100 || gridLength < 1);
    return gridLength;
}

const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', () => {
    let size = inputGridSize();
    createNewGrid(size);
});