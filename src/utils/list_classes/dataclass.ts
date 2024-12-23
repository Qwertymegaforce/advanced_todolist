import type { toDo_time_type } from "../../types/todo_types.js";

class DataStorage {
    
    public timeselection_form_is_displayed = false;
    public actual_unique_todo_id = 0;
    public inputed_data = ""

    private all_day = false;
    private time: toDo_time_type = {
        minutes: 0,
        hours: 0
    };

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
        this.time = {
            minutes: 0,
            hours: 0
        }
        this.all_day = false
    }

    public setTime(time_property: keyof toDo_time_type, value: number): void {
        this.time[time_property] = value
    }

    public changeAllDay(){
        this.all_day = !this.all_day
    }

    public getToDoTime(): string | toDo_time_type {
        if (this.all_day) return "ALL DAY"
        else return {...this.time}
            
    }

}


export const data_storage = new DataStorage()