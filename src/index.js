import printContent from "./printContent.js";
import "./style.css";

let content = document.querySelector(".content");
let home = document.querySelector(".home");
let menu = document.querySelector(".menu");
let contact = document.querySelector(".contact");

home.addEventListener("click", () => {
  console.log("Home");
  content.textContent = "";
  content.appendChild(component());
});

menu.addEventListener("click", () => {
  console.log("Menu");
  content.textContent = "";
});

contact.addEventListener("click", () => {
  console.log("Contact");
  content.textContent = "";
});

function component() {
  return printContent();
}

content.appendChild(component());
