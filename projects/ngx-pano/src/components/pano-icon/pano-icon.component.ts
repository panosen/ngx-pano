import { Component, ElementRef, HostBinding, Input, OnInit } from '@angular/core';
import { IPanoIconConfig } from '../../IPanoIconConfig';
import { PanoComponentOrCustomStatus } from '../../pano-component-status';
import { PANO_ICONS } from '../../pano-icons';

@Component({
    selector: 'pano-icon',
    templateUrl: './pano-icon.component.html',
    styleUrls: ['./pano-icon.component.scss']
})
export class PanoIconComponent implements OnInit {

    @Input()
    set name(iconName: string) {
        this.elenent.nativeElement.innerHTML = PANO_ICONS.get(iconName) || null;
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

    @Input()
    pack: string = '';

    @Input()
    options: { [name: string]: any } = {};

    @Input()
    status?: PanoComponentOrCustomStatus;

    @Input()
    config: IPanoIconConfig | string = '';

    constructor(private elenent: ElementRef) {
    }

    ngOnInit(): void {
    }

}
