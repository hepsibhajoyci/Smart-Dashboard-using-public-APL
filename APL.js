async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "YOUR_API_KEY"; // from OpenWeatherMap
    const res = await fetch(
      https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric
    );
    const data = await res.json();
  
    const box = document.getElementById("weatherBox");
    const temp = data.main.temp;
    const weather = data.weather[0].main;
  
    // Change background color based on weather
    if (weather.includes("Clear")) document.body.style.background = "#ffe082";
    else if (weather.includes("Rain")) document.body.style.background = "#90a4ae";
    else document.body.style.background = "#b0bec5";
  
    // Show weather
    box.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>${weather}</p>
      <p>Temperature: ${temp}°C</p>
    `;
  
    // Chart example (random hourly temps for now)
    new Chart(document.getElementById("tempChart"), {
      type: "line",
      data: {
        labels: ["1AM", "2AM", "3AM", "4AM", "5AM"],
        datasets: [{
          label: "Hourly Temp (°C)",
          data: [temp - 1, temp, temp + 1, temp, temp - 2],
          borderColor: "blue",
          fill: false
        }]
      }
    });
  }