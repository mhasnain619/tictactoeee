let boxes = document.querySelectorAll('.cell')
let resStartBtn = document.getElementById('restartButton')

let trunO = true

const winningPatterns = [
    // Rows
    [0, 1, 2],  // Top row
    [3, 4, 5],  // Middle row
    [6, 7, 8],  // Bottom row

    // Columns
    [0, 3, 6],  // Left column
    [1, 4, 7],  // Middle column
    [2, 5, 8],  // Right column

    // Diagonals
    [0, 4, 8],  // Left to right diagonal
    [2, 4, 6]   // Right to left diagonal
];

let text =
    boxes.forEach((box) => {
        box.addEventListener('click', () => {
            if (trunO) {
                box.innerText = 'X'
                trunO = false
            } else {
                box.innerText = 'O'
                trunO = true
            }
            console.log('btn clicked');

        })
    })