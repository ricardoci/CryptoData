let weatherData;
const weatherSearchBar = document.querySelector('#weather-search-bar');
const weatherSearchButton = document.querySelector('#weather-search-button');


function weatherapi(event) {
    event.preventDefault()
    console.log("hello world")
    
    const cityName = weatherSearchBar.value;
    console.log(cityName)
    
    var weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=8f5847b7966d81bce260c9541b08bccb`;
    
    
    
    weatherSearchBar.value = '';
    
    fetch(weatherURL)
    .then(function (response) {
        if(response.ok) {
            console.log(response)
            return response.json();
        }
    })
    .then(function (data) {
        console.log(data)
        if(data !== null) {
            weatherData = data;
            useWeatherData(weatherData)
            
        }
    })
};

weatherSearchButton.addEventListener('click', weatherapi)

function useWeatherData (weatherData) {
    
    const name = weatherData.name;
    const temp = weatherData.main.temp;
    const maxTemp = weatherData.main.temp_max;
    const minTemp = weatherData.main.temp_min;
    const humidity = weatherData.main.humidity;
    const windSpeed = weatherData.wind.speed;
    const clouds = weatherData.clouds.all;
    
    
    
    
    
    const weatherName = document.querySelector('.cityName')
    const cityNameEl = document.querySelector('.cityName');
    const tempEl = document.querySelector('.temp');
    const maxTempEl = document.querySelector('.maxtemp');
    const minTempEl = document.querySelector('.minTemp');
    const humidityEl = document.querySelector('.humidity');
    const cloudsEl = document.querySelector('.clouds');
    
    
    weatherName.textContent = `${name}`
    cityNameEl.textContent = `temp: ${temp}`;
    tempEl.textContent = `maxTemp: ${maxTemp}`;
    maxTempEl.textContent = `minTemp: ${minTemp}`;
    minTempEl.textContent = `humidity: ${humidity}`;
    humidityEl.textContent = `wind.speed: ${windSpeed}`;
    cloudsEl.textContent = `clouds.all: ${clouds}`;
    
}