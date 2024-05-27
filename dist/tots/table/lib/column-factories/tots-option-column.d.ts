import { TotsColumn, TotsColumnOrder } from "../entities/tots-column";
import { TotsColumnOption } from "../entities/tots-column-option";
export declare class TotsOptionColumn extends TotsColumn {
    constructor(id: string, fieldKey: string | string[], options: TotsColumnOption[], title?: string, hasOrder?: boolean, order?: TotsColumnOrder);
}
