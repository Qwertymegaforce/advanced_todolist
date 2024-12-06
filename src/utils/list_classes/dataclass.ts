class DataStorage {
    
    public timeselection_form_is_displayed = false;
    public actualUniqueToDoId = 0;

    public changeStateOfFormDisplayed(): void {
        this.timeselection_form_is_displayed = !this.timeselection_form_is_displayed
    }

    public updateActualUniqueTodoId(): void {
        this.actualUniqueToDoId += 1
    }
}


export const data_storage = new DataStorage()