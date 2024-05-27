import { TotsColumn, TotsColumnOrder } from "../entities/tots-column";
export declare class TotsCurrencyColumn extends TotsColumn {
    constructor(id: string, fieldKey: string | string[], title?: string, hasOrder?: boolean, order?: TotsColumnOrder);
}
