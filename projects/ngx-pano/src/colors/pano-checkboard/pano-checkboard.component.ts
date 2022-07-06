import { HostBinding } from '@angular/core';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { getCheckerboard } from '../helpers/checkboard';

@Component({
    selector: 'pano-checkboard',
    templateUrl: './pano-checkboard.component.html',
    styleUrls: ['./pano-checkboard.component.scss'],
    preserveWhitespaces: false,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanoCheckboardComponent {

    @Input()
    white = 'transparent';

    @Input()
    size = 8;

    @Input()
    grey = 'rgba(0,0,0,.08)';

    @Input()
    boxShadow!: string;

    @Input()
    borderRadius!: string;

    @HostBinding('style')
    get gridStyles(): CSSStyleDeclaration {
        const background = getCheckerboard(this.white, this.grey, this.size);
        return {
            borderRadius: this.borderRadius,
            boxShadow: this.boxShadow,
            background: `url(${background}) center left`,
        } as CSSStyleDeclaration;
    }
}
