let cryptoData;
const searchBar = document.querySelector('#search-bar');
const searchButton = document.querySelector('#search-button');
const cryptoInfo = document.querySelector('.cryptoInfo');
const cryptoName = document.querySelector('.cryptoName');
const watchListPage = document.querySelector('.watchListPage');
const keyDelete = document.querySelector('#keyDelete');
const exitButton = document.querySelector('.exitButton');



function api(event) {
  event.preventDefault()
  clicked = true;
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

let clicked = false;
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
   
    watchlist()
}

const top5Container = document.querySelector('.top5');




let top5Data;

function getTop5() {
  fetch('https://api.coinpaprika.com/v1/tickers?limit=5&sort=rank')
    .then(response => response.json())
    .then(data => {
      top5Data = data;
      let top5 = '';
      data.forEach(crypto => {
        top5 += `<p>Rank: ${crypto.rank}  ${crypto.name} </p>`;
      });
      top5Container.innerHTML = top5;
    });
}

getTop5();


// it should not return after it is click again
searchButton.addEventListener('click', function() {
  if(top5Container.style.display === "none"  && cryptoData === !null ) {
    top5Container.style.display = "block";
    let top5 = '';
    top5Data.forEach(crypto => {
      top5 += `<p>${crypto.name} (Rank: ${crypto.rank})</p>`;
    });
    top5Container.innerHTML = top5;
  } else{
    top5Container.style.display = "none";
  }
});



function watchlist(){
  
  addButton.addEventListener('click', function() {

    var list = cryptoInfo.innerText;
    localStorage.setItem(cryptoData.name, list);
  })
 
  
}



  function watchButton() {
    

    exitButton.style.display = 'block';
  watchListPage.style.display = "block";
  let list = '';
  for(let i = 0; i < localStorage.length; i++){
   

    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    globalKey = key;
      globalValue = value;
   
  
      list += `<p>  ${value}</p> <button id="${key}" onClick="keyDelete">remove</button>`;
      
      watchListPage.innerHTML = list;
      
      

     
  
      
    
      }
    }
  
    

    watchListPage.addEventListener("click", function(e) {
      
      if(e.target.tagName === 'BUTTON') {
        localStorage.removeItem(e.target.id);
        e.target.previousElementSibling.remove();
       e.target.remove();
       

      }
    });
    
    function exit(){
      watchListPage.style.display = "none";
      exitButton.style.display = 'none';

    }
