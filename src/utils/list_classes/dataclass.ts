class DataStorage {
    
    public timeselection_form_is_displayed = false;
    public actual_unique_todo_id = 0;

    public changeStateOfFormDisplayed(): void {
        this.timeselection_form_is_displayed = !this.timeselection_form_is_displayed
    }

    public updateActualUniqueTodoId(): void {
        this.actual_unique_todo_id += 1
    }
}


export const data_storage = new DataStorage()