let cryptoData;
const searchBar = document.querySelector('#search-bar');
const searchButton = document.querySelector('#search-button');
const data = document.querySelector('data');


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
  const name = cryptoData.name
  const price = cryptoData.quotes.USD.price;
    const rank = cryptoData.rank;
    const hourly = cryptoData.quotes.USD.percent_change_1h;
    const daily = cryptoData.quotes.USD.percent_change_24h;
    const supply = cryptoData.max_supply;
    
    const cryptoName = document.querySelector('.cryptoName')
    const priceEl = document.querySelector('.price');
    const rankEl = document.querySelector('.rank');
    const hourlyEl = document.querySelector('.hourly');
    const dailyEl = document.querySelector('.daily');
    const supplyEl = document.querySelector('.supply');
    
    
    cryptoName.textContent = `${name}`
    priceEl.textContent = `Price: ${price}`;
    rankEl.textContent = `Rank: ${rank}`;
    hourlyEl.textContent = `1hr % Change: ${hourly}%`;
    dailyEl.textContent = `24hr % Change: ${daily}%`;
    supplyEl.textContent = `Total Supply: ${supply}`;

}
