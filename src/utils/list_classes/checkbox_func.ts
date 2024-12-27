import { today_date_obj, todo_list } from "../vars.js";
import { updatePageTodoList } from "../list_functions.js";
import { getLSKeyFromDateObj } from "../etc/sys_func.js";


export function changeStateOfTodo(id: number) {

    return (state: boolean) => {
        try {
            todo_list.map((value) => {
                if(value.id == id) {
                    value.completed = !value.completed
                }
            })

            let key = getLSKeyFromDateObj(today_date_obj)
            localStorage.setItem(key, JSON.stringify(todo_list))
        }
        catch {
            throw new Error("Wrong ID")
        }
    
        updatePageTodoList(todo_list)
    }

}