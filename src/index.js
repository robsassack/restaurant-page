import printContent from "./printContent.js";
import "./style.css";

let content = document.querySelector(".content");

function component() {
  return printContent();
}

content.appendChild(component());
