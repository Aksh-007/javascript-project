
// using url to generate QR code 
let url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";


let inputData = document.getElementById("input");
let button = document.getElementById("submit");
let qrCode = document.getElementById("img");

button.addEventListener("click",generateQRCode)

function generateQRCode() {
    if(inputData.value){
        qrCode.src = url + inputData.value;
        qrCode.style.display = "block";
    }
    else{
        alert("please Enter The valid data");
    }
    
}