import { Component, ElementRef, HostBinding, Input } from '@angular/core';
import { BootstrapIconName } from 'pano-bootstrap-icons';
import { BootstrapIconService } from '../../services/bootstrap-icon.service';

@Component({
    selector: 'pano-icon',
    templateUrl: './pano-icon.component.html',
    styleUrls: ['./pano-icon.component.scss']
})
export class PanoIconComponent {

    @Input()
    set name(iconName: BootstrapIconName) {
        this.elenent.nativeElement.innerHTML = this.bootstrapIconService.get(iconName) || null;
    }

    @Input()
    size: number = 16;

    @HostBinding("style")
    get style(): CSSStyleDeclaration {
        return {
            width: this.size + 'px',
            height: this.size + 'px'
        } as CSSStyleDeclaration;
    }

    constructor(private elenent: ElementRef,
        private bootstrapIconService: BootstrapIconService) {
    }
}
