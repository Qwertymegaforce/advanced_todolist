import { check_url } from "../urls.js";


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

    protected defineIdForContentElement(id: string): void {
        this.content.id = id
    }

    protected forceContentToBeEqualTo(element: HTMLElement) {
        this.content = element
    }

    protected setDataAttrForContent(name: string, value: string): void {
        this.content.setAttribute(name, value)
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

export class CheckBoxConstructor extends ContentProviderWithInitialDivContent {

    protected onactiveFunc: () => void
    protected ondisableFunc: () => void

    private checkmark_url = check_url

    constructor (onactive_func: () => void = () => {}, ondisable_func: ()=> void = () => {}) {
        super()
        this.defineClassnameForContentRootElement("checkbox_div")
        this.setDataAttrForContent("data-active", "false")
        this.onactiveFunc = onactive_func
        this.ondisableFunc = ondisable_func
    }

    public createCheckBox(): HTMLDivElement {
        let img_check_mark = this.createImgCheckMark()
        this.addOnClickListenerToContent(img_check_mark)
        this.appendElementToContent(img_check_mark)
        return this.content as HTMLDivElement
    }

    private createImgCheckMark(): HTMLImageElement {
        let img = document.createElement('img')
        img.src = this.checkmark_url
        img.className = "checkbox_img"
        return img
    }

    private addOnClickListenerToContent(img: HTMLImageElement): void {
        this.content.addEventListener("click", () => {
            let is_active = (this.content.dataset.active === "true")
            
            if (!is_active) {
                this.onactiveFunc()
                img.style.opacity = "1"
                this.content.style.backgroundColor = "var(--purple-color)"
                this.setDataAttrForContent("data-active", "true")
            }
            else {
                this.ondisableFunc()
                img.style.opacity = "0"
                this.content.style.backgroundColor = "white"
                this.setDataAttrForContent("data-active", "false")
            }
        })
    }

}

export class CheckBoxCreationFuncProvider extends ContentProviderWithInitialDivContent {
    protected addCheckBoxToContent (): void {
        let checkbox_field = new CheckBoxConstructor().createCheckBox()
        this.appendElementToContent(checkbox_field)
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

