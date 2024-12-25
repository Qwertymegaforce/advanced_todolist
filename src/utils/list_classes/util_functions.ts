import { setDate, setDayOfWeek } from "../setdate_functions.js"
import { updateTaskCounter } from "../list_functions.js"
import { updatePageTodoList } from "../list_functions.js"
import { getLSKeyFromDateObj } from "../etc/sys_func.js"


export function addZeroAtTheStartIfNeeded(integer: number): string {
    if (integer > 9) return `${integer}`
    else return `0${integer}`
}


export function updateWholePage(current_date: Date): void {
    setDate(current_date)
    setDayOfWeek(current_date)
    updateTaskCounter()
    updateTodosIfLocalStorageHasData(current_date)
}


function updateTodosIfLocalStorageHasData(current_date: Date) {
    let ls_key = getLSKeyFromDateObj(current_date)
    let ls_data = localStorage.getItem(ls_key)
    if(typeof ls_data == "string") {
        let decoded_data = JSON.parse(ls_data)
        updatePageTodoList(decoded_data)
    }
}