export class FormConstructor {
    constructor() {
        this.fillContentPropertyWithBlankDiv();
    }
    createForm() {
        this.addInputField();
        return this.content;
    }
    addInputField() {
        let input_field = document.createElement('input');
        input_field.className = "creation_form_input";
        this.content.appendChild(input_field);
    }
    fillContentPropertyWithBlankDiv() {
        this.content = document.createElement("div");
        this.content.className = "creation_form_wrapper";
    }
}
