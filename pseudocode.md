# Weather App
## by Roger Mullins
## Awesome Inc. Bootcamp Fall 2022

## Description
For this project, we will be using an external API to retrieve weather data to create a webpage that prompts users to enter a zip code, then displays current weather information for that location or a friendly error message if the zip code is not found.

## Requirements
To complete the assignment, you must complete the following:
1. Use JS to render the entire app (only have a single `<div id='main'></div>` in the body of your index.html).
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

## Variables
- State object for entire page (see below)
- ZIP code
- API Key
- API Call String (built dynamically)
- state (int)
    - Initial, 0 (ZIP code box)
    - Display, 1, generate HTML

## stateObj
- City (weather api = name)
- ZIP Code
- Temperature in Kelvin (weather api = main.temp)
- Temperature in Fahrenheit (have to compute)
- Temperature in Celsius (have to compute)
- Condition (weather api = weather.main and weather.description)
- Image (weather api = http://openweathermap.org/img/wn/10d@2x.png (EX))
    - File name is weather.icon from API call
    - Scaling possible within file name

## Functions

### initialize()
1. BEGIN
1. SELECT target DIV
1. CREATE container DIV
1. CREATE navbar DIV
    1. BEGIN
    1. ADD logo text
    1. ADD About
    1. ADD Contact
    1. ADD hamburger menu functionality
    1. END
1. MODAL for ZIP???
1. CREATE ZIP code input box
1. CREATE Submit button
1. CREATE DIVs for data display
    1. BEGIN
    1. City
    1. Temperature
    1. Condition
    1. Other info/image
    1. END
1. END


### validateZIP()
1. BEGIN
1. TEST does ZIP.length = 5?
    1. BEGIN
    1. IF ZIP.length != 5 return error
    1. ELSE proceed
    1. END
1. TEST are all characters in ZIP digits?
    1. BEGIN
    1. STEP through five-character string
    1. USE Number() function on each character
    1. USE isNaN() function on each converted character
    1. IF isNaN() returns true, return error
    1. ELSE proceed
    1. IF isNaN() returns false, the value IS a number
    1. END
1. END

### buttonClick()
1. // I think this can be replaced by initialize()

### getData()
1. BEGIN
1. BUILD API call
    1. BEGIN
    1. CREATE string
    1. SET string = base URL
    1. SET string = string + ZIP code
    1. SET string = string + API key
    1. END
1. USE Axios to call API with string
1. UPDATE stateObj with returned data
1. END

### tempConversion() // This got cut - easy to do conversion inline
1. BEGIN
1. Kelvin passed in
1. F = 1.8*(K-273) + 32
1. Celsius = (Kelvin – 273.15)
1. END

### updateDisplay()
1. BEGIN
1. GET target DIVs
1. SET target DIV innerText to value from object
1. END

## UX Walkthrough
1. Page Load
    1. BEGIN
    1. BUILD out initialize page elements
        1. TITLE
        1. ZIP CODE input box
        1. BUTTON
    1. BUTTON CLICK
        1. BEGIN
        1. VERIFY ZIP CODE
            1. IS Length = 5?
            1. are all characters numbers?
        1. END
    1. END // Page load - Only progress if ZIP code validates, otherwise ERROR
1. BUILD API call
    1. BEGIN
    1. base URL
    1. APPEND ZIP code
    1. APPEND API key (from variable)
    1. END
1. EXECUTE API call
    1. BEGIN
    1. Axios API call using built string
    1. RETURN data object JSON
    1. END
1. EXTRACT information from JSON
    1. BEGIN
    1. City
    1. Temperature in Kelvin (weather api = main.temp)
    1. Condition (weather api = weather.main and weather.description)
    1. Image (weather api = http://openweathermap.org/img/wn/10d@2x.png (EX))
        - File name is weather.icon from API call
        - Scaling possible within file name
    1. END
1. CALL tempConversion() function
1. ASSIGN extracted info to Object
    1. Include ZIP code
    1. Include converted temperature
1. CALL updateDisplay() function
1. END

## To Do
- [x] Fix width issue with ZIP code input box
- [x] Wire up 'Submit' button
- [x] Once that's working turn off prompt()
- [x] When ZIP code box is active, render navbar and input sections on page load
- [x] Figure out error handling from API
- [x] Fix capitalization issue with 'conditions'
    - Capitalize first letter of all words
- Write readme

## Stretch Goals to Add
- [x] Change background colors depending on temp
- Change app colors night/day
- Allow user to select 'favorite' temp
    - It would be awesome if this would slide
- Wind speed and direction
- [x] Add current time under zip code
- Add five-day?
- Store favorite locations?
- [x] Modal about
- [x] Modal contact
- ^ Only if I get navbar working

