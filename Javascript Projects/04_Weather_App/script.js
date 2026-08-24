const forcastContent = document.querySelector(".forcast-content");
const inputField = document.querySelector(".weather-input input");
const fetchBtn = document.querySelector(".fetch-btn");
const country = document.querySelector(".country");
const weatherCity = document.querySelector(".city-name");
const population = document.querySelector(".population");

const API_KEY = "2145ae06a1830e7d78036ddcd3e22c99";

// =====================
// Fetching weather data
// =====================

async function getweatherData(cityName) {
  const geoResponse = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`,
  );

  const geoData = await geoResponse.json();

  const latitude = geoData[0].lat;
  const longitude = geoData[0].lon;

  const weatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`,
  );

  const { list, city } = await weatherResponse.json();
  weatherCity.innerText = city.name;
  country.innerText = city.country;
  population.innerText = city.population;
  setWeatherData(list);
}

// ======================
// Rendering weather data
// ======================

function setWeatherData(list) {
  forcastContent.innerHTML = "";

  list.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("item-data");
    div.innerHTML = `
    <p class="time">${item.dt_txt}</p>
    <img
      class="icon"
      src="https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png"
      alt="icon"
    />
    <p class="desc">${item.weather[0].description}</p>
    <p class="temp">temperature ${Math.floor(item.main.temp - 273.15)}°C</p>
    <p class="pressure">Pressure ${item.main.pressure}Pa</p>
    `;
    forcastContent.append(div);
  });
}

getweatherData("Lahore");

// ==================
// Input weather data
// ==================

function handleInputWeather() {
  const cityName = inputField.value.trim();
  if (cityName !== "") {
    getweatherData(cityName);
  }
}

fetchBtn.addEventListener("click", handleInputWeather);
