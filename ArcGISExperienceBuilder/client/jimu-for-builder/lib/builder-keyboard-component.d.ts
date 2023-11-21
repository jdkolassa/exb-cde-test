/// <reference types="react" />
import { React, ReactRedux } from 'jimu-core';
import { type IMHistoryState } from '../lib/app-state-history-extension';
interface ExtraProps {
    currentPageId: string;
    stateHistory?: IMHistoryState;
}
declare class BuilderKeyboardComponentInner extends React.PureComponent<ExtraProps, unknown> {
    isSupportKeyboard: () => boolean;
    switchAppMode: () => void;
    undo: () => void;
    redo: () => void;
    onKeyboardTrigger: (event: KeyboardEvent) => void;
    isMac: () => boolean;
    render(): React.JSX.Element;
}
declare const _default: ReactRedux.ConnectedComponent<typeof BuilderKeyboardComponentInner, {
    ref?: React.LegacyRef<BuilderKeyboardComponentInner>;
    key?: React.Key;
    context?: React.Context<ReactRedux.ReactReduxContextValue<any, import("redux").AnyAction>>;
    store?: import("redux").Store<any, import("redux").AnyAction>;
}>;
export default _default;
