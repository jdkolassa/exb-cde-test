import { type MapViewManager } from '../../mapview-manager';
import { type IMDataSourceInfo, type DataSource } from 'jimu-core';
import { type MapDataSource } from '../../data-sources/arcgis-data-source-interface';
/**
 * `JimuLayerViewConstructorOptions` is used in the constructor of the `JimuLayerView`, to initiate a `JimuLayerView` instance.
 */
export interface JimuLayerViewConstructorOptions {
    id: string;
    /**
     * The layer type, see [ArcGIS Maps SDK for JavaScript Layer type]]((https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#type))
     */
    type: string;
    /**
     * The layerDataSourceId is the corresponding datasource id.
     */
    layerDataSourceId: string;
    /**
     * The jimuMapViewId is the corresponding JimuMapView instance id.
     */
    jimuMapViewId: string;
    /** The jimuLayerId is a string that connects the layer.id in the layer tree with "-" */
    jimuLayerId: string;
    /**
     * The layer is the corresponding layer object in ArcGIS JavaScript API View.map.
     */
    layer: any;
    /** @ignore */
    parentJimuLayerViewId: string;
    /** Pass MapViewManager in to avoid circular dependency. */
    mapViewManager: MapViewManager;
    index: number;
    /**
     * true means the JimuLayerView is created from runtime. e.g. The JimuLayerView is created by AddData widget at runtime. false means the layer is a builtin layer of WebMap or WebScene.
     */
    fromRuntime: boolean;
}
/**
 * `JimuLayerView` is a wrapper class for ArcGIS Maps SDK for JavaScript [`LayerView`](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-layers-LayerView.html).
 * It is created by a `JimuMapView` using a layer [`DataSource`](https://developers.arcgis.com/experience-builder/api-reference/jimu-core/DataSource).
 *
 * A layer view may have a related data source. If it has the data source, the feature selection will be synced to data source selection and will use the data source URL params.
 * If it does not have the data source, the feature selection will use the feature_selection URL param.
 */
export declare class JimuLayerView {
    /**
     * The id of the JimuLayerView instance. It connects the JimuMapView.id and the JimuLayerId with "-"
     */
    id: string;
    /**
     * The `view` is the [ArcGIS Maps SDK for JavaScript `LayerView`](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-layers-LayerView.html).
     */
    view: __esri.LayerView;
    /**
     * The layer type, see [ArcGIS Maps SDK for JavaScript Layer type]]((https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#type))
     */
    type: string;
    /**
     * The layerDataSourceId is the corresponding datasource id.
     * This id always has value, but the layer data source may not be created.
     */
    layerDataSourceId: string;
    /**
     * The jimuMapViewId is the corresponding JimuMapView instance id.
     */
    jimuMapViewId: string;
    /** @ignore */
    jimuLayerId: string;
    /**
     * The layer is the corresponding layer object in ArcGIS JavaScript API View.map.
     */
    layer: any;
    /** @ignore */
    parentJimuLayerViewId: string;
    /**
     * The order defined in the webmap
     */
    index: number;
    /**
     * true means the JimuLayerView is created from runtime. e.g. The JimuLayerView is created by AddData widget at runtime. false means the layer is a builtin layer of WebMap or WebScene.
     */
    fromRuntime: boolean;
    isLoaded: boolean;
    /** @ignore */
    private dataSourceInfoObserver;
    /** @ignore */
    private dataSourceJsonObserver;
    /** @ignore */
    private runTimeIsHidden;
    protected readonly mapViewManager: MapViewManager;
    private removeableByMapTool;
    constructor(options: JimuLayerViewConstructorOptions);
    ready(): Promise<this>;
    /** Return the cooresponding data source of the layer */
    getLayerDataSource(): DataSource;
    createLayerDataSource(): Promise<DataSource>;
    /**
     * Get parent JimuLayerView.
     */
    getParentJimuLayerView(): JimuLayerView;
    /**
     * Whether the layer data source is used by widgets.
     * For not used data source, the data source will not be created.
     */
    isLayerDataSourceUsed(): boolean;
    private isLayerUsedByMessage;
    private isLayerUsedByFilter;
    /**
     * If any layer in the layer tree is invisible, the layer is considered invisible
     */
    isLayerVisible(): boolean;
    /**
     * Return the MapView or SceneView of the layer view.
     */
    getMapSceneView(): __esri.MapView | __esri.SceneView;
    getMapDataSource(): MapDataSource;
    /** @ignore */
    protected onLayerDataSourceInfoChange(preDsInfo: IMDataSourceInfo, dsInfo: IMDataSourceInfo): void;
    getJimuMapView(): import("jimu-arcgis").JimuMapView;
    /**
     * Destroy the JimuLayerView instance.
     */
    destroy(): void;
    private getAppConfig;
    private initListenToDataSourceJsonChange;
    private initListenToDataSourceInfoChange;
    /** @ignore */
    private onLayerDatasourceJsonChange;
    protected getMapWidgetId(): string;
    /**
     * @ignore
     * Update removeableByMapTool property. true means the layer can be removed by map clear-data tool.
     * @param value
     */
    setRemoveableByMapTool(value: boolean): void;
}
