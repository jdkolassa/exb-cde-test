import { type ThemeVariables, type ImmutableObject } from 'jimu-core';
export declare const createTheme: (overwrite?: Partial<ThemeVariables>) => ThemeVariables;
export declare const getCustomTheme: (inputCustomTheme?: ImmutableObject<Partial<ThemeVariables>>) => Partial<ThemeVariables>;
export declare const getMixedThemeVariables: (overwrite?: ImmutableObject<Partial<ThemeVariables>>, customTheme?: ImmutableObject<Partial<ThemeVariables>>) => Partial<ThemeVariables>;
export declare const createThemeVariables: (overwrite?: ImmutableObject<Partial<ThemeVariables>>, inputCustomTheme?: ImmutableObject<Partial<ThemeVariables>>) => ThemeVariables;
