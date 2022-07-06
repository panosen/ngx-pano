export type PanoButtonSize = 'tiny' | 'small' | 'large' | 'giant';

export type PanoButtonColor = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'control';

export type PanoButtonCustomColor = PanoButtonColor | string;

export type PanoButtonStatus = 'active' | 'disabled';

export type PanoButtonShape = 'rectangle' | 'semi-round' | 'round';

export type PanoButtonSkin = 'outline' | 'hero';

export interface PanoButton {

    /**
     * Button size: 'tiny' | 'small' | 'large' | 'giant'
     */
    size?: PanoButtonSize;

    /**
     * Button color: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'control'
     */
    color?: PanoButtonCustomColor;

    /**
     * Button Status: 'active' | 'disabled'
     */
    status?: PanoButtonStatus;

    /**
     * Button shapes: 'rectangle' | 'semi-round' | 'round'
     */
    shape?: PanoButtonShape;

    /**
     * Button skin: 'outline' | 'hero'
     */
    appearance?: PanoButtonSkin;
}
