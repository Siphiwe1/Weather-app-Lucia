function refreshWeather(response){
    let temperatureElement= document.querySelector("#temperature");
    let temperature= response.data.temperature.current;

    cityElement.innerHTML=response.data.city;
    temperatureElement.innerHTML=Math.round(temperature);
  
}



function searchCity (city){
    let apiKey = "4bef39f46ffb7o39t6446dac03e1804a";
    let apiURL =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiURL).then(refreshWeather);
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

