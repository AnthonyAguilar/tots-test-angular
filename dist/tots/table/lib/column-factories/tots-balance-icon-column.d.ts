import { TotsColumn, TotsColumnOrder } from "../entities/tots-column";
export declare class TotsBalanceIconColumn extends TotsColumn {
    constructor(id: string, activeAssetFieldKey: string | string[], passiveAssetFieldKey: string | string[], neutralIcon: string, positiveIcon: string, negativeIcon: string, title?: string, hasOrder?: boolean, order?: TotsColumnOrder);
}
