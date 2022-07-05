import { AfterViewInit, ElementRef, HostBinding, HostListener, OnDestroy, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pano-layout',
    templateUrl: './pano-layout.component.html',
    styleUrls: ['./pano-layout.component.css']
})
export class PanoLayoutComponent implements OnInit, AfterViewInit, OnDestroy {

    @HostBinding('class.window-mode')
    windowModeValue: boolean = false;

    @HostBinding('class.with-scroll')
    withScrollValue: boolean = false;

    @HostBinding('class.with-subheader')
    withSubheader: boolean = false;

    @ViewChild('scrollableContainer', { read: ElementRef, static: true })
    scrollableContainerRef!: ElementRef<HTMLElement>;

    @ViewChild('layoutContainer', { read: ElementRef })
    layoutContainerRef!: ElementRef<HTMLElement>;

    constructor() { }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        console.log('ngOnDestroy()');
    }

    ngAfterViewInit(): void {
        //console.log('ngAfterViewInit()');
    }

    @HostListener('window.scroll', ['$event'])
    onScroll($event: Event) {
        //console.log($event);
    }

    @HostListener('window:resize', ['$event'])
    onResize($event: Event) {
        //console.log($event);
        // this.themeService.changeWindowWidth(event.target.innerWidth);
    }
}
