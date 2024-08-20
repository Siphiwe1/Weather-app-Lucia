function refreshWeather(response){
    let temperatureElement= document.querySelector("#temperature");
    let temperature= response.data.temperature.current;
    let cityElement= document.querySelector("#city");
    let descriptionElement= document.querySelector("#description");
    let humidityElement= document.querySelector("#humidity");
    let windSpeedElement= document.querySelector("#wind-speed");
    let timeElement=document.querySelector("#time");
    let date= newDate(response.data.time*1000);
    let iconElement= document.querySelector("#icon")

    cityElement.innerHTML=response.data.city;
    timeElement.innerHTML=formatDate(date);
    descriptionElement.innerHTML= response.data.condition.description;
    humidityElement.innerHTML= `${response.data.temperature.humidity}%`;
    windSpeedElement.innerHTML= `${response.data.wind.speed}KM/hr`;
    temperatureElement.innerHTML=Math.round(temperature);
    iconElement.innerHTML="img src="
    console.log(response.data);
  
}
function formatDate(date){
    let minutes= date.getMinutes();
    let hours= date.getHours();
    let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];


if (minutes<10){
    minutes=`0${Minutes}`;
}
return`${day} ${hours}:${minutes}`;
}

function searchCity (city){
    let apiKey = "4bef39f46ffb7o39t6446dac03e1804a";
    let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(refreshWeather);
}


function handleSearchSubmit(event){
    event.preventDefault();
    let SearchInput= document.querySelector("#Search-form-Input");
    let cityElement= document.querySelector("#City");
    cityElement= InnerHTML= SearchInput.Value;
    searchCity(searchInput.Value);
}
let searchFormElement = document.querySelector("#search-form");

searchFormElement.addEventListener("submit", handleSearchSubmit);
searchCity("Springs");

