import { HostListener } from '@angular/core';
import { HostBinding } from '@angular/core';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'pano-swatch',
    templateUrl: './pano-swatch.component.html',
    styleUrls: ['./pano-swatch.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanoSwatchComponent {

    @Input()
    @HostBinding('attr.title')
    color!: string;

    @Input()
    style: Record<string, string> = {};

    @Input()
    focusStyle: Record<string, string> = {};

    @Input()
    hoverStyle: Record<string, string> = {};

    @Input()
    activeStyle: Record<string, string> = {};

    @Input()
    active!: boolean;

    hover: boolean = false;

    @Output()
    onClick = new EventEmitter<any>();

    @Output()
    onEnter = new EventEmitter<any>();

    @Output()
    onLeave = new EventEmitter<any>();

    @Output()
    onFocus = new EventEmitter<boolean>();

    @Output()
    onBlur = new EventEmitter<boolean>();

    @HostBinding('style')
    get currentStyles() {

        let styles = {
            background: this.color,
            ...this.style
        };

        if (this.active) {
            Object.assign(styles, this.activeStyle);
        }

        if (this.hover) {
            Object.assign(styles, this.hoverStyle);
        }

        if (this.active) {
            Object.assign(styles, this.activeStyle);
        }

        return styles;
    }

    @HostListener('focus')
    handleFocus() {
        console.log('handleFocus()');
        this.onFocus.emit(true);
    }

    @HostListener('blur')
    handleBlur() {
        console.log('handleBlur()');
        this.onBlur.emit(true);
    }

    @HostListener('mouseenter', ['$event'])
    handleEnter($event: any) {
        console.log('handleEnter()');
        this.onEnter.emit({ hex: this.color, $event });
    }

    @HostListener('mouseleave', ['$event'])
    handleLeave($event: any) {
        console.log('handleLeave()');
        this.onLeave.emit({ hex: this.color, $event });
    }

    @HostListener('click', ['$event'])
    @HostListener('keydown.enter', ['$event'])
    handleClick($event: any) {
        console.log('handleClick()');
        this.onClick.emit({ hex: this.color, $event });
    }
}
