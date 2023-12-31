import { type IMDialogInfos } from 'jimu-core';
export declare function handelDialogInfos(targetDialogId?: string): IMDialogInfos;
export declare function changeCurrentPage(targetPageId: string): void;
export declare function changeCurrentDialog(targetDialogId: string, forceRefresh?: boolean): void;
export * from './lib/setting-components';
