const apiKey = "3ad420237513864137c8800b105da3ed";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-button");
const unitToggle = document.getElementById("unitToggle");
const geolocationButton = document.getElementById("geolocationButton");
const weatherInfo = document.getElementById("weatherInfo");
const errorElement = document.querySelector(".error");
const weatherIcon = document.querySelector(".weathericon");

searchButton.addEventListener("click", () => {
  const location = searchInput.value.trim();
  const unit = unitToggle.value;

  if (location) {
    checkWeather(location, unit);
  } else {
    alert("Please enter a location.");
  }
});

geolocationButton.addEventListener("click", () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      checkWeatherByCoordinates(latitude, longitude, unitToggle.value);
    });
  } else {
    alert("Geolocation is not available in your browser.");
  }
});

const checkWeather = async (city, unit) => {
  const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);

  if (!response.ok) {
    displayError();
  } else {
    const data = await response.json();
    displayWeather(data, unit);
  }
};

const checkWeatherByCoordinates = async (latitude, longitude, unit) => {
  const response = await fetch(
    `${apiUrl}lat=${latitude}&lon=${longitude}&appid=${apiKey}`
  );

  if (!response.ok) {
    displayError();
  } else {
    const data = await response.json();
    displayWeather(data, unit);
  }
};

const displayWeather = (data, unit) => {
  const temperature = Math.round(data.main.temp);
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;
  const weatherDescription = data.weather[0].description;

  const weatherMessage = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>Temperature: <span>${temperature}°${
    unit === "metric" ? "C" : "F"
  }</span> </p>
      <p>Humidity: <span>${humidity}%</span></p>
      <p>Wind Speed:<span> ${windSpeed} km/h</span></p>
      <p>Description: <span>${weatherDescription}</span></p>
  `;
  if (data.weather[0].main === "Clouds") {
    weatherIcon.src = "images/clouds.svg";
  } else if (data.weather[0].main === "Clear") {
    weatherIcon.src = "images/clear.svg";
  } else if (data.weather[0].main === "Rain") {
    weatherIcon.src = "images/rain.svg";
  } else if (data.weather[0].main === "Drizzle") {
    weatherIcon.src = "images/drizzle.svg";
  } else if (data.weather[0].main === "Mist") {
    weatherIcon.src = "images/mist.svg";
  } else if (data.weather[0].main === "Snow") {
    weatherIcon.src = "images/snow.svg";
  }
  weatherInfo.innerHTML = weatherMessage;
  errorElement.style.display = "none";
};

const displayError = () => {
  weatherInfo.innerHTML = "";
  errorElement.style.display = "block";
};
