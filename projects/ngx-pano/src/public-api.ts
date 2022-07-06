import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { PanoIconComponent } from "./components/pano-icon/pano-icon.component";
import { PanoBadgeComponent } from "./components/pano-badge/pano-badge.component";
import { PanoMenuItemComponent } from "./components/pano-menu-item/pano-menu-item.component";
import { PanoMenuComponent } from "./components/pano-menu/pano-menu.component";
import { PanoFooterComponent } from "./components/pano-footer/pano-footer.component";
import { PanoHeaderComponent } from "./components/pano-header/pano-header.component";
import { PanoButtonComponent } from "./components/pano-button/pano-button.component";
import { PanoAccordionComponent } from "./components/pano-accordion/pano-accordion.component";
import { PanoAccordionItemComponent } from "./components/pano-accordion-item/pano-accordion-item.component";
import { PanoAccordionItemHeadComponent } from "./components/pano-accordion-item-head/pano-accordion-item-head.component";
import { PanoAccordionItemBodyComponent } from "./components/pano-accordion-item-body/pano-accordion-item-body.component";
import { PanoAlertComponent } from "./components/pano-alert/pano-alert.component";
import { PanoActionComponent } from "./components/pano-action/pano-action.component";
import { PanoActionsComponent } from "./components/pano-actions/pano-actions.component";
import { PanoAutocompleteComponent } from "./components/pano-autocomplete/pano-autocomplete.component";
import { PanoButtonGroupComponent } from "./components/pano-button-group/pano-button-group.component";
import { PanoCalendarComponent } from "./components/pano-calendar/pano-calendar.component";
import { PanoCardComponent } from "./components/pano-card/pano-card.component";
import { PanoCardHeadComponent } from "./components/pano-card-head/pano-card-head.component";
import { PanoCardBodyComponent } from "./components/pano-card-body/pano-card-body.component";
import { PanoCheckboxComponent } from "./components/pano-checkbox/pano-checkbox.component";
import { PanoContextMenuComponent } from "./components/pano-context-menu/pano-context-menu.component";
import { PanoDatepickerComponent } from "./components/pano-datepicker/pano-datepicker.component";
import { PanoDialogComponent } from "./components/pano-dialog/pano-dialog.component";
import { PanoFormFieldComponent } from "./components/pano-form-field/pano-form-field.component";
import { PanoRadioComponent } from "./components/pano-radio/pano-radio.component";
import { PanoTimepickerComponent } from "./components/pano-timepicker/pano-timepicker.component";
import { PanoPopoverComponent } from "./components/pano-popover/pano-popover.component";
import { PanoCardFootComponent } from "./components/pano-card-foot/pano-card-foot.component";
import { PanoDrawerComponent } from "./components/pano-drawer/pano-drawer.component";
import { SampleComponent } from "./components/sample/sample.component";
import { PanoLayoutHeadComponent } from "./layouts/pano-layout-head/pano-layout-head.component";
import { PanoLayoutComponent } from "./layouts/pano-layout/pano-layout.component";
import { PanoLayoutColumnComponent } from "./layouts/pano-layout-column/pano-layout-column.component";
import { PanoLayoutSidebarComponent } from "./layouts/pano-layout-sidebar/pano-layout-sidebar.component";
import { PanoAvatarComponent } from "./components/pano-avatar/pano-avatar.component";
import { PanoLayoutMainComponent } from "./layouts/pano-layout-main/pano-layout-main.component";
import { PanoPaletteComponent } from "./components/pano-palette/pano-palette.component";
import { PanoCheckboardComponent } from "./colors/pano-checkboard/pano-checkboard.component";
import { PanoCoordinatesDirective } from "./colors/directives/pano-coordinates.directive";
import { PanoAlphaComponent } from "./colors/pano-alpha/pano-alpha.component";
import { PanoSwatchComponent } from "./colors/pano-swatch/pano-swatch.component";
import { PanoHueComponent } from "./colors/pano-hue/pano-hue.component";
import { PanoEditableInputComponent } from "./colors/pano-editable-input/pano-editable-input.component";
import { PanoSketchPresetComponent } from "./colors/pano-sketch-preset/pano-sketch-preset.component";
import { PanoSaturationComponent } from "./colors/pano-saturation/pano-saturation.component";

const COMPONENTS = [
    PanoButtonComponent,
    PanoDrawerComponent,
    PanoFooterComponent,
    PanoMenuComponent,
    PanoMenuItemComponent,
    PanoBadgeComponent,
    PanoIconComponent,
    PanoHeaderComponent,
    PanoAccordionComponent,
    PanoAccordionItemComponent,
    PanoAccordionItemHeadComponent,
    PanoAccordionItemBodyComponent,
    PanoAlertComponent,
    PanoActionComponent,
    PanoActionsComponent,
    PanoAutocompleteComponent,
    PanoButtonGroupComponent,
    PanoCalendarComponent,
    PanoCardComponent,
    PanoCardHeadComponent,
    PanoCardBodyComponent,
    PanoCardFootComponent,
    PanoCheckboxComponent,
    PanoContextMenuComponent,
    PanoDatepickerComponent,
    PanoDialogComponent,
    PanoFormFieldComponent,
    PanoRadioComponent,
    PanoTimepickerComponent,
    PanoPopoverComponent,
    SampleComponent,
    PanoAvatarComponent,
    PanoPaletteComponent
]

const LAYOUTS = [
    PanoLayoutHeadComponent,
    PanoLayoutComponent,
    PanoLayoutColumnComponent,
    PanoLayoutSidebarComponent,
    PanoLayoutMainComponent
]

const COLORS = [
    PanoCheckboardComponent,
    PanoAlphaComponent,
    PanoSwatchComponent,
    PanoHueComponent,
    PanoEditableInputComponent,
    PanoSketchPresetComponent,
    PanoSaturationComponent
]

const DIRECTIVES = [
    PanoCoordinatesDirective
]

export { RGB, RGBA, HSLA, HSVA, ColorEvent, ColorMode } from './colors/pano-color-interface';

export { CoordinatesChangeArgs } from './colors/directives/pano-coordinates.directive';

export { toState } from './colors/pano-color-method'

export * from './colors/pano-color-method'

export { PanoMenuItem } from './PanoMenuItem'

@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    declarations: [
        ...COMPONENTS,
        ...LAYOUTS,
        ...COLORS,
        ...DIRECTIVES
    ],
    exports: [
        ...COMPONENTS,
        ...LAYOUTS,
        ...COLORS,
        ...DIRECTIVES
    ]
})
export class PanoModule {
}
