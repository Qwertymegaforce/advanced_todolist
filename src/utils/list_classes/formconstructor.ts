import type { toDo_task_type } from "../../types/todo_types.js"
import { addbutton_DOM, task_list_DOM } from "../dom_vars.js"
import { addTodo } from "../list_functions.js"
import { cancel_circle_url, check_circle_url, time_selection_url } from "../urls.js"
import { ButtonProvider, ContentProviderWithInitialDivContent } from "./provider.js"


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
        let time_selection = new TimeSelectionConstructor().createTimeSelection()
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

    private parent_content;

    constructor (parentContent: HTMLElement) {
        super()
        this.fillContentPropertyWithBlankElement('div')
        this.defineClassnameForContentRootElement('creationform_buttons_div flex f-center')
        this.parent_content = parentContent
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
            console.log('Показываю меню');
        }
    )}
}


class TimeSelectionFormConstructor extends ContentProviderWithInitialDivContent {

    constructor () {
        super()
        this.defineClassnameForContentRootElement("timeselection_form")
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
