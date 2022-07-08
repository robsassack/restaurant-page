// import printContent from './printContent.js';

let content = document.querySelector(".content");

function component() {
  const element = document.createElement("div");

  const mainText = document.createElement("p");
  mainText.innerText = `Welcome to Rob's Diner! Come on by and help yourself to our menu of American classics!`;

  const image = document.createElement("img");
  image.src = "../src/spencer-davis-R_J6KjC68E4-unsplash.jpg";
  image.height = 300;

  const hours = document.createElement("p");
  hours.innerText = "Hours";

  const hoursList = document.createElement("ul");
  const hours1 = document.createElement("li");
  hours1.innerText = "Monday - Friday: 7am - 9pm";
  const hours2 = document.createElement("li");
  hours2.innerText = "Saturday: 8am - 10pm";
  const hours3 = document.createElement("li");
  hours3.innerText = "Sunday: Closed";
  hoursList.appendChild(hours1);
  hoursList.appendChild(hours2);
  hoursList.appendChild(hours3);

  element.appendChild(mainText);
  element.appendChild(image);
  element.appendChild(hours);
  element.appendChild(hoursList);
  return element;
}

content.appendChild(component());
