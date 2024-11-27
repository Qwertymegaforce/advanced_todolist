import { todo_list } from "./vars.js";
import { task_list_DOM } from "./dom_vars.js";
import { ToDoCreationForm } from "./list_classes.js";
function addTodo(toDo_obj) {
    todo_list.push(toDo_obj);
}
export function displayToDoCreationForm() {
    let form = createToDoForm();
    task_list_DOM.appendChild(form);
}
function createToDoForm() {
    let formWrapper = new ToDoCreationForm();
    // To Do: Поменять return! 
    return document.createElement('div');
}
