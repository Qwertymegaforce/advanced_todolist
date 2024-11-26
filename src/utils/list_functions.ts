import type { toDo_task_type } from "../types/todo_types.js";
import { todo_list } from "./vars.js";
import { task_list_DOM } from "./dom_vars.js";


function addTodo(toDo_obj: toDo_task_type): void {
    todo_list.push(toDo_obj)
}

function createToDoForm (): void {

}
