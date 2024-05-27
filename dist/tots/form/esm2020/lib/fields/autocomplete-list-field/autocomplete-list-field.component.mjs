import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, switchMap } from 'rxjs';
import { TotsBaseFieldComponent } from '../tots-base-field.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/material/core";
import * as i6 from "@angular/material/button";
import * as i7 from "@angular/material/icon";
import * as i8 from "@angular/material/autocomplete";
export class AutocompleteListFieldComponent extends TotsBaseFieldComponent {
    constructor() {
        super(...arguments);
        this.inputQuery = new FormControl('');
        this.isFirstLoad = true;
    }
    ngOnInit() {
        super.ngOnInit();
        // Default array value
        this.input.setValue([]);
        this.loadQueryConfig();
    }
    loadQueryConfig() {
        let obs = this.field.extra.obs;
        this.filteredOptions = this.inputQuery.valueChanges.pipe(map(value => {
            if (typeof value === "object") {
                return this.displayOption(value);
            }
            return value;
        }), switchMap(value => obs(value)));
    }
    selectedOption(event) {
        let data = this.input.value;
        if (this.input.value == undefined) {
            data = [];
        }
        // Verify if has exist in array
        if (data.find(i => i[this.field.extra.selected_key] == event.option.value[this.field.extra.selected_key]) == undefined) {
            data.push(event.option.value);
            this.input.setValue(data);
        }
        this.inputQuery.setValue('');
    }
    displayOption(item) {
        if (item == undefined) {
            return '';
        }
        return item[this.field.extra.display_key];
    }
    displayPhoto(item) {
        if (item == undefined) {
            return '';
        }
        return item[this.field.extra.display_photo];
    }
    getCaption() {
        if (this.field.extra && this.field.extra.caption) {
            return this.field.extra.caption;
        }
        return '';
    }
    getPlaceholderPhoto() {
        if (this.field.extra && this.field.extra.placeholder_photo) {
            return this.field.extra.placeholder_photo;
        }
        return '';
    }
    isShowPhoto() {
        if (this.field.extra && this.field.extra.is_show_photo != undefined) {
            return this.field.extra.is_show_photo;
        }
        return true;
    }
    onClickRemove(item) {
        let data = this.input.value;
        let index = data.findIndex(i => i[this.field.extra.selected_key] == item[this.field.extra.selected_key]);
        if (index != -1) {
            data.splice(index, 1);
            this.input.setValue(data);
        }
    }
    onImgError(event) {
        let placeholderPhoto = this.getPlaceholderPhoto();
        if (placeholderPhoto == '') {
            return;
        }
        event.target.src = placeholderPhoto;
    }
}
AutocompleteListFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: AutocompleteListFieldComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
AutocompleteListFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.3", type: AutocompleteListFieldComponent, selector: "lib-autocomplete-list-field", usesInheritance: true, ngImport: i0, template: "<mat-form-field *ngIf=\"input\" [appearance]=\"getAppearance()\" class=\"{{getClases()}}\">\r\n    <mat-label *ngIf=\"field.label\"> {{ field.label }} </mat-label>\r\n\r\n    <input matInput type=\"text\" [formControl]=\"inputQuery\" [matAutocomplete]=\"autoInput\" [placeholder]=\"getPlaceholder()\">\r\n\r\n    <mat-autocomplete #autoInput=\"matAutocomplete\" [displayWith]=\"displayOption.bind(this)\" (optionSelected)=\"selectedOption($event)\" >\r\n      <mat-option *ngFor=\"let item of filteredOptions | async\" [value]=\"item\">\r\n        {{ displayOption(item) }}\r\n      </mat-option>\r\n    </mat-autocomplete>\r\n\r\n    <mat-hint *ngIf=\"getCaption() != ''\" [align]=\"'end'\"> {{getCaption()}} </mat-hint>\r\n</mat-form-field>\r\n\r\n<div class=\"tots-autocomplete-list\">\r\n    <div *ngFor=\"let item of input.value\" class=\"tots-item-auto\">\r\n        <div class=\"tots-item-info\">\r\n            <img *ngIf=\"isShowPhoto()\" [src]=\"displayPhoto(item)\" (error)=\"onImgError($event)\" />\r\n            <p>{{ displayOption(item) }}</p>\r\n        </div>\r\n        <div class=\"tots-item-remove\">\r\n            <button mat-icon-button color=\"warn\" (click)=\"onClickRemove(item)\"><mat-icon>close</mat-icon></button>\r\n        </div>\r\n    </div>\r\n</div>", styles: ["mat-form-field{width:100%}.tots-item-auto{display:flex;justify-content:space-between}.tots-item-info{display:flex;align-items:center}.tots-item-info img{width:32px;height:32px}.tots-item-info p{margin:0 0 0 8px}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLabel, selector: "mat-label" }, { kind: "directive", type: i3.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i5.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "component", type: i6.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i7.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i8.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple"], exportAs: ["matAutocomplete"] }, { kind: "directive", type: i8.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", exportAs: ["matAutocompleteTrigger"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: AutocompleteListFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-autocomplete-list-field', template: "<mat-form-field *ngIf=\"input\" [appearance]=\"getAppearance()\" class=\"{{getClases()}}\">\r\n    <mat-label *ngIf=\"field.label\"> {{ field.label }} </mat-label>\r\n\r\n    <input matInput type=\"text\" [formControl]=\"inputQuery\" [matAutocomplete]=\"autoInput\" [placeholder]=\"getPlaceholder()\">\r\n\r\n    <mat-autocomplete #autoInput=\"matAutocomplete\" [displayWith]=\"displayOption.bind(this)\" (optionSelected)=\"selectedOption($event)\" >\r\n      <mat-option *ngFor=\"let item of filteredOptions | async\" [value]=\"item\">\r\n        {{ displayOption(item) }}\r\n      </mat-option>\r\n    </mat-autocomplete>\r\n\r\n    <mat-hint *ngIf=\"getCaption() != ''\" [align]=\"'end'\"> {{getCaption()}} </mat-hint>\r\n</mat-form-field>\r\n\r\n<div class=\"tots-autocomplete-list\">\r\n    <div *ngFor=\"let item of input.value\" class=\"tots-item-auto\">\r\n        <div class=\"tots-item-info\">\r\n            <img *ngIf=\"isShowPhoto()\" [src]=\"displayPhoto(item)\" (error)=\"onImgError($event)\" />\r\n            <p>{{ displayOption(item) }}</p>\r\n        </div>\r\n        <div class=\"tots-item-remove\">\r\n            <button mat-icon-button color=\"warn\" (click)=\"onClickRemove(item)\"><mat-icon>close</mat-icon></button>\r\n        </div>\r\n    </div>\r\n</div>", styles: ["mat-form-field{width:100%}.tots-item-auto{display:flex;justify-content:space-between}.tots-item-info{display:flex;align-items:center}.tots-item-info img{width:32px;height:32px}.tots-item-info p{margin:0 0 0 8px}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLWxpc3QtZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdG90cy9mb3JtL3NyYy9saWIvZmllbGRzL2F1dG9jb21wbGV0ZS1saXN0LWZpZWxkL2F1dG9jb21wbGV0ZS1saXN0LWZpZWxkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RvdHMvZm9ybS9zcmMvbGliL2ZpZWxkcy9hdXRvY29tcGxldGUtbGlzdC1maWVsZC9hdXRvY29tcGxldGUtbGlzdC1maWVsZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsR0FBRyxFQUFjLFNBQVMsRUFBYSxNQUFNLE1BQU0sQ0FBQztBQUM3RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7Ozs7OztBQU90RSxNQUFNLE9BQU8sOEJBQStCLFNBQVEsc0JBQXNCO0lBTDFFOztRQVFFLGVBQVUsR0FBRyxJQUFJLFdBQVcsQ0FBUyxFQUFFLENBQUMsQ0FBQztRQUV6QyxnQkFBVyxHQUFHLElBQUksQ0FBQztLQW1GcEI7SUFqRlUsUUFBUTtRQUNmLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQixzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxHQUFHLEdBQStDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUMzRSxJQUFJLENBQUMsZUFBZSxHQUFH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Q0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUN6RyxJQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsRUFBQztZQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFVO1FBQ25CLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDbEQsSUFBRyxnQkFBZ0IsSUFBSSxFQUFFLEVBQUM7WUFDeEIsT0FBTztTQUNSO1FBRUQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsZ0JBQWdCLENBQUM7SUFDckMsQ0FBQzs7MkhBdkZTLDhCQUE4QjsrR0FBOUIsOEJBQThCLDBGQ1gzQyxzd0NBd0JNOzJGRGJPLDhCQUE4QjtrQkFMMUMsU0FBUzsrQkFDRSw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTWF0QXV0b2NvbXBsZXRlU2VsZWN0ZWRFdmVudCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZSc7XHJcbmltcG9ydCB7IG1hcCwgT2JzZXJ2YWJsZSwgc3dpdGNoTWFwLCB0YWtlV2hpbGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgVG90c0Jhc2VGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL3RvdHMtYmFzZS1maWVsZC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItYXV0b2NvbXBsZXRlLWxpc3QtZmllbGQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hdXRvY29tcGxldGUtbGlzdC1maWVsZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYXV0b2NvbXBsZXRlLWxpc3QtZmllbGQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVMaXN0RmllbGRDb21wb25lbnQgZXh0ZW5kcyBUb3RzQmFzZUZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgZmlsdGVyZWRPcHRpb25zITogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XHJcbiAgaW5wdXRRdWVyeSA9IG5ldyBGb3JtQ29udHJvbDxzdHJpbmc+KCcnKTtcclxuXHJcbiAgaXNGaXJzdExvYWQgPSB0cnVlO1xyXG5cclxuICBvdmVycmlkZSBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcbiAgICAvLyBEZWZhdWx0IGFycmF5IHZhbHVlXHJcbiAgICB0aGlzLmlucHV0LnNldFZhbHVlKFtdKTtcclxuICAgIHRoaXMubG9hZFF1ZXJ5Q29uZmlnKCk7XHJcbiAgfVxyXG5cclxuICBsb2FkUXVlcnlDb25maWcoKSB7XHJcbiAgICBsZXQgb2JzOiAocXVlcnk/OiBzdHJpbmcpID0+IE9ic2VydmFibGU8QXJyYXk8YW55Pj4gPSB0aGlzLmZpZWxkLmV4dHJhLm9icztcclxuICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zID0gdGhpcy5pbnB1dFF1ZXJ5LnZhbHVlQ2hhbmdlcy5waXBlKFxyXG4gICAgICBtYXAodmFsdWUgPT4ge1xyXG4gICAgICAgIGlmKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIil7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5kaXNwbGF5T3B0aW9uKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICB9KSxcclxuICAgICAgc3dpdGNoTWFwKHZhbHVlID0+IG9icyh2YWx1ZSEpKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RlZE9wdGlvbihldmVudDogTWF0QXV0b2NvbXBsZXRlU2VsZWN0ZWRFdmVudCkge1xyXG4gICAgbGV0IGRhdGE6IEFycmF5PGFueT4gPSB0aGlzLmlucHV0LnZhbHVlO1xyXG4gICAgaWYodGhpcy5pbnB1dC52YWx1ZSA9PSB1bmRlZmluZWQpe1xyXG4gICAgICBkYXRhID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmVyaWZ5IGlmIGhhcyBleGlzdCBpbiBhcnJheVxyXG4gICAgaWYoZGF0YS5maW5kKGkgPT4gaVt0aGlzLmZpZWxkLmV4dHJhLnNlbGVjdGVkX2tleV0gPT0gZXZlbnQub3B0aW9uLnZhbHVlW3RoaXMuZmllbGQuZXh0cmEuc2VsZWN0ZWRfa2V5XSkgPT0gdW5kZWZpbmVkKXtcclxuICAgICAgZGF0YS5wdXNoKGV2ZW50Lm9wdGlvbi52YWx1ZSk7XHJcbiAgICAgIHRoaXMuaW5wdXQuc2V0VmFsdWUoZGF0YSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoaXMuaW5wdXRRdWVyeS5zZXRWYWx1ZSgnJyk7XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5T3B0aW9uKGl0ZW06IGFueSk6IHN0cmluZyB7XHJcbiAgICBpZihpdGVtID09IHVuZGVmaW5lZCl7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIHJldHVybiBpdGVtW3RoaXMuZmllbGQuZXh0cmEuZGlzcGxheV9rZXldO1xyXG4gIH1cclxuXHJcbiAgZGlzcGxheVBob3RvKGl0ZW06IGFueSk6IHN0cmluZyB7XHJcbiAgICBpZihpdGVtID09IHVuZGVmaW5lZCl7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIHJldHVybiBpdGVtW3RoaXMuZmllbGQuZXh0cmEuZGlzcGxheV9waG90b107XHJcbiAgfVxyXG5cclxuICBnZXRDYXB0aW9uKCkge1xyXG4gICAgaWYodGhpcy5maWVsZC5leHRyYSAmJiB0aGlzLmZpZWxkLmV4dHJhLmNhcHRpb24peyByZXR1cm4gdGhpcy5maWVsZC5leHRyYS5jYXB0aW9uOyB9XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG5cclxuICBnZXRQbGFjZWhvbGRlclBob3RvKCkge1xyXG4gICAgaWYodGhpcy5maWVsZC5leHRyYSAmJiB0aGlzLmZpZWxkLmV4dHJhLnBsYWNlaG9sZGVyX3Bob3RvKXsgcmV0dXJuIHRoaXMuZmllbGQuZXh0cmEucGxhY2Vob2xkZXJfcGhvdG87IH1cclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG4gIGlzU2hvd1Bob3RvKCk6IGJvb2xlYW4ge1xyXG4gICAgaWYodGhpcy5maWVsZC5leHRyYSAmJiB0aGlzLmZpZWxkLmV4dHJhLmlzX3Nob3dfcGhvdG8gIT0gdW5kZWZpbmVkKXsgcmV0dXJuIHRoaXMuZmllbGQuZXh0cmEuaXNfc2hvd19waG90bzsgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrUmVtb3ZlKGl0ZW06IGFueSkge1xyXG4gICAgbGV0IGRhdGE6IEFycmF5PGFueT4gPSB0aGlzLmlucHV0LnZhbHVlO1xyXG4gICAgbGV0IGluZGV4ID0gZGF0YS5maW5kSW5kZXgoaSA9PiBpW3RoaXMuZmllbGQuZXh0cmEuc2VsZWN0ZWRfa2V5XSA9PSBpdGVtW3RoaXMuZmllbGQuZXh0cmEuc2VsZWN0ZWRfa2V5XSk7XHJcbiAgICBpZihpbmRleCAhPSAtMSl7XHJcbiAgICAgIGRhdGEuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgdGhpcy5pbnB1dC5zZXRWYWx1ZShkYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uSW1nRXJyb3IoZXZlbnQ6IGFueSl7XHJcbiAgICBsZXQgcGxhY2Vob2xkZXJQaG90byA9IHRoaXMuZ2V0UGxhY2Vob2xkZXJQaG90bygpO1xyXG4gICAgaWYocGxhY2Vob2xkZXJQaG90byA9PSAnJyl7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBldmVudC50YXJnZXQuc3JjID0gcGxhY2Vob2xkZXJQaG90bztcclxuICAgfVxyXG59XHJcbiIsIjxtYXQtZm9ybS1maWVsZCAqbmdJZj1cImlucHV0XCIgW2FwcGVhcmFuY2VdPVwiZ2V0QXBwZWFyYW5jZSgpXCIgY2xhc3M9XCJ7e2dldENsYXNlcygpfX1cIj5cclxuICAgIDxtYXQtbGFiZWwgKm5nSWY9XCJmaWVsZC5sYWJlbFwiPiB7eyBmaWVsZC5sYWJlbCB9fSA8L21hdC1sYWJlbD5cclxuXHJcbiAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cInRleHRcIiBbZm9ybUNvbnRyb2xdPVwiaW5wdXRRdWVyeVwiIFttYXRBdXRvY29tcGxldGVdPVwiYXV0b0lucHV0XCIgW3BsYWNlaG9sZGVyXT1cImdldFBsYWNlaG9sZGVyKClcIj5cclxuXHJcbiAgICA8bWF0LWF1dG9jb21wbGV0ZSAjYXV0b0lucHV0PVwibWF0QXV0b2NvbXBsZXRlXCIgW2Rpc3BsYXlXaXRoXT1cImRpc3BsYXlPcHRpb24uYmluZCh0aGlzKVwiIChvcHRpb25TZWxlY3RlZCk9XCJzZWxlY3RlZE9wdGlvbigkZXZlbnQpXCIgPlxyXG4gICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBmaWx0ZXJlZE9wdGlvbnMgfCBhc3luY1wiIFt2YWx1ZV09XCJpdGVtXCI+XHJcbiAgICAgICAge3sgZGlzcGxheU9wdGlvbihpdGVtKSB9fVxyXG4gICAgICA8L21hdC1vcHRpb24+XHJcbiAgICA8L21hdC1hdXRvY29tcGxldGU+XHJcblxyXG4gICAgPG1hdC1oaW50ICpuZ0lmPVwiZ2V0Q2FwdGlvbigpICE9ICcnXCIgW2FsaWduXT1cIidlbmQnXCI+IHt7Z2V0Q2FwdGlvbigpfX0gPC9tYXQtaGludD5cclxuPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbjxkaXYgY2xhc3M9XCJ0b3RzLWF1dG9jb21wbGV0ZS1saXN0XCI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBpdGVtIG9mIGlucHV0LnZhbHVlXCIgY2xhc3M9XCJ0b3RzLWl0ZW0tYXV0b1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b3RzLWl0ZW0taW5mb1wiPlxyXG4gICAgICAgICAgICA8aW1nICpuZ0lmPVwiaXNTaG93UGhvdG8oKVwiIFtzcmNdPVwiZGlzcGxheVBob3RvKGl0ZW0pXCIgKGVycm9yKT1cIm9uSW1nRXJyb3IoJGV2ZW50KVwiIC8+XHJcbiAgICAgICAgICAgIDxwPnt7IGRpc3BsYXlPcHRpb24oaXRlbSkgfX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvdHMtaXRlbS1yZW1vdmVcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY29sb3I9XCJ3YXJuXCIgKGNsaWNrKT1cIm9uQ2xpY2tSZW1vdmUoaXRlbSlcIj48bWF0LWljb24+Y2xvc2U8L21hdC1pY29uPjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PiJdfQ==