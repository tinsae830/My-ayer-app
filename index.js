
function refreshWeather(response){
    let currentTemperature = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city
    currentTemperature.innerHTML = Math.round(temperature);

}





function searchCity(city){
    let apiKey = "4fa78to10b1c43d3810fccabf38a2f36"
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric` 
    axios.get(apiUrl).then(refreshWeather);
}




function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#form-search-input");
    searchCity(searchInput.value);
  }
  
  let searchFormElement = document.querySelector("#search-form");
  searchFormElement.addEventListener("submit", handleSearchSubmit);

  searchCity("Addis Ababa");