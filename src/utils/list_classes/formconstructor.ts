import type { toDo_task_type } from "../../types/todo_types.js"
import { addbutton_DOM, task_list_DOM } from "../dom_vars.js"
import { addTodo } from "../list_functions.js"
import { 
    cancel_circle_url, 
    check_circle_url, 
    time_selection_url, 
} from "../urls.js"
import { ButtonProvider, ContentProviderWithInitialDivContent, CheckBoxCreationFuncProvider } from "./provider.js"
import { data_storage } from "./dataclass.js"


export class FormConstructor extends ContentProviderWithInitialDivContent{

    constructor () {
        super()
        this.defineClassnameForContentRootElement("creation_form_wrapper flex")
    }

    public createForm(): HTMLDivElement {
        this.appendInputFieldToContent()
        this.appendTimeselectionToContent()
        this.appendButtonsToContent(this.content)
        this.appendTimeselectionFormToContent()
        return this.content as HTMLDivElement
    }

    private appendInputFieldToContent(): void {
       let input_field = new InputConstructor().createInput()
       this.appendElementToContent(input_field)
    }

    private appendButtonsToContent(parentContent: HTMLElement): void {
        let buttons = new ButtonsConstructor(parentContent).createButtons()
        this.appendElementToContent(buttons)
    }

    private appendTimeselectionToContent(): void {
        let time_selection = new TimeSelectionConstructor(this.content).createTimeSelection()
        this.appendElementToContent(time_selection)
    }

    private appendTimeselectionFormToContent(): void {
        let time_selection_form = new TimeSelectionFormConstructor().createTimeSelectionForm()
        this.appendElementToContent(time_selection_form)
    }

}


class InputConstructor extends ContentProviderWithInitialDivContent {

    constructor () {
        super()
        this.defineClassnameForContentRootElement("creationfrom_inputdiv")
    }

    public createInput(): HTMLDivElement {
        this.addInputField()
        return this.content as HTMLDivElement
    }

    private addInputField(): void{
        let input = this.createElementAndAddProperties("input", {
            "class": "creationform_input",
            "id": "creationform_input_id"
        }) as HTMLInputElement
        input.autocomplete = "off"
        this.linkInputWithDataStorage(input)
        this.appendElementToContent(input)
    }


    private linkInputWithDataStorage(input: HTMLInputElement): void {
        input.addEventListener("input", (e: Event) => {
            data_storage.setInputedData((e.target as HTMLInputElement).value);
        })
    }

}


class ButtonsConstructor extends ButtonProvider {

    constructor (parent_content: HTMLElement) {
        super(parent_content)
        this.fillContentPropertyWithBlankElement('div')
        this.defineClassnameForContentRootElement('creationform_buttons_div flex f-center')
    }

    public createButtons() {
        let confirm_button = this.createConfirmButton()
        let reject_button = this.createRejectButton()
        this.appendElementToContent(confirm_button, reject_button)
        return this.content
    }

    private createConfirmButton(): HTMLButtonElement {
        let button = this.createBasicButtonWithIcon(check_circle_url)
        button.addEventListener('click', () => {
            let new_todo = this.formTodo()
            task_list_DOM.removeChild(this.parent_content)
            addbutton_DOM.style.pointerEvents = "auto"
            addTodo(new_todo)
        })
        return button
    }


    private formTodo(): toDo_task_type {
        return {
            id: data_storage.actual_unique_todo_id,
            text: data_storage.inputed_data,
            completed: false,
            time: data_storage.getToDoTime()
        }
    }

    private createRejectButton(): HTMLButtonElement {
        let button = this.createBasicButtonWithIcon(cancel_circle_url)
        button.addEventListener('click', () => {
            addbutton_DOM.style.pointerEvents = "auto"
            task_list_DOM.removeChild(this.parent_content)
        })
        return button
    }

}


class TimeSelectionConstructor extends ButtonProvider {

    public createTimeSelection(): HTMLButtonElement {
        let button = this.createBasicButtonWithIcon(time_selection_url)
        this.setOnClickPopupEventTo(button)
        this.forceContentToBeEqualTo(button)
        return this.content as HTMLButtonElement
    }

    private setOnClickPopupEventTo(button: HTMLButtonElement) : void {
        button.addEventListener('click', () => {
            let form = this.findDOMTimeselectionForm()
            if(!data_storage.timeselection_form_is_displayed) {
                this.displayTimeSelectionForm(form)
            }
            else {
                this.hideTimeSelectionForm(form)
            }
            data_storage.changeStateOfFormDisplayed()
        })
    }

    private displayTimeSelectionForm(form: HTMLDivElement): void {
        this.replaceClassnameOf(form, "d-none", "flex f-column")
    }

    private hideTimeSelectionForm(form: HTMLDivElement): void {
        this.replaceClassnameOf(form, "flex f-column", "d-none")
    }

    private replaceClassnameOf(form: HTMLDivElement, old_classname: string, new_classname: string): void {
        let form_classname = form.className
        let new_result_classname = form_classname.replace(old_classname, new_classname)
        form.className = new_result_classname
    }

    private findDOMTimeselectionForm(): HTMLDivElement {
        let form = this.parent_content.querySelector('#timeselection_form_id') as HTMLDivElement
        return form
    }
}


class TimeSelectionFormConstructor extends ContentProviderWithInitialDivContent {

    constructor () {
        super()
        this.defineClassnameForContentRootElement("timeselection_form d-none")
        this.defineIdForContentElement('timeselection_form_id')
    }

    public createTimeSelectionForm() {
        this.addTimeSelectionFieldToContent()
        this.addAllDayPropertyToContent()
        return this.content
    }

    private addTimeSelectionFieldToContent(): void {
        let timeselection_field = new TimeSelectionFieldConstructor().createTimeselectionField()
        this.appendElementToContent(timeselection_field)
    }

    private addAllDayPropertyToContent(): void {
        let all_day_div = new AllDayFieldConstructor().createAllDayDiv()
        this.appendElementToContent(all_day_div)
    }
}


class TimeSelectionFieldConstructor extends ContentProviderWithInitialDivContent {
    constructor() {
        super()
        this.defineClassnameForContentRootElement('outer_timeselection_field flex')
    }

    public createTimeselectionField(): HTMLDivElement {
        this.createSlider(24, ()=>{})
        this.createSlider(60, ()=>{})
        return this.content as HTMLDivElement
    }


    private createSlider(up_to_number: number, exec_func_after_selection: () => void): void {
        let outer_wrapper = this.createElementAndAddProperties('div', {class: "outer_slider_wrapper"})
        let inner_wrapper = this.createElementAndAddProperties('div', {class: "inner_slider_wrapper flex f-column"})
        
        for(let i = 0; i < up_to_number; i++) {
            let selection_slider_div = this.createElementAndAddProperties('div', {class: "selection_slider_wrapper flex f-center"})
            selection_slider_div.textContent = `${i}`
            
            inner_wrapper.appendChild(selection_slider_div)
        }
        
        this.addSlidingLogic(inner_wrapper, up_to_number)
        outer_wrapper.appendChild(inner_wrapper)
        this.appendElementToContent(outer_wrapper)
    }


    private addSlidingLogic(slider_element: HTMLElement, max_sliding_number: number): void {
        let counter = 0;
        slider_element.addEventListener("wheel", (event)=>{
            counter = this.setSlidingCounter(counter, event.deltaY, max_sliding_number)
        })
    }

    private setSlidingCounter(prev_counter: number, delta_Y_wheel_event: number, max_sliding_number: number): number {
        let delta = delta_Y_wheel_event > 0? 1 : - 1
            if (prev_counter + delta >= 0 && prev_counter + delta < max_sliding_number) {
                prev_counter += delta
            }
        return prev_counter
    }
}


class AllDayFieldConstructor extends CheckBoxCreationFuncProvider {

    constructor () {
        super()
        this.defineClassnameForContentRootElement("all_day_div flex f-center")
    }

    public createAllDayDiv(): HTMLDivElement {
        this.addCheckBoxToContent()
        this.addSignAllDayToContent()
        return this.content as HTMLDivElement
    }

    private addSignAllDayToContent(): void {
        let sign = document.createElement('p')
        sign.textContent = "ALL DAY"
        this.appendElementToContent(sign)    
    }
}

