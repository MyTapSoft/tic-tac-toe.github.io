let freeCells = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let historyOfMoves = new Array(8);
let winner;

function move(cellId, role) {
    if (role) aiMove();
    else playerMove(cellId)
}

function playerMove(cellId) {
    if (winner) return;
    if (freeCells[cellId] === -1) return;
    document.getElementById(cellId).className += ' player';
    freeCells[cellId] = -1;
    historyOfMoves[cellId] = 'pl';
    isGameOver();
    aiMove()
}

function aiMove() {
    if (winner) return;
    let cellToMove;
    while (true) {
        cellToMove = Math.floor(Math.random() * Math.floor(9));
        if (freeCells[cellToMove] !== -1) {
            freeCells[cellToMove] = -1;
            break;
        }
    }
    historyOfMoves[cellToMove] = 'ai';
    freeCells[cellToMove] = -1;
    document.getElementById(cellToMove).className += ' ai';
    isGameOver();
}

function showWinnerMessage() {
    switch (winner) {
        case 'ai':
            setTimeout(() => {
                alert("You Loose!");
            }, 300);
            break;
        case 'pl':
            setTimeout(() => {
                alert("You Win!");
            }, 300);
            break;
        default:
            setTimeout(() => {
                alert("It's a Draw!");
            }, 300);
            break;
    }
}

function isGameOver() {
    if (isPlayerWon('pl') === true) winner = 'pl';
    else if (isPlayerWon('ai') === true) winner = 'ai';
    else if (isCellToMove() === false) winner = 'draw';
    if (winner) showWinnerMessage();

}

function isPlayerWon(player) {
    if (historyOfMoves[0] === player && historyOfMoves[1] === player && historyOfMoves[2] === player
        || historyOfMoves[3] === player && historyOfMoves[4] === player && historyOfMoves[5] === player
        || historyOfMoves[6] === player && historyOfMoves[7] === player && historyOfMoves[8] === player) {
        winner = player;
        return true;
    } else if (historyOfMoves[0] === player && historyOfMoves[3] === player && historyOfMoves[6] === player
        || historyOfMoves[1] === player && historyOfMoves[4] === player && historyOfMoves[7] === player
        || historyOfMoves[2] === player && historyOfMoves[5] === player && historyOfMoves[8] === player) {
        winner = player;
        return true;
    } else if (historyOfMoves[0] === player && historyOfMoves[4] === player && historyOfMoves[8] === player
        || historyOfMoves[2] === player && historyOfMoves[4] === player && historyOfMoves[6] === player) {
        winner = player;
        return true;
    }

}

function isCellToMove() {
    for (let num of freeCells) {
        if (num !== -1) return true;
    }
    return false;
}

function restartGame() {
    freeCells = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    historyOfMoves = new Array(8);
    winner = undefined;
    for (let i = 0; i < 9; i++) {
        document.getElementById(i).className = 'cell';
    }
}

