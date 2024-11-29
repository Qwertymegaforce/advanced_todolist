import type { toDo_task_type } from "../types/todo_types.js";
import { todo_list } from "./vars.js";
import { task_list_DOM } from "./dom_vars.js";
import { FormConstructor } from "./list_classes.js";


export function addTodo(toDo_obj: toDo_task_type): void {
    todo_list.push(toDo_obj)
    updatePageTodoList(todo_list)
}

export function displayToDoCreationForm (): void {
    let form = createToDoForm()
    task_list_DOM.appendChild(form)
}

function updatePageTodoList(todo_list: toDo_task_type[]): void {
    task_list_DOM.innerHTML = ""
    for (let item of todo_list) {
        let new_task_dom = createDomTask(item)
        task_list_DOM.appendChild(new_task_dom)
    }
}

function createDomTask(todo_task: toDo_task_type): HTMLDivElement {
    let wrapper = document.createElement('div')
    wrapper.textContent = todo_task.text
    return wrapper
}

function createToDoForm(): HTMLDivElement {
    let form = new FormConstructor().createForm()
    return form
}
