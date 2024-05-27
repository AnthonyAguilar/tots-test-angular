import { ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { TotsActionTable } from '../../entities/tots-action-table';
import { TotsColumn } from '../../entities/tots-column';
import * as i0 from "@angular/core";
export declare class BasePrintColumnComponent {
    protected viewContainerRef: ViewContainerRef;
    column: TotsColumn;
    item: any;
    onAction: Subject<TotsActionTable>;
    index?: number;
    constructor(viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BasePrintColumnComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BasePrintColumnComponent, "tots-base-print-column", never, { "column": { "alias": "column"; "required": false; }; "item": { "alias": "item"; "required": false; }; "onAction": { "alias": "onAction"; "required": false; }; "index": { "alias": "index"; "required": false; }; }, {}, never, never, false, never>;
}
