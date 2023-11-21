/// <reference types="react" />
import { React, type IMThemeVariables } from 'jimu-core';
interface Props {
    theme?: IMThemeVariables;
    children?: React.ReactNode;
}
export declare const defaultFonts: string[];
export declare const loadFontStyleSheet: (font: {
    name: string;
    url: string;
}) => Promise<any>;
export declare const FontLoader: (props: Props) => React.JSX.Element;
export {};
