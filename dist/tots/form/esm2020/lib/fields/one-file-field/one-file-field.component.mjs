import { Component } from '@angular/core';
import { TotsBaseFieldComponent } from '../tots-base-field.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/icon";
export class OneFileFieldComponent extends TotsBaseFieldComponent {
    constructor() {
        super(...arguments);
        this.isUploading = false;
    }
    onChange(target) {
        // Verify if selected one file
        if (target.files.length == 0) {
            return;
        }
        // Upload file
        this.uploadFile(target.files[0]);
    }
    onClickRemove() {
        // Set new value
        this.input.setValue(undefined);
    }
    uploadFile(file) {
        // Show loading
        this.isUploading = true;
        this.field.extra.service.upload(file).subscribe((result) => {
            // Set new value
            this.input.setValue(result);
            // Hide loading
            this.isUploading = false;
        });
    }
    displayName(item) {
        if (item == undefined) {
            return '';
        }
        return item[this.field.extra.display_key];
    }
}
OneFileFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: OneFileFieldComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
OneFileFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.3", type: OneFileFieldComponent, selector: "tots-one-file-field", usesInheritance: true, ngImport: i0, template: "<div class=\"tots-files-list-field\">\r\n    <input type=\"hidden\" [formControl]=\"input\" />\r\n    <input #inputFile type=\"file\" style=\"display: none;\" (change)=\"onChange($event.target)\">\r\n\r\n    <div *ngIf=\"input.value\" class=\"tots-file\">\r\n        <div class=\"tots-file-name\">\r\n            <mat-icon>insert_drive_file</mat-icon>\r\n            <span>{{displayName(input.value)}}</span>\r\n        </div>\r\n        <div class=\"tots-file-actions\">\r\n            <button mat-icon-button (click)=\"onClickRemove()\">\r\n                <mat-icon>delete</mat-icon>\r\n            </button>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"input.value == undefined\" class=\"file-not-uploaded\" (click)=\"inputFile.click()\">\r\n        <div class=\"tots-file-name\">\r\n            <mat-icon>insert_drive_file</mat-icon>\r\n            <span>{{field.label}}</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: OneFileFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-one-file-field', template: "<div class=\"tots-files-list-field\">\r\n    <input type=\"hidden\" [formControl]=\"input\" />\r\n    <input #inputFile type=\"file\" style=\"display: none;\" (change)=\"onChange($event.target)\">\r\n\r\n    <div *ngIf=\"input.value\" class=\"tots-file\">\r\n        <div class=\"tots-file-name\">\r\n            <mat-icon>insert_drive_file</mat-icon>\r\n            <span>{{displayName(input.value)}}</span>\r\n        </div>\r\n        <div class=\"tots-file-actions\">\r\n            <button mat-icon-button (click)=\"onClickRemove()\">\r\n                <mat-icon>delete</mat-icon>\r\n            </button>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"input.value == undefined\" class=\"file-not-uploaded\" (click)=\"inputFile.click()\">\r\n        <div class=\"tots-file-name\">\r\n            <mat-icon>insert_drive_file</mat-icon>\r\n            <span>{{field.label}}</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lLWZpbGUtZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdG90cy9mb3JtL3NyYy9saWIvZmllbGRzL29uZS1maWxlLWZpZWxkL29uZS1maWxlLWZpZWxkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RvdHMvZm9ybS9zcmMvbGliL2ZpZWxkcy9vbmUtZmlsZS1maWVsZC9vbmUtZmlsZS1maWVsZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7QUFPdEUsTUFBTSxPQUFPLHFCQUFzQixTQUFRLHNCQUFzQjtJQUxqRTs7UUFPRSxnQkFBVyxHQUFHLEtBQUssQ0FBQztLQWtDckI7SUFoQ0MsUUFBUSxDQUFDLE1BQVc7UUFDbEIsOEJBQThCO1FBQzlCLElBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFDO1lBQzFCLE9BQU87U0FDUjtRQUNELGNBQWM7UUFDZCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsYUFBYTtRQUNYLGdCQUFnQjtRQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsVUFBVSxDQUFDLElBQVU7UUFDbkIsZUFBZTtRQUNmLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBRXhCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBVyxFQUFFLEVBQUU7WUFDOUQsZ0JBQWdCO1lBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVCLGVBQWU7WUFDZixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXLENBQUMsSUFBUztRQUNuQixJQUFHLElBQUksSUFBSSxTQUFTLEVBQUM7WUFDbkIsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7O2tIQW5DVSxxQkFBcUI7c0dBQXJCLHFCQUFxQixrRkNSbEMsNjZCQXVCQTsyRkRmYSxxQkFBcUI7a0JBTGpDLFNBQVM7K0JBQ0UscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRvdHNCYXNlRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi90b3RzLWJhc2UtZmllbGQuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndG90cy1vbmUtZmlsZS1maWVsZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL29uZS1maWxlLWZpZWxkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9vbmUtZmlsZS1maWVsZC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE9uZUZpbGVGaWVsZENvbXBvbmVudCBleHRlbmRzIFRvdHNCYXNlRmllbGRDb21wb25lbnQge1xyXG5cclxuICBpc1VwbG9hZGluZyA9IGZhbHNlO1xyXG5cclxuICBvbkNoYW5nZSh0YXJnZXQ6IGFueSkge1xyXG4gICAgLy8gVmVyaWZ5IGlmIHNlbGVjdGVkIG9uZSBmaWxlXHJcbiAgICBpZih0YXJnZXQuZmlsZXMubGVuZ3RoID09IDApe1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBVcGxvYWQgZmlsZVxyXG4gICAgdGhpcy51cGxvYWRGaWxlKHRhcmdldC5maWxlc1swXSk7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrUmVtb3ZlKCkge1xyXG4gICAgLy8gU2V0IG5ldyB2YWx1ZVxyXG4gICAgdGhpcy5pbnB1dC5zZXRWYWx1ZSh1bmRlZmluZWQpO1xyXG4gIH1cclxuXHJcbiAgdXBsb2FkRmlsZShmaWxlOiBGaWxlKSB7XHJcbiAgICAvLyBTaG93IGxvYWRpbmdcclxuICAgIHRoaXMuaXNVcGxvYWRpbmcgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuZmllbGQuZXh0cmEuc2VydmljZS51cGxvYWQoZmlsZSkuc3Vic2NyaWJlKChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICAvLyBTZXQgbmV3IHZhbHVlXHJcbiAgICAgIHRoaXMuaW5wdXQuc2V0VmFsdWUocmVzdWx0KTtcclxuICAgICAgLy8gSGlkZSBsb2FkaW5nXHJcbiAgICAgIHRoaXMuaXNVcGxvYWRpbmcgPSBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGlzcGxheU5hbWUoaXRlbTogYW55KTogc3RyaW5nIHtcclxuICAgIGlmKGl0ZW0gPT0gdW5kZWZpbmVkKXtcclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGl0ZW1bdGhpcy5maWVsZC5leHRyYS5kaXNwbGF5X2tleV07XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJ0b3RzLWZpbGVzLWxpc3QtZmllbGRcIj5cclxuICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgW2Zvcm1Db250cm9sXT1cImlucHV0XCIgLz5cclxuICAgIDxpbnB1dCAjaW5wdXRGaWxlIHR5cGU9XCJmaWxlXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiIChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50LnRhcmdldClcIj5cclxuXHJcbiAgICA8ZGl2ICpuZ0lmPVwiaW5wdXQudmFsdWVcIiBjbGFzcz1cInRvdHMtZmlsZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b3RzLWZpbGUtbmFtZVwiPlxyXG4gICAgICAgICAgICA8bWF0LWljb24+aW5zZXJ0X2RyaXZlX2ZpbGU8L21hdC1pY29uPlxyXG4gICAgICAgICAgICA8c3Bhbj57e2Rpc3BsYXlOYW1lKGlucHV0LnZhbHVlKX19PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b3RzLWZpbGUtYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwib25DbGlja1JlbW92ZSgpXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWljb24+ZGVsZXRlPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2ICpuZ0lmPVwiaW5wdXQudmFsdWUgPT0gdW5kZWZpbmVkXCIgY2xhc3M9XCJmaWxlLW5vdC11cGxvYWRlZFwiIChjbGljayk9XCJpbnB1dEZpbGUuY2xpY2soKVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b3RzLWZpbGUtbmFtZVwiPlxyXG4gICAgICAgICAgICA8bWF0LWljb24+aW5zZXJ0X2RyaXZlX2ZpbGU8L21hdC1pY29uPlxyXG4gICAgICAgICAgICA8c3Bhbj57e2ZpZWxkLmxhYmVsfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==