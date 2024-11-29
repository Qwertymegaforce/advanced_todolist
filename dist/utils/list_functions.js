import { todo_list } from "./vars.js";
import { task_list_DOM } from "./dom_vars.js";
import { FormConstructor } from "./list_classes.js";
export function addTodo(toDo_obj) {
    todo_list.push(toDo_obj);
    updatePageTodoList(todo_list);
}
export function displayToDoCreationForm() {
    let form = createToDoForm();
    task_list_DOM.appendChild(form);
}
function updatePageTodoList(todo_list) {
    task_list_DOM.innerHTML = "";
    for (let item in todo_list) {
        let new_task_dom = createDomTask();
        task_list_DOM.appendChild(item);
    }
}
function createDomTask() {
    return document.createElement('div');
}
function createToDoForm() {
    let form = new FormConstructor().createForm();
    return form;
}
