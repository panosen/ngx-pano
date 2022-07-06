import { animate, animateChild, query, style, transition, trigger } from '@angular/animations';
import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { HostBinding } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DrawerPlacement, PanoDrawer, PanoDrawerStyle } from './pano-drawer';

const ngIfAnimation = trigger('ngIfAnimation', [
    transition(':enter, :leave', [
        query('@*', animateChild())
    ])
]);

const easeInOut = trigger('easeInOut', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate("200ms ease-in-out", style({ opacity: 1 }))
    ]),
    transition(':leave', [
        style({ opacity: 1 }),
        animate("200ms ease-in-out", style({ opacity: 0 }))
    ])
])

const slideInOut = trigger('slideInOut', [
    transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate("200ms ease-in-out", style({ transform: 'translateX(0%)' }))
    ]),
    transition(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate("200ms ease-in-out", style({ transform: 'translateX(100%)' }))
    ])
])

@Component({
    selector: 'pano-drawer',
    templateUrl: './pano-drawer.component.html',
    styleUrls: ['./pano-drawer.component.scss'],
    animations: [ngIfAnimation, easeInOut, slideInOut]
})
export class PanoDrawerComponent implements OnInit, PanoDrawer {

    @HostBinding('@ngIfAnimation')
    ok: boolean = true;

    @Input()
    open?: boolean = false;

    /**
     * 标题
     */
    title?: string;

    /**
     * 是否显示遮罩层
     */
    @Input()
    mask?: boolean = true;

    /**
     * 点击遮罩层是否可以关闭
     */
    @Input()
    maskClosable?: boolean = true;

    /**
     * 是否展示关闭按钮
     */
    @Input()
    closable?: boolean;

    /**
     * 位置: 'top' | 'right' | 'bottom' | 'left'
     */
    @Input()
    placement?: DrawerPlacement = 'right';

    /**
     * 宽度
     */
    @Input()
    width: number = 250;

    /**
     * 高度
     */
    @Input()
    height: number = 250;

    @Output()
    onClosed: EventEmitter<string> = new EventEmitter<string>();

    @Output()
    onDismissed: EventEmitter<string> = new EventEmitter<string>();

    panoDrawerContentStyle() {
        let style: PanoDrawerStyle = {};
        switch (this.placement) {
            case 'top':
                style.top = 0;
                style.height = this.height + 'px';
                break;
            case 'bottom':
                style.bottom = 0;
                style.height = this.height + 'px';
                break;
            case 'left':
                style.left = 0;
                style.width = this.width + 'px';
                break;
            case 'right':
                style.right = 0;
                style.width = this.width + 'px';
                break;
            default:
                break;
        }
        return style;
    }

    constructor() { }

    ngOnInit(): void {
    }


    clickClose(): void {
        console.log('drawer: clickClose()');
        this.onClosed.emit('zhang');

    }

    clickDismiss(): void {
        console.log('drawer: clickDismiss()');
        this.onDismissed.emit('san');
    }
}
