import { PanoComponentOrCustomStatus } from "./pano-component-status";

export interface IPanoIconConfig {
    icon: string;
    pack?: string;
    status?: PanoComponentOrCustomStatus;
    options?: { [name: string]: any };
}
