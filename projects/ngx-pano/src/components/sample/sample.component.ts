import { animate, group, style, transition, trigger } from '@angular/animations';
import { HostBinding } from '@angular/core';
import { Component, OnInit } from '@angular/core';

const qq = trigger('qq', [
    transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('2000ms ease-in', style({ transform: 'translateY(0%)' }))
    ]),
    transition(':leave', [
        animate('2000ms ease-in', style({ transform: 'translateY(-100%)' }))
    ])
]);

const easeInOut = trigger('easeInOut', [
    transition('void => *', [
        style({
            opacity: 0
        }),
        animate("2000ms ease-in-out", style({
            opacity: 1
        }))
    ]),
    transition('* => void', [
        style({
            opacity: 1
        }),
        animate("2000ms ease-in-out", style({
            opacity: 0
        }))
    ])
])

@Component({
    selector: 'sample',
    templateUrl: './sample.component.html',
    styleUrls: ['./sample.component.scss'],
    animations: [qq, easeInOut]
})
export class SampleComponent implements OnInit {

    //@HostBinding('@qq')
    animateSample: boolean = true;

    constructor() { }

    ngOnInit(): void {
    }

}
