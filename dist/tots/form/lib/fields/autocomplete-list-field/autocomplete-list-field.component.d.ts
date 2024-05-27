import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { TotsBaseFieldComponent } from '../tots-base-field.component';
import * as i0 from "@angular/core";
export declare class AutocompleteListFieldComponent extends TotsBaseFieldComponent implements OnInit {
    filteredOptions: Observable<string[]>;
    inputQuery: FormControl<string | null>;
    isFirstLoad: boolean;
    ngOnInit(): void;
    loadQueryConfig(): void;
    selectedOption(event: MatAutocompleteSelectedEvent): void;
    displayOption(item: any): string;
    displayPhoto(item: any): string;
    getCaption(): any;
    getPlaceholderPhoto(): any;
    isShowPhoto(): boolean;
    onClickRemove(item: any): void;
    onImgError(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutocompleteListFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutocompleteListFieldComponent, "lib-autocomplete-list-field", never, {}, {}, never, never, false, never>;
}
