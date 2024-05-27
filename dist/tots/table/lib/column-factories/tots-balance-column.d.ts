import { TotsColumn, TotsColumnOrder } from "../entities/tots-column";
export declare class TotsBalanceColumn extends TotsColumn {
    constructor(id: string, activeAssetFieldKey: string | string[], passiveAssetFieldKey: string | string[], title?: string, hasOrder?: boolean, order?: TotsColumnOrder);
}
