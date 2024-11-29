import { task_list_DOM } from "./dom_vars.js";
import { addTodo } from "./list_functions.js";
import type { toDo_task_type } from "../types/todo_types";

class ContentFieldProvider {
    protected content!: HTMLDivElement;

    constructor () {
        this.fillContentPropertyWithBlankElement('div')
    }

    protected fillContentPropertyWithBlankElement (element_name: string): void {
        this.content = document.createElement(element_name) as HTMLDivElement
    }

    protected appendElementToContent(...elementArr: HTMLElement[]): void {
        this.content.append(...elementArr)
    }

    protected defineClassnameForContentRootElement(name_of_class: string): void {
        this.content.className = name_of_class
    }
}

export class FormConstructor extends ContentFieldProvider{

    constructor () {
        super()
        this.defineClassnameForContentRootElement("creation_form_wrapper")
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
        input.className = "creationform_input"
        input.id = "creationform_input_id"
        this.appendElementToContent(input)
    }

}


class ButtonsConstructor extends ContentFieldProvider {

    private parentContent;

    constructor (parentContent: HTMLDivElement) {
        super()
        this.defineClassnameForContentRootElement('creationform_buttons_div')
        this.parentContent = parentContent
    }

    public createButtons() {
        let confirm_button = this.createConfirmButton()
        let rejectButton = this.createRejectButton()
        this.appendElementToContent(confirm_button, rejectButton)
        return this.content
    }

    private createConfirmButton(): HTMLButtonElement {
        let button = document.createElement('button')
        button.textContent = "Создать"
        button.addEventListener('click', () => {
            let input = this.parentContent.querySelector("#creationform_input_id") as HTMLInputElement
            let text_content = input.textContent!
            let new_todo: toDo_task_type = {
                text: text_content,
                completed: false,
                time: {
                    hours: 9,
                    minutes: 10
                }
            }
            task_list_DOM.removeChild(this.parentContent)
            addTodo(new_todo)
        })
        return button
    }

    private createRejectButton(): HTMLButtonElement {
        let button = document.createElement('button')
        button.textContent = "Удалить"
        button.addEventListener('click', () => {
            task_list_DOM.removeChild(this.parentContent)
        })
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

