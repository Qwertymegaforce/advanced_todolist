import type { toDo_task_type } from "../../types/todo_types.js"
import { addbutton_DOM, task_list_DOM } from "../dom_vars.js"
import { addTodo } from "../list_functions.js"
import { cancel_circle_url, check_circle_url, time_selection_url } from "../urls.js"
import { ButtonProvider, ContentProviderWithInitialDivContent } from "./provider.js"
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
        let input = document.createElement("input")
        input.autocomplete = "off"
        input.className = "creationform_input"
        input.id = "creationform_input_id"
        this.appendElementToContent(input)
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
            let input = this.parent_content.querySelector("#creationform_input_id") as HTMLInputElement
            let text_content = input.value
            let new_todo: toDo_task_type = {
                text: text_content,
                completed: false,
                time: {
                    hours: 9,
                    minutes: 10
                }
            }
            task_list_DOM.removeChild(this.parent_content)
            addbutton_DOM.style.pointerEvents = "auto"
            addTodo(new_todo)
        })
        return button
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

    public createTimeSelection() {
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
        this.replaceClassnameOf(form, "d-none", "d-block")
    }

    private hideTimeSelectionForm(form: HTMLDivElement): void {
        this.replaceClassnameOf(form, "d-block", "d-none")
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

    }

    private addAllDayPropertyToContent(): void {
        
    }
}


class AllDayFieldConstructor extends ContentProviderWithInitialDivContent {

    constructor () {
        super()
        this.defineClassnameForContentRootElement("all_day_div")
    }

    public createAllDayDiv(): HTMLDivElement {
        this.addCheckboxToContent()
        this.addSignAllDayToContent()
        return this.content as HTMLDivElement
    }

    private addCheckboxToContent(): void {
        
    }

    private addSignAllDayToContent(): void {

    }
}