let cryptoData;
const searchBar = document.querySelector('#search-bar');
const searchButton = document.querySelector('#search-button');


function api(event) {
  event.preventDefault()
  
    const query = searchBar.value.toLowerCase();
    
 
    
    var requestUrl1 = `https://api.coinpaprika.com/v1/tickers/${query}`;
    
   
     
    searchBar.value = '';

  
    fetch(requestUrl1)
      .then(function (response) {
       
        if(response.ok ){
            
        return response.json();
        }
       
      })
      .then(function (data) {
        
        if(data !== null){
            cryptoData = data;
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

searchButton.addEventListener('click', api)

function useData(){

}
