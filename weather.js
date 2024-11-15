const inputCity = document.getElementById("city-name-js");
const getWeather = document.getElementById("get-weather-js");
const weatherResults = document.querySelector(".weather-results");

getWeather.addEventListener("click", async () => {
  const query = inputCity.value.trim();
  weatherResults.innerHTML = "";

  if (!query) {
    throw new Error("Please enter a city you want to search");
    return value;
  }

  try {
    const appId = "9362f0ebdcf10d94c83d0c257b41faf7";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${appId}&units=metric`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      alert("Failed to fetch weather data");
      return;
    }

    const data = await response.json();

    weatherResults.innerHTML = `
         
             <h2 class="city-name">${data.name}</h2>
            <p class="temp-number">${data.main.temp}°C</p>
            <p><strong>Condition:</strong> ${data.weather[0].description}</p>
            <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
            <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
          
         
        `;
  } catch (error) {
    weatherResults.innerHTML = `<p class="error">${error.message}</p>`;
  }

 
});
