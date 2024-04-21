
function handleSearchSubmit(event) {
event.preventDefault();
let searchInput = document.querySelector("#search-input");
console.log(searchInput.value); //to check if the searchInput variable is logging the search value
let cityElement = document.querySelector("#city"); //to target the city variable make sure to add id 
cityElement.innerHTML = `${searchInput.value}`; // this will change the city element with what is being logged on the searchInput
}

let searchFormElement = document.querySelector("#search-form-id"); //targets the search form
searchFormElement.addEventListener("submit", handleSearchSubmit); //this will activate the button whenever the user clicks the search button