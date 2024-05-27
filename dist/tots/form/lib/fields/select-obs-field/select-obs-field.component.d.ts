import { SelectFieldComponent } from '../select-field/select-field.component';
import * as i0 from "@angular/core";
export declare class SelectObsFieldComponent extends SelectFieldComponent {
    options?: Array<any>;
    ngOnInit(): void;
    displayId(item: any): string;
    displayOption(item: any): string;
    loadOptions(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectObsFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectObsFieldComponent, "tots-select-obs-field", never, {}, {}, never, never, false, never>;
}
