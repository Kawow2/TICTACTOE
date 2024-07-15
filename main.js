let counter;

startGame();

//RESET
var resetButton = document.getElementById('reset');
resetButton.addEventListener("click", function (item) {
  Array.from(document.getElementsByClassName("box")).forEach(function (item) {
    if (item.childNodes[0] != null)
      {
        item.removeChild(item.childNodes[0])
      }
  });
  startGame();
});

function startGame()
{
  Array.from(document.getElementsByClassName("box")).forEach(function (item) {
    item.classList.remove("cross");
    item.classList.remove("circle");
    item.addEventListener("click", function functionToRemove() {
      let type = counter % 2 == 0 ? "circle" : "cross"
      addImage(item, type);
      this.removeEventListener("click", functionToRemove);
      winner = checkWinner(type);
    });
  });
  counter = 0;
}
  
function addImage(box, type) {
  let img = document.createElement("img");
  img.src = "images/" + type + ".png";
  img.width = 100;
  img.height = 100;
  box.appendChild(img);
  box.classList.add(type);
  counter++;
}

/*CLEAR BOARD */

/*CHECK WINNERS*/
function checkWinner(type) {
  let boxes = document.getElementsByClassName("box");
  let winnerRows = checkWinnerRows(boxes,type);
  let winnerColumns = checkWinnerColums(boxes,type);
  let winnerDiagonals = checkWinnerDiagonals(boxes,type)
  if (winnerRows || winnerColumns || winnerDiagonals)
    DeclareWinner(type); 
  let gameEnded = checkGameEnded(boxes);
  if (gameEnded)
    DeclareWinner(type);
}

function checkGameEnded(boxes)
{
  let i =0;
  while (i<9)
    {
      
    }
}

///
function checkWinnerRows(boxes,type)
{
  let winner = false;
  let count = 0;
  while (winner == false && count < 9)
  {
    console.log(CheckTypeOnClassList(type,boxes[count].classList))
    winner = CheckTypeOnClassList(type,boxes[count].classList) && CheckTypeOnClassList(type,boxes[count+1].classList) && CheckTypeOnClassList(type,boxes[count+2].classList); 
    count+=3;
  }
  return winner;
}

function checkWinnerColums(boxes,type)
{
  let winner = false;
  let count = 0;
  while (winner == false && count < 3)
  {
    winner = CheckTypeOnClassList(type,boxes[count].classList) && CheckTypeOnClassList(type,boxes[count+3].classList) && CheckTypeOnClassList(type,boxes[count+6].classList); 
    count+=3;
  }
  return winner;
}

function checkWinnerDiagonals(boxes,type)
{
  let firstDiagonal = CheckTypeOnClassList(type,boxes[0].classList) && CheckTypeOnClassList(type,boxes[4].classList) && CheckTypeOnClassList(type,boxes[8].classList);
  let secondDiagonal = CheckTypeOnClassList(type,boxes[2].classList) && CheckTypeOnClassList(type,boxes[4].classList) && CheckTypeOnClassList(type,boxes[6].classList);
  return firstDiagonal || secondDiagonal;
  
}

function CheckTypeOnClassList(type, classList)
{
  return classList.contains(type);
}

function DeclareWinner(type)
{
  alert(type + "winner !!!")
}
function DeclareGameEnded()
{
  alert("Fin de partie...")
}