/// <reference types="react" />
import { React } from 'jimu-core';
interface Props {
    exp: string;
    id: string;
    isEditable: boolean;
}
export default class ErrorExp extends React.PureComponent<Props, unknown> {
    render(): React.JSX.Element;
}
export {};
