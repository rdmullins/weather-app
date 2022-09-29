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

// Global Variable

let zipIn = "";

function buildUI() {
  // Creates HTML elements

  function createElement(parentID, typeOfElement, bootstrapClasses, idString, innerText = "") {
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

  function createInputSection() {
    let target = document.getElementById('input-div');
    let inputBox = document.createElement('input');
    inputBox.classList.add("form-control");
    inputBox.setAttribute("type", "text");
    inputBox.setAttribute("placeholder", "Enter a 5-digit ZIP code");
    target.appendChild(inputBox);

    let zipButton = document.createElement('button');
    zipButton.classList.add(["btn", "btn-dark", "btn-lg"]);
    zipButton.setAttribute("type", "button");
    zipButton.innerText = "Submit";
    target.appendChild(zipButton);
  }

  createElement("main", "div", ["container"], "appContainer");
  createElement("appContainer", "div", ['nav', 'navbar', 'navbar-expand-sm', 'py-3'], "navbar");
  createElement("navbar", "h1", ["navbar-brand"], "navbarBrand", "Weather App");
  createNavToggle();
  createElement("hamburger", "span", ["navbar-toggler-icon"]);
  createElement("navbar", "div", ["collapse", "navbar-collapse"], "navbar-collapse");
  createElement("navbar-collapse", "ul", ["navbar-nav", "ms-auto"], "nav-list");
  createElement("nav-list", "li", ["nav-item"], "nav-list-item-1");
  createElement("nav-list-item-1", "a", [], "about-link", "About");
  createElement("nav-list", "li", ["nav-item"], "nav-list-item-2");
  createElement("nav-list-item-2", "a", [], "contact-link", "Contact");
  createElement("appContainer", "div", ["container-fluid"], "zip-code-container");
  createElement("zip-code-container", "div", ["d-sm-flex", "justify-content-between", "align-items-center"], "zip-code-label-box");
  createElement("zip-code-label-box", "h3", ["mb-3", "mb-md-0"], "zip-code-label-text", "ZIP Code");
  createElement("zip-code-label-box", "div", ["input-group"], "input-div");
  createInputSection();
  
  // Everything below this row is targeted by the updateDisplay() function for dynamic populating
  // Note IDs in side comments -> correspond to stateObj fields

  createElement("appContainer", "div", ["container", "text-center"], "returned-data-section");
  createElement("returned-data-section", "div", ["row", "bg-warning", "align-items-center"], "city-label-row");
  createElement("city-label-row", "div", ["col", "display-5"], "city-label-display", "City");
  createElement("returned-data-section", "div", ["row", "align-items-center"], "city-display-row");
  createElement("city-display-row", "div", ["col", "align-items-center", "display-3"], "city-display", "CITY GOES HERE");              // city-display
  createElement("returned-data-section", "div", ["row"], "zip-code-display-row");
  createElement("zip-code-display-row", "div", ["col", "display-5"], "zip-code-display", "ZIP GOES HERE");       // zip-code-display
  createElement("appContainer", "div", ["row", "text-center", "bg-warning"], "temperature-label-row");
  createElement("appContainer", "div", ["row", "text-center", "bg-warning"], "temperature-display-label-row");
  createElement("temperature-display-label-row", "div", ["col", "display-5"], "temperature-display-label", "Temperature");
  createElement("appContainer", "div", ["row"], "temperature-display-row");
  createElement("temperature-display-row", "div", ["col-4", "text-center"], "temp-Kelvin", "KELVIN GOES HERE");          // temp-Kelvin
  createElement("temperature-display-row", "div", ["col-4", "text-center", "display-3", "bg-info"], "temp-Fahrenheit", "FAHRENHEIT GOES HERE");  // temp-Fahrenheit
  createElement("temperature-display-row", "div", ["col-4", "text-center"], "temp-Celsius", "CELSIUS GOES HERE");        // temp-Celsius
  createElement("appContainer", "div", ["row", "text-center", "bg-warning"], "condition-label-row");
  createElement("condition-label-row", "div", ["col", "display-5"], "current-conditions-label", "Current Conditions");
  createElement("appContainer", "div", ["row"], "condition-display-row");
  createElement("condition-display-row", "div", ["col", "text-center", "display-5"], "condition-display",);         // condition-display
  createElement("appContainer", "div", ["row"], "other-info-label-row");
  createElement("other-info-label-row", "div", ["col", "display-5"], "other-info-label");
  createElement("appContainer", "div", ["row"], "other-info-display-row");
  createElement("other-info-display-row", "img", [], "weather-img");                                      // weather-img
  createElement("main", "footer", [], "footer-info");
  createElement("footer-info", "h6", ["text-center"], "favicon-attribution", "FavIcon provided by https://www.flaticon.com/free-icons/weather");

  // createElement("appContainer", "row", ["d-sm-flex"], "city-label-row", "City");
  // createElement("appContainer", "row", ["d-sm-flex"], "city-display", "CITY GOES HERE");                  // city-display
  // createElement("appContainer", "row", ["d-sm-flex"], "zip-code-display", "ZIP CODE GOES HERE");          // zip-code-display
  // createElement("appContainer", "row", ["d-sm-flex"], "temperature-label-row", "Temperature");
  // createElement("appContainer", "row", ["d-sm-flex"], "temperature-display");
  // createElement("temperature-display", "col", ["d-sm-flex"], "temp-Kelvin", "KELVIN GOES HERE");          // temp-Kelvin
  // createElement("temperature-display", "col", ["d-sm-flex"], "temp-Fahrenheit", "FAHRENHEIT GOES HERE");  // temp-Fahrenheit
  // createElement("temperature-display", "col", ["d-sm-flex"], "temp-Celsius", "CELSIUS GOES HERE");        // temp-Celsius
  // createElement("appContainer", "row", ["d-sm-flex"], "condition-label-row", "Conditions");
  // createElement("appContainer", "row", ["d-sm-flex"], "condition-display", "CONDITIONS GO HERE");         // condition-display
  // createElement("appContainer", "row", ["d-sm-flex"], "other-info-label-row", "Other Information");
  // createElement("appContainer", "row", ["d-sm-flex"], "other-info-display-row");
  // createElement("other-info-display-row", "img", [], "weather-img");                                      // weather-img
  // createElement("main", "footer", [], "footer-info");
  // createElement("footer-info", "h6", [], "favicon-attribution", "FavIcon provided by https://www.flaticon.com/free-icons/weather");


}

async function callAPI(zipIn) {
  // Builds API call string and gets data from API
  const apiKey = "a6063ef55e23ba5afdf671e31f5cdf4b";
  const apiCall = ("https://api.openweathermap.org/data/2.5/weather?zip=" + zipIn + ",us&appid=" + apiKey);
  const dataBack = await axios.get(apiCall);
  console.log(dataBack);
  // if (dataBack.request.statusText == "Not Found") {
  //   console.log("Invalid ZIP code - city not found.");
  // }

  // ^ This is not working. Need to figure out how to error catch with Axios

  // Update stateObj with returned data
  stateObj.city = dataBack.data.name;
  stateObj.zipCode = zipIn;
  stateObj.tempK = (dataBack.data.main.temp+"K"); 
  stateObj.tempF = (Math.floor((1.8*((dataBack.data.main.temp)-273))+32)+"°F");   // 1.8*(K-273) + 32 
  stateObj.tempC = (Math.floor((dataBack.data.main.temp - 273.15))+"°C");         // Kelvin – 273.15
  stateObj.condition = (dataBack.data.weather[0].main, " with ", dataBack.data.weather[0].description);
  stateObj.imageURL = ("http://openweathermap.org/img/wn/"+dataBack.data.weather[0].icon+".png");
  updateDisplay();
};

function updateDisplay() {

  function updateElement(id, value) {
    let e = document.getElementById(id);
    if (id !== "weather-img") {
      e.innerText = value;
    } else {
      e.setAttribute("src", value);
    };
  };

  updateElement("city-display", stateObj.city);
  updateElement("zip-code-display", stateObj.zipCode);
  updateElement("temp-Kelvin", stateObj.tempK);
  updateElement("temp-Fahrenheit", stateObj.tempF);
  updateElement("temp-Celsius", stateObj.tempC);
  updateElement("condition-display", stateObj.condition);
  updateElement("weather-img", stateObj.imageURL);

};

function zipValidates(zipToCheck) {
  // This function returns a Boolean value depending on two tests:
  //    1. The ZIP code length has to be 5
  //    1. The ZIP code has to consist of digits
  returnValueLength = false;
  returnValueDigits = false;

  if (zipToCheck.length === 5) {
    returnValueLength = true;
  };
  
  for (let i=0; i<zipToCheck.length; i++) {
    let test = (Number(zipToCheck[i]))
    if (isNaN(test)) {
      returnValueDigits = false;
      break
    } else {
      returnValueDigits = true
    }

  };
  return (returnValueLength && returnValueDigits);
};

buildUI();
zipIn = prompt("ZIP Code:");

if (zipValidates(zipIn)) {
  callAPI(zipIn);
} else {
  alert("Invalid ZIP code.");
}

// validateZip(zipIn);
//callAPI("41572");