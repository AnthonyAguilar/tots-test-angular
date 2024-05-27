import { TotsColumn, TotsColumnOrder } from "../entities/tots-column";
import { TotsStatusColumnOption } from "../entities/tots-status-column-option";
export declare class TotsStatusColumn extends TotsColumn {
    constructor(id: string, fieldKey: string | string[], options: TotsStatusColumnOption[], title?: string, hasOrder?: boolean, order?: TotsColumnOrder);
}
