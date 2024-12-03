import type { toDo_task_type } from "../../types/todo_types.js"
import { addbutton_DOM, task_list_DOM } from "../dom_vars.js"
import { addTodo } from "../list_functions.js"
import { cancel_circle_url, check_circle_url } from "../urls.js"
import { ContentFieldProvider } from "./provider.js"

export class FormConstructor extends ContentFieldProvider{

    constructor () {
        super()
        this.defineClassnameForContentRootElement("creation_form_wrapper flex")
    }

    public createForm(): HTMLDivElement {
        this.appendInputFieldToContent()
        this.appendTimeselectionToContent()
        this.appendButtonsToContent(this.content)
        return this.content as HTMLDivElement
    }

    private appendInputFieldToContent(): void {
       let input_field = new InputConstructor().createInput()
       this.appendElementToContent(input_field)
    }

    private appendButtonsToContent(parentContent: HTMLDivElement): void {
        let buttons = new ButtonsConstructor(parentContent).createButtons()
        this.appendElementToContent(buttons)
    }

    private appendTimeselectionToContent(): void {
        let timeSelection = new TimeSelectionConstructor().createTimeSelection()
        this.appendElementToContent(timeSelection)
    }

}


class InputConstructor extends ContentFieldProvider {

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


class ButtonsConstructor extends ContentFieldProvider {

    private parentContent;

    constructor (parentContent: HTMLDivElement) {
        super()
        this.defineClassnameForContentRootElement('creationform_buttons_div flex f-center')
        this.parentContent = parentContent
    }

    public createButtons() {
        let confirm_button = this.createConfirmButton()
        let rejectButton = this.createRejectButton()
        this.appendElementToContent(confirm_button, rejectButton)
        return this.content
    }

    private createConfirmButton(): HTMLButtonElement {
        let button = this.createBasicButton(check_circle_url)
        button.addEventListener('click', () => {
            let input = this.parentContent.querySelector("#creationform_input_id") as HTMLInputElement
            let text_content = input.value
            let new_todo: toDo_task_type = {
                text: text_content,
                completed: false,
                time: {
                    hours: 9,
                    minutes: 10
                }
            }
            task_list_DOM.removeChild(this.parentContent)
            addbutton_DOM.style.pointerEvents = "auto"
            addTodo(new_todo)
        })
        return button
    }

    private createRejectButton(): HTMLButtonElement {
        let button = this.createBasicButton(cancel_circle_url)
        button.addEventListener('click', () => {
            addbutton_DOM.style.pointerEvents = "auto"
            task_list_DOM.removeChild(this.parentContent)
        })
        return button
    }

    private createBasicButton(img_url: string): HTMLButtonElement {
        let button = document.createElement('button')
        let inner_img = document.createElement('img')
        button.className = "creationform_buttons"
        inner_img.src = img_url
        button.appendChild(inner_img)
        return button
    }

}


class TimeSelectionConstructor extends ContentFieldProvider {
    constructor () {
        super()
        this.defineClassnameForContentRootElement('creationform_timeselection_div')
    }

    public createTimeSelection() {
        return this.content as HTMLDivElement
    }
}
