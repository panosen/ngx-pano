export type DrawerPlacement = 'top' | 'right' | 'bottom' | 'left';

export interface PanoDrawerStyle {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
    width?: string;
    height?: string;
}

export interface PanoDrawer {

    /**
     * 标题
     */
    title?: string;

    /**
     * 是否显示遮罩层
     */
    mask?: boolean;

    /**
     * 点击遮罩层是否可以关闭
     */
    maskClosable?: boolean;

    /**
     * 是否展示关闭按钮
     */
    closable?: boolean;

    /**
     * 位置: 'top' | 'right' | 'bottom' | 'left'
     */
    placement?: DrawerPlacement;

    /**
     * 宽度
     */
    width: number;

    /**
     * 高度
     */
    height: number;
}
