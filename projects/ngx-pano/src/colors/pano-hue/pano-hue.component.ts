import { ChangeDetectionStrategy, Component, Input, OnInit, EventEmitter, HostBinding, OnDestroy, Output } from '@angular/core';
import { debounceTime, Subscription, tap } from 'rxjs';
import { CoordinatesChangeArgs } from '../directives/pano-coordinates.directive';

@Component({
    selector: 'pano-hue',
    templateUrl: './pano-hue.component.html',
    styleUrls: ['./pano-hue.component.scss'],
    preserveWhitespaces: false,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanoHueComponent implements OnInit, OnDestroy {

    @Input()
    @HostBinding("style.width.px")
    width: string | number = 316;

    @Input()
    @HostBinding("style.height.px")
    height: string | number = 16;

    @Input()
    direction: 'horizontal' | 'vertical' = 'horizontal';

    @HostBinding('class')
    get hostClass() {
        return `color-hue-${this.direction}`;
    }

    gradient!: Record<string, string>;

    hue: number = 1;

    get pointer(): CSSStyleDeclaration {
        if (this.direction == 'horizontal') {
            return {
                left: `${this.hue * 100 / 360}%`,
                transform: 'translate(-9px, -2px)'
            } as CSSStyleDeclaration;
        } else {
            return {
                top: `${100 - (this.hue * 100 / 360)}%`,
                transform: 'translate(-2px, -9px)'
            } as CSSStyleDeclaration;
        }
    };

    changes!: Subscription;

    @Output()
    onChange = new EventEmitter<any>();

    @Output()
    onChangeComplete = new EventEmitter<any>();

    constructor() { }

    ngOnInit(): void {
        this.changes = this.onChange.pipe(debounceTime(200), tap(event => this.onChangeComplete.emit(event))).subscribe();
    }
    ngOnDestroy(): void {
        this.changes.unsubscribe();
    }

    handleCoordinatesChange({ top, left, containerHeight, containerWidth, $event }: CoordinatesChangeArgs) {
        let hue: number;
        if (this.direction === 'vertical') {
            if (top < 0) {
                hue = 359;
            } else if (top > containerHeight) {
                hue = 0;
            } else {
                hue = 360 * (1 - top / containerHeight) / 100;
            }
        } else {
            if (left < 0) {
                hue = 0;
            } else if (left > containerWidth) {
                hue = 359;
            } else {
                hue = 360 * left / containerWidth;
            }
        }

        this.hue = hue;

        this.onChange.emit({ hue, $event });
    }
}
