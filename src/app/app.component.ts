import { Component } from '@angular/core';
import { PanoMenuItem } from '../../projects/ngx-pano/src/public-api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    menuItems?: PanoMenuItem[]

    constructor() { }

    ngOnInit(): void {
        this.menuItems = this.xx();
    }

    xx(): PanoMenuItem[] {

        return [{
            title: 'a1',
            children: [{
                title: 'a2'
            }, {
                title: 'a3'
            }, {
                title: 'a4',
                children: [{
                    title: 'a5',
                    routerLink: '/pages/one'
                }, {
                    title: 'a6'
                }, {
                    title: 'a7'
                }]
            }]
        }, {
            title: 'a8',
            children: [{
                title: 'a9',
                routerLink: '/pages/two'
            }, {
                title: 'a10'
            }, {
                title: 'a11'
            }]
        }, {
            title: 'a3',
            children: [{
                title: 'a12'
            }, {
                title: 'a13'
            }, {
                title: 'a14'
            }]
        }];
    }
}
