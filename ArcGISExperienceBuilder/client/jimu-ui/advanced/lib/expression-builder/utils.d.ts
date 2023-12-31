import { type ExpressionPart, type IntlShape, type UseDataSource, type ImmutableArray } from 'jimu-core';
import { ExpressionInputType } from './types';
export declare function getWhetherUseDssMatchExpDss(part: ExpressionPart, useDataSources: ImmutableArray<UseDataSource>): boolean;
export declare function getExpressionFromString(from: ExpressionInputType, intl: IntlShape): string;
