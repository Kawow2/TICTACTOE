let counter = 0;

var board = [
  ['_','_','_'],
  ['_','_','_'],
  ['_','_','_'],
]

Array.from(document.getElementsByClassName("box")).forEach(function (item) {
  item.addEventListener("click", function functionToRemove() {
    let type = counter % 2 == 0 ? "circle" : "cross"
    addImage(item, type);
    this.removeEventListener("click", functionToRemove);
    winner = checkWinner(type);
  });
});


//RESET
// var resetButton = document.getElementById('reset');
// resetButton.addEventListener("click", function (item) {
//   Array.from(document.getElementsByClassName("box")).forEach(function (item) {
//     if (item.childNodes[0] != null)
//       {
//         item.removeChild(item.childNodes[0])
//       }
//   });
//   startGame();
// });

// function play()
// {
//   let type = counter % 2 == 0 ? "circle" : "cross"
//       addImage(item, type);
//       this.removeEventListener("click", functionToRemove);
//       winner = checkWinner(type);
// }



  
function addImage(box, type) {
  var boxNumber = box.id;
  updateBoard(boxNumber, type)
  let img = document.createElement("img");
  img.src = "images/" + type + ".png";
  img.width = 100;
  img.height = 100;
  box.appendChild(img);
  counter++;
}

function updateBoard(id, type)
{
  var value = GetCharInBoardFromType(type);
  let ids = GetIndexTabByBoxId(id);
  board[ids[0]][ids[1]] = value;
  console.log(board)
}

function GetCharInBoardFromType(type)
{
  return type == 'circle' ? 'o' : 'x';
}

function GetIndexTabByBoxId(id)
{
  return [Math.floor((id - 1) / 3), (id - 1) % 3]
}

/*CLEAR BOARD */

/*CHECK WINNERS*/
function checkWinner(type) {
  let winnerRows = checkWinnerRows(type);
  let winnerColumns = checkWinnerColumns(type);
  let winnerDiagonals = checkWinnerDiagonals(type)
  if (winnerRows || winnerColumns || winnerDiagonals)
    DeclareWinner(type); 
  // let gameEnded = checkGameEnded();
  // if (gameEnded)
  //   DeclareWinner(type);
}

function checkGameEnded()
{
  board.forEach(tab => {
    tab.forEach(value => {
      if (value != '_')
        return false
    });
  });

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
  alert(type + "winner !!!")
}
function DeclareGameEnded()
{
  alert("Fin de partie...")
}