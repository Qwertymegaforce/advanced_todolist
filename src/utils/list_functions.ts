import type { toDo_task_type } from "../types/todo_types.js";
import { todo_list } from "./vars.js";
import { task_list_DOM, task_counter_DOM, addbutton_DOM} from "./dom_vars.js";
import { TodoConstructor } from "./list_classes/todoconstructor.js";
import { FormConstructor } from "./list_classes/formconstructor.js";
import { data_storage } from "./list_classes/dataclass.js";


export function addTodo(toDo_obj: toDo_task_type): void {
    todo_list.push(toDo_obj)
    data_storage.updateActualUniqueTodoId()
    updatePageTodoList(todo_list)
}

export function displayToDoCreationForm (): void {
    let form = createToDoForm()
    task_list_DOM.appendChild(form)
}

export function updatePageTodoList(todo_list: toDo_task_type[]): void {
    let sorted_todos_list = sortTodos(todo_list)
    task_list_DOM.innerHTML = ""
    for (let item of sorted_todos_list) {
        let new_task_dom = new TodoConstructor(item).createDisplayedTodo()
        task_list_DOM.appendChild(new_task_dom)
    }
    updateTaskCounter()
    addbutton_DOM.style.pointerEvents = "all"
}

export function updateTaskCounter(): void {
    let number_of_tasks = task_list_DOM.children.length
    let new_text_content = `${number_of_tasks} TASK`
    if (number_of_tasks > 1 || number_of_tasks == 0) new_text_content += "S"
    task_counter_DOM.textContent = new_text_content
}

function sortTodos(todo_list: toDo_task_type[]) {
    todo_list.sort((a, b)=>{

        if(a.time == b.time) return 0
          
        let next_check = compareAllDays(a, b)
        if(typeof next_check != undefined) return next_check as number

        return 0
        
    })
    
    return [...todo_list]
}


function compareAllDays(a: toDo_task_type, b: toDo_task_type){
    if(typeof a.time == "string") {
        return -1
    }
    else if (typeof b.time == "string") {
        return 1
    }
    else return undefined
}


function createToDoForm(): HTMLDivElement {
    let form = new FormConstructor().createForm()
    return form
}
