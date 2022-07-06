import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Shape } from '../pano-color-interface';

@Component({
    selector: 'pano-sketch-preset',
    templateUrl: './pano-sketch-preset.component.html',
    styleUrls: ['./pano-sketch-preset.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false
})
export class PanoSketchPresetComponent {

    @Input()
    colors!: string[];

    @Output()
    onClick = new EventEmitter<any>();

    @Output()
    onSwatchHover = new EventEmitter<any>();

    swatchStyle = {
        borderRadius: '3px',
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15)',
    };

    handleClick({ hex, $event }: { hex: any, $event: any }) {
        this.onClick.emit({ hex, $event });
    }

    normalizeValue(val: string | Shape) {
        if (typeof val === 'string') {
            return { color: val };
        }
        return val;
    }

    focusStyle(val: string | Shape) {
        const c = this.normalizeValue(val);
        return {
            boxShadow: `inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px ${c.color}`,
        };
    }


    panoSwatchHover($event: any): void {
        console.log(11);
        this.onSwatchHover.emit($event);
    }
}
