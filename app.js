let boxes = document.querySelectorAll('.cell')
let resStartBtn = document.getElementById('restartButton')
let newGame = document.getElementById('newGame')
let msgContainer = document.querySelector('.msg-container')
let board = document.querySelector('.board')
let winner = document.querySelector('#msg')

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

const resetGame = () => {
    trunO = true
    enableBoxes()
    board.style.display = 'grid'
    msgContainer.classList.add('hide')
    resStartBtn.style.display = 'flex'
}

let text = boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (trunO) {
            box.innerText = 'X'
            trunO = false
        } else {
            box.innerText = 'O'
            trunO = true
        }
        box.disabled = true
        checkWinner()
    })
})

//check Winner

const checkWinner = () => {
    let hasWinner = false
    for (let pattern of winningPatterns) {
        let pos1Val = boxes[pattern[0]].innerText
        let pos2Val = boxes[pattern[1]].innerText
        let pos3Val = boxes[pattern[2]].innerText
        if (pos1Val != '' || pos2Val != '' || pos3Val != '') {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                shoWinner(pos1Val)
                hasWinner = true
                return
            }
        }
        if (!hasWinner && Array.from(boxes).every(box => box.innerText !== '')) {
            msg.innerText = `Match Draw`
            msgContainer.classList.remove('hide')
            board.style.display = 'none'
            resStartBtn.style.display = 'none'
        }
    }
}

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true
    }
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false
        box.innerText = ''
    }
}

const shoWinner = (winner) => {
    msg.innerText = `Congratulations winner is ${winner}`
    msgContainer.classList.remove('hide')
    board.style.display = 'none'
    resStartBtn.style.display = 'none'
    disableBoxes
}

newGame.addEventListener('click', resetGame)
resStartBtn.addEventListener('click', resetGame)