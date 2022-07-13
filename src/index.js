import { mainContent, menuContent, contactContent } from "./printContent.js";
import "./style.css";

let content = document.querySelector(".content");
let home = document.querySelector(".home");
let menu = document.querySelector(".menu");
let contact = document.querySelector(".contact");

home.addEventListener("click", () => {
  console.log("Home");
  content.textContent = "";
  content.appendChild(mainContent());
});

menu.addEventListener("click", () => {
  console.log("Menu");
  content.textContent = "";
  content.appendChild(menuContent());
});

contact.addEventListener("click", () => {
  console.log("Contact");
  content.textContent = "";
  content.appendChild(contactContent());
});

content.appendChild(mainContent());
