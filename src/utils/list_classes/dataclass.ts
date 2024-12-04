class DataStorage {
    
    public timeselection_form_is_displayed = false;

    public changeStateOfFormDisplayed(): void {
        this.timeselection_form_is_displayed = !this.timeselection_form_is_displayed
    }
}


export const data_storage = new DataStorage()