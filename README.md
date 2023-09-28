<h1>Weather Web App</h1>

<p>Welcome to the Weather Web App, a simple web application that allows you to check the current weather for a location of your choice. This app makes asynchronous requests (AJAX) to a weather API, displays weather data in a user-friendly format, and handles error cases gracefully.
</p>

<h1>Features</h1>

<h3>1. Homepage</h3>
<p>
The homepage provides a straightforward user interface with the following elements:

Location Input: Enter the name of a location (e.g., city or ZIP code) in the input field.

"Get Weather" Button: Click this button to trigger the weather request based on the entered location.

Unit Selection: Choose between Celsius and Fahrenheit using the unit toggle dropdown.

Optional: Use My Location: Click the "Use My Location" button to automatically fetch weather data for your current location (requires geolocation permissions).

</p>
<h3>2. Weather Display</h3>
<p>
Once you enter a location and click "Get Weather" or use the geolocation feature, the app displays the current weather conditions, including:

Temperature: Displayed in the selected unit (Celsius or Fahrenheit).

Humidity: Indicates the relative humidity percentage.

Wind Speed: Shows the wind speed in kilometers per hour.

Weather Description: Provides a brief description of the current weather conditions.

</p>
<h3>3. Error Handling</h3>
   The app implements error handling for the following scenarios:

When the entered location is not found or is invalid.
When there is an issue with the API request.
In case of an error, a user-friendly error message will be displayed, guiding you on how to proceed.

<h3>4. Styling</h3>
   The app features a clean and visually appealing design with attention to layout, color scheme, and readability. CSS styles have been applied to enhance the user experience.

5. Responsive Design
   The Weather Web App is designed to be responsive and functions well on both desktop and mobile devices. It has been tested for usability on various screen sizes.

Getting Started
Clone this repository to your local machine:
<hr>
bash
Copy code
git clone https://github.com/your-username/weather-web-app.git
Open the project directory:
<hr>
bash
Copy code
cd weather-web-app
Open index.html in your web browser to launch the application.

Usage
Enter a location (e.g., city or ZIP code) in the input field.

Choose the preferred temperature unit (Celsius or Fahrenheit) from the unit toggle dropdown.

Click the "Get Weather" button to fetch weather data for the entered location.

Optionally, click the "Use My Location" button to automatically fetch weather data for your current location (requires geolocation permissions).

Dependencies
This project uses the following technologies and APIs:

OpenWeatherMap API for fetching weather data.
