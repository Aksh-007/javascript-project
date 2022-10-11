const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {

  // Copy the text inside the text field
  navigator.clipboard.writeText(resultEl.value);
  
  // Alert the copied text
  alert("Copied the text: " + resultEl.value);
})

generateEl.addEventListener('click', () => {
    generatePassword();
    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
})

function generatePassword(lower, upper, number, symbol, length) {
    let lowerCaseStatus = lowercaseEl.checked;
    let upperCaseStatus = uppercaseEl.checked;
    let numberCaseStatus = numbersEl.checked;
    let symbolCaseStatus = symbolsEl.checked;
    // if(lowerCaseStatus && upperCaseStatus && numberCaseStatus && symbolCaseStatus){
        
    // }else if(lowerCaseStatus && upperCaseStatus && numberCaseStatus){

    // }else if(lowerCaseStatus && upperCaseStatus ){
        
    // }else (lowerCaseStatus ){
        
    // }

    

    
}

function getRandomLower() {

    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)];
    return alphabet;
}

function getRandomUpper() {

    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    alphabet= alphabet[Math.floor(Math.random() * alphabet.length)];
    return alphabet;
}

function getRandomNumber() {
    let number = "0123456789"
    number = number[Math.floor(Math.random()*number.length)];
    return number;
}

function getRandomSymbol() {
    let symbol = '!@#$%^&*'
     symbol = symbol[Math.floor(Math.random()*symbol.length)];
     return symbol;
}

