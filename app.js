const apiKey = "84bbfaa52691588d64f1d41a4758de99";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
var card = document.querySelector(".card");

async function checkWeather(city) {
  const reponse = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (reponse.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await reponse.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      card.style.backgroundImage = "url('https://media.tenor.com/pjzL4LNhIpEAAAAd/clouds-nature.gif')" ;
      card.style.backgroundRepeat = "no-repeat";
    } else if (data.weather[0].main == "Rain") {
        card.style.backgroundImage = "url('https://media.tenor.com/OP6eAmOO4awAAAAC/rain-lights.gif')" ;
        card.style.backgroundRepeat = "no-repeat";
    } else if (data.weather[0].main == "Mist") {
        card.style.backgroundImage = "url('https://media.tenor.com/ouwQfD9PxBAAAAAC/mist-morning-fog.gif')" ;
        card.style.backgroundRepeat = "no-repeat";
    } else if (data.weather[0].main == "Snow") {
        card.style.backgroundImage = "url('https://media.tenor.com/375FPjA6hjMAAAAC/let-it-snow-merry-christmas.gif')" ;
        card.style.backgroundRepeat = "no-repeat";
    } else if (data.weather[0].main == "Clear") {
        card.style.backgroundImage = "url('https://media.tenor.com/x6ER0BF5kWQAAAAd/what-a-sunny-day.gif')" ;
        card.style.backgroundRepeat = "no-repeat";
    } else if (data.weather[0].main == "Drizzle") {
        card.style.backgroundImage = "url('https://media.tenor.com/H8ODSei7xkoAAAAC/rain-heavy.gif')" ;
        card.style.backgroundRepeat = "no-repeat";
    }
    else if (data.weather[0].main == "Haze") {
        card.style.backgroundImage = "url('https://media.tenor.com/5oBOUtdSDhkAAAAC/current-weather-weather-report.gif')" ;
        card.style.backgroundRepeat = "no-repeat";
    }
    document.querySelector(".error").style.display = "non";
    document.querySelector(".weather").style.display = "block";
  }
  searchBox.value = "";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);

});
