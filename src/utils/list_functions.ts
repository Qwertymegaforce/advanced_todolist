import type { toDo_task_type } from "../types/todo_types.js";
import { todo_list } from "./vars.js";
import { task_list_DOM, task_counter_DOM} from "./dom_vars.js";
import { TodoConstructor } from "./list_classes/todoconstructor.js";
import { FormConstructor } from "./list_classes/formconstructor.js";


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
        let new_task_dom = new TodoConstructor(item).createDisplayedTodo()
        task_list_DOM.appendChild(new_task_dom)
    }
    updateTaskCounter()
}

export function updateTaskCounter(): void {
    let number_of_tasks = task_list_DOM.children.length
    let new_text_content = `${number_of_tasks} TASK`
    if (number_of_tasks > 1 || number_of_tasks == 0) new_text_content += "S"
    task_counter_DOM.textContent = new_text_content
}

function createDomTask(todo_task: toDo_task_type): HTMLDivElement {
    let wrapper = document.createElement('div')
    wrapper.textContent = todo_task.text + ` ${todo_task.time.hours}:${todo_task.time.minutes}`
    return wrapper
}

function createToDoForm(): HTMLDivElement {
    let form = new FormConstructor().createForm()
    return form
}
