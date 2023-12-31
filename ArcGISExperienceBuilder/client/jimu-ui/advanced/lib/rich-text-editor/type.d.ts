import { type TextFontStyle } from 'jimu-ui';
import { type ImmutableObject } from 'jimu-core';
import { type Blot } from 'parchment/dist/src/blot/abstract/blot';
/**Use type only */
import type { LinkParam } from 'jimu-ui/advanced/setting-components';
interface StringMap {
    [key: string]: any;
}
export type IMLinkParamMap = ImmutableObject<{
    [id: string]: LinkParam;
}>;
export declare enum FormatType {
    INLINE = 0,
    BLOCK = 1,
    EMBED = 2
}
export type Formats = StringMap;
export type IMFormats = ImmutableObject<Formats>;
export type Modules = StringMap;
export type IMModules = ImmutableObject<Modules>;
export interface Operation {
    insert?: string | {
        [key: string]: unknown;
    };
    delete?: number;
    retain?: number;
    attributes?: Formats;
}
/**
 * [Delta](https://quilljs.com/docs/delta/)
 */
export interface DeltaValue {
    ops: Operation[];
    length?: () => any;
    diff?: (delta: DeltaValue) => DeltaValue;
    partition?: (func: (op: Operation) => boolean) => [Operation[], Operation[]];
    filter?: (func: (op: Operation) => boolean) => Operation[];
    forEach?: (func: (op: Operation) => void) => void;
    map?: (func: (op: Operation) => any) => Operation[];
}
/**
 * Types of values supported by the rich text editor
 */
export type EdiotrValue = DeltaValue | string;
export interface RichSelection {
    index: number;
    length: number;
}
export interface ClipboardStatic {
    convert: (html?: string) => DeltaValue;
    addMatcher: (selectorOrNodeType: string | number, callback: (node: any, delta: DeltaValue) => DeltaValue) => void;
    dangerouslyPasteHTML: ((html: string, source?: Sources) => void) & ((index: number, html: string, source?: Sources) => void);
    matchers?: Array<[string | number, (node: any, delta: DeltaValue) => DeltaValue]>;
}
export interface Key {
    key: string | number;
    shortKey?: boolean;
}
export interface KeyboardStatic {
    addBinding: ((key: Key, callback: (range: RichSelection, context: any) => void) => void) & ((key: Key, context: any, callback: (range: RichSelection, context: any) => void) => void);
    bindings: {
        [x: string]: any;
    };
}
/**
 * [Quill editor API](https://quilljs.com/docs/api/#editor)
 */
export interface UnprivilegedEditor {
    focus: () => void;
    blur: () => void;
    getLength: () => number;
    getText: (index?: number, length?: number) => string;
    getContents: (index?: number, length?: number) => DeltaValue;
    getSelection: (focus?: boolean) => RichSelection | null;
    getBounds: (index: number, length?: number) => DOMRect;
    getFormat: (range?: RichSelection) => Formats;
    getIndex: (blot: any) => number;
    getLeaf: (index: number) => [any, number];
    getHTML: () => string;
}
export type TextChangeHandler = (delta: DeltaValue, oldContents: DeltaValue, source: Sources) => any;
export type SelectionChangeHandler = (range: RichSelection, oldRange: RichSelection, source: Sources) => any;
export type EditorChangeHandler = ((name: 'text-change', delta: DeltaValue, oldContents: DeltaValue, source: Sources) => any) | ((name: 'selection-change', range: RichSelection, oldRange: RichSelection, source: Sources) => any);
export type EventType = 'text-change' | 'selection-change' | 'editor-change' | 'scroll-optimize';
export type Hanldes = TextChangeHandler | SelectionChangeHandler | EditorChangeHandler;
export interface EventEmitter {
    on: (eventName: EventType, handler?: Hanldes) => EventEmitter;
    off: (eventName: EventType, handler?: Hanldes) => EventEmitter;
    once: (eventName: EventType, handler?: Hanldes) => EventEmitter;
}
export interface EditorProperties {
    options?: {
        [x: string]: any;
    };
    editor?: any;
}
export interface InsertText {
    insertText: ((index: number, text: string, source?: Sources) => DeltaValue) & ((index: number, text: string, format: string, value: any, source?: Sources) => DeltaValue) & ((index: number, text: string, formats: {
        [x: string]: any;
    }, source?: Sources) => DeltaValue);
}
export interface History {
    clear: () => void;
    cutoff: () => void;
    undo: () => void;
    redo: () => void;
}
/**
 * [Quill editor API](https://quilljs.com/docs/api/#editor)
 */
export type Editor = {
    root: HTMLDivElement;
    scroll: Blot;
    clipboard: ClipboardStatic;
    keyboard: KeyboardStatic;
    history: History;
    isEnabled: () => boolean;
    hasFocus: () => boolean;
    disable: () => void;
    enable: (enabled?: boolean) => void;
    setContents: (delta: DeltaValue, source?: Sources) => DeltaValue;
    updateContents: (delta: DeltaValue, source?: Sources) => DeltaValue;
    setSelection: (range: RichSelection | number, source?: Sources) => void;
    getLeaf: (index: number) => any;
    deleteText: (index: number, length: number, source?: Sources) => DeltaValue;
    insertEmbed: (index: number, type: string, value: any, source?: Sources) => DeltaValue;
    format: (name: string, value: any, source?: Sources) => DeltaValue;
    formatLine: (index: number, length: number, format: string, value: any, source?: Sources) => DeltaValue;
    formatText: (index: number, length: number, format: string, value: any, source?: Sources) => DeltaValue;
    removeFormat: (index: number, length: number, source?: Sources) => DeltaValue;
    getLine: (index: number) => any;
    getLines: (index?: number, length?: number) => any[];
} & UnprivilegedEditor & EventEmitter & EditorProperties & InsertText;
export type Sources = 'api' | 'user' | 'silent';
export declare enum RichTextFormatKeys {
    Bold = "bold",
    Italic = "italic",
    Underline = "underline",
    Strike = "strike",
    Color = "color",
    Background = "background",
    Font = "font",
    Size = "size",
    Letterspace = "letterspace",
    Linespace = "linespace",
    Textshadow = "textshadow",
    Align = "align",
    Blockquote = "blockquote",
    Code = "code",
    Direction = "direction",
    Header = "header",
    Indent = "indent",
    Link = "link",
    List = "list",
    Script = "script",
    Expression = "expression"
}
export declare enum ListValue {
    BULLET = "bullet",
    ORDERED = "ordered"
}
export declare enum HeaderValue {
    Normal = 0,
    H1 = 1,
    H2 = 2,
    H3 = 3,
    H4 = 4,
    H5 = 5,
    H6 = 6
}
export declare enum IndentValue {
    ZERO = 0,
    ONE = 1,
    TWO = 2,
    THREE = 3,
    FOUR = 4,
    FIVE = 5,
    SIX = 6,
    SEVEN = 7,
    EIGHT = 8
}
export declare enum DirectionValue {
    RTL = "rtl"
}
export interface SeniorTextStyle {
    [RichTextFormatKeys.Textshadow]?: string;
    [RichTextFormatKeys.Blockquote]?: boolean;
    [RichTextFormatKeys.Code]?: boolean;
    [RichTextFormatKeys.Direction]?: DirectionValue;
    [RichTextFormatKeys.Header]?: HeaderValue;
    [RichTextFormatKeys.Indent]?: IndentValue;
    [RichTextFormatKeys.Link]?: LinkParam;
    [RichTextFormatKeys.List]?: ListValue;
    [RichTextFormatKeys.Script]?: boolean;
    [RichTextFormatKeys.Expression]?: string;
}
export type RichTextStyle = TextFontStyle & SeniorTextStyle;
export type IMRichTextStyle = ImmutableObject<RichTextStyle>;
export {};
