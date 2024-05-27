import { Component } from '@angular/core';
import { TotsBaseFieldComponent } from '../tots-base-field.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/icon";
export class FilesListFieldComponent extends TotsBaseFieldComponent {
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
    displayName(item) {
        if (item == undefined) {
            return '';
        }
        return item[this.field.extra.display_key];
    }
}
FilesListFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: FilesListFieldComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
FilesListFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.3", type: FilesListFieldComponent, selector: "tots-files-list-field", usesInheritance: true, ngImport: i0, template: "<div class=\"tots-files-list-field\">\r\n    <input type=\"hidden\" [formControl]=\"input\" />\r\n    <input #inputFile type=\"file\" style=\"display: none;\" (change)=\"onChange($event.target)\">\r\n\r\n    <div class=\"tots-header-files\">\r\n        <h6>{{field.label}}</h6>\r\n        <button mat-button (click)=\"inputFile.click()\">{{field.extra.textAddButton}}</button>\r\n    </div>\r\n    <div *ngIf=\"input.value\" class=\"tots-files-list\">\r\n        <div class=\"tots-file\" *ngFor=\"let file of input.value\">\r\n            <div class=\"tots-file-name\">\r\n                <mat-icon>insert_drive_file</mat-icon>\r\n                <span>{{displayName(file)}}</span>\r\n            </div>\r\n            <div class=\"tots-file-actions\">\r\n                <button mat-icon-button (click)=\"onClickRemove(file)\">\r\n                    <mat-icon>delete</mat-icon>\r\n                </button>\r\n            </div>\r\n        </div>\r\n</div>\r\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i3.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: FilesListFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-files-list-field', template: "<div class=\"tots-files-list-field\">\r\n    <input type=\"hidden\" [formControl]=\"input\" />\r\n    <input #inputFile type=\"file\" style=\"display: none;\" (change)=\"onChange($event.target)\">\r\n\r\n    <div class=\"tots-header-files\">\r\n        <h6>{{field.label}}</h6>\r\n        <button mat-button (click)=\"inputFile.click()\">{{field.extra.textAddButton}}</button>\r\n    </div>\r\n    <div *ngIf=\"input.value\" class=\"tots-files-list\">\r\n        <div class=\"tots-file\" *ngFor=\"let file of input.value\">\r\n            <div class=\"tots-file-name\">\r\n                <mat-icon>insert_drive_file</mat-icon>\r\n                <span>{{displayName(file)}}</span>\r\n            </div>\r\n            <div class=\"tots-file-actions\">\r\n                <button mat-icon-button (click)=\"onClickRemove(file)\">\r\n                    <mat-icon>delete</mat-icon>\r\n                </button>\r\n            </div>\r\n        </div>\r\n</div>\r\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZXMtbGlzdC1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90b3RzL2Zvcm0vc3JjL2xpYi9maWVsZHMvZmlsZXMtbGlzdC1maWVsZC9maWxlcy1saXN0LWZpZWxkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RvdHMvZm9ybS9zcmMvbGliL2ZpZWxkcy9maWxlcy1saXN0LWZpZWxkL2ZpbGVzLWxpc3QtZmllbGQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7O0FBT3RFLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxzQkFBc0I7SUFMbkU7O1FBT0UsbUJBQWMsR0FBRyxDQUFDLENBQUM7S0ErQ3BCO0lBN0NDLFFBQVEsQ0FBQyxNQUFXO1FBQ2xCLDhCQUE4QjtRQUM5QixJQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBQztZQUMxQixPQUFPO1NBQ1I7UUFDRCw4QkFBOEI7UUFDOUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztJQUVELGFBQWEsQ0FBQyxJQUFTO1FBQ3JCLG9CQUFvQjtRQUNwQixJQUFJLFlBQVksR0FBZSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNoRCxpQ0FBaUM7UUFDakMsWUFBWSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7UUFDbkQsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBVTtRQUNuQiw2QkFBNkI7UUFDN0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXRCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBVyxFQUFFLEVBQUU7WUFDOUQsb0JBQW9CO1lBQ3BCLElBQUksWUFBWSxHQUFlLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ2hELElBQUcsWUFBWSxJQUFJLFNBQVMsSUFBRSxZQUFZLElBQUksSUFBSSxFQUFDO2dCQUNqRCxZQUFZLEdBQUcsSUFBSSxLQUFLLEVBQU8sQ0FBQzthQUNqQztZQUNELGdDQUFnQztZQUNoQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFCLGdCQUFnQjtZQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNsQyw2QkFBNkI7WUFDN0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVcsQ0FBQyxJQUFTO1FBQ25CLElBQUcsSUFBSSxJQUFJLFNBQVMsRUFBQztZQUNuQixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7b0hBaERVLHVCQUF1Qjt3R0FBdkIsdUJBQXVCLG9GQ1JwQyxvOEJBcUJBOzJGRGJhLHVCQUF1QjtrQkFMbkMsU0FBUzsrQkFDRSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVG90c0Jhc2VGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL3RvdHMtYmFzZS1maWVsZC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0b3RzLWZpbGVzLWxpc3QtZmllbGQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9maWxlcy1saXN0LWZpZWxkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9maWxlcy1saXN0LWZpZWxkLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmlsZXNMaXN0RmllbGRDb21wb25lbnQgZXh0ZW5kcyBUb3RzQmFzZUZpZWxkQ29tcG9uZW50IHtcclxuXHJcbiAgdXBsb2FkaW5nQ291bnQgPSAwO1xyXG5cclxuICBvbkNoYW5nZSh0YXJnZXQ6IGFueSkge1xyXG4gICAgLy8gVmVyaWZ5IGlmIHNlbGVjdGVkIG9uZSBmaWxlXHJcbiAgICBpZih0YXJnZXQuZmlsZXMubGVuZ3RoID09IDApe1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBGb3IgZWFjaCBhbGwgZmlsZXMgc2VsZWN0ZWRcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFyZ2V0LmZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRoaXMudXBsb2FkRmlsZSh0YXJnZXQuZmlsZXNbaV0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DbGlja1JlbW92ZShpdGVtOiBhbnkpIHtcclxuICAgIC8vIEdldCBjdXJyZW50IHZhbHVlXHJcbiAgICBsZXQgY3VycmVudFZhbHVlOiBBcnJheTxhbnk+ID0gdGhpcy5pbnB1dC52YWx1ZTtcclxuICAgIC8vIFJlbW92ZSBpdGVtIGZyb20gY3VycmVudCB2YWx1ZVxyXG4gICAgY3VycmVudFZhbHVlID0gY3VycmVudFZhbHVlLmZpbHRlcihpID0+IGkgIT0gaXRlbSk7XHJcbiAgICAvLyBTZXQgbmV3IHZhbHVlXHJcbiAgICB0aGlzLmlucHV0LnNldFZhbHVlKGN1cnJlbnRWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICB1cGxvYWRGaWxlKGZpbGU6IEZpbGUpIHtcclxuICAgIC8vIFN1bSBvbmUgdG8gdXBsb2FkaW5nIGNvdW50XHJcbiAgICB0aGlzLnVwbG9hZGluZ0NvdW50Kys7XHJcblxyXG4gICAgdGhpcy5maWVsZC5leHRyYS5zZXJ2aWNlLnVwbG9hZChmaWxlKS5zdWJzY3JpYmUoKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgIC8vIEdldCBjdXJyZW50IHZhbHVlXHJcbiAgICAgIGxldCBjdXJyZW50VmFsdWU6IEFycmF5PGFueT4gPSB0aGlzLmlucHV0LnZhbHVlO1xyXG4gICAgICBpZihjdXJyZW50VmFsdWUgPT0gdW5kZWZpbmVkfHxjdXJyZW50VmFsdWUgPT0gbnVsbCl7XHJcbiAgICAgICAgY3VycmVudFZhbHVlID0gbmV3IEFycmF5PGFueT4oKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBBZGQgbmV3IGZpbGUgdG8gY3VycmVudCB2YWx1ZVxyXG4gICAgICBjdXJyZW50VmFsdWUucHVzaChyZXN1bHQpO1xyXG4gICAgICAvLyBTZXQgbmV3IHZhbHVlXHJcbiAgICAgIHRoaXMuaW5wdXQuc2V0VmFsdWUoY3VycmVudFZhbHVlKTtcclxuICAgICAgLy8gU3ViIG9uZSB0byB1cGxvYWRpbmcgY291bnRcclxuICAgICAgdGhpcy51cGxvYWRpbmdDb3VudC0tO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5TmFtZShpdGVtOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgaWYoaXRlbSA9PSB1bmRlZmluZWQpe1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXRlbVt0aGlzLmZpZWxkLmV4dHJhLmRpc3BsYXlfa2V5XTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInRvdHMtZmlsZXMtbGlzdC1maWVsZFwiPlxyXG4gICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBbZm9ybUNvbnRyb2xdPVwiaW5wdXRcIiAvPlxyXG4gICAgPGlucHV0ICNpbnB1dEZpbGUgdHlwZT1cImZpbGVcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCIgKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQudGFyZ2V0KVwiPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJ0b3RzLWhlYWRlci1maWxlc1wiPlxyXG4gICAgICAgIDxoNj57e2ZpZWxkLmxhYmVsfX08L2g2PlxyXG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwiaW5wdXRGaWxlLmNsaWNrKClcIj57e2ZpZWxkLmV4dHJhLnRleHRBZGRCdXR0b259fTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2ICpuZ0lmPVwiaW5wdXQudmFsdWVcIiBjbGFzcz1cInRvdHMtZmlsZXMtbGlzdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b3RzLWZpbGVcIiAqbmdGb3I9XCJsZXQgZmlsZSBvZiBpbnB1dC52YWx1ZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG90cy1maWxlLW5hbWVcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5pbnNlcnRfZHJpdmVfZmlsZTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57e2Rpc3BsYXlOYW1lKGZpbGUpfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG90cy1maWxlLWFjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJvbkNsaWNrUmVtb3ZlKGZpbGUpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPmRlbGV0ZTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=