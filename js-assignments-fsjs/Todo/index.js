let input = document.querySelector(".input");
let addButton = document.querySelector(".addButton");
let deleteButton = document.querySelector(".Delete");
let editButton = document.querySelector(".Edit");


let container = document.querySelector(".container");

addButton.addEventListener("click", addTodo);
function addTodo() {
   let container = document.querySelector(".container");
   let createLi = document.createElement("li");
   createLi.className = "list-group";
   createLi.appendChild(document.createTextNode(input.value));
   createList = container.appendChild(createLi);
   let createSpan1 = document.createElement('span');
   createSpan1.appendChild(document.createTextNode("Edit"));
   createSpan1.className="Edit";
   let createSpan2 = document.createElement('span');
   createSpan2.appendChild(document.createTextNode("Delete"));
   createSpan2.className="Delete";
   createList.appendChild(createSpan1);
   createList.appendChild(createSpan2);
   let hr = document.createElement('hr');
   createList.appendChild(hr);
   input.value = "";
}


deleteButton.addEventListener('click',deleteTodo());
function deleteTodo(index){
   
}

editButton.addEventListener('click',editTodo);
function editTodo(){
   
}