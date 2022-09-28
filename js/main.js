async function apiTest() {
    const dataBack = await axios.get("https://api.openweathermap.org/data/2.5/weather?zip=40504,us&appid=a6063ef55e23ba5afdf671e31f5cdf4b");
    return dataBack;
};

let weatherData = apiTest();

console.log(weatherData);