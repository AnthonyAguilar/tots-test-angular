import { TotsColumn } from "../entities/tots-column";
import { TotsMoreMenuItem } from "../entities/tots-more-menu-item";
export declare class TotsMoreMenuColumn extends TotsColumn {
    constructor(id: string, items: TotsMoreMenuItem[], title?: string, stickyEnd?: boolean);
}
