const textChange = document.querySelector("#textChange");
const btnChange = document.querySelector("#btnChange");

btnChange.addEventListener("click", () => {
  textChange.innerHTML = "Salom!";
});

const list = document.querySelector("#list");
const btnList = document.querySelector("#btnList");
const item = document.createElement("li");

btnList.addEventListener("click", () => {
  const newItem = prompt("Enter new list item:");
  item.innerHTML = newItem;
  list.appendChild(item);
});

const area = document.querySelector("#area");
const textArea = document.querySelector("#textArea");

area.addEventListener("input", (e) => {
  let count = area.value;
  textArea.innerHTML = count.length;
});

const btnCount = document.querySelector("#btnCount");
const btnNumber = document.querySelectorAll("#btnNumber");
const count = document.querySelector("#count");

let n = 0;
btnNumber.forEach((x) => {
  x.addEventListener("click", () => {
    n++;
    count.innerHTML = n;
  });
});

console.log(btnNumber);
