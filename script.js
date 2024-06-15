const notesContainer = document.querySelector(".note-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("Notes") || "";
}

function updateStorage() {
  localStorage.setItem("Notes", notesContainer.innerHTML);
}
createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  inputBox.appendChild(img);
  notesContainer.appendChild(inputBox);
  updateStorage();
});

notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  }
});
notesContainer.addEventListener("keyup", (e) => {
  if (e.target.classList.contains("input-box")) {
    updateStorage();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});

document.addEventListener("DOMContentLoaded", showNotes);
