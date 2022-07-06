import { animate, state, style, transition, trigger } from '@angular/animations';
import { HostBinding, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { PanoMenuItem } from '../../PanoMenuItem';

const submenu = trigger('submenu', [
    state('open', style({ height: '0px' })),
    state('close', style({ height: '*' })),
    transition('* <=> *', [
        animate('200ms ease-in')
    ])
])

@Component({
    selector: 'pano-menu-item',
    templateUrl: './pano-menu-item.component.html',
    styleUrls: ['./pano-menu-item.component.scss'],
    animations: [submenu]
})
export class PanoMenuItemComponent implements OnInit {

    @Input()
    menuItem?: PanoMenuItem;

    @Input()
    tabSize: number = 0;

    @HostBinding('class.selected')
    get selected() {
        return this.menuItem?.selected;
    }

    mm() {
        return { 'padding-left': 10 + this.tabSize * 30 + 'px' };
    }

    constructor() { }

    ngOnInit(): void {
    }

    toggle(): void {
        if (this.menuItem == undefined) {
            return;
        }
        this.menuItem.expanded = !this.menuItem.expanded;
    }
}
