import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { TotsBaseFieldComponent } from '../tots-base-field.component';
import * as i0 from "@angular/core";
export declare class AutocompleteObsFieldComponent extends TotsBaseFieldComponent implements OnInit {
    filteredOptions: Observable<string[]>;
    inputQuery: FormControl<string | null>;
    isFirstLoad: boolean;
    ngOnInit(): void;
    loadInputConfig(): void;
    loadQueryConfig(): void;
    selectedOption(event: MatAutocompleteSelectedEvent): void;
    getItem(itemIdentifier: any): any;
    displayOption(item: any): string;
    getCaption(): any;
    cleanInputQuery(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutocompleteObsFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutocompleteObsFieldComponent, "tots-autocomplete-obs-field", never, {}, {}, never, never, false, never>;
}
