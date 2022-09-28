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

async function callAPI() {
  // Gets data from API and updates stateObj
  const dataBack = await axios.get("https://api.openweathermap.org/data/2.5/weather?zip=40504,us&appid=a6063ef55e23ba5afdf671e31f5cdf4b");
  console.log("Inside the async function, dataBack = ", dataBack);
  console.log("City is: ", dataBack.data.name);
  console.log("ZIP code is: ", "40504 <- this is hard coded for now");
  console.log("Temperature (K) is: ", dataBack.data.main.temp, "K");
  console.log("Temperature (F) is: ", (1.8*((dataBack.data.main.temp)-273)), "°F");   // 1.8*(K-273) + 32
  console.log("Temperature (C) is: ", (databack.data.main.temp - 273.15), "°C")       // Kelvin – 273.15
  console.log("")
  // weatherData = dataBack;
  // objectIn(weatherData);
};

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