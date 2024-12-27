import type { toDo_task_type } from "../types/todo_types"
import { getLSKeyFromDateObj } from "./etc/sys_func.js"


let today_date_obj = new Date()
let todo_list: Array<toDo_task_type> = []

let ls_key = getLSKeyFromDateObj(today_date_obj)
let ls_data = localStorage.getItem(ls_key)

if(typeof ls_data == "string") {
    todo_list = JSON.parse(ls_data)
}

export {today_date_obj, todo_list}