let counter = 0;

Array.from(document.getElementsByClassName("box")).forEach(function (item) {
  item.addEventListener("click", function functionToRemove() {
    addImage(item, counter % 2 == 0 ? "circle" : "cross");
    this.removeEventListener("click", functionToRemove);
    checkWinner();
  });
});

function addImage(box, type) {
  let img = document.createElement("img");
  img.src = "images/" + type + ".png";
  img.width = 100;
  img.height = 100;
  box.appendChild(img);
  box.classList.add(type);
  counter++;
}

function checkWinner() {
  let boxes = Array.from(document.getElementsByClassName("box"));
  let winner = false;
  console.log(boxes);
}

// function checkWinnerRows()
// [
//   let boxes = Array.from(document.getElementsByClassName("box"));
//   if (boxes.)
// ]
