import { TotsColumn, TotsColumnOrder } from "../entities/tots-column";
import { TotsStatusIconColumnOption } from "../entities/tots-status-icon-column-option";
export declare class TotsStatusIconColumn extends TotsColumn {
    constructor(id: string, fieldKey: string | string[], options: TotsStatusIconColumnOption[], title?: string, hasOrder?: boolean, order?: TotsColumnOrder);
}
