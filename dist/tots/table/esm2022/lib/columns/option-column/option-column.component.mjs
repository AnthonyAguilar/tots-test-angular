import { Component } from '@angular/core';
import { TotsTableHelper } from '../../helpers/tots-table-helper';
import { TotsBaseColumnComponent } from '../tots-base-column.component';
import * as i0 from "@angular/core";
export class OptionColumnComponent extends TotsBaseColumnComponent {
    getItemValue() {
        let value = TotsTableHelper.getItemValueByKey(this.item, this.column.field_key);
        for (const item of this.column.extra.options) {
            if (item[this.column.extra.field_rel_key] == value) {
                return item[this.column.extra.field_print_key];
            }
        }
        return '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: OptionColumnComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.11", type: OptionColumnComponent, selector: "tots-option-column", usesInheritance: true, ngImport: i0, template: "{{getItemValue()}}", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: OptionColumnComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-option-column', template: "{{getItemValue()}}" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLWNvbHVtbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90b3RzL3RhYmxlL3NyYy9saWIvY29sdW1ucy9vcHRpb24tY29sdW1uL29wdGlvbi1jb2x1bW4uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdG90cy90YWJsZS9zcmMvbGliL2NvbHVtbnMvb3B0aW9uLWNvbHVtbi9vcHRpb24tY29sdW1uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQU94RSxNQUFNLE9BQU8scUJBQXNCLFNBQVEsdUJBQXVCO0lBRXZELFlBQVk7UUFDbkIsSUFBSSxLQUFLLEdBQUcsZUFBZSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoRixLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUM1QyxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLEVBQUM7Z0JBQ2hELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQ2hEO1NBQ0Y7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7K0dBVlUscUJBQXFCO21HQUFyQixxQkFBcUIsaUZDVGxDLG9CQUFrQjs7NEZEU0wscUJBQXFCO2tCQUxqQyxTQUFTOytCQUNFLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUb3RzVGFibGVIZWxwZXIgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3RvdHMtdGFibGUtaGVscGVyJztcclxuaW1wb3J0IHsgVG90c0Jhc2VDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuLi90b3RzLWJhc2UtY29sdW1uLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RvdHMtb3B0aW9uLWNvbHVtbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL29wdGlvbi1jb2x1bW4uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL29wdGlvbi1jb2x1bW4uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPcHRpb25Db2x1bW5Db21wb25lbnQgZXh0ZW5kcyBUb3RzQmFzZUNvbHVtbkNvbXBvbmVudCB7XHJcblxyXG4gIG92ZXJyaWRlIGdldEl0ZW1WYWx1ZSgpOiBhbnkge1xyXG4gICAgbGV0IHZhbHVlID0gVG90c1RhYmxlSGVscGVyLmdldEl0ZW1WYWx1ZUJ5S2V5KHRoaXMuaXRlbSwgdGhpcy5jb2x1bW4uZmllbGRfa2V5KTtcclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLmNvbHVtbi5leHRyYS5vcHRpb25zKSB7XHJcbiAgICAgIGlmKGl0ZW1bdGhpcy5jb2x1bW4uZXh0cmEuZmllbGRfcmVsX2tleV0gPT0gdmFsdWUpe1xyXG4gICAgICAgIHJldHVybiBpdGVtW3RoaXMuY29sdW1uLmV4dHJhLmZpZWxkX3ByaW50X2tleV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG59XHJcbiIsInt7Z2V0SXRlbVZhbHVlKCl9fSJdfQ==