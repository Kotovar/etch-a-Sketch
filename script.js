//создание сетки 16 х 16
let container = document.getElementById("container");
container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(16, 25px)";
container.style.gridTemplateRows = "repeat(16, 25px)";

for (let i = 0; i < 256; i++) {
  let cell = document.createElement("div");

  cell.style.width = "auto";
  cell.style.height = "auto";

  container.appendChild(cell);
  cell.classList.add("cell");
}

//создание эффекта зависания мыши

let cell = document.getElementsByClassName("cell");

for (let i = 0; i < cell.length; i++) {
  cell[i].addEventListener("mouseover", function () {
    cell[i].style.backgroundColor = "red";
  });
}

for (let i = 0; i < cell.length; i++) {
  cell[i].addEventListener("mouseout", function () {
    cell[i].style.backgroundColor = "white";
  });
}
