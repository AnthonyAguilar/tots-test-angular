import { Component } from '@angular/core';
import { OptionColumnComponent } from '../option-column/option-column.component';
import { TotsTableHelper } from '../../helpers/tots-table-helper';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/icon";
export class StatusIconColumnComponent extends OptionColumnComponent {
    getFontColor() {
        let value = TotsTableHelper.getItemValueByKey(this.item, this.column.field_key);
        for (const item of this.column.extra.options) {
            if (item[this.column.extra.field_rel_key] == value && item['font_color'] != undefined) {
                return item['font_color'];
            }
        }
        return '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: StatusIconColumnComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.11", type: StatusIconColumnComponent, selector: "tots-status-icon-column", usesInheritance: true, ngImport: i0, template: "<span class=\"tots-status-icon-column\" [ngStyle]=\"{'color': getFontColor()}\"><mat-icon>{{getItemValue()}}</mat-icon></span>", styles: [""], dependencies: [{ kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: StatusIconColumnComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-status-icon-column', template: "<span class=\"tots-status-icon-column\" [ngStyle]=\"{'color': getFontColor()}\"><mat-icon>{{getItemValue()}}</mat-icon></span>" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWljb24tY29sdW1uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RvdHMvdGFibGUvc3JjL2xpYi9jb2x1bW5zL3N0YXR1cy1pY29uLWNvbHVtbi9zdGF0dXMtaWNvbi1jb2x1bW4uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdG90cy90YWJsZS9zcmMvbGliL2NvbHVtbnMvc3RhdHVzLWljb24tY29sdW1uL3N0YXR1cy1pY29uLWNvbHVtbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7OztBQU9sRSxNQUFNLE9BQU8seUJBQTBCLFNBQVEscUJBQXFCO0lBRWxFLFlBQVk7UUFDVixJQUFJLEtBQUssR0FBRyxlQUFlLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hGLEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQzVDLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksU0FBUyxFQUFDO2dCQUNuRixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUMzQjtTQUNGO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDOytHQVZVLHlCQUF5QjttR0FBekIseUJBQXlCLHNGQ1R0QyxnSUFBMEg7OzRGRFM3Ryx5QkFBeUI7a0JBTHJDLFNBQVM7K0JBQ0UseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9wdGlvbkNvbHVtbkNvbXBvbmVudCB9IGZyb20gJy4uL29wdGlvbi1jb2x1bW4vb3B0aW9uLWNvbHVtbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUb3RzVGFibGVIZWxwZXIgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3RvdHMtdGFibGUtaGVscGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndG90cy1zdGF0dXMtaWNvbi1jb2x1bW4nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zdGF0dXMtaWNvbi1jb2x1bW4uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N0YXR1cy1pY29uLWNvbHVtbi5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN0YXR1c0ljb25Db2x1bW5Db21wb25lbnQgZXh0ZW5kcyBPcHRpb25Db2x1bW5Db21wb25lbnQge1xyXG5cclxuICBnZXRGb250Q29sb3IoKTogc3RyaW5nIHtcclxuICAgIGxldCB2YWx1ZSA9IFRvdHNUYWJsZUhlbHBlci5nZXRJdGVtVmFsdWVCeUtleSh0aGlzLml0ZW0sIHRoaXMuY29sdW1uLmZpZWxkX2tleSk7XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5jb2x1bW4uZXh0cmEub3B0aW9ucykge1xyXG4gICAgICBpZihpdGVtW3RoaXMuY29sdW1uLmV4dHJhLmZpZWxkX3JlbF9rZXldID09IHZhbHVlICYmIGl0ZW1bJ2ZvbnRfY29sb3InXSAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgIHJldHVybiBpdGVtWydmb250X2NvbG9yJ107XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAnJztcclxuICB9XHJcbn1cclxuIiwiPHNwYW4gY2xhc3M9XCJ0b3RzLXN0YXR1cy1pY29uLWNvbHVtblwiIFtuZ1N0eWxlXT1cInsnY29sb3InOiBnZXRGb250Q29sb3IoKX1cIj48bWF0LWljb24+e3tnZXRJdGVtVmFsdWUoKX19PC9tYXQtaWNvbj48L3NwYW4+Il19