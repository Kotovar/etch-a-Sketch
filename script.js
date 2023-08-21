let container = document.getElementById("container");
container.style.display = "grid";

//функция для создания сетки по аргументу
function create(number) {
  let header = document.getElementById("header");
  header.textContent = `Сетка ${number} на ${number}`;
  container.style.gridTemplateColumns = "repeat(" + number + ", auto)";
  container.style.gridTemplateRows = "repeat(" + number + ", auto)";

  for (let i = 0; i < number * number; i++) {
    let cell = document.createElement("div");

    cell.style.width = "auto";
    cell.style.height = "auto";

    container.appendChild(cell);
    cell.classList.add("cell");
    // listener();
  }
}

create(16); //стартовая сетка

//создание эффекта зависания мыши

container.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("cell")) {
    e.target.style.backgroundColor = "red";
  }
});

// container.addEventListener("mouseout", function (e) {
//   if (e.target.classList.contains("cell")) {
//     e.target.style.backgroundColor = "white";
//   }
// });

// настройка смены размера поля
let button = document.getElementById("reset");
button.addEventListener("click", function () {
  let choice = prompt("Какой размер?");
  if (choice >= 2 && choice <= 100) {
    container.replaceChildren();
    create(choice);
  } else {
    alert("Так нельзя");
  }
});
