import { TotsColumn, TotsColumnOrder } from "../entities/tots-column";
export declare class TotsStringColumn extends TotsColumn {
    constructor(id: string, fieldKey: string | string[], title?: string, hasOrder?: boolean, order?: TotsColumnOrder, prepend?: string);
}
