//ToDo App 
//HTML elements
const todoValue = document.querySelector("#todoText"),
    listItems = document.querySelector("#list-items"),
    addTaskBtn = document.querySelector("#addUpdateTask");
   //add a listener to the click button to listen for the "return" key
todoValue.addEventListener('keypress',(e)=>{
    if(e.key === "Enter"){
        addTaskBtn.click()
    }
})


//Function to create task
function submitTask(){
    //validate there if there is a task entered
    if(todoValue.value.trim() === ""){
        alert("Please enter a task first")
        //after alert add cursor back to input
        todoValue.focus()
    }
    //create a list element and the todo item
    let li = document.createElement('li');
    const todoItems = `<div ondblclick="completeTodoItem(this)">${todoValue.value}</div><div class="todo-controls-container"><img class="edit todo-controls" src="assets/images/icons8-edit-94.png" ondblclick="updateToDoItems(this)"><img class="delete todo-controls" src="assets/images/icons8-delete-94.png"></div>`
    //list element with the todo item nested inside.
    li.innerHTML = todoItems;
    //append the list elements to the list-items ul in the app
    listItems.appendChild(li);
    //clear the task from the input after submitting
    todoValue.value = "";

}

//function for the "complete" state of the todo item by putting a red line through it.
function completeTodoItem(e){
    console.log(e.parentElement)
    //if there's no text decoration and one
    if(e.parentElement.querySelector("div").style.textDecoration === ""){
        e.parentElement.querySelector("div").style.textDecoration = "line-through red"; 
    }
}

//function for the "update" state of the todo item 
function updateToDoItems(e){
    console.log(e.parentElement.parentElement.querySelector('div').innerText)
    //if there's no text decoration
    if(e.parentElement.parentElement.querySelector('div').innerText === ""){
     
    }
}