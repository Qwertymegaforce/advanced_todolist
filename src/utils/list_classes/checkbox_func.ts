import { todo_list } from "../vars.js";
import { updatePageTodoList } from "../list_functions.js";

export function changeStateOfTodo(id: number) {

    return () => {
        try {
            todo_list[id].completed = !todo_list[id].completed
        }
        catch {
            throw new Error("Wrong ID")
        }
    
        updatePageTodoList(todo_list)
    }

}