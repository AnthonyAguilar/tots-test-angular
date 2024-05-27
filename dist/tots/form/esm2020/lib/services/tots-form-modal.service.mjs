import { Injectable } from '@angular/core';
import { TotsFormModalComponent } from '../../public-api';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
export class TotsFormModalService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    open(config) {
        let dialogRef = this.dialog.open(TotsFormModalComponent, {
            width: '700px',
            panelClass: 'tots-form-modal-overlay-pane',
            backdropClass: "tots-modal-backdrop",
            data: config
        });
        return dialogRef.componentInstance.actions;
    }
}
TotsFormModalService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: TotsFormModalService, deps: [{ token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Injectable });
TotsFormModalService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: TotsFormModalService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: TotsFormModalService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.MatDialog }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG90cy1mb3JtLW1vZGFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90b3RzL2Zvcm0vc3JjL2xpYi9zZXJ2aWNlcy90b3RzLWZvcm0tbW9kYWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBdUIsc0JBQXNCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7O0FBTS9FLE1BQU0sT0FBTyxvQkFBb0I7SUFFL0IsWUFDWSxNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQ3pCLENBQUM7SUFFTCxJQUFJLENBQUMsTUFBdUI7UUFDMUIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDdkQsS0FBSyxFQUFFLE9BQU87WUFDZCxVQUFVLEVBQUUsOEJBQThCO1lBQzFDLGFBQWEsRUFBRSxxQkFBcUI7WUFDcEMsSUFBSSxFQUFFLE1BQU07U0FDYixDQUFDLENBQUM7UUFDSCxPQUFPLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7SUFDN0MsQ0FBQzs7aUhBZFUsb0JBQW9CO3FIQUFwQixvQkFBb0IsY0FGbkIsTUFBTTsyRkFFUCxvQkFBb0I7a0JBSGhDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFRvdHNBY3Rpb25Nb2RhbEZvcm0sIFRvdHNGb3JtTW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9wdWJsaWMtYXBpJztcclxuaW1wb3J0IHsgVG90c01vZGFsQ29uZmlnIH0gZnJvbSAnLi4vZW50aXRpZXMvdG90cy1tb2RhbC1jb25maWcnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVG90c0Zvcm1Nb2RhbFNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCBkaWFsb2c6IE1hdERpYWxvZ1xyXG4gICkgeyB9XHJcblxyXG4gIG9wZW4oY29uZmlnOiBUb3RzTW9kYWxDb25maWcpOiBPYnNlcnZhYmxlPFRvdHNBY3Rpb25Nb2RhbEZvcm0+IHtcclxuICAgIGxldCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKFRvdHNGb3JtTW9kYWxDb21wb25lbnQsIHtcclxuICAgICAgd2lkdGg6ICc3MDBweCcsXHJcbiAgICAgIHBhbmVsQ2xhc3M6ICd0b3RzLWZvcm0tbW9kYWwtb3ZlcmxheS1wYW5lJyxcclxuICAgICAgYmFja2Ryb3BDbGFzczogXCJ0b3RzLW1vZGFsLWJhY2tkcm9wXCIsXHJcbiAgICAgIGRhdGE6IGNvbmZpZ1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZGlhbG9nUmVmLmNvbXBvbmVudEluc3RhbmNlLmFjdGlvbnM7XHJcbiAgfVxyXG59XHJcbiJdfQ==