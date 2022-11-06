let input = document.querySelector(".input");
let addButton = document.querySelector(".addButton");
let deleteButton = document.querySelector(".Delete");
let editButton = document.querySelector(".Edit");


let container = document.querySelector(".container");

addButton.addEventListener("click", addTodo);
function addTodo() {
   if (input.value === " " || input.value === "") {
      alert("Please enter Todo list")
   } else {
      let container = document.querySelector(".container");
      let createLi = document.createElement("li");
      createLi.className = "list-group";
      createLi.appendChild(document.createTextNode(input.value));
      createList = container.appendChild(createLi);
      let editSpan = document.createElement('span');
      editSpan.appendChild(document.createTextNode("Edit"));
      editSpan.className = "Edit";
      let deleteSpan = document.createElement('span');
      deleteSpan.appendChild(document.createTextNode("Delete"));
      deleteSpan.className = "Delete";
      createList.appendChild(editSpan);
      createList.appendChild(deleteSpan);
      let hr = document.createElement('hr');
      createList.appendChild(hr);
      input.value = "";
   }

}


deleteButton.addEventListener('click', deleteTodo());
function deleteTodo(index) {



}

editButton.addEventListener('click', editTodo);
function editTodo() {

}