function mainContent() {
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

function menuContent() {
  const element = document.createElement("div");

  const mainText = document.createElement("p");
  mainText.innerText = "Menu";

  element.appendChild(mainText);

  return element;
}

function contactContent() {
  const element = document.createElement("div");

  const contactText = document.createElement("p");
  contactText.innerText =
    "You can find us at this location or contact us with the form below.";

  element.appendChild(contactText);

  return element;
}

export { mainContent, menuContent, contactContent };
