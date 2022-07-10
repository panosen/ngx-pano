import { animate, state, style, transition, trigger } from '@angular/animations';
import { EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

export class PanoMenuItem {
    title?: string;

    selected?: boolean;

    expanded?: boolean;

    children?: PanoMenuItem[];

    routerLink?: string;
}


const submenu = trigger('submenu', [
    state('open', style({ height: '*' })),
    state('close', style({ height: '0px' })),
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

    @Output()
    onActive: EventEmitter<string> = new EventEmitter<string>();

    get titleStyle(): CSSStyleDeclaration {
        return { 'paddingLeft': 10 + this.tabSize * 30 + 'px' } as CSSStyleDeclaration;
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

    onRouterLinkActiveChange(event: any): void {
        if (this.menuItem == undefined) {
            return;
        }
        if (event) {
            this.onActive.emit(this.menuItem.routerLink);
        }
    }

    routerLinkChangeHandler(routerLink: string): void {
        this.onActive.emit(routerLink);
    }
}
