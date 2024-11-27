import type { toDo_task_type } from "../types/todo_types.js";
import { todo_list } from "./vars.js";
import { task_list_DOM } from "./dom_vars.js";
import { ToDoCreationForm } from "./list_classes.js";


function addTodo(toDo_obj: toDo_task_type): void {
    todo_list.push(toDo_obj)
}

export function displayToDoCreationForm (): void {
    let form = createToDoForm()
    task_list_DOM.appendChild(form)
}

function createToDoForm(): HTMLDivElement {
    let formWrapper = new ToDoCreationForm()
    // To Do: Поменять return! 
    return document.createElement('div')
}
