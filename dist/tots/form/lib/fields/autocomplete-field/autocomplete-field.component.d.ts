import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TotsBaseFieldComponent } from '../tots-base-field.component';
import * as i0 from "@angular/core";
export declare class AutocompleteFieldComponent extends TotsBaseFieldComponent implements OnInit {
    ngOnInit(): void;
    loadConfigField(): void;
    obsProcessed(query?: string): Observable<Array<any>>;
    filterProcessed(query?: any): Array<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutocompleteFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutocompleteFieldComponent, "tots-autocomplete-field", never, {}, {}, never, never, false, never>;
}
