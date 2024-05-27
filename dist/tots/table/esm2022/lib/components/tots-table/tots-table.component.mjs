import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { TotsTableConfig } from '../../entities/tots-table-config';
import { TOTS_TABLE_DEFAULT_CONFIG } from '../../entities/tots-table-default-config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/icon";
import * as i3 from "@angular/material/table";
import * as i4 from "@angular/material/paginator";
import * as i5 from "@angular/material/progress-bar";
import * as i6 from "../../columns/base-print-column/base-print-column.component";
import * as i7 from "../loading-animation-renderer/loading-animation-renderer.component";
import * as i8 from "../../entities/tots-table-default-config";
export class TotsTableComponent {
    //#region Setup
    constructor(changeDectetor, totsTableDefaultConfig) {
        this.changeDectetor = changeDectetor;
        this.totsTableDefaultConfig = totsTableDefaultConfig;
        this.config = new TotsTableConfig();
        this.pageIndex = 0;
        this.pageSize = 50;
        this.hasPagination = true;
        this.onAction = new EventEmitter();
        this.privateActions = new Subject();
        this.displayColumns = [];
        this.isLoading = true;
        this.firstLoad = true;
        this.messageNotFound = this.totsTableDefaultConfig.messageNotFound ? this.totsTableDefaultConfig.messageNotFound : "No results found, please try with other search terms";
        this.matColor = this.totsTableDefaultConfig.matColor != undefined ? this.totsTableDefaultConfig.matColor : "primary";
        this.upperPaginator = this.totsTableDefaultConfig.upperPaginator != undefined ? this.totsTableDefaultConfig.upperPaginator : false;
        this.lowerPaginator = this.totsTableDefaultConfig.lowerPaginator != undefined ? this.totsTableDefaultConfig.lowerPaginator : true;
        this.upperProgressBar = this.totsTableDefaultConfig.upperProgressBar != undefined ? this.totsTableDefaultConfig.upperProgressBar : false;
        this.lowerProgressBar = this.totsTableDefaultConfig.lowerProgressBar != undefined ? this.totsTableDefaultConfig.lowerProgressBar : true;
    }
    //#region Lifetime cycles
    ngOnInit() {
        this.loadConfig();
        this.loadItems();
    }
    //#endregion
    loadConfig() {
        this.loadColumns();
        this.privateActions.subscribe(action => {
            this.onAction.emit(action);
        });
    }
    loadItems() {
        this.isLoading = true;
        return this.config.obs?.pipe(tap(res => {
            this.dataItems = res;
            this.onAction.emit({ key: 'loaded-items', item: res });
        })).subscribe(() => this.stopLoading());
    }
    stopLoading() {
        this.isLoading = false;
        this.firstLoad = false;
    }
    //#endregion
    onClickOrder(column) {
        if (!column.hasOrder) {
            return;
        }
        let orderColumn = column.order;
        this.config.columns.forEach(c => c.order = undefined);
        column.order = orderColumn == 'asc' ? 'desc' : 'asc';
        this.onAction.emit({ key: 'click-order', item: column });
    }
    onClickRow(item) {
        this.onAction.emit({ key: 'click-row', item: item });
    }
    onPageChange(event) {
        this.onAction.emit({ key: 'page-change', item: event });
    }
    loadColumns() {
        this.displayColumns = this.config.columns.filter(c => c.is_show || c.is_show == undefined).map(c => c.key);
    }
    getDataItems() {
        return this.dataItems;
    }
    refreshDataItems(newData) {
        this.dataItems = newData;
    }
    detectChanges() {
        this.changeDectetor.detectChanges();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: TotsTableComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: TOTS_TABLE_DEFAULT_CONFIG }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.11", type: TotsTableComponent, selector: "tots-table", inputs: { config: "config", pageIndex: "pageIndex", pageSize: "pageSize", hasPagination: "hasPagination", messageNotFound: "messageNotFound" }, outputs: { onAction: "onAction" }, ngImport: i0, template: "<div class=\"tots-table-container {{config.classes}}\">\r\n\r\n    <!-- #region Lower paginator -->\r\n    <ng-container *ngIf=\"upperPaginator && dataItems && dataItems.data.length > 0 && hasPagination\">\r\n        <mat-paginator [pageIndex]=\"pageIndex-1\" [length]=\"dataItems!.total\" [pageSize]=\"pageSize\" (page)=\"onPageChange($event)\"></mat-paginator>\r\n    </ng-container>\r\n    <!-- #endregion -->\r\n\r\n    <!-- #region Lower progress bar -->\r\n    <ng-container *ngIf=\"upperProgressBar\">\r\n        <div class=\"tots-table-bar-loading upper\">\r\n            <mat-progress-bar *ngIf=\"isLoading && !firstLoad\" [mode]=\"'indeterminate'\" [color]=\"matColor\"></mat-progress-bar>\r\n        </div>\r\n    </ng-container>\r\n    <!-- #endregion -->\r\n\r\n    <!-- #region Table -->\r\n    <table mat-table [dataSource]=\"dataItems != undefined ? dataItems!.data : []\">\r\n\r\n        <ng-container *ngFor=\"let column of config.columns\" [matColumnDef]=\"column.key\" [stickyEnd]=\"column.extra?.stickyEnd ?? false\">\r\n            <!-- TH-->\r\n            <th mat-header-cell *matHeaderCellDef [ngClass]=\"{'tots-tr-has-order': column.hasOrder}\" (click)=\"onClickOrder(column)\">\r\n                {{ column.title }}\r\n                <mat-icon [ngClass]=\"{'sort_active': column.order == 'asc'}\">arrow_drop_up</mat-icon>\r\n                <mat-icon [ngClass]=\"{'sort_active': column.order == 'desc'}\">arrow_drop_down</mat-icon>\r\n            </th>\r\n            <!-- TD -->\r\n            <td mat-cell *matCellDef=\"let item; let index = index;\" [ngStyle]=\"{'width': column.extra?.width ? column.extra.width : 'auto'}\"><tots-base-print-column [column]=\"column\" [item]=\"item\" [index]=\"index\" [onAction]=\"privateActions\"></tots-base-print-column></td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayColumns;\" (click)=\"onClickRow(row)\" [class]=\"row.classCustom\" [ngClass]=\"{'tots-cell-selected': row.isSelected}\"></tr>\r\n\r\n        <!-- Row shown when there is no matching data. -->\r\n        <ng-container *ngIf=\"!isLoading\">\r\n            <tr class=\"tots-table-not-data\" *matNoDataRow><td class=\"mat-cell\" [colSpan]=\"config.columns.length\">{{ messageNotFound }}</td></tr>\r\n        </ng-container>\r\n    </table>\r\n    <!-- #endregion -->\r\n\r\n    <!-- #region First loading animation -->\r\n    <div *ngIf=\"isLoading && firstLoad\" class=\"tots-table-loading\">\r\n        <tots-loading-animation-renderer></tots-loading-animation-renderer>\r\n    </div>\r\n    <!-- #endregion -->\r\n\r\n    <!-- #region Lower progress bar -->\r\n    <ng-container *ngIf=\"lowerProgressBar\">\r\n        <div class=\"tots-table-bar-loading lower\">\r\n            <mat-progress-bar *ngIf=\"isLoading && !firstLoad\" [mode]=\"'indeterminate'\" [color]=\"matColor\"></mat-progress-bar>\r\n        </div>\r\n    </ng-container>\r\n    <!-- #endregion -->\r\n\r\n    <!-- #region Lower paginator -->\r\n    <ng-container *ngIf=\"lowerPaginator && dataItems && dataItems.data.length > 0 && hasPagination\">\r\n        <mat-paginator [pageIndex]=\"pageIndex-1\" [length]=\"dataItems!.total\" [pageSize]=\"pageSize\" (page)=\"onPageChange($event)\"></mat-paginator>\r\n    </ng-container>\r\n    <!-- #endregion -->\r\n\r\n</div>", styles: [".tots-table-container .mat-mdc-header-cell{position:relative}.tots-table-container .mat-mdc-header-cell mat-icon{display:none}.tots-table-container .tots-tr-has-order{cursor:pointer}.tots-table-container .tots-tr-has-order:hover mat-icon{opacity:.5}.tots-table-container .tots-tr-has-order mat-icon{display:inline;opacity:.3;position:absolute}.tots-table-container .tots-tr-has-order mat-icon:nth-of-type(1){top:12px}.tots-table-container .tots-tr-has-order mat-icon:nth-of-type(2){top:20px}.tots-table-container .tots-tr-has-order .sort_active{opacity:1!important}.tots-table-container .tots-table-loading{display:flex;justify-content:center;text-align:center}.tots-table-container .tots-table-bar-loading{height:4px}.tots-table-container .tots-table-not-data{font-size:large;text-align:center}.tots-table-container .tots-table-not-data td{padding:24px}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i3.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i3.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i3.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i3.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i3.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i3.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i3.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i3.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i3.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i3.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "directive", type: i3.MatNoDataRow, selector: "ng-template[matNoDataRow]" }, { kind: "component", type: i4.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }, { kind: "component", type: i5.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }, { kind: "component", type: i6.BasePrintColumnComponent, selector: "tots-base-print-column", inputs: ["column", "item", "onAction", "index"] }, { kind: "component", type: i7.LoadingAnimationRendererComponent, selector: "tots-loading-animation-renderer" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: TotsTableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-table', template: "<div class=\"tots-table-container {{config.classes}}\">\r\n\r\n    <!-- #region Lower paginator -->\r\n    <ng-container *ngIf=\"upperPaginator && dataItems && dataItems.data.length > 0 && hasPagination\">\r\n        <mat-paginator [pageIndex]=\"pageIndex-1\" [length]=\"dataItems!.total\" [pageSize]=\"pageSize\" (page)=\"onPageChange($event)\"></mat-paginator>\r\n    </ng-container>\r\n    <!-- #endregion -->\r\n\r\n    <!-- #region Lower progress bar -->\r\n    <ng-container *ngIf=\"upperProgressBar\">\r\n        <div class=\"tots-table-bar-loading upper\">\r\n            <mat-progress-bar *ngIf=\"isLoading && !firstLoad\" [mode]=\"'indeterminate'\" [color]=\"matColor\"></mat-progress-bar>\r\n        </div>\r\n    </ng-container>\r\n    <!-- #endregion -->\r\n\r\n    <!-- #region Table -->\r\n    <table mat-table [dataSource]=\"dataItems != undefined ? dataItems!.data : []\">\r\n\r\n        <ng-container *ngFor=\"let column of config.columns\" [matColumnDef]=\"column.key\" [stickyEnd]=\"column.extra?.stickyEnd ?? false\">\r\n            <!-- TH-->\r\n            <th mat-header-cell *matHeaderCellDef [ngClass]=\"{'tots-tr-has-order': column.hasOrder}\" (click)=\"onClickOrder(column)\">\r\n                {{ column.title }}\r\n                <mat-icon [ngClass]=\"{'sort_active': column.order == 'asc'}\">arrow_drop_up</mat-icon>\r\n                <mat-icon [ngClass]=\"{'sort_active': column.order == 'desc'}\">arrow_drop_down</mat-icon>\r\n            </th>\r\n            <!-- TD -->\r\n            <td mat-cell *matCellDef=\"let item; let index = index;\" [ngStyle]=\"{'width': column.extra?.width ? column.extra.width : 'auto'}\"><tots-base-print-column [column]=\"column\" [item]=\"item\" [index]=\"index\" [onAction]=\"privateActions\"></tots-base-print-column></td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayColumns;\" (click)=\"onClickRow(row)\" [class]=\"row.classCustom\" [ngClass]=\"{'tots-cell-selected': row.isSelected}\"></tr>\r\n\r\n        <!-- Row shown when there is no matching data. -->\r\n        <ng-container *ngIf=\"!isLoading\">\r\n            <tr class=\"tots-table-not-data\" *matNoDataRow><td class=\"mat-cell\" [colSpan]=\"config.columns.length\">{{ messageNotFound }}</td></tr>\r\n        </ng-container>\r\n    </table>\r\n    <!-- #endregion -->\r\n\r\n    <!-- #region First loading animation -->\r\n    <div *ngIf=\"isLoading && firstLoad\" class=\"tots-table-loading\">\r\n        <tots-loading-animation-renderer></tots-loading-animation-renderer>\r\n    </div>\r\n    <!-- #endregion -->\r\n\r\n    <!-- #region Lower progress bar -->\r\n    <ng-container *ngIf=\"lowerProgressBar\">\r\n        <div class=\"tots-table-bar-loading lower\">\r\n            <mat-progress-bar *ngIf=\"isLoading && !firstLoad\" [mode]=\"'indeterminate'\" [color]=\"matColor\"></mat-progress-bar>\r\n        </div>\r\n    </ng-container>\r\n    <!-- #endregion -->\r\n\r\n    <!-- #region Lower paginator -->\r\n    <ng-container *ngIf=\"lowerPaginator && dataItems && dataItems.data.length > 0 && hasPagination\">\r\n        <mat-paginator [pageIndex]=\"pageIndex-1\" [length]=\"dataItems!.total\" [pageSize]=\"pageSize\" (page)=\"onPageChange($event)\"></mat-paginator>\r\n    </ng-container>\r\n    <!-- #endregion -->\r\n\r\n</div>", styles: [".tots-table-container .mat-mdc-header-cell{position:relative}.tots-table-container .mat-mdc-header-cell mat-icon{display:none}.tots-table-container .tots-tr-has-order{cursor:pointer}.tots-table-container .tots-tr-has-order:hover mat-icon{opacity:.5}.tots-table-container .tots-tr-has-order mat-icon{display:inline;opacity:.3;position:absolute}.tots-table-container .tots-tr-has-order mat-icon:nth-of-type(1){top:12px}.tots-table-container .tots-tr-has-order mat-icon:nth-of-type(2){top:20px}.tots-table-container .tots-tr-has-order .sort_active{opacity:1!important}.tots-table-container .tots-table-loading{display:flex;justify-content:center;text-align:center}.tots-table-container .tots-table-bar-loading{height:4px}.tots-table-container .tots-table-not-data{font-size:large;text-align:center}.tots-table-container .tots-table-not-data td{padding:24px}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i8.TotsTableDefaultConfig, decorators: [{
                    type: Inject,
                    args: [TOTS_TABLE_DEFAULT_CONFIG]
                }] }]; }, propDecorators: { config: [{
                type: Input
            }], pageIndex: [{
                type: Input
            }], pageSize: [{
                type: Input
            }], hasPagination: [{
                type: Input
            }], messageNotFound: [{
                type: Input
            }], onAction: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG90cy10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90b3RzL3RhYmxlL3NyYy9saWIvY29tcG9uZW50cy90b3RzLXRhYmxlL3RvdHMtdGFibGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdG90cy90YWJsZS9zcmMvbGliL2NvbXBvbmVudHMvdG90cy10YWJsZS90b3RzLXRhYmxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBcUIsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcxRyxPQUFPLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUdwQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFFLHlCQUF5QixFQUEwQixNQUFNLDBDQUEwQyxDQUFDOzs7Ozs7Ozs7O0FBUTdHLE1BQU0sT0FBTyxrQkFBa0I7SUF1QjdCLGVBQWU7SUFDZixZQUNZLGNBQWlDLEVBQ0Esc0JBQStDO1FBRGhGLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQUNBLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBeUI7UUF4Qm5GLFdBQU0sR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO1FBQy9CLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixrQkFBYSxHQUFZLElBQUksQ0FBQztRQUc3QixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDekQsbUJBQWMsR0FBRyxJQUFJLE9BQU8sRUFBbUIsQ0FBQztRQUdoRCxtQkFBYyxHQUFrQixFQUFFLENBQUM7UUFFbkMsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixjQUFT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NENBeEIxQixNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csZUFBZTtzQkFBdkIsS0FBSztnQkFFSSxRQUFRO3NCQUFqQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQYWdlRXZlbnQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xyXG5pbXBvcnQgeyBUb3RzTGlzdFJlc3BvbnNlIH0gZnJvbSAnQHRvdHMvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QsIHRhcCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBUb3RzQWN0aW9uVGFibGUgfSBmcm9tICcuLi8uLi9lbnRpdGllcy90b3RzLWFjdGlvbi10YWJsZSc7XHJcbmltcG9ydCB7IFRvdHNDb2x1bW4gfSBmcm9tICcuLi8uLi9lbnRpdGllcy90b3RzLWNvbHVtbic7XHJcbmltcG9ydCB7IFRvdHNUYWJsZUNvbmZpZyB9IGZyb20gJy4uLy4uL2VudGl0aWVzL3RvdHMtdGFibGUtY29uZmlnJztcclxuaW1wb3J0IHsgVE9UU19UQUJMRV9ERUZBVUxUX0NPTkZJRywgVG90c1RhYmxlRGVmYXVsdENvbmZpZyB9IGZyb20gJy4uLy4uL2VudGl0aWVzL3RvdHMtdGFibGUtZGVmYXVsdC1jb25maWcnO1xyXG5pbXBvcnQgeyBUaGVtZVBhbGV0dGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndG90cy10YWJsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RvdHMtdGFibGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RvdHMtdGFibGUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG90c1RhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgY29uZmlnID0gbmV3IFRvdHNUYWJsZUNvbmZpZygpO1xyXG4gIEBJbnB1dCgpIHBhZ2VJbmRleDogbnVtYmVyID0gMDtcclxuICBASW5wdXQoKSBwYWdlU2l6ZTogbnVtYmVyID0gNTA7XHJcbiAgQElucHV0KCkgaGFzUGFnaW5hdGlvbjogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgbWVzc2FnZU5vdEZvdW5kISA6IHN0cmluZztcclxuXHJcbiAgQE91dHB1dCgpIG9uQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjxUb3RzQWN0aW9uVGFibGU+KCk7XHJcbiAgcHJpdmF0ZUFjdGlvbnMgPSBuZXcgU3ViamVjdDxUb3RzQWN0aW9uVGFibGU+KCk7XHJcblxyXG4gIGRhdGFJdGVtcz86IFRvdHNMaXN0UmVzcG9uc2U8YW55PjtcclxuICBkaXNwbGF5Q29sdW1uczogQXJyYXk8U3RyaW5nPiA9IFtdO1xyXG5cclxuICBpc0xvYWRpbmcgPSB0cnVlO1xyXG4gIGZpcnN0TG9hZCA9IHRydWU7XHJcbiAgbWF0Q29sb3IgOiBUaGVtZVBhbGV0dGU7XHJcblxyXG4gIHVwcGVyUGFnaW5hdG9yIDogYm9vbGVhbjtcclxuICBsb3dlclBhZ2luYXRvciA6IGJvb2xlYW47XHJcbiAgdXBwZXJQcm9ncmVzc0JhciA6IGJvb2xlYW47XHJcbiAgbG93ZXJQcm9ncmVzc0JhciA6IGJvb2xlYW47XHJcblxyXG4gIC8vI3JlZ2lvbiBTZXR1cFxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJvdGVjdGVkIGNoYW5nZURlY3RldG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEBJbmplY3QoVE9UU19UQUJMRV9ERUZBVUxUX0NPTkZJRykgcHJpdmF0ZSB0b3RzVGFibGVEZWZhdWx0Q29uZmlnIDogVG90c1RhYmxlRGVmYXVsdENvbmZpZyxcclxuICApIHtcclxuICAgIHRoaXMubWVzc2FnZU5vdEZvdW5kID0gdGhpcy50b3RzVGFibGVEZWZhdWx0Q29uZmlnLm1lc3NhZ2VOb3RGb3VuZCA/IHRoaXMudG90c1RhYmxlRGVmYXVsdENvbmZpZy5tZXNzYWdlTm90Rm91bmQgOiBcIk5vIHJlc3VsdHMgZm91bmQsIHBsZWFzZSB0cnkgd2l0aCBvdGhlciBzZWFyY2ggdGVybXNcIjtcclxuICAgIHRoaXMubWF0Q29sb3IgPSB0aGlzLnRvdHNUYWJsZURlZmF1bHRDb25maWcubWF0Q29sb3IgIT0gdW5kZWZpbmVkID8gdGhpcy50b3RzVGFibGVEZWZhdWx0Q29uZmlnLm1hdENvbG9yIDogXCJwcmltYXJ5XCI7XHJcbiAgICB0aGlzLnVwcGVyUGFnaW5hdG9yID0gdGhpcy50b3RzVGFibGVEZWZhdWx0Q29uZmlnLnVwcGVyUGFnaW5hdG9yICE9IHVuZGVmaW5lZCA/IHRoaXMudG90c1RhYmxlRGVmYXVsdENvbmZpZy51cHBlclBhZ2luYXRvciA6IGZhbHNlO1xyXG4gICAgdGhpcy5sb3dlclBhZ2luYXRvciA9IHRoaXMudG90c1RhYmxlRGVmYXVsdENvbmZpZy5sb3dlclBhZ2luYXRvciAhPSB1bmRlZmluZWQgPyB0aGlzLnRvdHNUYWJsZURlZmF1bHRDb25maWcubG93ZXJQYWdpbmF0b3IgOiB0cnVlO1xyXG4gICAgdGhpcy51cHBlclByb2dyZXNzQmFyID0gdGhpcy50b3RzVGFibGVEZWZhdWx0Q29uZmlnLnVwcGVyUHJvZ3Jlc3NCYXIgIT0gdW5kZWZpbmVkID8gdGhpcy50b3RzVGFibGVEZWZhdWx0Q29uZmlnLnVwcGVyUHJvZ3Jlc3NCYXIgOiBmYWxzZTtcclxuICAgIHRoaXMubG93ZXJQcm9ncmVzc0JhciA9IHRoaXMudG90c1RhYmxlRGVmYXVsdENvbmZpZy5sb3dlclByb2dyZXNzQmFyICE9IHVuZGVmaW5lZCA/IHRoaXMudG90c1RhYmxlRGVmYXVsdENvbmZpZy5sb3dlclByb2dyZXNzQmFyIDogdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8vI3JlZ2lvbiBMaWZldGltZSBjeWNsZXNcclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubG9hZENvbmZpZygpO1xyXG4gICAgdGhpcy5sb2FkSXRlbXMoKTsgICAgICBcclxuICB9XHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIGxvYWRDb25maWcoKSB7XHJcbiAgICB0aGlzLmxvYWRDb2x1bW5zKCk7XHJcbiAgICB0aGlzLnByaXZhdGVBY3Rpb25zLnN1YnNjcmliZShhY3Rpb24gPT4ge1xyXG4gICAgICB0aGlzLm9uQWN0aW9uLmVtaXQoYWN0aW9uKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBsb2FkSXRlbXMoKSB7XHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcub2JzPy5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHtcclxuICAgICAgICB0aGlzLmRhdGFJdGVtcyA9IHJlcztcclxuICAgICAgICB0aGlzLm9uQWN0aW9uLmVtaXQoeyBrZXk6ICdsb2FkZWQtaXRlbXMnLCBpdGVtOiByZXMgfSlcclxuICAgICAgfSlcclxuICAgICkuc3Vic2NyaWJlKCgpPT4gdGhpcy5zdG9wTG9hZGluZygpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RvcExvYWRpbmcoKSB7XHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5maXJzdExvYWQgPSBmYWxzZTtcclxuICB9XHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIG9uQ2xpY2tPcmRlcihjb2x1bW46IFRvdHNDb2x1bW4pIHtcclxuICAgIGlmKCFjb2x1bW4uaGFzT3JkZXIpeyByZXR1cm47IH1cclxuICAgIGxldCBvcmRlckNvbHVtbiA9IGNvbHVtbi5vcmRlcjtcclxuICAgIHRoaXMuY29uZmlnLmNvbHVtbnMuZm9yRWFjaChjID0+IGMub3JkZXIgPSB1bmRlZmluZWQpO1xyXG4gICAgY29sdW1uLm9yZGVyID0gb3JkZXJDb2x1bW4gPT0gJ2FzYycgPyAnZGVzYycgOiAnYXNjJztcclxuICAgIHRoaXMub25BY3Rpb24uZW1pdCh7IGtleTogJ2NsaWNrLW9yZGVyJywgaXRlbTogY29sdW1uIH0pO1xyXG4gIH1cclxuXHJcbiAgb25DbGlja1JvdyhpdGVtOiBhbnkpIHtcclxuICAgIHRoaXMub25BY3Rpb24uZW1pdCh7IGtleTogJ2NsaWNrLXJvdycsIGl0ZW06IGl0ZW0gfSk7XHJcbiAgfVxyXG5cclxuICBvblBhZ2VDaGFuZ2UoZXZlbnQ6IFBhZ2VFdmVudCkge1xyXG4gICAgdGhpcy5vbkFjdGlvbi5lbWl0KHsga2V5OiAncGFnZS1jaGFuZ2UnLCBpdGVtOiBldmVudCB9KTtcclxuICB9XHJcblxyXG4gIGxvYWRDb2x1bW5zKCkge1xyXG4gICAgdGhpcy5kaXNwbGF5Q29sdW1ucyA9IHRoaXMuY29uZmlnLmNvbHVtbnMuZmlsdGVyKGMgPT4gYy5pc19zaG93IHx8IGMuaXNfc2hvdyA9PSB1bmRlZmluZWQpLm1hcChjID0+IGMua2V5KTtcclxuICB9XHJcblxyXG4gIGdldERhdGFJdGVtcygpOiBUb3RzTGlzdFJlc3BvbnNlPGFueT4gfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YUl0ZW1zO1xyXG4gIH1cclxuXHJcbiAgcmVmcmVzaERhdGFJdGVtcyhuZXdEYXRhOiBUb3RzTGlzdFJlc3BvbnNlPGFueT4gfCB1bmRlZmluZWQpIHtcclxuICAgIHRoaXMuZGF0YUl0ZW1zID0gbmV3RGF0YTtcclxuICB9XHJcblxyXG4gIGRldGVjdENoYW5nZXMoKSB7XHJcbiAgICB0aGlzLmNoYW5nZURlY3RldG9yLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInRvdHMtdGFibGUtY29udGFpbmVyIHt7Y29uZmlnLmNsYXNzZXN9fVwiPlxyXG5cclxuICAgIDwhLS0gI3JlZ2lvbiBMb3dlciBwYWdpbmF0b3IgLS0+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidXBwZXJQYWdpbmF0b3IgJiYgZGF0YUl0ZW1zICYmIGRhdGFJdGVtcy5kYXRhLmxlbmd0aCA+IDAgJiYgaGFzUGFnaW5hdGlvblwiPlxyXG4gICAgICAgIDxtYXQtcGFnaW5hdG9yIFtwYWdlSW5kZXhdPVwicGFnZUluZGV4LTFcIiBbbGVuZ3RoXT1cImRhdGFJdGVtcyEudG90YWxcIiBbcGFnZVNpemVdPVwicGFnZVNpemVcIiAocGFnZSk9XCJvblBhZ2VDaGFuZ2UoJGV2ZW50KVwiPjwvbWF0LXBhZ2luYXRvcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPCEtLSAjZW5kcmVnaW9uIC0tPlxyXG5cclxuICAgIDwhLS0gI3JlZ2lvbiBMb3dlciBwcm9ncmVzcyBiYXIgLS0+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidXBwZXJQcm9ncmVzc0JhclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b3RzLXRhYmxlLWJhci1sb2FkaW5nIHVwcGVyXCI+XHJcbiAgICAgICAgICAgIDxtYXQtcHJvZ3Jlc3MtYmFyICpuZ0lmPVwiaXNMb2FkaW5nICYmICFmaXJzdExvYWRcIiBbbW9kZV09XCInaW5kZXRlcm1pbmF0ZSdcIiBbY29sb3JdPVwibWF0Q29sb3JcIj48L21hdC1wcm9ncmVzcy1iYXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwhLS0gI2VuZHJlZ2lvbiAtLT5cclxuXHJcbiAgICA8IS0tICNyZWdpb24gVGFibGUgLS0+XHJcbiAgICA8dGFibGUgbWF0LXRhYmxlIFtkYXRhU291cmNlXT1cImRhdGFJdGVtcyAhPSB1bmRlZmluZWQgPyBkYXRhSXRlbXMhLmRhdGEgOiBbXVwiPlxyXG5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29uZmlnLmNvbHVtbnNcIiBbbWF0Q29sdW1uRGVmXT1cImNvbHVtbi5rZXlcIiBbc3RpY2t5RW5kXT1cImNvbHVtbi5leHRyYT8uc3RpY2t5RW5kID8/IGZhbHNlXCI+XHJcbiAgICAgICAgICAgIDwhLS0gVEgtLT5cclxuICAgICAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBbbmdDbGFzc109XCJ7J3RvdHMtdHItaGFzLW9yZGVyJzogY29sdW1uLmhhc09yZGVyfVwiIChjbGljayk9XCJvbkNsaWNrT3JkZXIoY29sdW1uKVwiPlxyXG4gICAgICAgICAgICAgICAge3sgY29sdW1uLnRpdGxlIH19XHJcbiAgICAgICAgICAgICAgICA8bWF0LWljb24gW25nQ2xhc3NdPVwieydzb3J0X2FjdGl2ZSc6IGNvbHVtbi5vcmRlciA9PSAnYXNjJ31cIj5hcnJvd19kcm9wX3VwPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBbbmdDbGFzc109XCJ7J3NvcnRfYWN0aXZlJzogY29sdW1uLm9yZGVyID09ICdkZXNjJ31cIj5hcnJvd19kcm9wX2Rvd248L21hdC1pY29uPlxyXG4gICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICA8IS0tIFREIC0tPlxyXG4gICAgICAgICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgaXRlbTsgbGV0IGluZGV4ID0gaW5kZXg7XCIgW25nU3R5bGVdPVwieyd3aWR0aCc6IGNvbHVtbi5leHRyYT8ud2lkdGggPyBjb2x1bW4uZXh0cmEud2lkdGggOiAnYXV0byd9XCI+PHRvdHMtYmFzZS1wcmludC1jb2x1bW4gW2NvbHVtbl09XCJjb2x1bW5cIiBbaXRlbV09XCJpdGVtXCIgW2luZGV4XT1cImluZGV4XCIgW29uQWN0aW9uXT1cInByaXZhdGVBY3Rpb25zXCI+PC90b3RzLWJhc2UtcHJpbnQtY29sdW1uPjwvdGQ+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgIDx0ciBtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiZGlzcGxheUNvbHVtbnNcIj48L3RyPlxyXG4gICAgICAgIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5Q29sdW1ucztcIiAoY2xpY2spPVwib25DbGlja1Jvdyhyb3cpXCIgW2NsYXNzXT1cInJvdy5jbGFzc0N1c3RvbVwiIFtuZ0NsYXNzXT1cInsndG90cy1jZWxsLXNlbGVjdGVkJzogcm93LmlzU2VsZWN0ZWR9XCI+PC90cj5cclxuXHJcbiAgICAgICAgPCEtLSBSb3cgc2hvd24gd2hlbiB0aGVyZSBpcyBubyBtYXRjaGluZyBkYXRhLiAtLT5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzTG9hZGluZ1wiPlxyXG4gICAgICAgICAgICA8dHIgY2xhc3M9XCJ0b3RzLXRhYmxlLW5vdC1kYXRhXCIgKm1hdE5vRGF0YVJvdz48dGQgY2xhc3M9XCJtYXQtY2VsbFwiIFtjb2xTcGFuXT1cImNvbmZpZy5jb2x1bW5zLmxlbmd0aFwiPnt7IG1lc3NhZ2VOb3RGb3VuZCB9fTwvdGQ+PC90cj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvdGFibGU+XHJcbiAgICA8IS0tICNlbmRyZWdpb24gLS0+XHJcblxyXG4gICAgPCEtLSAjcmVnaW9uIEZpcnN0IGxvYWRpbmcgYW5pbWF0aW9uIC0tPlxyXG4gICAgPGRpdiAqbmdJZj1cImlzTG9hZGluZyAmJiBmaXJzdExvYWRcIiBjbGFzcz1cInRvdHMtdGFibGUtbG9hZGluZ1wiPlxyXG4gICAgICAgIDx0b3RzLWxvYWRpbmctYW5pbWF0aW9uLXJlbmRlcmVyPjwvdG90cy1sb2FkaW5nLWFuaW1hdGlvbi1yZW5kZXJlcj5cclxuICAgIDwvZGl2PlxyXG4gICAgPCEtLSAjZW5kcmVnaW9uIC0tPlxyXG5cclxuICAgIDwhLS0gI3JlZ2lvbiBMb3dlciBwcm9ncmVzcyBiYXIgLS0+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibG93ZXJQcm9ncmVzc0JhclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b3RzLXRhYmxlLWJhci1sb2FkaW5nIGxvd2VyXCI+XHJcbiAgICAgICAgICAgIDxtYXQtcHJvZ3Jlc3MtYmFyICpuZ0lmPVwiaXNMb2FkaW5nICYmICFmaXJzdExvYWRcIiBbbW9kZV09XCInaW5kZXRlcm1pbmF0ZSdcIiBbY29sb3JdPVwibWF0Q29sb3JcIj48L21hdC1wcm9ncmVzcy1iYXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwhLS0gI2VuZHJlZ2lvbiAtLT5cclxuXHJcbiAgICA8IS0tICNyZWdpb24gTG93ZXIgcGFnaW5hdG9yIC0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImxvd2VyUGFnaW5hdG9yICYmIGRhdGFJdGVtcyAmJiBkYXRhSXRlbXMuZGF0YS5sZW5ndGggPiAwICYmIGhhc1BhZ2luYXRpb25cIj5cclxuICAgICAgICA8bWF0LXBhZ2luYXRvciBbcGFnZUluZGV4XT1cInBhZ2VJbmRleC0xXCIgW2xlbmd0aF09XCJkYXRhSXRlbXMhLnRvdGFsXCIgW3BhZ2VTaXplXT1cInBhZ2VTaXplXCIgKHBhZ2UpPVwib25QYWdlQ2hhbmdlKCRldmVudClcIj48L21hdC1wYWdpbmF0b3I+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwhLS0gI2VuZHJlZ2lvbiAtLT5cclxuXHJcbjwvZGl2PiJdfQ==