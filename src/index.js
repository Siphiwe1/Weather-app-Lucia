function handleSearchSubmit(event){
    event.preventDefault();
    let SearchInput= document.querySelector("#Search-form-Input");
    let cityElement= document.querySelector("#City");
    cityElement= InnerHTML= SearchInput.Value;
    searchCity(searchInput.Value);
}
let searchFormElement = document.querySelector("#search-form");

searchFormElement.addEventListener("submit", handleSearchSubmit);

