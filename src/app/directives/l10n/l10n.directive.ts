import {
    Directive,
    ElementRef,
    Renderer2,
    Input,
    ViewContainerRef,
    AfterViewInit,
    OnChanges
} from "@angular/core";

@Directive({
    selector: "[appLocalize]"
})
export class L10nDirective implements AfterViewInit, OnChanges {
    private lang = "en";
    @Input() appLocalizeIf: string;
    @Input() appLocalizeValue: string;

    private dict = {};

    constructor(private element: ElementRef, private renderer: Renderer2) {
        const lng = navigator.language.toLowerCase() || "en";
        const [lang, _] = lng.split("-");
        this.lang = this.dict[lang] ? lang : this.lang;
        if (!this.dict[lang]) {
            this.dict[lang] = {};
            const win: any = window;
            if (!win._l10n_reqs) {
                win._l10n_reqs = {};
                win._l10n_reqs[lang] = fetch(`/assets/l10n/${lang}.json`).then(
                    res => {
                        if (res.status > 199 && res.status < 300) {
                            return res.json();
                        }
                    }
                );
            }
            win._l10n_reqs[lang].then(data => {
                this.dict[lang] = data;
                this.lang = this.dict[lang] ? lang : this.lang;
                this.renderContent();
            });
        }
    }

    private renderContent(): void {
        if (this.appLocalizeValue) {
            const text = this.renderer.createText(
                this.getTranslation(this.appLocalizeValue)
            );
            this.element.nativeElement.childNodes.forEach(node => {
                this.renderer.removeChild(this.element.nativeElement, node);
            });
            this.renderer.appendChild(this.element.nativeElement, text);
        } else {
            const childElements = this.element.nativeElement.childNodes;
            childElements.forEach((child: any) => {
                if (this.appLocalizeIf) {
                    if (this.appLocalizeIf !== this.lang) {
                        this.element.nativeElement.style.display = "none";
                    } else {
                        this.element.nativeElement.style.display = "";
                    }
                    if (child.nodeName === "#text") {
                        const text = this.renderer.createText(
                            this.getTranslation(child.textContent)
                        );
                        this.renderer.insertBefore(
                            this.element.nativeElement,
                            text,
                            this.renderer.nextSibling(child)
                        );
                        this.renderer.removeChild(
                            this.element.nativeElement,
                            child
                        );
                    }
                } else {
                    if (child.nodeName === "#text") {
                        this.renderer.removeChild(
                            this.element.nativeElement,
                            child
                        );
                        const text = this.renderer.createText(
                            this.getTranslation(child.textContent)
                        );
                        this.renderer.appendChild(
                            this.element.nativeElement,
                            text
                        );
                    }
                }
            });
        }
    }

    ngOnChanges(/* changes: SimpleChanges */): void {
        this.renderContent();
    }

    ngAfterViewInit(): void {
        this.renderContent();
    }

    private getTranslation(text: any): string {
        if (
            !text ||
            Object.prototype.toString.call(text).indexOf("String") === -1
        ) {
            text = "";
        }
        const short = text.trim();
        const res = this.dict[this.lang]
            ? this.dict[this.lang][short] || text.trim()
            : text.trim();
        const result = text.replace(text.trim(), res);
        return result;
    }
}
