import type { toDo_time_type } from "../../types/todo_types.js";

class DataStorage {
    
    public timeselection_form_is_displayed = false;
    public actual_unique_todo_id = 0;
    public inputed_data = ""

    private all_day = true;
    private time!: toDo_time_type;

    public changeStateOfFormDisplayed(): void {
        this.timeselection_form_is_displayed = !this.timeselection_form_is_displayed
    }

    public updateActualUniqueTodoId(): void {
        this.actual_unique_todo_id += 1
    }

    public setInputedData(data: string): void {
        this.inputed_data = data
    }
    
    public clearInputedData(): void {
        this.inputed_data = ""
    }

    public getToDoTime(): string | toDo_time_type {
        if (this.all_day) return "ALL DAY"
        else return this.time
    }

}


export const data_storage = new DataStorage()