import type{ toDo_task_type } from "../../types/todo_types.js";
import { ContentFieldProvider } from "./provider.js";

export class TodoConstructor extends ContentFieldProvider {
    
    private todo_obj: toDo_task_type;

    constructor (todo_obj: toDo_task_type) {
        super()
        this.defineClassnameForContentRootElement("creation_form_wrapper flex")
        this.todo_obj = todo_obj
    }

    public createDisplayedTodo(): HTMLDivElement {
        return document.createElement('div')
    }

    private addCheckbox(): void {
        
    }

    private addTextField(): void {

    }

    private addTimeMarker(): void {
        
    }
}