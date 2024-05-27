import { OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { TotsFieldForm } from '../../entities/tots-field-form';
import { TotsBaseFieldComponent } from '../tots-base-field.component';
import { ThemePalette } from '@angular/material/core';
import { TotsFormButtonMatDirective, TotsFormButtonsConfig } from '../../entities/tots-buttons-config';
import * as i0 from "@angular/core";
export declare class SubmitButtonFieldComponent extends TotsBaseFieldComponent implements OnInit {
    protected totsButtonConfig: TotsFormButtonsConfig;
    matColor: ThemePalette;
    matButtonDirective: TotsFormButtonMatDirective;
    constructor(totsButtonConfig: TotsFormButtonsConfig);
    ngOnInit(): void;
    onClick(): void;
    static updateFormByItem(group: UntypedFormGroup, item: any, field: TotsFieldForm): void;
    static updateItemByForm(group: UntypedFormGroup, item: any, field: TotsFieldForm): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SubmitButtonFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SubmitButtonFieldComponent, "tots-submit-button-field", never, {}, {}, never, never, false, never>;
}
