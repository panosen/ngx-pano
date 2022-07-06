import { NgModule } from '@angular/core';
import { PanoLayoutComponent } from './components/pano-layout/pano-layout.component';

const COMPONENTS = [
    PanoLayoutComponent
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
