import { mainContent, menuContent, contactContent } from "./printContent.js";
import "./style.css";

let content = document.querySelector(".content");
let home = document.querySelector(".home");
let menu = document.querySelector(".menu");
let contact = document.querySelector(".contact");

home.addEventListener("click", () => {
  home.classList.add("selected");
  menu.classList.remove("selected");
  contact.classList.remove("selected");
  content.textContent = "";
  content.appendChild(mainContent());
});

menu.addEventListener("click", () => {
  menu.classList.add("selected");
  home.classList.remove("selected");
  contact.classList.remove("selected");
  content.textContent = "";
  content.appendChild(menuContent());
});

contact.addEventListener("click", () => {
  contact.classList.add("selected");
  menu.classList.remove("selected");
  home.classList.remove("selected");
  content.textContent = "";
  content.appendChild(contactContent());
});

content.appendChild(mainContent());
