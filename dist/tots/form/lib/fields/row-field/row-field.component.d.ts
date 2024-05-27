import { OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { TotsFieldForm } from '../../entities/tots-field-form';
import { TotsBaseFieldComponent } from '../tots-base-field.component';
import * as i0 from "@angular/core";
export declare class RowFieldComponent extends TotsBaseFieldComponent implements OnInit {
    ngOnInit(): void;
    isHasIcon(field: TotsFieldForm): boolean;
    getIconField(field: TotsFieldForm): any;
    static updateFormByItem(group: UntypedFormGroup, item: any, field: TotsFieldForm): void;
    static updateItemByForm(group: UntypedFormGroup, item: any, field: TotsFieldForm): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RowFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RowFieldComponent, "tots-row-field", never, {}, {}, never, never, false, never>;
}
