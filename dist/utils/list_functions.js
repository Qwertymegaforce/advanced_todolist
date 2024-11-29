import { todo_list } from "./vars.js";
import { task_list_DOM, task_counter_DOM } from "./dom_vars.js";
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
    for (let item of todo_list) {
        let new_task_dom = createDomTask(item);
        task_list_DOM.appendChild(new_task_dom);
    }
    updateTaskCounter();
}
export function updateTaskCounter() {
    let number_of_tasks = task_list_DOM.children.length;
    let new_text_content = `${number_of_tasks} TASK`;
    if (number_of_tasks > 1 || number_of_tasks == 0)
        new_text_content += "S";
    task_counter_DOM.textContent = new_text_content;
}
function createDomTask(todo_task) {
    let wrapper = document.createElement('div');
    wrapper.textContent = todo_task.text + ` ${todo_task.time.hours}:${todo_task.time.minutes}`;
    return wrapper;
}
function createToDoForm() {
    let form = new FormConstructor().createForm();
    return form;
}
