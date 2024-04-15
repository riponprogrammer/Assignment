const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const num1 = form.querySelector("#num1");
const num2 = form.querySelector("#num2");
const checkButton = form.querySelector("#check");
const resultText = cardBody.querySelector(".resultText");
const remainingAttempts = cardBody.querySelector(".remainingAttempts");

form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(num1.value);
    console.log(num2.value);
})