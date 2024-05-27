import { OnInit } from '@angular/core';
import { TotsBaseFieldComponent } from '../tots-base-field.component';
import * as i0 from "@angular/core";
export declare class RadioGroupFieldComponent extends TotsBaseFieldComponent implements OnInit {
    options?: {
        value: number | string;
        caption: string;
    }[];
    alignment: "vertical" | "horizontal";
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RadioGroupFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RadioGroupFieldComponent, "tots-radio-group-field", never, {}, {}, never, never, false, never>;
}
