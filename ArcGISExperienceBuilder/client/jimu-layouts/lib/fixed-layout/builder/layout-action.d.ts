import { type LayoutInfo } from 'jimu-core';
export declare function bringForward(layoutInfo: LayoutInfo): void;
export declare function bringToFront(layoutInfo: LayoutInfo): void;
export declare function sendBackward(layoutInfo: LayoutInfo): void;
export declare function sendToBack(layoutInfo: LayoutInfo): void;
export declare function toggleLockLayout(layoutInfo: LayoutInfo): void;
export declare function alignTo(layoutInfo: LayoutInfo, prop: 'top' | 'bottom' | 'left' | 'right'): void;
export declare function alignFullWidth(layoutInfo: LayoutInfo): void;
export declare function alignVerticalCenter(layoutInfo: LayoutInfo): void;
export declare function alignHorizontalCenter(layoutInfo: LayoutInfo): void;
export declare function alignFullHeight(layoutInfo: LayoutInfo): void;
export declare function alignFullSize(layoutInfo: LayoutInfo): void;