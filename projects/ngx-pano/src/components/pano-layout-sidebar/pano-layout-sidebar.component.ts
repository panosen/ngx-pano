import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, OnInit } from '@angular/core';
import { PanoSidebarToggleService } from '../../services/pano-sidebar-toggle.service';

const resize = trigger('resize', [
    state('normal', style({ width: '220px' })),
    state('mini', style({ width: '62px' })),
    transition('* <=> *', [
        animate('200ms ease-in')
    ])
])

@Component({
    selector: 'pano-layout-sidebar',
    templateUrl: './pano-layout-sidebar.component.html',
    styleUrls: ['./pano-layout-sidebar.component.scss'],
    animations: [resize]
})
export class PanoLayoutSidebarComponent implements OnInit {

    @HostBinding("@resize")
    get state(): string {
        return this.panoSidebarToggleService._state;
    }

    constructor(private panoSidebarToggleService: PanoSidebarToggleService) { }

    ngOnInit(): void {
    }


    toggle(): void {
        this.panoSidebarToggleService.toggle();
    }

}
