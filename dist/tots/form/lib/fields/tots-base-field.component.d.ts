import { OnInit } from "@angular/core";
import { UntypedFormControl, UntypedFormGroup } from "@angular/forms";
import { Subject } from "rxjs";
import { TotsActionForm } from "../entities/tots-action-form";
import { TotsFieldForm } from "../entities/tots-field-form";
import * as i0 from "@angular/core";
export declare class TotsBaseFieldComponent implements OnInit {
    field: TotsFieldForm;
    group: UntypedFormGroup;
    onAction: Subject<TotsActionForm>;
    input: UntypedFormControl;
    constructor();
    ngOnInit(): void;
    getAppearance(): any;
    getClases(): any;
    getPlaceholder(): any;
    isDisabled(): boolean;
    hasError(): boolean;
    getMessageError(): string;
    static updateFormByItem(group: UntypedFormGroup, item: any, field: TotsFieldForm): void;
    static updateItemByForm(group: UntypedFormGroup, item: any, field: TotsFieldForm): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TotsBaseFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TotsBaseFieldComponent, "tots-base-field", never, { "field": "field"; "group": "group"; "onAction": "onAction"; }, {}, never, never, false, never>;
}
