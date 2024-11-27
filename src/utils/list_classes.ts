class ContentFieldProvider {
    protected content!: HTMLElement;

    protected fillContentPropertyWithBlankElement (element_name: string): void {
        this.content = document.createElement(element_name)
    }

    protected appendElementToContent(element: HTMLElement): void {
        this.content.appendChild(element)
    }
}

export class FormConstructor extends ContentFieldProvider{

    constructor () {
        super()
        this.fillContentPropertyWithBlankElement('div')
    }

    public createForm(): HTMLDivElement {
        this.appendInputFieldToContent()
        this.appendButtonsToContent()
        return this.content as HTMLDivElement
    }

    private appendInputFieldToContent(): void {
       let input_field = new InputConstructor().createInput()
       this.appendElementToContent(input_field)
    }

    private appendButtonsToContent(): void {

    }

}


class InputConstructor extends ContentFieldProvider {

    constructor () {
        super()
        this.fillContentPropertyWithBlankElement('input')
    }

    public createInput(): HTMLInputElement {
        return this.content as HTMLInputElement
    }

}


