import { NgModule } from '@angular/core';

import { PanoLayoutColumnComponent } from './components/pano-layout-column/pano-layout-column.component';
import { PanoLayoutHeadComponent } from './components/pano-layout-head/pano-layout-head.component';
import { PanoLayoutMainComponent } from './components/pano-layout-main/pano-layout-main.component';
import { PanoLayoutSidebarComponent } from './components/pano-layout-sidebar/pano-layout-sidebar.component';
import { PanoLayoutComponent } from './components/pano-layout/pano-layout.component';

const COMPONENTS = [
    PanoLayoutComponent,
    PanoLayoutHeadComponent,
    PanoLayoutMainComponent,
    PanoLayoutColumnComponent,
    PanoLayoutSidebarComponent
]

@NgModule({
    declarations: [
        ...COMPONENTS
    ],
    imports: [
    ],
    exports: [
        ...COMPONENTS
    ]
})
export class NgxPanoModule { }
