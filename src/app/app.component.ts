import { Component, OnInit } from '@angular/core';
import { PanoMenuItem } from '../../projects/ngx-pano/src/public-api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


    menuItems?: PanoMenuItem[]

    constructor() { }

    ngOnInit(): void {
        this.menuItems = this.loadMenuItems();
    }

    loadMenuItems(): PanoMenuItem[] {

        return [{
            title: 'Welcome',
            routerLink: '/welcome'
        }, {
            title: 'Pages',
            children: [{
                title: 'Menu',
                routerLink: '/pages/menu'
            }, {
                title: 'Apple',
                routerLink: '/pages/apple'
            }]
        }];
    }
}
