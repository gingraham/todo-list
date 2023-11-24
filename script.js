//ToDo App 
//Grab all of the HTML elements
const todoValue = document.querySelector("#todoText"),
    listItems = document.querySelector("#list-items"),
    addTaskBtn = document.querySelector("#addUpdateTask");
let updatedText;


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
    }else if(todoValue.value){
         //create a list element and the todo item
    let li = document.createElement('li');
    const todoItems = `<div ondblclick="completeTodoItem(this)">${todoValue.value}</div><div class="todo-controls-container"><img class="edit todo-controls" src="assets/images/icons8-edit-94.png" ondblclick="updateToDoItems(this)"><img class="delete todo-controls" src="assets/images/icons8-delete-94.png"  ondblclick="deleteTodo(this)"></div>`
    //list element with the todo item nested inside.
    li.innerHTML = todoItems;
    //append the list elements to the list-items ul in the app
    listItems.appendChild(li);
    //clear the task from the input after submitting
    todoValue.value = "";
    }
   

}

//function for the "complete" state of the todo item by putting a red line through it.
function completeTodoItem(e){
    console.log(e.parentElement)
    //if there's no text decoration and one
    if(e.parentElement.querySelector("div").style.textDecoration === ""){
        e.parentElement.querySelector("div").style.textDecoration = "line-through red"; 
    }
}

//function that handles the update after the update setup is done.
function updateTask(){
    updatedText.innerText = todoValue.value;
   //change the functionality of the task button removing the update() and adding submit()
   addTaskBtn.setAttribute('onclick','submitTask()');
   //change the image on the task button to add image
   addTaskBtn.setAttribute('src','assets/images/icons8-add-94.png');
   //clear the updated task from the input
   todoValue.value = "";
}

//function to setup "update" state of the todo item 
function updateToDoItems(e){
    //if there's no text decoration ie. not complete
    if(e.parentElement.parentElement.querySelector('div').style.textDecoration === ""){
     //render the todo to be updated in the input
     todoValue.value = e.parentElement.parentElement.querySelector('div').innerText;
     //change the functionality of the task button removing the submit() and adding update()
     addTaskBtn.setAttribute('onclick','updateTask()');
     //change the image on the task button to refresh image
     addTaskBtn.setAttribute('src','assets/images/icons8-refresh-94.png');
     //grab the todo that needs to updated
     updatedText = e.parentElement.parentElement.querySelector('div')
    }
}

//function to delete todo
function deleteTodo(e){
    //grab the value of the todo to display in a confirm popout
    let deletedItem =  e.parentElement.parentElement.querySelector('div').innerText
    if(confirm(`Are you sure you want to delete this task ${deletedItem}?`)){
        e.parentElement.parentElement.parentElement.querySelector('li').remove();
    }
}