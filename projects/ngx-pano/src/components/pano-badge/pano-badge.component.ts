import { Component, Input, OnInit } from '@angular/core';
import { PanoBadge } from '../../pano-badge';
import { PanoBadgePosition } from '../../PanoBadgePosition';

@Component({
    selector: 'pano-badge',
    templateUrl: './pano-badge.component.html',
    styleUrls: ['./pano-badge.component.scss']
})
export class PanoBadgeComponent implements OnInit {

    private static readonly DEFAULT_POSITION: PanoBadgePosition = 'top right';

    @Input()
    badge?: PanoBadge;

    @Input()
    text: string = ''

    @Input()
    dotMode: boolean = false;

    constructor() { }

    ngOnInit(): void {
    }

}
