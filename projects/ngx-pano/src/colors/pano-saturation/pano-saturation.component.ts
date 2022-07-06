import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { CoordinatesChangeArgs } from '../directives/pano-coordinates.directive';
import { HSLA, HSVA, HSVAsource } from '../pano-color-interface';

@Component({
    selector: 'pano-saturation',
    templateUrl: './pano-saturation.component.html',
    styleUrls: ['./pano-saturation.component.scss'],
    preserveWhitespaces: false,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanoSaturationComponent implements OnChanges {

    @Input()
    hsl!: HSLA;

    @Input()
    hsv!: HSVA;

    @Input()
    radius!: number;

    @Input()
    pointer!: Record<string, string>;

    @Input()
    circle!: Record<string, string>;

    @Output()
    onChange = new EventEmitter<{ data: HSVAsource; $event: Event }>();

    background!: string;
    pointerTop!: string;
    pointerLeft!: string;

    ngOnChanges() {
        this.background = `hsl(${this.hsl.h}, 100%, 50%)`;
        this.pointerTop = -(this.hsv.v * 100) + 1 + 100 + '%';
        this.pointerLeft = this.hsv.s * 100 + '%';
    }

    handleChange({ top, left, containerHeight, containerWidth, $event }: CoordinatesChangeArgs) {
        if (left < 0) {
            left = 0;
        } else if (left > containerWidth) {
            left = containerWidth;
        } else if (top < 0) {
            top = 0;
        } else if (top > containerHeight) {
            top = containerHeight;
        }

        const saturation = left / containerWidth;
        let bright = -(top / containerHeight) + 1;
        bright = bright > 0 ? bright : 0;
        bright = bright > 1 ? 1 : bright;

        const data: HSVAsource = {
            h: this.hsl.h,
            s: saturation,
            v: bright,
            a: this.hsl.a,
            source: 'hsva',
        };
        this.onChange.emit({ data, $event });
    }

}
