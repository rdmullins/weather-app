# Weather App
## by Roger Mullins
## Awesome Inc. Bootcamp Fall 2022

## Description
For this project, we will be using an external API to retrieve weather data to create a webpage that prompts users to enter a zip code, then displays current weather information for that location or a friendly error message if the zip code is not found.

## Requirements
To complete the assignment, you must complete the following:
1. Use JS to render the entire app (only have a single <div id='main'></div> in the body of your index.html).
1. Use https://openweathermap.org/’s API to fetch weather data.
1. Allow the user to enter their location (zip code is probably easiest) and press a button to load the weather.
1. Run an onClick or onSubmit that executes an Axios GET request to retrieve weather data from the API.
1. Handle successful and unsuccessful attempts
    1. If the request is successful, display the following in a 'mobile app' format:
        1. City name
        1. Current weather conditions
        1. Current temperature in Kelvin, Fahrenheit, and Celsius
        1. A unique image, decided by the current temperature (The API has icons built-in, be sure to read the docs)
    1. If the request is unsuccessful, display a specific error message such as "Invalid Zip Code" or anything else that might come back from the API.
1. Allow the user to continue entering new zip codes to get new weather data.
1. Design should include a RESPONSIVE layout utilizing Bootstrap’s layout classes that works on both mobile and desktop (with different layouts) and applies atomic design principles for a professional looking presentation.
