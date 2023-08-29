const container = document.getElementById("container"); //основное поле
const color = document.getElementById("color");
const button_change = document.getElementById("change");
const button_reset = document.getElementById("reset");
const button_eraser = document.getElementById("eraser");
const button_crazy = document.getElementById("crazy");
let colorActive = "black";
let crazy = false;
container.style.display = "grid";

//рандомный цвет
const randomColor = () => {
  colorActive = `rgb(${Math.floor(Math.random() * 256)} ${Math.floor(
    Math.random() * 256
  )} ${Math.floor(Math.random() * 256)})`;
  return colorActive;
};

//режим ластика
button_eraser.addEventListener("click", function () {
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
});

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
  crazy = !crazy;
  button_crazy.classList.toggle("selected_tool");
  if (!crazy) {
    colorActive = color.value;
  }
  button_eraser.classList.remove("selected_tool");
  color.classList.remove("selected_tool");
});

//функция для создания сетки по аргументу
function create(number) {
  let header = document.getElementById("header");
  header.textContent = `Grid ${number} x ${number}`;
  container.style.gridTemplateColumns = `repeat(${number}, auto)`;
  container.style.gridTemplateRows = `repeat(${number}, auto)`;

  for (let i = 0; i < number * number; i++) {
    let cell = document.createElement("div");
    cell.style.width = "auto";
    cell.style.height = "auto";
    container.appendChild(cell);
    cell.classList.add("cell");
  }
}

//функция сброса
button_reset.addEventListener("click", function () {
  Array.from(container.children).forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
});

create(16); //стартовая сетка

//рисование по сетке выбранным цветом
container.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("cell")) {
    crazy ? randomColor() : null;
    e.target.style.backgroundColor = colorActive;
  }
});

// настройка смены размера поля
button_change.addEventListener("click", function () {
  let choice = prompt("Какой размер? (от 2 до 100)");
  choice >= 2 && choice <= 100
    ? (container.replaceChildren(), create(choice))
    : alert("некорректный ввод");
});
