import { Component, HostListener, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { TotsActionModalForm } from '../../entities/tots-action-modal-form';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/common";
import * as i3 from "@tots/loading";
import * as i4 from "../../components/tots-form/tots-form.component";
import * as i5 from "../../entities/tots-modal-config";
export class TotsFormModalComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.actions = new Subject();
        this.isLoading = false;
        this.typeLoading = 'square-in-bits';
        this.colorLoading = '#80bc00';
    }
    onDocumentClick(event) {
        const target = event.target;
        if (target.classList.contains("tots-modal-backdrop")) {
            let newAction = new TotsActionModalForm();
            newAction.key = "cancel";
            newAction.item = null;
            newAction.modal = this.dialogRef;
            this.actions.next(newAction);
        }
    }
    onActionForm(action) {
        let newAction = new TotsActionModalForm();
        newAction.key = action.key;
        newAction.item = action.item;
        newAction.modal = this.dialogRef;
        this.actions.next(newAction);
    }
    showLoading(type = 'square-in-bits', color = '#80bc00') {
        this.isLoading = true;
        this.typeLoading = type;
        this.colorLoading = color;
    }
    hideLoading() {
        this.isLoading = false;
    }
}
TotsFormModalComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: TotsFormModalComponent, deps: [{ token: i1.MatDialogRef }, { token: MAT_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component });
TotsFormModalComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.3", type: TotsFormModalComponent, selector: "tots-form-modal", host: { listeners: { "document:click": "onDocumentClick($event)" } }, viewQueries: [{ propertyName: "dialog", first: true, predicate: ["dialog"], descendants: true }], ngImport: i0, template: "<div #dialog>\r\n    <h1 mat-dialog-title>{{data.title}}</h1>\r\n    <div mat-dialog-content>\r\n        <tots-form #form [fields]=\"data.fields\" [item]=\"data.item\" (onAction)=\"onActionForm($event)\" [autoSave]=\"data.autoSave ?? false\"></tots-form>\r\n    </div>\r\n    <tots-loading-factory *ngIf=\"isLoading\" [type]=\"typeLoading\" [color]=\"colorLoading\" [isFullPage]=\"true\"></tots-loading-factory>\r\n</div>", styles: [""], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: i1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "component", type: i3.LoadingFactoryComponent, selector: "tots-loading-factory", inputs: ["isFullPage", "color", "type"] }, { kind: "component", type: i4.TotsFormComponent, selector: "tots-form", inputs: ["fields", "item", "autoSave"], outputs: ["onAction"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: TotsFormModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-form-modal', template: "<div #dialog>\r\n    <h1 mat-dialog-title>{{data.title}}</h1>\r\n    <div mat-dialog-content>\r\n        <tots-form #form [fields]=\"data.fields\" [item]=\"data.item\" (onAction)=\"onActionForm($event)\" [autoSave]=\"data.autoSave ?? false\"></tots-form>\r\n    </div>\r\n    <tots-loading-factory *ngIf=\"isLoading\" [type]=\"typeLoading\" [color]=\"colorLoading\" [isFullPage]=\"true\"></tots-loading-factory>\r\n</div>" }]
        }], ctorParameters: function () { return [{ type: i1.MatDialogRef }, { type: i5.TotsModalConfig, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }]; }, propDecorators: { dialog: [{
                type: ViewChild,
                args: ['dialog']
            }], onDocumentClick: [{
                type: HostListener,
                args: ['document:click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG90cy1mb3JtLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RvdHMvZm9ybS9zcmMvbGliL21vZGFscy90b3RzLWZvcm0tbW9kYWwvdG90cy1mb3JtLW1vZGFsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RvdHMvZm9ybS9zcmMvbGliL21vZGFscy90b3RzLWZvcm0tbW9kYWwvdG90cy1mb3JtLW1vZGFsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUFnQixlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7Ozs7O0FBUzVFLE1BQU0sT0FBTyxzQkFBc0I7SUF1QmpDLFlBQ1ksU0FBK0MsRUFDekIsSUFBcUI7UUFEM0MsY0FBUyxHQUFULFNBQVMsQ0FBc0M7UUFDekIsU0FBSSxHQUFKLElBQUksQ0FBaUI7UUF2QnZELFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBdUIsQ0FBQztRQUU3QyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGdCQUFXLEdBQUcsZ0JBQWdCLENBQUM7UUFDL0IsaUJBQVksR0FBRyxTQUFTLENBQUM7SUFvQnJCLENBQUM7SUFmTCxlQUFlLENBQUMsS0FBWTtRQUMxQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBcUIsQ0FBQztRQUUzQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLEVBQUU7WUFDcEQsSUFBSSxTQUFTLEdBQUcsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO1lBQzFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLFNBQVMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLFNBQVMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM5QjtJQUNILENBQUM7SUFPRCxZQUFZLENBQUMsTUFBc0I7UUFDakMsSUFBSSxTQUFTLEdBQUcsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO1FBQzFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUMzQixTQUFTLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDN0IsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBZSxnQkFBZ0IsRUFBRSxRQUFnQixTQUFTO1FBQ3BFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQzs7bUhBNUNVLHNCQUFzQiw4Q0F5QnZCLGVBQWU7dUdBekJkLHNCQUFzQiwrTkNabkMsdWFBTU07MkZETU8sc0JBQXNCO2tCQUxsQyxTQUFTOytCQUNFLGlCQUFpQjs7MEJBNkJ4QixNQUFNOzJCQUFDLGVBQWU7NENBakJKLE1BQU07c0JBQTFCLFNBQVM7dUJBQUMsUUFBUTtnQkFHbkIsZUFBZTtzQkFEZCxZQUFZO3VCQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIEluamVjdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBUb3RzQWN0aW9uTW9kYWxGb3JtIH0gZnJvbSAnLi4vLi4vZW50aXRpZXMvdG90cy1hY3Rpb24tbW9kYWwtZm9ybSc7XHJcbmltcG9ydCB7IFRvdHNNb2RhbENvbmZpZyB9IGZyb20gJy4uLy4uL2VudGl0aWVzL3RvdHMtbW9kYWwtY29uZmlnJztcclxuaW1wb3J0IHsgVG90c0FjdGlvbkZvcm0gfSBmcm9tICcuLi8uLi9lbnRpdGllcy90b3RzLWFjdGlvbi1mb3JtJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndG90cy1mb3JtLW1vZGFsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdG90cy1mb3JtLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90b3RzLWZvcm0tbW9kYWwuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG90c0Zvcm1Nb2RhbENvbXBvbmVudCB7XHJcblxyXG4gIGFjdGlvbnMgPSBuZXcgU3ViamVjdDxUb3RzQWN0aW9uTW9kYWxGb3JtPigpO1xyXG5cclxuICBpc0xvYWRpbmcgPSBmYWxzZTtcclxuICB0eXBlTG9hZGluZyA9ICdzcXVhcmUtaW4tYml0cyc7XHJcbiAgY29sb3JMb2FkaW5nID0gJyM4MGJjMDAnO1xyXG5cclxuICBAVmlld0NoaWxkKCdkaWFsb2cnKSBkaWFsb2c/IDogRWxlbWVudFJlZjtcclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKVxyXG4gIG9uRG9jdW1lbnRDbGljayhldmVudDogRXZlbnQpOiB2b2lkIHsgICBcclxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuICAgIFxyXG4gICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0b3RzLW1vZGFsLWJhY2tkcm9wXCIpKSB7XHJcbiAgICAgIGxldCBuZXdBY3Rpb24gPSBuZXcgVG90c0FjdGlvbk1vZGFsRm9ybSgpO1xyXG4gICAgICBuZXdBY3Rpb24ua2V5ID0gXCJjYW5jZWxcIjtcclxuICAgICAgbmV3QWN0aW9uLml0ZW0gPSBudWxsO1xyXG4gICAgICBuZXdBY3Rpb24ubW9kYWwgPSB0aGlzLmRpYWxvZ1JlZjtcclxuICAgICAgdGhpcy5hY3Rpb25zLm5leHQobmV3QWN0aW9uKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJvdGVjdGVkIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFRvdHNGb3JtTW9kYWxDb21wb25lbnQ+LFxyXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBUb3RzTW9kYWxDb25maWdcclxuICApIHsgfVxyXG5cclxuICBvbkFjdGlvbkZvcm0oYWN0aW9uOiBUb3RzQWN0aW9uRm9ybSkge1xyXG4gICAgbGV0IG5ld0FjdGlvbiA9IG5ldyBUb3RzQWN0aW9uTW9kYWxGb3JtKCk7XHJcbiAgICBuZXdBY3Rpb24ua2V5ID0gYWN0aW9uLmtleTtcclxuICAgIG5ld0FjdGlvbi5pdGVtID0gYWN0aW9uLml0ZW07XHJcbiAgICBuZXdBY3Rpb24ubW9kYWwgPSB0aGlzLmRpYWxvZ1JlZjtcclxuICAgIHRoaXMuYWN0aW9ucy5uZXh0KG5ld0FjdGlvbik7XHJcbiAgfVxyXG5cclxuICBzaG93TG9hZGluZyh0eXBlOiBzdHJpbmcgPSAnc3F1YXJlLWluLWJpdHMnLCBjb2xvcjogc3RyaW5nID0gJyM4MGJjMDAnKSB7XHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLnR5cGVMb2FkaW5nID0gdHlwZTtcclxuICAgIHRoaXMuY29sb3JMb2FkaW5nID0gY29sb3I7XHJcbiAgfVxyXG5cclxuICBoaWRlTG9hZGluZygpIHtcclxuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgI2RpYWxvZz5cclxuICAgIDxoMSBtYXQtZGlhbG9nLXRpdGxlPnt7ZGF0YS50aXRsZX19PC9oMT5cclxuICAgIDxkaXYgbWF0LWRpYWxvZy1jb250ZW50PlxyXG4gICAgICAgIDx0b3RzLWZvcm0gI2Zvcm0gW2ZpZWxkc109XCJkYXRhLmZpZWxkc1wiIFtpdGVtXT1cImRhdGEuaXRlbVwiIChvbkFjdGlvbik9XCJvbkFjdGlvbkZvcm0oJGV2ZW50KVwiIFthdXRvU2F2ZV09XCJkYXRhLmF1dG9TYXZlID8/IGZhbHNlXCI+PC90b3RzLWZvcm0+XHJcbiAgICA8L2Rpdj5cclxuICAgIDx0b3RzLWxvYWRpbmctZmFjdG9yeSAqbmdJZj1cImlzTG9hZGluZ1wiIFt0eXBlXT1cInR5cGVMb2FkaW5nXCIgW2NvbG9yXT1cImNvbG9yTG9hZGluZ1wiIFtpc0Z1bGxQYWdlXT1cInRydWVcIj48L3RvdHMtbG9hZGluZy1mYWN0b3J5PlxyXG48L2Rpdj4iXX0=