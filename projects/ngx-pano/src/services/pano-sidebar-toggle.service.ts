import { Injectable } from '@angular/core';

export type PanoSidebarState = 'mini' | 'normal'

@Injectable({
    providedIn: 'root'
})
export class PanoSidebarToggleService {

    private _state: PanoSidebarState = 'normal';

    sidebarState(): PanoSidebarState {
        return this._state;
    }

    constructor() { }

    toggle(): void {
        switch (this._state) {
            case 'normal':
                this._state = 'mini';
                break;
            case 'mini':
                this._state = 'normal';
                break;
            default:
                break;
        }
    }

}
