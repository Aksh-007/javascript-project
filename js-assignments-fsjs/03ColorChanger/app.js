let target = document.getElementById("canvas");
let button = document.getElementById("button");


//now adding a event listner to change the color of canvas box on click

button.addEventListener("click", changeBackgroundColor);

function randomColor() {
    let value = "0123456789abcdef";
    let hash = "#";
    for (let i = 0; i < 6; i++) {
        hash = hash + value[Math.floor(Math.random() * 16)];
    }
    return hash;
}

// Adding a function chage
function changeBackgroundColor() {
    target.style.backgroundColor = randomColor();
}

