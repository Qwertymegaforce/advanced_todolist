class ContentFieldProvider {
    fillContentPropertyWithBlankElement(element_name) {
        this.content = document.createElement(element_name);
    }
    appendElementToContent(element) {
        this.content.appendChild(element);
    }
}
export class FormConstructor extends ContentFieldProvider {
    constructor() {
        super();
        this.fillContentPropertyWithBlankElement('div');
    }
    createForm() {
        this.appendInputFieldToContent();
        this.appendButtonsToContent();
        return this.content;
    }
    appendInputFieldToContent() {
        let input_field = new InputConstructor().createInput();
        this.appendElementToContent(input_field);
    }
    appendButtonsToContent() {
    }
}
class InputConstructor extends ContentFieldProvider {
    constructor() {
        super();
        this.fillContentPropertyWithBlankElement('input');
    }
    createInput() {
        return this.content;
    }
}
