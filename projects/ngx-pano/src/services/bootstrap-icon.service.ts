import { Injectable } from '@angular/core';

import { BootstrapIcon, BootstrapIconName } from 'pano-bootstrap-icons'

import { bootstrapChevronRight } from 'pano-bootstrap-icons/icons/bootstrap-chevron-right.icon'
import { bootstrapChevronLeft } from 'pano-bootstrap-icons/icons/bootstrap-chevron-left.icon'
import { bootstrapChevronUp } from 'pano-bootstrap-icons/icons/bootstrap-chevron-up.icon'
import { bootstrapChevronDown } from 'pano-bootstrap-icons/icons/bootstrap-chevron-down.icon'

const ICONS = [bootstrapChevronDown, bootstrapChevronRight, bootstrapChevronLeft, bootstrapChevronUp];

@Injectable({
    providedIn: 'root'
})
export class BootstrapIconService {

    private PANO_ICONS: Map<BootstrapIconName, string> = new Map();

    constructor() {
        ICONS.forEach((icon: BootstrapIcon) => {
            this.PANO_ICONS.set(icon.name, icon.data);
        });
    }

    get(name: BootstrapIconName) {
        return this.PANO_ICONS.get(name);
    }
}
