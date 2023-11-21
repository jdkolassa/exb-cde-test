/// <reference types="react" />
/// <reference types="seamless-immutable" />
/** @jsx jsx */
import { React, type IMDataSourceJson, ReactRedux, type AllDataSourceTypes } from 'jimu-core';
export declare const DataSourceList: import("@emotion/styled").StyledComponent<{
    className?: string;
    onChange?: (useDataSources: import("jimu-core").UseDataSource[]) => void;
    forwardedRef?: React.Ref<any>;
    useDataSources?: Readonly<import("seamless-immutable").ImmutableArray.Remaining<import("jimu-core").UseDataSource>> & import("seamless-immutable").ImmutableArray.Additions<import("jimu-core").UseDataSource> & import("seamless-immutable").ImmutableArray.Overrides<import("jimu-core").UseDataSource> & import("seamless-immutable").ImmutableArray.ReadOnlyIndexer<import("jimu-core").UseDataSource>;
    widgetId?: string;
    types: Readonly<import("seamless-immutable").ImmutableArray.Remaining<AllDataSourceTypes>> & import("seamless-immutable").ImmutableArray.Additions<AllDataSourceTypes> & import("seamless-immutable").ImmutableArray.Overrides<AllDataSourceTypes> & import("seamless-immutable").ImmutableArray.ReadOnlyIndexer<AllDataSourceTypes>;
    isMultiple?: boolean;
    disableRemove?: boolean;
    isDataSourceInited: boolean;
    onCloseClick?: () => void;
    changeInitStatus?: (isInitialized: boolean) => void;
    disableSelection?: boolean;
    fromRootDsIds?: Readonly<import("seamless-immutable").ImmutableArray.Remaining<string>> & import("seamless-immutable").ImmutableArray.Additions<string> & import("seamless-immutable").ImmutableArray.Overrides<string> & import("seamless-immutable").ImmutableArray.ReadOnlyIndexer<string>;
    fromDsIds?: Readonly<import("seamless-immutable").ImmutableArray.Remaining<string>> & import("seamless-immutable").ImmutableArray.Additions<string> & import("seamless-immutable").ImmutableArray.Overrides<string> & import("seamless-immutable").ImmutableArray.ReadOnlyIndexer<string>;
    hideDs?: (dsJson: IMDataSourceJson) => boolean;
    hideHeader?: boolean;
    hideTypeDropdown?: boolean;
    hideAllOptionOfTypeDropdown?: boolean;
    hideAddDataButton?: boolean;
    disableAddData?: boolean;
    hideTabs?: Readonly<import("seamless-immutable").ImmutableArray.Remaining<"ADDED" | "OUTPUT">> & import("seamless-immutable").ImmutableArray.Additions<"ADDED" | "OUTPUT"> & import("seamless-immutable").ImmutableArray.Overrides<"ADDED" | "OUTPUT"> & import("seamless-immutable").ImmutableArray.ReadOnlyIndexer<"ADDED" | "OUTPUT">;
    enableToSelectOutputDsFromSelf?: boolean;
    onClickDisabledDsItem?: () => void;
    context?: React.Context<ReactRedux.ReactReduxContextValue<any, import("redux").AnyAction>>;
    store?: import("redux").Store<any, import("redux").AnyAction>;
}, {}, {}>;
