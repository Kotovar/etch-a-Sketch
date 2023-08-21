let container = document.getElementById("container"); //основное поле
let color = document.getElementById("color");
let colorActive = "black";
let button = document.getElementById("reset");
container.style.display = "grid";

//функция для отслеживания, какой цвет выбран из палитры
color.addEventListener("input", function (e) {
  colorActive = e.target.value;
});

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
  }
}

create(16); //стартовая сетка

//рисование по сетке выбранным цветом

container.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("cell")) {
    // let computedStyle = window.getComputedStyle(e.target);
    // let currentColor = computedStyle.backgroundColor;

    e.target.style.backgroundColor = colorActive;

    // switch (currentColor) {
    //   case "rgba(0, 0, 0, 0)":
    //     e.target.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    //     break;
    //   case "rgba(0, 0, 0, 0.1)":
    //     e.target.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    //     break;
    //   case "rgba(0, 0, 0, 0.2)":
    //     e.target.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
    //     break;
    //   case "rgba(0, 0, 0, 0.3)":
    //     e.target.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    //     break;
    //   case "rgba(0, 0, 0, 0.4)":
    //     e.target.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    //     break;
    //   case "rgba(0, 0, 0, 0.5)":
    //     e.target.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    //     break;
    //   case "rgba(0, 0, 0, 0.6)":
    //     e.target.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    //     break;
    //   case "rgba(0, 0, 0, 0.7)":
    //     e.target.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    //     break;
    //   case "rgba(0, 0, 0, 0.8)":
    //     e.target.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    //     break;
    //   case "rgba(0, 0, 0, 0.9)":
    //     e.target.style.backgroundColor = "rgba(0, 0, 0, 1.0)";
    //     break;
    // }
  }
});

// настройка смены размера поля

button.addEventListener("click", function () {
  let choice = prompt("Какой размер?");
  if (choice >= 2 && choice <= 100) {
    container.replaceChildren();
    create(choice);
  } else {
    alert("некорректный ввод");
  }
});
