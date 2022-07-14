import restImg from "./spencer-davis-R_J6KjC68E4-unsplash.jpg";
import friesImg from "./christian-bolt-Uf0aVyl5C70-unsplash.jpg";
import burgerImg from "./food-photographer-phototastyfood-ru-E94j3rMcxlw-unsplash.jpg";
import shakeImg from "./jonathan-borba-7TeR1A1MUpM-unsplash.jpg";

function mainContent() {
  const element = document.createElement("div");

  const mainText = document.createElement("p");
  mainText.innerText = `Welcome to Rob's Diner! Come on by and help yourself to our menu of American classics!`;

  const image = document.createElement("img");
  image.src = restImg;
  image.height = 300;

  const hoursContainer = document.createElement("div");
  const hours = document.createElement("p");
  hours.innerText = "Hours";
  hoursContainer.appendChild(hours);

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
  hoursContainer.appendChild(hoursList);

  element.appendChild(mainText);
  element.appendChild(image);
  element.appendChild(hoursContainer);

  return element;
}

function menuContent() {
  const element = document.createElement("div");

  let menuData = [
    {
      name: "Cheeseburger",
      desc: "Classic cheeseburger, served with lettuce and tomato",
      price: "$5",
      image: burgerImg,
    },
    {
      name: "French Fries",
      desc: "French fries made with our special seasoning",
      price: "$2",
      image: friesImg,
    },
    {
      name: "Milkshake",
      desc: "Rich and sweet milkshake",
      price: "$3",
      image: shakeImg,
    },
  ];

  menuData.forEach((item) => {
    const menuItem = document.createElement("div");

    const itemImg = document.createElement("img");
    itemImg.src = item.image;
    itemImg.height = 100;
    menuItem.appendChild(itemImg);
    const itemName = document.createElement("p");
    itemName.innerText = item.name;
    menuItem.appendChild(itemName);
    const itemDesc = document.createElement("p");
    itemDesc.innerText = item.desc;
    menuItem.appendChild(itemDesc);
    const itemPrice = document.createElement("p");
    itemPrice.innerText = item.price;
    menuItem.appendChild(itemPrice);

    element.appendChild(menuItem);
  });

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
