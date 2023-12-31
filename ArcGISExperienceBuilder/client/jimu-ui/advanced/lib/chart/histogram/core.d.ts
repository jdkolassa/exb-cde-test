/// <reference types="react" />
import { React } from 'jimu-core';
import { type ChartComponentEvents, type UnprivilegedChart } from '../utils';
export interface HistogramCoreProps extends Partial<HTMLArcgisChartsHistogramElement>, ChartComponentEvents {
}
export declare const HistogramCore: React.ForwardRefExoticComponent<HistogramCoreProps & React.RefAttributes<UnprivilegedChart>>;
