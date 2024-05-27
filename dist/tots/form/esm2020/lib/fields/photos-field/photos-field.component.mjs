import { Component } from '@angular/core';
import { TotsBaseFieldComponent } from '../tots-base-field.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/icon";
export class PhotosFieldComponent extends TotsBaseFieldComponent {
    constructor() {
        super(...arguments);
        this.uploadingCount = 0;
    }
    onChange(target) {
        // Verify if selected one file
        if (target.files.length == 0) {
            return;
        }
        // For each all files selected
        for (let i = 0; i < target.files.length; i++) {
            this.uploadFile(target.files[i]);
        }
    }
    onClickRemove(item) {
        // Get current value
        let currentValue = this.input.value;
        // Remove item from current value
        currentValue = currentValue.filter(i => i != item);
        // Set new value
        this.input.setValue(currentValue);
    }
    uploadFile(file) {
        // Sum one to uploading count
        this.uploadingCount++;
        this.field.extra.service.upload(file).subscribe((result) => {
            // Get current value
            let currentValue = this.input.value;
            if (currentValue == undefined || currentValue == null) {
                currentValue = new Array();
            }
            // Add new file to current value
            currentValue.push(result);
            // Set new value
            this.input.setValue(currentValue);
            // Sub one to uploading count
            this.uploadingCount--;
        });
    }
    displayUrl(item) {
        if (item == undefined) {
            return '';
        }
        return item[this.field.extra.display_key];
    }
}
PhotosFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: PhotosFieldComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
PhotosFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.3", type: PhotosFieldComponent, selector: "tots-photos-field", usesInheritance: true, ngImport: i0, template: "<div class=\"tots-photos-field\">\r\n    <input type=\"hidden\" [formControl]=\"input\" />\r\n    <input #inputFile type=\"file\" accept=\"image/png, image/jpeg, image/gif\" style=\"display: none;\" (change)=\"onChange($event.target)\">\r\n\r\n    <div class=\"tots-photo-upload-button\" (click)=\"inputFile.click();\">\r\n        <mat-icon>home</mat-icon>\r\n        <h6>{{field.label}}</h6>\r\n    </div>\r\n    <div *ngIf=\"input.value\" class=\"tots-photos-list\">\r\n        <div class=\"tots-file\" *ngFor=\"let file of input.value\">\r\n            <img [src]=\"displayUrl(file)\" />\r\n            <div class=\"tots-photo-actions\">\r\n                <button mat-icon-button (click)=\"onClickRemove(file)\">\r\n                    <mat-icon>delete</mat-icon>\r\n                </button>\r\n            </div>\r\n        </div>\r\n</div>\r\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: PhotosFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-photos-field', template: "<div class=\"tots-photos-field\">\r\n    <input type=\"hidden\" [formControl]=\"input\" />\r\n    <input #inputFile type=\"file\" accept=\"image/png, image/jpeg, image/gif\" style=\"display: none;\" (change)=\"onChange($event.target)\">\r\n\r\n    <div class=\"tots-photo-upload-button\" (click)=\"inputFile.click();\">\r\n        <mat-icon>home</mat-icon>\r\n        <h6>{{field.label}}</h6>\r\n    </div>\r\n    <div *ngIf=\"input.value\" class=\"tots-photos-list\">\r\n        <div class=\"tots-file\" *ngFor=\"let file of input.value\">\r\n            <img [src]=\"displayUrl(file)\" />\r\n            <div class=\"tots-photo-actions\">\r\n                <button mat-icon-button (click)=\"onClickRemove(file)\">\r\n                    <mat-icon>delete</mat-icon>\r\n                </button>\r\n            </div>\r\n        </div>\r\n</div>\r\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvdG9zLWZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RvdHMvZm9ybS9zcmMvbGliL2ZpZWxkcy9waG90b3MtZmllbGQvcGhvdG9zLWZpZWxkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RvdHMvZm9ybS9zcmMvbGliL2ZpZWxkcy9waG90b3MtZmllbGQvcGhvdG9zLWZpZWxkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7OztBQU90RSxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsc0JBQXNCO0lBTGhFOztRQU9FLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO0tBK0NwQjtJQTdDQyxRQUFRLENBQUMsTUFBVztRQUNsQiw4QkFBOEI7UUFDOUIsSUFBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUM7WUFDMUIsT0FBTztTQUNSO1FBQ0QsOEJBQThCO1FBQzlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsQztJQUNILENBQUM7SUFFRCxhQUFhLENBQUMsSUFBUztRQUNyQixvQkFBb0I7UUFDcEIsSUFBSSxZQUFZLEdBQWUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDaEQsaUNBQWlDO1FBQ2pDLFlBQVksR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO1FBQ25ELGdCQUFnQjtRQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsVUFBVSxDQUFDLElBQVU7UUFDbkIsNkJBQTZCO1FBQzdCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV0QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFO1lBQzlELG9CQUFvQjtZQUNwQixJQUFJLFlBQVksR0FBZSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUNoRCxJQUFHLFlBQVksSUFBSSxTQUFTLElBQUUsWUFBWSxJQUFJLElBQUksRUFBQztnQkFDakQsWUFBWSxHQUFHLElBQUksS0FBSyxFQUFPLENBQUM7YUFDakM7WUFDRCxnQ0FBZ0M7WUFDaEMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxQixnQkFBZ0I7WUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDbEMsNkJBQTZCO1lBQzdCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBUztRQUNsQixJQUFHLElBQUksSUFBSSxTQUFTLEVBQUM7WUFDbkIsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7O2lIQWhEVSxvQkFBb0I7cUdBQXBCLG9CQUFvQixnRkNSakMsbzFCQWtCQTsyRkRWYSxvQkFBb0I7a0JBTGhDLFNBQVM7K0JBQ0UsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRvdHNCYXNlRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi90b3RzLWJhc2UtZmllbGQuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndG90cy1waG90b3MtZmllbGQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9waG90b3MtZmllbGQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3Bob3Rvcy1maWVsZC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBob3Rvc0ZpZWxkQ29tcG9uZW50IGV4dGVuZHMgVG90c0Jhc2VGaWVsZENvbXBvbmVudCB7XHJcblxyXG4gIHVwbG9hZGluZ0NvdW50ID0gMDtcclxuXHJcbiAgb25DaGFuZ2UodGFyZ2V0OiBhbnkpIHtcclxuICAgIC8vIFZlcmlmeSBpZiBzZWxlY3RlZCBvbmUgZmlsZVxyXG4gICAgaWYodGFyZ2V0LmZpbGVzLmxlbmd0aCA9PSAwKXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gRm9yIGVhY2ggYWxsIGZpbGVzIHNlbGVjdGVkXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhcmdldC5maWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLnVwbG9hZEZpbGUodGFyZ2V0LmZpbGVzW2ldKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2xpY2tSZW1vdmUoaXRlbTogYW55KSB7XHJcbiAgICAvLyBHZXQgY3VycmVudCB2YWx1ZVxyXG4gICAgbGV0IGN1cnJlbnRWYWx1ZTogQXJyYXk8YW55PiA9IHRoaXMuaW5wdXQudmFsdWU7XHJcbiAgICAvLyBSZW1vdmUgaXRlbSBmcm9tIGN1cnJlbnQgdmFsdWVcclxuICAgIGN1cnJlbnRWYWx1ZSA9IGN1cnJlbnRWYWx1ZS5maWx0ZXIoaSA9PiBpICE9IGl0ZW0pO1xyXG4gICAgLy8gU2V0IG5ldyB2YWx1ZVxyXG4gICAgdGhpcy5pbnB1dC5zZXRWYWx1ZShjdXJyZW50VmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgdXBsb2FkRmlsZShmaWxlOiBGaWxlKSB7XHJcbiAgICAvLyBTdW0gb25lIHRvIHVwbG9hZGluZyBjb3VudFxyXG4gICAgdGhpcy51cGxvYWRpbmdDb3VudCsrO1xyXG5cclxuICAgIHRoaXMuZmllbGQuZXh0cmEuc2VydmljZS51cGxvYWQoZmlsZSkuc3Vic2NyaWJlKChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICAvLyBHZXQgY3VycmVudCB2YWx1ZVxyXG4gICAgICBsZXQgY3VycmVudFZhbHVlOiBBcnJheTxhbnk+ID0gdGhpcy5pbnB1dC52YWx1ZTtcclxuICAgICAgaWYoY3VycmVudFZhbHVlID09IHVuZGVmaW5lZHx8Y3VycmVudFZhbHVlID09IG51bGwpe1xyXG4gICAgICAgIGN1cnJlbnRWYWx1ZSA9IG5ldyBBcnJheTxhbnk+KCk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gQWRkIG5ldyBmaWxlIHRvIGN1cnJlbnQgdmFsdWVcclxuICAgICAgY3VycmVudFZhbHVlLnB1c2gocmVzdWx0KTtcclxuICAgICAgLy8gU2V0IG5ldyB2YWx1ZVxyXG4gICAgICB0aGlzLmlucHV0LnNldFZhbHVlKGN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgIC8vIFN1YiBvbmUgdG8gdXBsb2FkaW5nIGNvdW50XHJcbiAgICAgIHRoaXMudXBsb2FkaW5nQ291bnQtLTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGlzcGxheVVybChpdGVtOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgaWYoaXRlbSA9PSB1bmRlZmluZWQpe1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXRlbVt0aGlzLmZpZWxkLmV4dHJhLmRpc3BsYXlfa2V5XTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInRvdHMtcGhvdG9zLWZpZWxkXCI+XHJcbiAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIFtmb3JtQ29udHJvbF09XCJpbnB1dFwiIC8+XHJcbiAgICA8aW5wdXQgI2lucHV0RmlsZSB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cImltYWdlL3BuZywgaW1hZ2UvanBlZywgaW1hZ2UvZ2lmXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiIChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50LnRhcmdldClcIj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwidG90cy1waG90by11cGxvYWQtYnV0dG9uXCIgKGNsaWNrKT1cImlucHV0RmlsZS5jbGljaygpO1wiPlxyXG4gICAgICAgIDxtYXQtaWNvbj5ob21lPC9tYXQtaWNvbj5cclxuICAgICAgICA8aDY+e3tmaWVsZC5sYWJlbH19PC9oNj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiAqbmdJZj1cImlucHV0LnZhbHVlXCIgY2xhc3M9XCJ0b3RzLXBob3Rvcy1saXN0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvdHMtZmlsZVwiICpuZ0Zvcj1cImxldCBmaWxlIG9mIGlucHV0LnZhbHVlXCI+XHJcbiAgICAgICAgICAgIDxpbWcgW3NyY109XCJkaXNwbGF5VXJsKGZpbGUpXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvdHMtcGhvdG8tYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cIm9uQ2xpY2tSZW1vdmUoZmlsZSlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+ZGVsZXRlPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==