class ContentFieldProvider {
    constructor() {
        this.fillContentPropertyWithBlankElement('div');
    }
    fillContentPropertyWithBlankElement(element_name) {
        this.content = document.createElement(element_name);
    }
    appendElementToContent(element) {
        this.content.appendChild(element);
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
        this.appendButtonsToContent();
        return this.content;
    }
    appendInputFieldToContent() {
        let input_field = new InputConstructor().createInput();
        this.appendElementToContent(input_field);
    }
    appendButtonsToContent() {
        let buttons = new ButtonsConstructor().createButtons();
        this.appendElementToContent(buttons);
    }
    appendTimeselectionToContent() {
    }
}
class InputConstructor extends ContentFieldProvider {
    constructor() {
        super();
        this.fillContentPropertyWithBlankElement('div');
        this.defineClassnameForContentRootElement("creationfrom_inputdiv");
    }
    createInput() {
        this.addInputField();
        return this.content;
    }
    addInputField() {
        let input = document.createElement("input");
        input.className = "creationform_input";
        this.appendElementToContent(input);
    }
}
class ButtonsConstructor extends ContentFieldProvider {
    constructor() {
        super();
        this.defineClassnameForContentRootElement('creationform_buttons_div');
    }
    createButtons() {
        return this.content;
    }
}
