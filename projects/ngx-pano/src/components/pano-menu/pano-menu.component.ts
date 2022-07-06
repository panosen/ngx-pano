import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { PanoMenuItem } from '../../PanoMenuItem';

@Component({
    selector: 'pano-menu',
    templateUrl: './pano-menu.component.html',
    styleUrls: ['./pano-menu.component.scss']
})
export class PanoMenuComponent implements OnInit {

    @Input()
    menuItems?: PanoMenuItem[]

    constructor() { }

    ngOnInit(): void {
    }

}
