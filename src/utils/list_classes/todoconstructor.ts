import type{ toDo_task_type } from "../../types/todo_types.js";
import { CheckBoxCreationFuncProvider } from "./provider.js";


export class TodoConstructor extends CheckBoxCreationFuncProvider {
    
    private todo_obj: toDo_task_type;

    constructor (todo_obj: toDo_task_type) {
        super()
        this.defineClassnameForContentRootElement("creation_form_wrapper flex")
        this.todo_obj = todo_obj
    }

    public createDisplayedTodo(): HTMLElement {
        this.addCheckBoxToContent()
        this.addTextField()
        this.addTimeMarker()
        return this.content
    }

    private addTextField(): void {
        let text_field = document.createElement('p')
        text_field.className = "displayed_todo_textfield"
        text_field.textContent = this.todo_obj.text
        this.appendElementToContent(text_field)
    }

    private addTimeMarker(): void {
        let time_marker = document.createElement('p')
        time_marker.className = "displayed_todo_timemarker"
        let time_obj = this.todo_obj?.time
        let content
        if (time_obj) {
            content = `${time_obj.hours}:${time_obj.minutes}`
        }
        else {
            content = "ALL DAY"
        }
        time_marker.textContent = content
        this.appendElementToContent(time_marker)
    }
}