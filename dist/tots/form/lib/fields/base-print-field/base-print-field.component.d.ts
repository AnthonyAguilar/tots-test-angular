import { OnInit, ViewContainerRef } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { TotsActionForm } from '../../entities/tots-action-form';
import { TotsFieldForm } from '../../entities/tots-field-form';
import * as i0 from "@angular/core";
export declare class BasePrintFieldComponent implements OnInit {
    protected viewContainerRef: ViewContainerRef;
    field: TotsFieldForm;
    group: UntypedFormGroup;
    onAction: Subject<TotsActionForm>;
    constructor(viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BasePrintFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BasePrintFieldComponent, "tots-base-print-field", never, { "field": "field"; "group": "group"; "onAction": "onAction"; }, {}, never, never, false, never>;
}
