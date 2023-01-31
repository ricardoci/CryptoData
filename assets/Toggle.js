var cryptoCardForm = document.querySelector("#cryptoCard"); // selecting crypto form
var weatherCardForm = document.querySelector("#weatherCard"); // selecting weather from


document.querySelector("#cryptoButton").addEventListener("click", e => { //listen for click 
    
    cryptoCardForm.classList.add("form_hidden"); // hide crypto page
    weatherCardForm.classList.remove("form_hidden");// unhide weather page
});

document.querySelector("#weatherButton").addEventListener("click", e => { //listen for click 
    
    cryptoCardForm.classList.remove("form_hidden");// unhide crypto page
    weatherCardForm.classList.add("form_hidden");// hide weather page
});














$('.date').text(dayjs().format("dddd MMM D ")); //display date 
$('.time').text(dayjs().format("h:mm A")); // display time


    
