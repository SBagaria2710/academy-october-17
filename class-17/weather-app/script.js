// Constants
const baseURL = "https://api.weatherapi.com";
const apiKey = "29a4726fe2e843458c5140340240102";

// Elements
const temperatureField = document.querySelector(".temp");
const cityField = document.querySelector(".time_location p");
const dateField = document.querySelector(".time_location span");
const emojiField = document.querySelector(".weather_condition img");
const weatherField = document.querySelector(".weather_condition span");
const errorField = document.querySelector(".errorText");
const searchField = document.querySelector(".searchField");
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (searchField.value) {
    getWeatherForCity(searchField.value);
  }
});

async function getWeatherForCity(city) {
  try {
    // 1. Call the Weather API
    const response =
      await fetch(`${baseURL}/v1/current.json?key=${apiKey}&q=${city}&aqi=no
`);
    const data = await response.json();

    if (data.error) {
      throw new Error();
    }

    const { location, current } = data;
    const { name, localtime } = location;
    const {
      temp_c,
      condition: { icon, text },
    } = current;

    // 2. Update the DOM based on API response
    temperatureField.innerText = `${temp_c} °C`;
    cityField.innerText = name;
    dateField.innerText = localtime;
    emojiField.src = icon;
    weatherField.innerText = text;

    // Reset the search field
    searchField.value = "";

    // Reset the error to display: none
    if (errorField.style.display === "block") {
      errorField.style.display = "none";
    }
  } catch (err) {
    searchField.value = "";
    errorField.innerText = "Please, enter a valid location";
    errorField.style.display = "block";

    return;
  }
}
