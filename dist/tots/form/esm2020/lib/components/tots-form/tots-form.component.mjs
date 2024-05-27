import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/icon";
import * as i4 from "../../fields/base-print-field/base-print-field.component";
export class TotsFormComponent {
    constructor(changeDetector) {
        this.changeDetector = changeDetector;
        this.fields = new Array();
        this.autoSave = false;
        this.onAction = new EventEmitter();
        this.privateActions = new Subject();
        this.group = new UntypedFormGroup({});
    }
    ngOnInit() {
        this.loadConfig();
    }
    ngAfterViewInit() {
        this.updateFormByItem();
        this.activateAutoSave();
        this.emitInit();
    }
    updateFormByItem() {
        if (this.item == undefined) {
            return;
        }
        // Each all fields
        for (const field of this.fields) {
            field.component.updateFormByItem(this.group, this.item, field);
        }
        // Refresh view
        this.changeDetector.detectChanges();
    }
    updateItemByForm() {
        if (this.item == undefined) {
            return;
        }
        for (const field of this.fields) {
            field.component.updateItemByForm(this.group, this.item, field);
        }
        return this.item;
    }
    getItemByForm() {
        let newItem = Object.assign({}, this.item);
        ;
        for (const field of this.fields) {
            field.component.updateItemByForm(this.group, newItem, field);
        }
        return newItem;
    }
    loadConfig() {
        this.privateActions.subscribe(action => {
            action.item = this.getItemByForm();
            this.onAction.emit(action);
        });
    }
    activateAutoSave() {
        if (!this.autoSave) {
            return;
        }
        this.group.valueChanges.subscribe(values => {
            this.updateItemByForm();
        });
    }
    emitInit() {
        this.onAction.emit({ key: 'tots-form-init', item: undefined });
    }
    isHasIcon(field) {
        if (field.extra && field.extra.icon) {
            return true;
        }
        return false;
    }
    getIconField(field) {
        if (field.extra && field.extra.icon) {
            return field.extra.icon;
        }
        return '';
    }
    hasError(field) {
        let control = this.group.get(field.key);
        if (control == undefined) {
            return false;
        }
        return !control.valid;
    }
    getErrors(field) {
        let control = this.group.get(field.key);
        if (control == undefined) {
            return [];
        }
        return control.errors ? Object.keys(control.errors) : [];
    }
    getFormGroup() {
        return this.group;
    }
    setItem(item) {
        this.item = item;
        this.updateFormByItem();
    }
}
TotsFormComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: TotsFormComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
TotsFormComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.3", type: TotsFormComponent, selector: "tots-form", inputs: { fields: "fields", item: "item", autoSave: "autoSave" }, outputs: { onAction: "onAction" }, ngImport: i0, template: "<form [formGroup]=\"group\">\r\n    <div class=\"tots-form-print\">\r\n        <div *ngFor=\"let field of fields\" class=\"tots-field-main-container\">\r\n            <mat-icon *ngIf=\"isHasIcon(field)\">{{getIconField(field)}}</mat-icon>\r\n            <div class=\"tots-field-print-container\"><tots-base-print-field [field]=\"field\" [group]=\"group\" [onAction]=\"privateActions\"></tots-base-print-field></div>\r\n        </div>\r\n    </div>\r\n</form>\r\n", styles: [".tots-field-main-container{display:flex;width:100%}.tots-field-main-container tots-base-print-field{width:1px;display:none}.tots-field-main-container mat-icon{width:24px;margin-top:14px;margin-right:20px}.tots-field-main-container .tots-field-print-container{width:100%}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i4.BasePrintFieldComponent, selector: "tots-base-print-field", inputs: ["field", "group", "onAction"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: TotsFormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-form', template: "<form [formGroup]=\"group\">\r\n    <div class=\"tots-form-print\">\r\n        <div *ngFor=\"let field of fields\" class=\"tots-field-main-container\">\r\n            <mat-icon *ngIf=\"isHasIcon(field)\">{{getIconField(field)}}</mat-icon>\r\n            <div class=\"tots-field-print-container\"><tots-base-print-field [field]=\"field\" [group]=\"group\" [onAction]=\"privateActions\"></tots-base-print-field></div>\r\n        </div>\r\n    </div>\r\n</form>\r\n", styles: [".tots-field-main-container{display:flex;width:100%}.tots-field-main-container tots-base-print-field{width:1px;display:none}.tots-field-main-container mat-icon{width:24px;margin-top:14px;margin-right:20px}.tots-field-main-container .tots-field-print-container{width:100%}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { fields: [{
                type: Input
            }], item: [{
                type: Input
            }], autoSave: [{
                type: Input
            }], onAction: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG90cy1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RvdHMvZm9ybS9zcmMvbGliL2NvbXBvbmVudHMvdG90cy1mb3JtL3RvdHMtZm9ybS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90b3RzL2Zvcm0vc3JjL2xpYi9jb21wb25lbnRzL3RvdHMtZm9ybS90b3RzLWZvcm0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFvQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakgsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7O0FBUy9CLE1BQU0sT0FBTyxpQkFBaUI7SUFXNUIsWUFDWSxjQUFpQztRQUFqQyxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFWcEMsV0FBTSxHQUF5QixJQUFJLEtBQUssRUFBaUIsQ0FBQztRQUUxRCxhQUFRLEdBQVksS0FBSyxDQUFDO1FBRXpCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQztRQUN4RCxtQkFBYyxHQUFHLElBQUksT0FBTyxFQUFrQixDQUFDO1FBRS9DLFVBQUssR0FBcUIsSUFBSSxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUkvQyxDQUFDO0lBRUwsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsZ0JBQWdCO1FBQ2Qs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QUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEMsSUFBRyxPQUFPLElBQUksU0FBUyxFQUFDO1lBQ3RCLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDM0QsQ0FBQztJQUVNLFlBQVk7UUFDakIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxPQUFPLENBQUMsSUFBUztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7OzhHQTVHVSxpQkFBaUI7a0dBQWpCLGlCQUFpQixzSkNYOUIsZ2RBUUE7MkZER2EsaUJBQWlCO2tCQUw3QixTQUFTOytCQUNFLFdBQVc7d0dBTVosTUFBTTtzQkFBZCxLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUVJLFFBQVE7c0JBQWpCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVbnR5cGVkRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFRvdHNBY3Rpb25Gb3JtIH0gZnJvbSAnLi4vLi4vZW50aXRpZXMvdG90cy1hY3Rpb24tZm9ybSc7XHJcbmltcG9ydCB7IFRvdHNGaWVsZEZvcm0gfSBmcm9tICcuLi8uLi9lbnRpdGllcy90b3RzLWZpZWxkLWZvcm0nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0b3RzLWZvcm0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90b3RzLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RvdHMtZm9ybS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb3RzRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGZpZWxkczogQXJyYXk8VG90c0ZpZWxkRm9ybT4gPSBuZXcgQXJyYXk8VG90c0ZpZWxkRm9ybT4oKTtcclxuICBASW5wdXQoKSBpdGVtOiBhbnk7XHJcbiAgQElucHV0KCkgYXV0b1NhdmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQE91dHB1dCgpIG9uQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjxUb3RzQWN0aW9uRm9ybT4oKTtcclxuICBwcml2YXRlQWN0aW9ucyA9IG5ldyBTdWJqZWN0PFRvdHNBY3Rpb25Gb3JtPigpO1xyXG5cclxuICBncm91cDogVW50eXBlZEZvcm1Hcm91cCA9IG5ldyBVbnR5cGVkRm9ybUdyb3VwKHt9KTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2FkQ29uZmlnKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZUZvcm1CeUl0ZW0oKTtcclxuICAgIHRoaXMuYWN0aXZhdGVBdXRvU2F2ZSgpO1xyXG4gICAgdGhpcy5lbWl0SW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlRm9ybUJ5SXRlbSgpIHtcclxuICAgIGlmKHRoaXMuaXRlbSA9PSB1bmRlZmluZWQpe1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBFYWNoIGFsbCBmaWVsZHNcclxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5maWVsZHMpIHtcclxuICAgICAgZmllbGQuY29tcG9uZW50LnVwZGF0ZUZvcm1CeUl0ZW0odGhpcy5ncm91cCwgdGhpcy5pdGVtLCBmaWVsZCk7XHJcbiAgICB9XHJcbiAgICAvLyBSZWZyZXNoIHZpZXdcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlSXRlbUJ5Rm9ybSgpIHtcclxuICAgIGlmKHRoaXMuaXRlbSA9PSB1bmRlZmluZWQpe1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMuZmllbGRzKSB7XHJcbiAgICAgIGZpZWxkLmNvbXBvbmVudC51cGRhdGVJdGVtQnlGb3JtKHRoaXMuZ3JvdXAsIHRoaXMuaXRlbSwgZmllbGQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaXRlbTtcclxuICB9XHJcblxyXG4gIGdldEl0ZW1CeUZvcm0oKSB7XHJcbiAgICBsZXQgbmV3SXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuaXRlbSk7O1xyXG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLmZpZWxkcykge1xyXG4gICAgICBmaWVsZC5jb21wb25lbnQudXBkYXRlSXRlbUJ5Rm9ybSh0aGlzLmdyb3VwLCBuZXdJdGVtLCBmaWVsZCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3SXRlbTtcclxuICB9XHJcblxyXG4gIGxvYWRDb25maWcoKSB7XHJcbiAgICB0aGlzLnByaXZhdGVBY3Rpb25zLnN1YnNjcmliZShhY3Rpb24gPT4ge1xyXG4gICAgICBhY3Rpb24uaXRlbSA9IHRoaXMuZ2V0SXRlbUJ5Rm9ybSgpO1xyXG4gICAgICB0aGlzLm9uQWN0aW9uLmVtaXQoYWN0aW9uKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWN0aXZhdGVBdXRvU2F2ZSgpIHtcclxuICAgIGlmKCF0aGlzLmF1dG9TYXZlKXtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB0aGlzLmdyb3VwLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWVzID0+IHtcclxuICAgICAgdGhpcy51cGRhdGVJdGVtQnlGb3JtKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGVtaXRJbml0KCkge1xyXG4gICAgdGhpcy5vbkFjdGlvbi5lbWl0KHsga2V5OiAndG90cy1mb3JtLWluaXQnLCBpdGVtOiB1bmRlZmluZWQgfSk7XHJcbiAgfVxyXG5cclxuICBpc0hhc0ljb24oZmllbGQ6IFRvdHNGaWVsZEZvcm0pIHtcclxuICAgIGlmKGZpZWxkLmV4dHJhICYmIGZpZWxkLmV4dHJhLmljb24peyByZXR1cm4gdHJ1ZTsgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0SWNvbkZpZWxkKGZpZWxkOiBUb3RzRmllbGRGb3JtKSB7XHJcbiAgICBpZihmaWVsZC5leHRyYSAmJiBmaWVsZC5leHRyYS5pY29uKXsgcmV0dXJuIGZpZWxkLmV4dHJhLmljb247IH1cclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG4gIGhhc0Vycm9yKGZpZWxkOiBUb3RzRmllbGRGb3JtKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZ3JvdXAuZ2V0KGZpZWxkLmtleSk7XHJcbiAgICBpZihjb250cm9sID09IHVuZGVmaW5lZCl7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiAhY29udHJvbC52YWxpZDtcclxuICB9XHJcblxyXG4gIGdldEVycm9ycyhmaWVsZDogVG90c0ZpZWxkRm9ybSk6QXJyYXk8c3RyaW5nPiB7XHJcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZ3JvdXAuZ2V0KGZpZWxkLmtleSk7XHJcbiAgICBpZihjb250cm9sID09IHVuZGVmaW5lZCl7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIHJldHVybiBjb250cm9sLmVycm9ycyA/IE9iamVjdC5rZXlzKGNvbnRyb2wuZXJyb3JzKSA6IFtdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEZvcm1Hcm91cCgpOiBVbnR5cGVkRm9ybUdyb3VwIHtcclxuICAgIHJldHVybiB0aGlzLmdyb3VwO1xyXG4gIH1cclxuXHJcbiAgc2V0SXRlbShpdGVtOiBhbnkpIHtcclxuICAgIHRoaXMuaXRlbSA9IGl0ZW07XHJcbiAgICB0aGlzLnVwZGF0ZUZvcm1CeUl0ZW0oKTtcclxuICB9XHJcbn1cclxuIiwiPGZvcm0gW2Zvcm1Hcm91cF09XCJncm91cFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInRvdHMtZm9ybS1wcmludFwiPlxyXG4gICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGZpZWxkc1wiIGNsYXNzPVwidG90cy1maWVsZC1tYWluLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8bWF0LWljb24gKm5nSWY9XCJpc0hhc0ljb24oZmllbGQpXCI+e3tnZXRJY29uRmllbGQoZmllbGQpfX08L21hdC1pY29uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG90cy1maWVsZC1wcmludC1jb250YWluZXJcIj48dG90cy1iYXNlLXByaW50LWZpZWxkIFtmaWVsZF09XCJmaWVsZFwiIFtncm91cF09XCJncm91cFwiIFtvbkFjdGlvbl09XCJwcml2YXRlQWN0aW9uc1wiPjwvdG90cy1iYXNlLXByaW50LWZpZWxkPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZm9ybT5cclxuIl19