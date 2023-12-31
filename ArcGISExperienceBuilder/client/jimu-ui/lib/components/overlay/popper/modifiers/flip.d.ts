import { type Boundary, type Modifier, type Padding, type Placement, type RootBoundary } from '@popperjs/core';
export interface Options {
    mainAxis: boolean;
    altAxis: boolean;
    fallbackPlacements: Placement[];
    padding: Padding;
    boundary: Boundary;
    rootBoundary: RootBoundary;
    altBoundary: boolean;
    flipVariations: boolean;
    allowedAutoPlacements: Placement[];
    useClosestVerticalPlacement?: boolean;
}
export type FlipModifier = Modifier<'flip', Options>;
/**
 * Overwrite the popper modifier `flip`
 * @param fallbackPlacements
 */
export declare const getCustomFlipModifier: (options?: Partial<Options>) => FlipModifier;
