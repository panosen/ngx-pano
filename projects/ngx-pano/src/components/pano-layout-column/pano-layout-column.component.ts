import { HostBinding, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pano-layout-column',
    templateUrl: './pano-layout-column.component.html',
    styleUrls: ['./pano-layout-column.component.scss']
})
export class PanoLayoutColumnComponent implements OnInit {

    @Input()
    set span(val: number) {
        this.panoSpan = 'pano-col-' + val;
    }

    @HostBinding('class')
    panoSpan?: string;

    constructor() { }

    ngOnInit(): void {
    }

}
