export class ContentFieldProvider {
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