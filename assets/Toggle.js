var cryptoCardForm = document.querySelector("#cryptoCard"); //
var weatherCardForm = document.querySelector("#weatherCard");


document.querySelector("#cryptoButton").addEventListener("click", e => {
    e.preventDefault();
    cryptoCardForm.classList.add("form_hidden");
    weatherCardForm.classList.remove("form_hidden");
});

document.querySelector("#weatherButton").addEventListener("click", e => {
    e.preventDefault();
    cryptoCardForm.classList.remove("form_hidden");
    weatherCardForm.classList.add("form_hidden");
});

var currentTime = new Date().getHours();
var background = document.querySelector(".appWrapper");


if (document){
    console.log(currentTime);
    if (6 <= currentTime && currentTime < 18) {
        document.querySelector.appWrapper.style.backgroundColor = "red";
        // background.classList.remove(".night");
        // background.classList.add(".day");
       
     } else {
        document.querySelector.appWrapper.style.backgroundColor = "red";
     }
}








$('#time').text(dayjs().format("h:mm A MM-DD-YY"));
$('#weathertime').text(dayjs().format("h:mm A MM-DD-YY"));


    
