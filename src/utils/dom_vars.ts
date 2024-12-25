import { displayToDoCreationForm } from "./list_functions.js";

let day_of_week_DOM = document.getElementById('weekday') as HTMLSpanElement;

let date_DOM = document.getElementById('date') as HTMLSpanElement;

let addbutton_DOM = document.getElementById('addtask') as HTMLButtonElement;

let task_list_DOM = document.getElementById('task_list') as HTMLDivElement;

let task_counter_DOM = document.getElementById('taskcounter') as HTMLSpanElement


addbutton_DOM.addEventListener("click", () => {
    displayToDoCreationForm()
    addbutton_DOM.style.pointerEvents = "none"
})


export {
    day_of_week_DOM, 
    date_DOM, 
    addbutton_DOM,
    task_list_DOM,
    task_counter_DOM
}
