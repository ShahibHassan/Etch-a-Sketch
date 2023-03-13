// create a 16 x 16 grid
function createGrid () {
    for (var row = 1; row <= 16; row++) {
        for (var column = 1; column <= 16; column++) {
            const container = document.getElementById('container');
            // create div
            const newDiv = document.createElement('div');
            // add element to div
            newDiv.classList.add('grid');
            // append div
            container.appendChild(newDiv);
            console.log(newDiv);

            console.log (row + '+' + column);
        }
    }
}

createGrid();