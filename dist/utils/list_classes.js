import { task_list_DOM } from "./dom_vars.js";
import { addTodo } from "./list_functions.js";
import { addbutton_DOM } from "./dom_vars.js";
class ContentFieldProvider {
    constructor() {
        this.fillContentPropertyWithBlankElement('div');
    }
    fillContentPropertyWithBlankElement(element_name) {
        this.content = document.createElement(element_name);
    }
    appendElementToContent(...elementArr) {
        this.content.append(...elementArr);
    }
    defineClassnameForContentRootElement(name_of_class) {
        this.content.className = name_of_class;
    }
}
export class FormConstructor extends ContentFieldProvider {
    constructor() {
        super();
        this.defineClassnameForContentRootElement("creation_form_wrapper");
    }
    createForm() {
        this.appendInputFieldToContent();
        this.appendTimeselectionToContent();
        this.appendButtonsToContent(this.content);
        return this.content;
    }
    appendInputFieldToContent() {
        let input_field = new InputConstructor().createInput();
        this.appendElementToContent(input_field);
    }
    appendButtonsToContent(parentContent) {
        let buttons = new ButtonsConstructor(parentContent).createButtons();
        this.appendElementToContent(buttons);
    }
    appendTimeselectionToContent() {
        let timeSelection = new TimeSelectionConstructor().createTimeSelection();
        this.appendElementToContent(timeSelection);
    }
}
class InputConstructor extends ContentFieldProvider {
    constructor() {
        super();
        this.defineClassnameForContentRootElement("creationfrom_inputdiv");
    }
    createInput() {
        this.addInputField();
        return this.content;
    }
    addInputField() {
        let input = document.createElement("input");
        input.className = "creationform_input";
        input.id = "creationform_input_id";
        this.appendElementToContent(input);
    }
}
class ButtonsConstructor extends ContentFieldProvider {
    constructor(parentContent) {
        super();
        this.defineClassnameForContentRootElement('creationform_buttons_div');
        this.parentContent = parentContent;
    }
    createButtons() {
        let confirm_button = this.createConfirmButton();
        let rejectButton = this.createRejectButton();
        this.appendElementToContent(confirm_button, rejectButton);
        return this.content;
    }
    createConfirmButton() {
        let button = document.createElement('button');
        button.textContent = "Создать";
        button.addEventListener('click', () => {
            let input = this.parentContent.querySelector("#creationform_input_id");
            let text_content = input.textContent;
            let new_todo = {
                text: text_content,
                completed: false,
                time: {
                    hours: 9,
                    minutes: 10
                }
            };
            task_list_DOM.removeChild(this.parentContent);
            addbutton_DOM.style.pointerEvents = "auto";
            addTodo(new_todo);
        });
        return button;
    }
    createRejectButton() {
        let button = document.createElement('button');
        button.textContent = "Удалить";
        button.addEventListener('click', () => {
            addbutton_DOM.style.pointerEvents = "auto";
            task_list_DOM.removeChild(this.parentContent);
        });
        return button;
    }
}
class TimeSelectionConstructor extends ContentFieldProvider {
    constructor() {
        super();
        this.defineClassnameForContentRootElement('creationform_timeselection_div');
    }
    createTimeSelection() {
        return this.content;
    }
}
