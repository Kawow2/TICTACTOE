Array.from(document.getElementsByClassName("box")).forEach(function (item) {
  item.addEventListener("click", function () {
    addImage(item, "circle");
  });
});

function addImage(box, type) {
  let img = document.createElement("img");
  img.src = "images/" + type + ".png";
  img.width = 100;
  img.height = 100;
  box.appendChild(img);
}
