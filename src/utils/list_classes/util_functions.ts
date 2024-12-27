import { setDate, setDayOfWeek } from "../setdate_functions.js"
import { updateTaskCounter } from "../list_functions.js"
import { updatePageTodoList } from "../list_functions.js"
import { todo_list } from "../vars.js"


export function addZeroAtTheStartIfNeeded(integer: number): string {
    if (integer > 9) return `${integer}`
    else return `0${integer}`
}


export function updateWholePage(current_date: Date): void {
    setDate(current_date)
    setDayOfWeek(current_date)
    updateTaskCounter()
    updateTodosIfLocalStorageHasData()
}


function updateTodosIfLocalStorageHasData() {
    if(typeof todo_list == "object") {
        updatePageTodoList(todo_list)
    }
}
