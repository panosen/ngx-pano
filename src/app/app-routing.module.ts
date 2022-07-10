import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesAppleComponent } from './pages-apple/pages-apple.component';
import { PagesMenuComponent } from './pages-menu/pages-menu.component';
import { PagesComponent } from './pages/pages.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [{
    path: 'welcome',
    component: WelcomeComponent
}, {
    path: 'pages',
    component: PagesComponent,
    children: [{
        path: 'menu',
        component: PagesMenuComponent
    }, {
        path: 'apple',
        component: PagesAppleComponent
    }]
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
