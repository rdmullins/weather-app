// Weather App
// by Roger Mullins

// Object Definition

let stateObj = {
  city : "",
  zipCode: "",
  tempK: 0,
  tempF: 0,
  tempC: 0,
  condition: "",
  imageURL: ""
};

function buildUI() {
  // Creates HTML elements

  function createElement(parentID, typeOfElement, bootstrapClasses, idString, innerText = "") {
    console.log("Inside createElements()");
    let target = document.getElementById(parentID);
    let newElement = document.createElement(typeOfElement);
    newElement.classList.add(...bootstrapClasses);
    newElement.setAttribute("id", idString);
    if (innerText != "") {
      newElement.innerText = innerText;
    }
    target.appendChild(newElement);
  };

  function createNavToggle() {
    let target = document.getElementById('navbar');
    let newButton = document.createElement('button');
    newButton.classList.add('navbar-toggler');
    newButton.setAttribute('type', 'button');
    newButton.setAttribute('data-bs-toggle', 'collapse');
    newButton.setAttribute('data-bs-target', '#nav-menu');
    newButton.setAttribute('id', 'hamburger');
    target.appendChild(newButton);
  }

  createElement("main", "div", ["container"], "appContainer");
  createElement("appContainer", "div", ['nav', 'navbar', 'navbar-expand-lg', 'py-3'], "navbar");
  createElement("navbar", "h1", ["navbar-brand"], "navbarBrand", "Weather App");
  createNavToggle();
  createElement("hamburger", "span", ["navbar-toggler-icon"]);
  createElement("navbar", "div", ["collapse", "navbar-collapse"], "navbar-collapse");
  createElement("navbar-collapse", "ul", ["navbar-nav", "ms-auto"], "nav-list");
  createElement("nav-list", "li", ["nav-item"], "nav-list-item-1");
  createElement("nav-list-item-1", "a", [], "about-link", "About");
  createElement("nav-list", "li", ["nav-item"], "nav-list-item-2");
  createElement("nav-list-item-2", "a", [], "contact-link", "Contact");
  createElement("appContainer", "")
}

async function callAPI() {
  // Gets data from API and updates stateObj
  const dataBack = await axios.get("https://api.openweathermap.org/data/2.5/weather?zip=40504,us&appid=a6063ef55e23ba5afdf671e31f5cdf4b");
  console.log("Inside the async function, dataBack = ", dataBack);
  console.log("City is: ", dataBack.data.name);
  console.log("ZIP code is: ", "40504 <- this is hard coded for now");
  console.log("Temperature (K) is: ", dataBack.data.main.temp, "K");
  console.log("Temperature (F) is: ", Math.floor((1.8*((dataBack.data.main.temp)-273))+32), "°F");   // 1.8*(K-273) + 32
  console.log("Temperature (C) is: ", Math.floor((dataBack.data.main.temp - 273.15)), "°C")       // Kelvin – 273.15
  console.log("Current conditions: ", dataBack.data.weather[0].main, " with ", dataBack.data.weather[0].description);
  console.log("Path to Image: ", ("http://openweathermap.org/img/wn/"+dataBack.data.weather[0].icon+".png"));
  // weatherData = dataBack;
  // objectIn(weatherData);
};

buildUI();
callAPI();

// console.log("In the main program, weatherData = ", weatherData);

// function objectIn(param) {
//     console.log("In the objectIn function, weatherData = ", param);
// }

// async function getData(url) {
//     //try {
//       const response = await axios.get(url);
//       console.log(response.data.results);
//     //} catch (error) {
//     //  console.error(error);
//     //}
//   }
  
//   getData('https://rickandmortyapi.com/api/character');