class DataStorage {
    
    public timeselection_form_is_displayed = false;
    public actual_unique_todo_id = 0;
    public inputed_data = ""
    private all_day = false;
    private time!: object;

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

    public getToDoTime(): void {

    }

}


export const data_storage = new DataStorage()