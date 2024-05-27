import { TotsColumn, TotsColumnOrder } from "../entities/tots-column";
export declare class TotsUserColumn extends TotsColumn {
    constructor(id: string, firstNameFieldKey: string | string[], lastNameFieldKey: string | string[], photoFieldKey: string | string[], secondLineFieldKey?: string | string[], title?: string, onlineFieldKey?: string, hasOrder?: boolean, order?: TotsColumnOrder);
}
