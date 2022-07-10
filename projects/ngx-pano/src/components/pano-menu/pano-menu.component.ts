import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PanoMenuItem } from '../pano-menu-item/pano-menu-item.component';

@Component({
    selector: 'pano-menu',
    templateUrl: './pano-menu.component.html',
    styleUrls: ['./pano-menu.component.scss']
})
export class PanoMenuComponent implements OnChanges {

    @Input()
    menuItems?: PanoMenuItem[];

    private activeRouterLink?: string;

    constructor() { }

    ngOnChanges(changes: SimpleChanges): void {
        this.onActiveRouterLinkChange();
    }

    routerLinkChangeHandler(routerLink: string): void {
        this.activeRouterLink = routerLink;
        this.onActiveRouterLinkChange();
    }

    onActiveRouterLinkChange(): void {
        if (this.activeRouterLink == undefined) {
            return;
        }
        if (this.menuItems == undefined) {
            return;
        }

        var map = this.buildMapOfArray(this.menuItems);
        map.forEach((value, key) => {
            if (key.routerLink == this.activeRouterLink) {
                for (var k = 0; k < value.length - 1; k++) {
                    value[k].expanded = true;
                }
            }
        });
    }


    buildMapOfArray(menuItems: PanoMenuItem[]): Map<PanoMenuItem, Array<PanoMenuItem>> {
        var returnValue: Map<PanoMenuItem, Array<PanoMenuItem>> = new Map<PanoMenuItem, Array<PanoMenuItem>>();

        for (var i = 0; i < menuItems.length; i++) {
            var temp = this.buildMapOfSingle(menuItems[i]);

            temp.forEach((value, key) => {
                returnValue.set(key, value,);
            });
        }

        return returnValue;
    }


    buildMapOfSingle(menuItem: PanoMenuItem): Map<PanoMenuItem, Array<PanoMenuItem>> {
        var returnValue: Map<PanoMenuItem, Array<PanoMenuItem>> = new Map<PanoMenuItem, Array<PanoMenuItem>>();

        var list: Map<PanoMenuItem, Array<PanoMenuItem>> = new Map<PanoMenuItem, Array<PanoMenuItem>>();

        this.buildMap(menuItem, list);

        list.forEach((value, key) => {
            if (key.children != undefined && key.children.length > 0) {
                return;
            }
            returnValue.set(key, value);
        });

        return returnValue;
    }

    buildMap(menuItem: PanoMenuItem, map: Map<PanoMenuItem, Array<PanoMenuItem>>): void {
        if (!map.has(menuItem)) {
            var array = new Array<PanoMenuItem>();
            array.push(menuItem);
            map.set(menuItem, array);
        }
        if (menuItem.children == undefined || menuItem.children.length == 0) {
            return;
        }
        for (var i = 0; i < menuItem.children.length; i++) {
            var item = menuItem.children[i];
            var list = new Array<PanoMenuItem>();

            var vv = map.get(menuItem);
            if (vv != undefined) {
                list.push(...vv);
            }

            list.push(item);
            map.set(item, list);

            this.buildMap(item, map);
        }
    }
}
