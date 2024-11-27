export class FormConstructor {
    
    private content!: HTMLDivElement;

    constructor () {
        this.fillContentPropertyWithBlankDiv()
    }

    public createForm(): HTMLDivElement {
        this.addInputField()
        return this.content
    }

    private addInputField() {
       let input_field = document.createElement('input')
       input_field.className = "creation_form_input"
       this.content.appendChild(input_field)
    }

    private fillContentPropertyWithBlankDiv (): void {
        this.content = document.createElement("div")
        this.content.className = "creation_form_wrapper"
    }

}