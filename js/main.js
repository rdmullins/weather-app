let weatherData = "";

async function apiTest() {
    const dataBack = await axios.get("https://api.openweathermap.org/data/2.5/weather?zip=40504,us&appid=a6063ef55e23ba5afdf671e31f5cdf4b");
    console.log("Inside the async function, dataBack = ", dataBack);
    weatherData = dataBack;
    objectIn(weatherData);
};

apiTest();

console.log("In the main program, weatherData = ", weatherData);

function objectIn(param) {
    console.log("In the objectIn function, weatherData = ", param);
}

async function getData(url) {
    //try {
      const response = await axios.get(url);
      console.log(response.data.results);
    //} catch (error) {
    //  console.error(error);
    //}
  }
  
  getData('https://rickandmortyapi.com/api/character');