import { TotsColumn, TotsColumnOrder } from "../entities/tots-column";
export declare class TotsTwoStringColumn extends TotsColumn {
    constructor(id: string, fieldKey: string | string[], secondFieldKey: string | string[], title?: string, hasOrder?: boolean, order?: TotsColumnOrder);
}
