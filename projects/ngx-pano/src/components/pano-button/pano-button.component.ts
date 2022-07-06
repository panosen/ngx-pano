import { HostBinding, HostListener, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { PanoButton, PanoButtonSkin, PanoButtonCustomColor, PanoButtonShape, PanoButtonSize, PanoButtonStatus } from './pano-button';

@Component({
    selector: 'pano-button',
    templateUrl: './pano-button.component.html',
    styleUrls: ['./pano-button.component.scss']
})
export class PanoButtonComponent implements PanoButton, OnInit {

    @Output()
    onClick: EventEmitter<Event> = new EventEmitter<Event>();

    @HostListener('click', ['$event'])
    handleClick($event: Event): void {
        $event.stopPropagation();
        this.onClick.emit($event);
    }

    /**
     * Button size: 'tiny' | 'small' | 'large' | 'giant'
     */
    @Input()
    size?: PanoButtonSize;

    /**
     * Button color: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'control'
     */
    @Input()
    color?: PanoButtonCustomColor;

    /**
     * Button Status: 'active' | 'disabled'
     */
    @Input()
    status?: PanoButtonStatus;

    /**
     * Button shapes: 'rectangle' | 'semi-round' | 'round'
     */
    @Input()
    shape?: PanoButtonShape;

    /**
     * Button skin: 'outline' | 'hero'
     */
    @Input()
    @HostBinding('class')
    skin?: PanoButtonSkin;

    ngOnInit(): void {
    }


    // #region size

    @HostBinding('class.size-tiny')
    get tiny() {
        return this.size === 'tiny';
    }

    @HostBinding('class.size-small')
    get small() {
        return this.size === 'small';
    }

    @HostBinding('class.size-large')
    get large() {
        return this.size === 'large';
    }

    @HostBinding('class.size-giant')
    get giant() {
        return this.size === 'giant';
    }

    // #endregion size

    // #region color

    @HostBinding('class.color-primary')
    get primary() {
        return this.color === 'primary';
    }

    @HostBinding('class.color-success')
    get success() {
        return this.color === 'success';
    }

    @HostBinding('class.color-warning')
    get warning() {
        return this.color === 'warning';
    }

    @HostBinding('class.color-danger')
    get danger() {
        return this.color === 'danger';
    }

    @HostBinding('class.color-info')
    get info() {
        return this.color === 'info';
    }

    @HostBinding('class.color-control')
    get control() {
        return this.color === 'control';
    }

    // #endregion color

    @HostBinding('class.status-active')
    get active() {
        return this.status === 'active';
    }

    @HostBinding('class.status-disabled')
    get disabled() {
        return this.status === 'disabled';
    }


    @HostBinding('class.shape-rectangle')
    get rectangle() {
        return this.shape === 'rectangle';
    }

    @HostBinding('class.shape-round')
    get round() {
        return this.shape === 'round';
    }

    @HostBinding('class.shape-semi-round')
    get semiRound() {
        return this.shape === 'semi-round';
    }

}
