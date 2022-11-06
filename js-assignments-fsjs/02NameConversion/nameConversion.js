let inputText = document.getElementById("text");
let convertButton = document.getElementById("convert-btn");
let camelCaseOutput = document.getElementById("camel-case");
let pascalCaseOutput = document.getElementById("pascal-case");
let snakeCaseOutput = document.getElementById("snake-case");
let screamingSnakeCaseOutput = document.getElementById("screaming-snake-case");
let kebabCaseOutput = document.getElementById("kebab-case");
let screamingKebabCaseOutput = document.getElementById("screaming-kebab-case");


const camelCase = (inputText) =>{
    return inputText.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      }).replace(/\s+/g, '');

}
const pascalCase = (inputText) =>{
  
    let words = inputText.split(" ");
    for (i of words) {
      words[words.indexOf(i)] = i.charAt(0).toUpperCase() + i.slice(1);
    }
    return words.join("");
}

const snakeCase = (inputText) =>{
  let snake = inputText.toLowerCase().split(" ").join("_");
  return snake;
}

const screamingSnakeCase = (inputText) =>{
    let ans = inputText.toLowerCase().split(" ").join("_");
    return ans.toUpperCase();
}

const kebabCase = (inputText) =>{
    let ans = inputText.toLowerCase().split(" ").join("-");
  return ans;
}
const screamingKebabCase = (inputText) =>{
    let ans = inputText.toLowerCase().split(" ").join("-");
    return ans.toUpperCase();
}


convertButton.addEventListener("click", convertCase);

function convertCase  (){
   
    camelCaseOutput.textContent  = camelCase(inputText.value);
    pascalCaseOutput.textContent = pascalCase(inputText.value);
    snakeCaseOutput.textContent = snakeCase(inputText.value);
    screamingSnakeCaseOutput.textContent = screamingKebabCase(inputText.value);
    kebabCaseOutput.textContent = kebabCase(inputText.value);
    screamingKebabCaseOutput.textContent = screamingKebabCase(inputText.value);
    
}
