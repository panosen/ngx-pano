import { EventEmitter, HostBinding, OnChanges, OnDestroy, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { debounceTime, Subscription, tap } from 'rxjs';
import { CoordinatesChangeArgs } from '../directives/pano-coordinates.directive';
import { RGB, RGBA } from '../pano-color-interface';

@Component({
    selector: 'pano-alpha',
    templateUrl: './pano-alpha.component.html',
    styleUrls: ['./pano-alpha.component.scss']
})
export class PanoAlphaComponent implements OnInit, OnChanges, OnDestroy {

    @Input()
    @HostBinding("style.width.px")
    width: string | number = 316;

    @Input()
    @HostBinding("style.height.px")
    height: string | number = 16;

    @Input()
    direction: 'horizontal' | 'vertical' = 'horizontal';

    @Input()
    rgb: RGB = { r: 0, g: 0, b: 0 };

    gradient!: Record<string, string>;

    alpha: number = 1;

    get pointer(): CSSStyleDeclaration {
        if (this.direction == 'horizontal') {
            return {
                left: this.alpha * 100 + '%',
                transform: 'translate(-9px, -2px)'
            } as CSSStyleDeclaration;
        } else {
            return {
                top: this.alpha * 100 + '%',
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
        this.setup();

        this.changes = this.onChange.pipe(debounceTime(200), tap(event => this.onChangeComplete.emit(event))).subscribe();
    }
    ngOnDestroy(): void {
        this.changes.unsubscribe();
    }

    ngOnChanges() {
        this.setup();
    }

    setup() {
        if (this.direction === 'vertical') {
            this.gradient = {
                background: `linear-gradient(to bottom, rgba(${this.rgb.r},${this.rgb.g},${this.rgb.b}, 0) 0%, rgba(${this.rgb.r},${this.rgb.g},${this.rgb.b}, 1) 100%)`,
            };
        } else {
            this.gradient = {
                background: `linear-gradient(to right, rgba(${this.rgb.r},${this.rgb.g},${this.rgb.b}, 0) 0%, rgba(${this.rgb.r},${this.rgb.g},${this.rgb.b}, 1) 100%)`,
            };
        }
    }

    handleCoordinatesChange({ top, left, containerHeight, containerWidth, $event }: CoordinatesChangeArgs) {
        let alpha: number;
        if (this.direction === 'vertical') {
            if (top < 0) {
                alpha = 0;
            } else if (top > containerHeight) {
                alpha = 1;
            } else {
                alpha = Math.round(top * 100 / containerHeight) / 100;
            }
        } else {
            if (left < 0) {
                alpha = 0;
            } else if (left > containerWidth) {
                alpha = 1;
            } else {
                alpha = Math.round(left * 100 / containerWidth) / 100;
            }
        }

        this.alpha = alpha;

        this.onChange.emit({ alpha, $event });
    }
}
