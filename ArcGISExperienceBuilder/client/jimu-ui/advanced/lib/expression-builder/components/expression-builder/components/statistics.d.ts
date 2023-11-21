/// <reference types="react" />
import { React, type ImmutableArray, ExpressionFunctions, type Expression, DataSourceManager, type FieldSchema, type ExpressionPart, type IntlShape, type ImmutableObject, type ExpressionPartGroup, type UseDataSource, type IMUseDataSource } from 'jimu-core';
interface Props {
    useDataSources: ImmutableArray<UseDataSource>;
    expression: Expression | ImmutableObject<Expression>;
    intl: IntlShape;
    widgetId?: string;
    onChange: (expression: Expression) => void;
}
interface State {
    customExpName?: string;
    selectedDsId: string;
    selectedJimuFieldName: string;
    selectedFunction: ExpressionFunctions;
    MainDataAndViewSelector: any;
    DataViewPriority: any;
}
export default class StatisticsTab extends React.PureComponent<Props, State> {
    dsManager: DataSourceManager;
    __unmount: boolean;
    constructor(props: any);
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props, prevState: State): void;
    componentWillUnmount(): void;
    getWhetherExpressionIsFuncAndHasOnePart: (groupedParts: ExpressionPartGroup[]) => boolean;
    hasNoParamAndDsEnabled: (part: ExpressionPartGroup) => boolean;
    hasOneParamAndDsEnabled: (part: ExpressionPartGroup) => boolean;
    getWhetherUseSelectedDs: (part: ExpressionPart) => boolean;
    getDefaultDsId: () => string;
    getDefaultFunc: () => ExpressionFunctions;
    getDefaultJimuFieldName: (dsId: string) => string;
    getDefaultExpName: (fieldName: string, func: ExpressionFunctions) => string;
    getCustomExpName: (fieldName: string, func: ExpressionFunctions, previousExpName: string) => string;
    getDataSourceId: () => string;
    getSelectedFieldName: (fields: {
        [jimuName: string]: FieldSchema;
    }, fieldJimuName: string) => string;
    getSelectedJimuFieldName: () => string;
    getSelectedFunction: () => string;
    /**
     * If function is count, will return all fields, else, will return number fields.
     */
    getFieldsByFunc: (dsId: string, func: ExpressionFunctions) => {
        [jimuName: string]: FieldSchema;
    };
    getDsLabel: (dsId: string) => string;
    getSelectedUseDataSource: () => IMUseDataSource;
    onFieldChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFunctionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onCustomExpNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChange: () => void;
    onSelectedUseDsChange: (useDataSource: IMUseDataSource) => void;
    render(): React.JSX.Element;
}
export {};
