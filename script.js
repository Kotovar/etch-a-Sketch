let container = document.getElementById("container"); //основное поле
let color = document.getElementById("color");
let colorActive = "black";
let button_change = document.getElementById("change");
let button_reset = document.getElementById("reset");
let button_eraser = document.getElementById("eraser");
let button_crazy = document.getElementById("crazy");
let crazy = false;
container.style.display = "grid";

//рандомный цвет

function randomColor() {
  colorActive =
    "rgb(" +
    Math.floor(Math.random() * 256) +
    " " +
    Math.floor(Math.random() * 256) +
    " " +
    Math.floor(Math.random() * 256) +
    ")";
  return colorActive;
}

//режим ластика
button_eraser.onclick = function () {
  if (colorActive !== "white") {
    colorActive = "white";
    button_eraser.classList.add("selected_tool");
  } else {
    button_eraser.classList.remove("selected_tool");
    colorActive = color.value;
  }
  color.classList.remove("selected_tool");
  button_crazy.classList.remove("selected_tool");
  crazy = false;
  //   button_eraser.classList.toggle("selected_tool");
};

//функция для отслеживания, какой цвет выбран из палитры
color.addEventListener("input", function (e) {
  colorActive = e.target.value;
  button_eraser.classList.remove("selected_tool");
  button_crazy.classList.remove("selected_tool");
  color.classList.add("selected_tool");
  crazy = false;
});

//режим безумия

button_crazy.addEventListener("click", function () {
  if (!crazy) {
    button_crazy.classList.add("selected_tool");
    crazy = !crazy;
  } else {
    button_crazy.classList.remove("selected_tool");
    crazy = !crazy;
    colorActive = color.value;
  }
  button_eraser.classList.remove("selected_tool");
  color.classList.remove("selected_tool");
});

//функция для создания сетки по аргументу
function create(number) {
  let header = document.getElementById("header");
  header.textContent = `Grid ${number} x ${number}`;
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

button_reset.addEventListener("click", function () {
  for (let i = 0; i < container.childElementCount; i++) {
    container.children[i].style.backgroundColor = "white";
  }
});

create(16); //стартовая сетка

//рисование по сетке выбранным цветом

container.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("cell")) {
    if (crazy) {
      randomColor();
      e.target.style.backgroundColor = colorActive;
    } else {
      e.target.style.backgroundColor = colorActive;
    }
  }
});

// настройка смены размера поля

button_change.addEventListener("click", function () {
  let choice = prompt("Какой размер? (от 2 до 100)");
  if (choice >= 2 && choice <= 100) {
    container.replaceChildren();
    create(choice);
  } else {
    alert("некорректный ввод");
  }
});
