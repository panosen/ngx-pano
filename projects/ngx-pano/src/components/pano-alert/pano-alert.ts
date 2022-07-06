export type PanoAlertSize = 'tiny' | 'small' | 'medium' | 'large' | 'giant';

export type PanoAlertColor = 'basic' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'control';

export type PanoAlertCustomColor = PanoAlertColor | string;

export interface PanoAlert {

    /**
     * Alert size, available sizes:
     * `tiny`, `small`, `medium`, `large`, `giant`
     * Unset by default.
     */
    size: '' | PanoAlertSize;

    /**
     * Alert status (adds specific styles):
     * `basic` (default), `primary`, `success`, `info`, `warning`, `danger`, `control`.
     */
    color: PanoAlertCustomColor;

    /**
     * Alert accent (color of the top border):
     * `basic`, `primary`, `success`, `info`, `warning`, `danger`, `control`.
     * Unset by default.
     */
    accent: '' | PanoAlertColor;

    /**
     * Alert outline (color of the border):
     * `basic`, `primary`, `success`, `info`, `warning`, `danger`, `control`.
     * Unset by default.
     */
    outline: '' | PanoAlertColor;
}
