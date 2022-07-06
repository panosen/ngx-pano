import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { PanoAlert, PanoAlertColor, PanoAlertSize } from './pano-alert';

@Component({
    selector: 'pano-alert',
    templateUrl: './pano-alert.component.html',
    styleUrls: ['./pano-alert.component.scss']
})
export class PanoAlertComponent implements OnInit, PanoAlert {

    @Input()
    size: '' | PanoAlertSize = '';

    @Input()
    color: string = 'basic';

    @Input()
    accent: '' | PanoAlertColor = '';

    @Input()
    outline: '' | PanoAlertColor = '';

    @Input()
    @HostBinding('class.closable')
    closable: boolean = true;

    @Output()
    close: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit(): void {
    }

    onClose(): void {
        this.close.emit();
    }
}
