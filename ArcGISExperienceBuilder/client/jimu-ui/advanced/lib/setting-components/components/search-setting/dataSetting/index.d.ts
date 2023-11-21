/** @jsx jsx */
import { jsx, type UseDataSource, type ImmutableArray, type DataSourceJson } from 'jimu-core';
import { type SearchDataConfig, SearchDataType } from '../type/type';
interface DSInWidgetJson {
    isWidgetJsonDsChanged: boolean;
    dsInWidgetJson: any;
}
interface SearchDataSettingProps {
    /**
     * Widget id
    */
    id: string;
    datasourceConfig?: ImmutableArray<SearchDataConfig>;
    useDataSources?: ImmutableArray<UseDataSource>;
    /**
     * Portal url of current app
    */
    portalUrl?: string;
    /**
     * The type of data service
     * @param Both Display all data setting
     * @param GeocodeService Only display data setting of geocode service
     * @param FeatureService Only display data setting of feature service
    */
    searchDataSettingType?: SearchDataType;
    /**
     * Whether to create outputds by geocode service
    */
    createOutputDs?: boolean;
    /**
     * Whether to hide icon settings
     */
    hideIconSetting?: boolean;
    /**
     * Enable filtering when searching for layer sources
     */
    enableFiltering?: boolean;
    /**
     * Callback fired when datasourceConfig change.
     * @event
    */
    onSettingChange?: (datasourceConfig: ImmutableArray<SearchDataConfig>, dsInWidgetJson?: DSInWidgetJson) => void;
    /**
     * Callback fired when enable filtering change.
     * @event
    */
    onEnableFilteringChange?: (enable: boolean) => void;
    /**
     * The method of create output datasources
     * @event
    */
    onOutputDsSettingChange?: (dataSourceJson: DataSourceJson[], datasourceConfig: ImmutableArray<SearchDataConfig>, dsInWidgetJson?: DSInWidgetJson) => void;
}
export declare const SearchDataSetting: (props: SearchDataSettingProps) => jsx.JSX.Element;
export {};
