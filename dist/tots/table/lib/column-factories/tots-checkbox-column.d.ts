import { ThemePalette } from "@angular/material/core";
import { TotsColumn, TotsColumnOrder } from "../entities/tots-column";
export declare class TotsCheckboxColumn extends TotsColumn {
    constructor(id: string, fieldKey?: string | string[], title?: string, color?: ThemePalette, cssClass?: string, hasOrder?: boolean, order?: TotsColumnOrder, stickyEnd?: true);
}
