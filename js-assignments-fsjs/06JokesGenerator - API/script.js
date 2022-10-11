let url ="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
let jokeCreate = document.getElementById("joke");

let jokeButton = document.getElementById("jokeBtn");

jokeButton.addEventListener("click",() => getData(url));
async function getData(url){
     // Storing response 
     const response = await fetch(url); 
     // Storing data in form of JSON 
     let data = await response.json(); 
    //  console.log(data);  data coming in object so i selscted data.joke
     console.log(data);
    jokeCreate.textContent = data.joke;
}

getData(url);