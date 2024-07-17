let counter = 0;

let board;

//RESET
var resetButton = document.getElementById('reset');
resetButton.addEventListener("click", function() { Reset();});

startGame();


function startGame()
{
  board = [
    ['_','_','_'],
    ['_','_','_'],
    ['_','_','_']
  ];
  counter = 0;
  Array.from(document.getElementsByClassName("box")).forEach(function (box) {
    box.addEventListener("click", function() { Play(box); });
  });
}

function Play(box)
{
    let type = counter % 2 == 0 ? "circle" : "cross"
    if (CanPlayHere(box.id))
    {
      addImage(box, type);
      console.log("image added");
      this.removeEventListener("click", Play(box));
      winner = checkWinner(type);
      counter++;
    }
}

function CanPlayHere(id)
{
  var ids = GetIndexTabByBoxId(id);
  if (board[ids[0]][ids[1]] == '_')
    return true;
  return false;
}

function Reset()
{
  Array.from(document.getElementsByClassName("box")).forEach(function (item) {
    if (item.childNodes[0] != null)
      {
        item.removeChild(item.childNodes[0])
      }
      item.removeEventListener(item,Play);
    });
    startGame();
    displayBoard()
}
  
function addImage(box, type) {
  var boxNumber = box.id;
  updateBoard(boxNumber, type)
  let img = document.createElement("img");
  img.src = "images/" + type + ".png";
  img.width = 100;
  img.height = 100;
  box.appendChild(img);
}

function updateBoard(id, type)
{
  var value = GetCharInBoardFromType(type);
  let ids = GetIndexTabByBoxId(id);
  board[ids[0]][ids[1]] = value;
}

function GetCharInBoardFromType(type)
{
  return type == 'circle' ? 'o' : 'x';
}

function GetIndexTabByBoxId(id)
{
  return [Math.floor((id - 1) / 3), (id - 1) % 3]
}

/*CHECK WINNERS*/
function checkWinner(type) {
  let winnerRows = checkWinnerRows(type);
  let winnerColumns = checkWinnerColumns(type);
  let winnerDiagonals = checkWinnerDiagonals(type)
  if (winnerRows || winnerColumns || winnerDiagonals)
    DeclareWinner(type); 
  let gameEnded = checkGameEnded();
  if (gameEnded)
    DeclareGameEnded();
}

function checkGameEnded() {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === '_') {
        return false;
      }
    }
  }
  return true;
}

///
function checkWinnerRows(type) {
  let potentialWinningChar = GetCharInBoardFromType(type);
  for (let i = 0; i < board.length; i++) {
    let lines = board[i];
    if (lines[0] === potentialWinningChar && lines[1] === potentialWinningChar && lines[2] === potentialWinningChar) {
      return true;
    }
  }
  return false;
}

function checkWinnerColumns(type) {
  let potentialWinningChar = GetCharInBoardFromType(type);
  for (let i = 0; i < board.length; i++) {  // itérer de 0 à 2 pour les colonnes
    if (board[0][i] === potentialWinningChar && board[1][i] === potentialWinningChar && board[2][i] === potentialWinningChar) {
      return true;
    }
  }
  return false;
}

function checkWinnerDiagonals(type)
{
  let potentialWinningChar = GetCharInBoardFromType(type);
  let firstDiagonal = board[0][0] == potentialWinningChar &&  board[1][1] == potentialWinningChar &&  board[2][2] == potentialWinningChar;
  let secondDiagonal = board[0][2] == potentialWinningChar &&  board[1][1] == potentialWinningChar &&  board[2][0] == potentialWinningChar;
  return firstDiagonal || secondDiagonal;
  
}

function DeclareWinner(type)
{
  setTimeout(() => {  
    alert(type + "winner !!!")
    Reset();
   }, 1);

}
function DeclareGameEnded()
{
  
  alert("Fin de partie...");
  Reset();
}

function displayBoard()
{
  // console.log("counter : " + counter)
  // console.log("88888888888888888")
  // console.log("BOARD")
  // console.log(board[0][0] + ' ' + board[0][1] + ' ' + board[0][2]);
  // console.log('-----');
  // console.log(board[1][0] + ' ' + board[1][1] + ' ' + board[1][2]);
  // console.log('-----');
  // console.log(board[2][0] + ' ' + board[2][1] + ' ' + board[2][2]);
}