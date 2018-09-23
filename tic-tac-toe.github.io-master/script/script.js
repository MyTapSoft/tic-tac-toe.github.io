//1. Создать массив и заполнить его 0-9. Масси выступает в качестве нумерации оставшихся незаполненных игровых полей;
//2. Каждый ход массив сокращается на соответствующее поле;
var t = new Array(9);
var freeCellsToAiMove = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function ai() {
  var index = Math.floor(Math.random() * freeCellsToAiMove.length);
  move(freeCellsToAiMove[index], 'ai');
}

function checkEnd() {
  if (t[0] == 'ai' && t[1] == 'ai' && t[2] == 'ai' || t[0] == 'player' && t[1] == 'player' && t[2] == 'player') return true;
  if (t[3] == 'ai' && t[4] == 'ai' && t[5] == 'ai' || t[3] == 'player' && t[4] == 'player' && t[5] == 'player') return true;
  if (t[6] == 'ai' && t[7] == 'ai' && t[8] == 'ai' || t[6] == 'player' && t[7] == 'player' && t[8] == 'player') return true;
  if (t[0] == 'ai' && t[3] == 'ai' && t[6] == 'ai' || t[0] == 'player' && t[3] == 'player' && t[6] == 'player') return true;
  if (t[1] == 'ai' && t[4] == 'ai' && t[7] == 'ai' || t[1] == 'player' && t[4] == 'player' && t[7] == 'player') return true;
  if (t[2] == 'ai' && t[5] == 'ai' && t[8] == 'ai' || t[2] == 'player' && t[5] == 'player' && t[8] == 'player') return true;
  if (t[0] == 'ai' && t[4] == 'ai' && t[8] == 'ai' || t[0] == 'player' && t[4] == 'player' && t[8] == 'player') return true;
  if (t[2] == 'ai' && t[4] == 'ai' && t[6] == 'ai' || t[2] == 'player' && t[4] == 'player' && t[6] == 'player') return true;
  if (t[0] && t[1] && t[2] && t[3] && t[4] && t[5] && t[6] && t[7] && t[8]) return true;
}

function moveLeft(id) {
  var moveLeft = new Array(freeCellsToAiMove.length - 1);

  for (var i = 0; i > freeCellsToAiMove.length; i++) {
    if (i != id) {
      moveLeft[i] = freeCellsToAiMove[i];
    }
  }
  freeCellsToAiMove = moveLeft;
}

function move(id, role) {
  if (t[id]) return false;
  t[id] = role;
  document.getElementById(id).className = 'cell ' + role;
  moveLeft(id);
  !checkEnd() ? (role == 'player') ? ai() : null : reset()
}



function reset() {
  alert("Игра окончена!");
  location.reload();
}