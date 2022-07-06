import { ElementRef } from '@angular/core';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'pano-avatar',
    templateUrl: './pano-avatar.component.html',
    styleUrls: ['./pano-avatar.component.scss']
})
export class PanoAvatarComponent implements OnInit, AfterViewInit {

    @Input()
    text?: string;

    @Input()
    icon?: string;

    @Input()
    image?: string;

    @ViewChild('textspan')
    textspan?: ElementRef;

    textstyle?: string;

    constructor(private element: ElementRef) { }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        if (this.textspan == undefined) {
            return;
        }
        const textWidth = this.textspan.nativeElement.clientWidth;
        const avatarWidth = this.element.nativeElement.clientWidth;
        const scale = avatarWidth / (textWidth + 8);

        if (scale < 1) {
            this.textspan.nativeElement.style.transform = `scale(${scale}) translateX(-50%)`;
        }
    }
}
