import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPanoModule } from '../../projects/ngx-pano/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagesMenuComponent } from './pages-menu/pages-menu.component';
import { PagesAppleComponent } from './pages-apple/pages-apple.component';
import { PagesComponent } from './pages/pages.component';

@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent,
        PagesMenuComponent,
        PagesAppleComponent,
        PagesComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NgxPanoModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
