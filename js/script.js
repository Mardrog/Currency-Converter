console.log("Witam programistów!");


let formElement = document.querySelector(".js-form");
let entryValueElement = document.querySelector(".js-entryValueElement");
let convertFromElement = document.querySelector(".js-convertFrom");
let resultElement = document.querySelector(".js-result");
let convertToElement = document.querySelector(".js-convertTo");



let eur = 4.67;
let gbp = 5.57;
let usd = 4.42;

let countFrom;
let countTo;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    switch (convertFromElement.value) {
        case "EUR":
            countFrom = eur;
            break;
        case "GBP":
            countFrom = gbp;
            break;
        case "USD":
            countFrom = usd;
            break;
    }

    switch (convertToElement.value) {
        case "EUR":
            countTo = eur;
            break;
        case "GBP":
            countTo = gbp;
            break;
        case "USD":
            countTo = usd;
            break;
    }

    resultElement.innerText = `${entryValueElement.value} ${convertFromElement.value} = ${((entryValueElement.value * countFrom) / countTo).toFixed(2)} ${convertToElement.value}`;
});

















