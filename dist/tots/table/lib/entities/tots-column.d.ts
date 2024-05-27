export declare class TotsColumn {
    key: string;
    component: any;
    field_key?: string | Array<string>;
    title?: string;
    extra?: any;
    is_show?: boolean;
    hasOrder?: boolean;
    order?: 'asc' | 'desc';
    constructor(key: string, component: any, field_key?: string | string[], title?: string, hasOrder?: boolean, order?: TotsColumnOrder);
}
export type TotsColumnOrder = "asc" | "desc";
