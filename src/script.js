function displayTemperature(response) { //2nd function for the temperature for API data retrieval
console.log(response.data);
let temperature = Math.round(response.data.temperature.current);
console.log(response.data.temperature.current);//to check if this call out is selecting the temperature data once city is searched.
let temperatureElement = document.querySelector("#weather-app-temp-value");//targets the weather temperature value element with the id
temperatureElement.innerHTML = temperature; //this will change the temperature related to the city data the user has searched. 
}



function searchCity(city) { //1st function for the city for API data retrieval

let apiKey = "47c53bba2097318c33196010f07cot74";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
console.log(apiUrl);//to check if the api is giving output after entering city

axios.get(apiUrl).then(displayTemperature);


}

function handleSearchSubmit(event) {
event.preventDefault();
let searchInput = document.querySelector("#search-input"); //this will target the form that will the user will input.
console.log(searchInput.value); //to check if the searchInput variable is logging the search value
let cityElement = document.querySelector("#city"); //to target the city variable make sure to add id 
cityElement.innerHTML = `${searchInput.value}`; // this will change the city element with what is being logged on the searchInput
searchCity(searchInput.value); // this is added for API function use
}

let searchFormElement = document.querySelector("#search-form-id"); //targets the search form
searchFormElement.addEventListener("submit", handleSearchSubmit); //this will activate the button whenever the user clicks the search button
