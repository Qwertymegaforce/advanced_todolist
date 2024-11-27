class ContentFieldProvider {
    protected content!: HTMLElement;

    constructor () {
        this.fillContentPropertyWithBlankElement('div')
    }

    protected fillContentPropertyWithBlankElement (element_name: string): void {
        this.content = document.createElement(element_name)
    }

    protected appendElementToContent(element: HTMLElement): void {
        this.content.appendChild(element)
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
        this.appendButtonsToContent()
        return this.content as HTMLDivElement
    }

    private appendInputFieldToContent(): void {
       let input_field = new InputConstructor().createInput()
       this.appendElementToContent(input_field)
    }

    private appendButtonsToContent(): void {
        let buttons = new ButtonsConstructor().createButtons()
        this.appendElementToContent(buttons)
    }

    private appendTimeselectionToContent(): void {

    }

}


class InputConstructor extends ContentFieldProvider {

    constructor () {
        super()
        this.fillContentPropertyWithBlankElement('div')
        this.defineClassnameForContentRootElement("creationfrom_inputdiv")
    }

    public createInput(): HTMLDivElement {
        this.addInputField()
        return this.content as HTMLDivElement
    }

    private addInputField(): void{
        let input = document.createElement("input")
        input.className = "creationform_input"
        this.appendElementToContent(input)
    }

}


class ButtonsConstructor extends ContentFieldProvider {
    constructor () {
        super()
        this.defineClassnameForContentRootElement('creationform_buttons_div')
    }

    public createButtons() {
        return this.content
    }
}

