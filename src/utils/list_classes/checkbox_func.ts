import { todo_list } from "../vars.js";
import { updatePageTodoList } from "../list_functions.js";

export function changeStateOfTodo(id: number) {

    return (state: boolean) => {
        try {
            todo_list.map((value) => {
                if(value.id == id) {
                    value.completed = !value.completed
                }
            })
        }
        catch {
            throw new Error("Wrong ID")
        }
    
        updatePageTodoList(todo_list)
    }

}