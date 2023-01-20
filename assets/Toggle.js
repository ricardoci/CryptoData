var cryptoCardForm = document.querySelector("#cryptoCard");
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