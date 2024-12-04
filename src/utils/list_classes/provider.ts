class ContentFieldProvider {
    protected content!: HTMLElement;

    protected fillContentPropertyWithBlankElement (element_name: string): void {
        this.content = document.createElement(element_name) as HTMLDivElement
    }

    protected appendElementToContent(...elementArr: HTMLElement[]): void {
        this.content.append(...elementArr)
    }

    protected defineClassnameForContentRootElement(name_of_class: string): void {
        this.content.className = name_of_class
    }

    protected forceContentToBeEqualTo(element: HTMLElement) {
        this.content = element
    }
}

class ParentContentPropertyProvider extends ContentFieldProvider{
    
    protected parent_content: HTMLElement;

    constructor(parent_content: HTMLElement) {
        super()
        this.parent_content = parent_content
    }
}


export class ContentProviderWithInitialDivContent extends ContentFieldProvider{
    constructor () {
        super()
        this.fillContentPropertyWithBlankElement('div')
    }
}


export class ButtonProvider extends ParentContentPropertyProvider {


    protected createBasicButtonWithIcon(img_url: string): HTMLButtonElement {
        let button = document.createElement('button')
        let inner_img = document.createElement('img')
        button.className = "creationform_buttons"
        inner_img.src = img_url
        button.appendChild(inner_img)
        return button
    }
}
