import { Subject } from "rxjs";
import { TotsActionTable } from "../entities/tots-action-table";
import { TotsColumn } from "../entities/tots-column";
import * as i0 from "@angular/core";
export declare class TotsBaseColumnComponent {
    column: TotsColumn;
    item: any;
    onAction: Subject<TotsActionTable>;
    index?: number;
    getItemValue(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<TotsBaseColumnComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TotsBaseColumnComponent, "tots-base-column", never, { "column": { "alias": "column"; "required": false; }; "item": { "alias": "item"; "required": false; }; "onAction": { "alias": "onAction"; "required": false; }; "index": { "alias": "index"; "required": false; }; }, {}, never, never, false, never>;
}
