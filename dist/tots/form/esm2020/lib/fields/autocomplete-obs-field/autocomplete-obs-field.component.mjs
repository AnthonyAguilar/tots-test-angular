import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { switchMap, tap } from 'rxjs';
import { TotsBaseFieldComponent } from '../tots-base-field.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/material/core";
import * as i6 from "@angular/material/autocomplete";
export class AutocompleteObsFieldComponent extends TotsBaseFieldComponent {
    constructor() {
        super(...arguments);
        this.inputQuery = new FormControl('');
        this.isFirstLoad = true;
    }
    ngOnInit() {
        super.ngOnInit();
        this.loadQueryConfig();
        this.loadInputConfig();
    }
    loadInputConfig() {
        this.input.valueChanges.subscribe(value => {
            if (this.inputQuery.value != '' && this.inputQuery.value != undefined) {
                return;
            }
            if (this.isFirstLoad == false) {
                return;
            }
            this.inputQuery.setValue(this.getItem(value));
            this.isFirstLoad = false;
        });
    }
    loadQueryConfig() {
        let obs = this.field.extra.obs;
        this.filteredOptions = this.inputQuery.valueChanges.pipe(
        //startWith(''),
        //takeWhile(value => typeof value === "string"),
        tap(value => {
            if (typeof value === "string" && value == '') {
                this.input.setValue(undefined);
            }
        }), switchMap(value => obs(value)));
    }
    selectedOption(event) {
        if (this.field.extra.need_full_object == true) {
            this.input.setValue(event.option.value);
            return;
        }
        this.input.setValue(event.option.value[this.field.extra.selected_key]);
    }
    getItem(itemIdentifier) {
        if (this.field.extra.first_query != undefined) {
            return this.field.extra.first_query;
        }
        if (this.field.extra.options == undefined) {
            return;
        }
        let options = this.field.extra.options;
        return options.find(i => i[this.field.extra.selected_key] == itemIdentifier);
    }
    displayOption(item) {
        if (item == undefined) {
            return '';
        }
        return item[this.field.extra.display_key];
    }
    getCaption() {
        if (this.field.extra && this.field.extra.caption) {
            return this.field.extra.caption;
        }
        return '';
    }
    cleanInputQuery() {
        this.inputQuery.setValue('');
    }
}
AutocompleteObsFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: AutocompleteObsFieldComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
AutocompleteObsFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.3", type: AutocompleteObsFieldComponent, selector: "tots-autocomplete-obs-field", usesInheritance: true, ngImport: i0, template: "<mat-form-field *ngIf=\"input\" [appearance]=\"getAppearance()\" class=\"{{getClases()}}\">\r\n    <mat-label *ngIf=\"field.label\"> {{ field.label }} </mat-label>\r\n\r\n    <input matInput type=\"text\" [formControl]=\"inputQuery\" [matAutocomplete]=\"autoInput\" [placeholder]=\"getPlaceholder()\">\r\n\r\n    <mat-autocomplete #autoInput=\"matAutocomplete\" [displayWith]=\"displayOption.bind(this)\" (optionSelected)=\"selectedOption($event)\">\r\n      <mat-option *ngFor=\"let item of filteredOptions | async\" [value]=\"item\">\r\n        {{ displayOption(item) }}\r\n      </mat-option>\r\n    </mat-autocomplete>\r\n\r\n    <mat-hint *ngIf=\"getCaption() != ''\" [align]=\"'end'\"> {{getCaption()}} </mat-hint>\r\n</mat-form-field>", styles: ["mat-form-field{width:100%}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLabel, selector: "mat-label" }, { kind: "directive", type: i3.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i5.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "component", type: i6.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple"], exportAs: ["matAutocomplete"] }, { kind: "directive", type: i6.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", exportAs: ["matAutocompleteTrigger"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: AutocompleteObsFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-autocomplete-obs-field', template: "<mat-form-field *ngIf=\"input\" [appearance]=\"getAppearance()\" class=\"{{getClases()}}\">\r\n    <mat-label *ngIf=\"field.label\"> {{ field.label }} </mat-label>\r\n\r\n    <input matInput type=\"text\" [formControl]=\"inputQuery\" [matAutocomplete]=\"autoInput\" [placeholder]=\"getPlaceholder()\">\r\n\r\n    <mat-autocomplete #autoInput=\"matAutocomplete\" [displayWith]=\"displayOption.bind(this)\" (optionSelected)=\"selectedOption($event)\">\r\n      <mat-option *ngFor=\"let item of filteredOptions | async\" [value]=\"item\">\r\n        {{ displayOption(item) }}\r\n      </mat-option>\r\n    </mat-autocomplete>\r\n\r\n    <mat-hint *ngIf=\"getCaption() != ''\" [align]=\"'end'\"> {{getCaption()}} </mat-hint>\r\n</mat-form-field>", styles: ["mat-form-field{width:100%}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLW9icy1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90b3RzL2Zvcm0vc3JjL2xpYi9maWVsZHMvYXV0b2NvbXBsZXRlLW9icy1maWVsZC9hdXRvY29tcGxldGUtb2JzLWZpZWxkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RvdHMvZm9ybS9zcmMvbGliL2ZpZWxkcy9hdXRvY29tcGxldGUtb2JzLWZpZWxkL2F1dG9jb21wbGV0ZS1vYnMtZmllbGQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUF5QixTQUFTLEVBQWEsR0FBRyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7OztBQU90RSxNQUFNLE9BQU8sNkJBQThCLFNBQVEsc0JBQXNCO0lBTHpFOztRQVFFLGVBQVUsR0FBRyxJQUFJLFdBQVcsQ0FBUyxFQUFFLENBQUMsQ0FBQztRQUV6QyxnQkFBVyxHQUFHLElBQUksQ0FBQztLQTBFcEI7SUF4RVUsUUFBUTtRQUNmLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3hDLElBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUksRUFBRSxJQUFFLElBQUksQ0FBQyxVQUFV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O2tCQUx6QyxTQUFTOytCQUNFLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBNYXRBdXRvY29tcGxldGVTZWxlY3RlZEV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgc3RhcnRXaXRoLCBzd2l0Y2hNYXAsIHRha2VXaGlsZSwgdGFwIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFRvdHNCYXNlRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi90b3RzLWJhc2UtZmllbGQuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndG90cy1hdXRvY29tcGxldGUtb2JzLWZpZWxkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYXV0b2NvbXBsZXRlLW9icy1maWVsZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYXV0b2NvbXBsZXRlLW9icy1maWVsZC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZU9ic0ZpZWxkQ29tcG9uZW50IGV4dGVuZHMgVG90c0Jhc2VGaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGZpbHRlcmVkT3B0aW9ucyE6IE9ic2VydmFibGU8c3RyaW5nW10+O1xyXG4gIGlucHV0UXVlcnkgPSBuZXcgRm9ybUNvbnRyb2w8c3RyaW5nPignJyk7XHJcblxyXG4gIGlzRmlyc3RMb2FkID0gdHJ1ZTtcclxuXHJcbiAgb3ZlcnJpZGUgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xyXG4gICAgdGhpcy5sb2FkUXVlcnlDb25maWcoKTtcclxuICAgIHRoaXMubG9hZElucHV0Q29uZmlnKCk7XHJcbiAgfVxyXG5cclxuICBsb2FkSW5wdXRDb25maWcoKSB7XHJcbiAgICB0aGlzLmlucHV0LnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4ge1xyXG4gICAgICBpZih0aGlzLmlucHV0UXVlcnkudmFsdWUgIT0gJycmJnRoaXMuaW5wdXRRdWVyeS52YWx1ZSAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZih0aGlzLmlzRmlyc3RMb2FkID09IGZhbHNlKXtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuaW5wdXRRdWVyeS5zZXRWYWx1ZSh0aGlzLmdldEl0ZW0odmFsdWUpKTtcclxuXHJcbiAgICAgIHRoaXMuaXNGaXJzdExvYWQgPSBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZFF1ZXJ5Q29uZmlnKCkge1xyXG4gICAgbGV0IG9iczogKHF1ZXJ5Pzogc3RyaW5nKSA9PiBPYnNlcnZhYmxlPEFycmF5PGFueT4+ID0gdGhpcy5maWVsZC5leHRyYS5vYnM7XHJcbiAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucyA9IHRoaXMuaW5wdXRRdWVyeS52YWx1ZUNoYW5nZXMucGlwZShcclxuICAgICAgLy9zdGFydFdpdGgoJycpLFxyXG4gICAgICAvL3Rha2VXaGlsZSh2YWx1ZSA9PiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpLFxyXG4gICAgICB0YXAodmFsdWUgPT4ge1xyXG4gICAgICAgIGlmKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiB2YWx1ZSA9PSAnJyl7XHJcbiAgICAgICAgICB0aGlzLmlucHV0LnNldFZhbHVlKHVuZGVmaW5lZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICAgc3dpdGNoTWFwKHZhbHVlID0+IG9icyh2YWx1ZSEpKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RlZE9wdGlvbihldmVudDogTWF0QXV0b2NvbXBsZXRlU2VsZWN0ZWRFdmVudCkge1xyXG4gICAgaWYodGhpcy5maWVsZC5leHRyYS5uZWVkX2Z1bGxfb2JqZWN0ID09IHRydWUpe1xyXG4gICAgICB0aGlzLmlucHV0LnNldFZhbHVlKGV2ZW50Lm9wdGlvbi52YWx1ZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmlucHV0LnNldFZhbHVlKGV2ZW50Lm9wdGlvbi52YWx1ZVt0aGlzLmZpZWxkLmV4dHJhLnNlbGVjdGVkX2tleV0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0SXRlbShpdGVtSWRlbnRpZmllcjogYW55KTogYW55IHtcclxuICAgIGlmKHRoaXMuZmllbGQuZXh0cmEuZmlyc3RfcXVlcnkgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgcmV0dXJuIHRoaXMuZmllbGQuZXh0cmEuZmlyc3RfcXVlcnk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy5maWVsZC5leHRyYS5vcHRpb25zID09IHVuZGVmaW5lZCl7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgb3B0aW9uczogQXJyYXk8YW55PiA9IHRoaXMuZmllbGQuZXh0cmEub3B0aW9ucztcclxuICAgIHJldHVybiBvcHRpb25zLmZpbmQoaSA9PiBpW3RoaXMuZmllbGQuZXh0cmEuc2VsZWN0ZWRfa2V5XSA9PSBpdGVtSWRlbnRpZmllcik7XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5T3B0aW9uKGl0ZW06IGFueSk6IHN0cmluZyB7XHJcbiAgICBpZihpdGVtID09IHVuZGVmaW5lZCl7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIHJldHVybiBpdGVtW3RoaXMuZmllbGQuZXh0cmEuZGlzcGxheV9rZXldO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2FwdGlvbigpIHtcclxuICAgIGlmKHRoaXMuZmllbGQuZXh0cmEgJiYgdGhpcy5maWVsZC5leHRyYS5jYXB0aW9uKXsgcmV0dXJuIHRoaXMuZmllbGQuZXh0cmEuY2FwdGlvbjsgfVxyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxuXHJcbiAgY2xlYW5JbnB1dFF1ZXJ5KCkge1xyXG4gICAgdGhpcy5pbnB1dFF1ZXJ5LnNldFZhbHVlKCcnKTtcclxuICB9XHJcbn1cclxuIiwiPG1hdC1mb3JtLWZpZWxkICpuZ0lmPVwiaW5wdXRcIiBbYXBwZWFyYW5jZV09XCJnZXRBcHBlYXJhbmNlKClcIiBjbGFzcz1cInt7Z2V0Q2xhc2VzKCl9fVwiPlxyXG4gICAgPG1hdC1sYWJlbCAqbmdJZj1cImZpZWxkLmxhYmVsXCI+IHt7IGZpZWxkLmxhYmVsIH19IDwvbWF0LWxhYmVsPlxyXG5cclxuICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwidGV4dFwiIFtmb3JtQ29udHJvbF09XCJpbnB1dFF1ZXJ5XCIgW21hdEF1dG9jb21wbGV0ZV09XCJhdXRvSW5wdXRcIiBbcGxhY2Vob2xkZXJdPVwiZ2V0UGxhY2Vob2xkZXIoKVwiPlxyXG5cclxuICAgIDxtYXQtYXV0b2NvbXBsZXRlICNhdXRvSW5wdXQ9XCJtYXRBdXRvY29tcGxldGVcIiBbZGlzcGxheVdpdGhdPVwiZGlzcGxheU9wdGlvbi5iaW5kKHRoaXMpXCIgKG9wdGlvblNlbGVjdGVkKT1cInNlbGVjdGVkT3B0aW9uKCRldmVudClcIj5cclxuICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgZmlsdGVyZWRPcHRpb25zIHwgYXN5bmNcIiBbdmFsdWVdPVwiaXRlbVwiPlxyXG4gICAgICAgIHt7IGRpc3BsYXlPcHRpb24oaXRlbSkgfX1cclxuICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgPC9tYXQtYXV0b2NvbXBsZXRlPlxyXG5cclxuICAgIDxtYXQtaGludCAqbmdJZj1cImdldENhcHRpb24oKSAhPSAnJ1wiIFthbGlnbl09XCInZW5kJ1wiPiB7e2dldENhcHRpb24oKX19IDwvbWF0LWhpbnQ+XHJcbjwvbWF0LWZvcm0tZmllbGQ+Il19