import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PanoLayoutColumnComponent } from './components/pano-layout-column/pano-layout-column.component';
import { PanoLayoutHeadComponent } from './components/pano-layout-head/pano-layout-head.component';
import { PanoLayoutMainComponent } from './components/pano-layout-main/pano-layout-main.component';
import { PanoLayoutSidebarComponent } from './components/pano-layout-sidebar/pano-layout-sidebar.component';
import { PanoLayoutComponent } from './components/pano-layout/pano-layout.component';
import { PanoIconComponent } from './components/pano-icon/pano-icon.component';
import { PanoMenuComponent } from './components/pano-menu/pano-menu.component';
import { PanoMenuItemComponent } from './components/pano-menu-item/pano-menu-item.component';

const COMPONENTS = [
    PanoLayoutComponent,
    PanoLayoutHeadComponent,
    PanoLayoutMainComponent,
    PanoLayoutColumnComponent,
    PanoLayoutSidebarComponent,
    PanoIconComponent,
    PanoMenuComponent,
    PanoMenuItemComponent
]

@NgModule({
    declarations: [
        ...COMPONENTS
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        ...COMPONENTS
    ]
})
export class NgxPanoModule { }
