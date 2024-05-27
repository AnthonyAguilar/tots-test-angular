import { TotsColumn, TotsColumnOrder } from "../entities/tots-column";
export declare class TotsBooleanColumn extends TotsColumn {
    constructor(id: string, fieldKey: string | string[], title?: string, hasOrder?: boolean, order?: TotsColumnOrder);
}
