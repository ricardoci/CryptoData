let weatherData;
const weathersearchBar = document.querySelector('#weather-search-bar');
const weatherSearchButton = document.querySelector('#weather-search-button');
const weatherdata = document.querySelector('data');


function api(event) {
  event.preventDefault()
  
    const query = searchBar.value.toLowerCase();
    
 
    
    var requestUrl2 = `api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}`;
    
   
     
    searchBar.value = '';

  
    fetch(requestUrl2)
      .then(function (response) {
       
        if(response.ok ){
            
        return response.json();
        }
       
      })
      .then(function (data) {
        
        if(data !== null){
            weatherData = data;
            useData()
        


        }
        else{
            console.log('Type a correct crypto')
        }
       
      }).catch(error => console.log(error + ', Type a correct crypto'))

    //   fetch(requestUrl2)
    //   .then(function (response) {
    //     return response.json();
    //   })
    //   .then(function (data) {
       
    //     console.log( );

    //   })
       

 
};

