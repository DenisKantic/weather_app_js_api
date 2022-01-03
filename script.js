const wrapper = document.querySelector('.wrapper');
const inputValue = document.querySelector('.inputField');
const second_separator = document.querySelector('.second-separator');
const buttonSearch = document.querySelector('.search');

const weather_part = document.querySelector('.weather-part');
const weatherIcon = document.querySelector('.icon-middle');
const temperatureEl = document.querySelector('.temperature');
const descriptionEl = document.querySelector('.description');
const locationEl = document.querySelector('.location');

const temp_feels_like = document.querySelector('.temp-feels-like');
const humidity_num = document.querySelector('.humidity-num');

let api = "0b8981366e5ef28551fb2db8fa544438";

inputValue.addEventListener("keyup", e=>{
    if(e.key == "Enter" && inputValue != ''){
        fetchApi(inputValue.value);
    }
});


let fetchApi = (city) =>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api}`)
    .then((response) => response.json())
    .then((data) => displayWeather(data));
}

function displayWeather(data){


    const temperature = data.main.temp;
    const feels_like = data.main.feels_like;
    const humidity = data.main.humidity;
    const description = data.weather.description;
    const cityName = data.name;
    const icon = data.weather[0].icon;

    weatherIcon.src = `https://openweathermap.org/img/wn/${icon}.png`; 
    temperatureEl.innerText = `${Math.round(temperature)} °C`;
    descriptionEl.innerText = description;
    locationEl.innerText = `${cityName}`;
    temp_feels_like.innerText = `${Math.round(feels_like)} °C`;
    humidity_num.innerText = `${humidity} %`;

    inputValue.style.visibility = "hidden";
    second_separator.style.visibility = "hidden";
    buttonSearch.style.visibility = "hidden";
    weather_part.style.display = "flex";
}