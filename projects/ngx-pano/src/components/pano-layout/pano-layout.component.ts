import { AfterViewInit, HostListener, OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pano-layout',
  templateUrl: './pano-layout.component.html',
  styleUrls: ['./pano-layout.component.css']
})
export class PanoLayoutComponent implements OnInit, AfterViewInit, OnDestroy {

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
