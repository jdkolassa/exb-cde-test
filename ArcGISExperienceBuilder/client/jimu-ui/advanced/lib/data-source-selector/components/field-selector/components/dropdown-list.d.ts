/// <reference types="react" />
import { React, type FieldSchema, type IMFieldSchema, type DataSource, type ImmutableArray, type ImmutableObject, type IMThemeVariables, type ClauseValuePair, type IntlShape } from 'jimu-core';
import { type SelectProps, type AdvancedSelectItem } from 'jimu-ui';
interface Props {
    intl: IntlShape;
    theme: IMThemeVariables;
    fields: ImmutableObject<{
        [jimuName: string]: FieldSchema;
    }>;
    ds: DataSource;
    placeholder?: string;
    dropdownProps?: SelectProps;
    selectedFields?: ImmutableArray<string>;
    isMultiple?: boolean;
    useMultiDropdownBottomTools?: boolean;
    isSearchInputHidden?: boolean;
    onFieldClick: (clickedFields: IMFieldSchema[]) => void;
    /**
     * Callback fired when toggling the select menu.
     */
    toggle?: (isOpen?: boolean) => void;
}
export default class MultipleDropdownList extends React.PureComponent<Props> {
    dropdownProps: {
        autoWidth: boolean;
    };
    widthForDropdownItem: {
        width: string;
    };
    widthForDropdownItemLabel: {
        width: string;
    };
    onChange: (selectedFieldPairs: ClauseValuePair[]) => void;
    getFields: () => any[];
    getSelectedFields: () => AdvancedSelectItem[];
    getFieldItem: (fieldId: any) => {
        value: any;
        label: string;
        render: () => React.JSX.Element;
    };
    toggleAdvancedSelect: (isOpen: boolean) => void;
    render(): React.JSX.Element;
}
export {};
