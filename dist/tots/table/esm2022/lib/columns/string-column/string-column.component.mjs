import { Component } from '@angular/core';
import { TotsBaseColumnComponent } from '../tots-base-column.component';
import { TotsTableHelper } from '../../helpers/tots-table-helper';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class StringColumnComponent extends TotsBaseColumnComponent {
    getItemValue() {
        let value = TotsTableHelper.getItemValueByKey(this.item, this.column.field_key);
        if (this.column.extra && this.column.extra.cutSeparator) {
            return value.split(this.column.extra.cutSeparator)[0];
        }
        return value;
    }
    get prepend() {
        return this.column.extra?.prepend;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: StringColumnComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.11", type: StringColumnComponent, selector: "tots-string-column", usesInheritance: true, ngImport: i0, template: "<span class=\"prefix\" *ngIf=\"prepend\"> {{ prepend }} </span>\r\n{{getItemValue()}}", styles: [""], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: StringColumnComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-string-column', template: "<span class=\"prefix\" *ngIf=\"prepend\"> {{ prepend }} </span>\r\n{{getItemValue()}}" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLWNvbHVtbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90b3RzL3RhYmxlL3NyYy9saWIvY29sdW1ucy9zdHJpbmctY29sdW1uL3N0cmluZy1jb2x1bW4uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdG90cy90YWJsZS9zcmMvbGliL2NvbHVtbnMvc3RyaW5nLWNvbHVtbi9zdHJpbmctY29sdW1uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7QUFPbEUsTUFBTSxPQUFPLHFCQUFzQixTQUFRLHVCQUF1QjtJQUV2RCxZQUFZO1FBQ25CLElBQUksS0FBSyxHQUFHLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFaEYsSUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUM7WUFDckQsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZEO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsSUFBYyxPQUFPO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDO0lBQ3BDLENBQUM7K0dBZFUscUJBQXFCO21HQUFyQixxQkFBcUIsaUZDVGxDLHVGQUNrQjs7NEZEUUwscUJBQXFCO2tCQUxqQyxTQUFTOytCQUNFLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUb3RzQmFzZUNvbHVtbkNvbXBvbmVudCB9IGZyb20gJy4uL3RvdHMtYmFzZS1jb2x1bW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgVG90c1RhYmxlSGVscGVyIH0gZnJvbSAnLi4vLi4vaGVscGVycy90b3RzLXRhYmxlLWhlbHBlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RvdHMtc3RyaW5nLWNvbHVtbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N0cmluZy1jb2x1bW4uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N0cmluZy1jb2x1bW4uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdHJpbmdDb2x1bW5Db21wb25lbnQgZXh0ZW5kcyBUb3RzQmFzZUNvbHVtbkNvbXBvbmVudCB7XHJcblxyXG4gIG92ZXJyaWRlIGdldEl0ZW1WYWx1ZSgpOiBhbnkge1xyXG4gICAgbGV0IHZhbHVlID0gVG90c1RhYmxlSGVscGVyLmdldEl0ZW1WYWx1ZUJ5S2V5KHRoaXMuaXRlbSwgdGhpcy5jb2x1bW4uZmllbGRfa2V5KTtcclxuXHJcbiAgICBpZih0aGlzLmNvbHVtbi5leHRyYSAmJiB0aGlzLmNvbHVtbi5leHRyYS5jdXRTZXBhcmF0b3Ipe1xyXG4gICAgICByZXR1cm4gdmFsdWUuc3BsaXQodGhpcy5jb2x1bW4uZXh0cmEuY3V0U2VwYXJhdG9yKVswXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0IHByZXBlbmQoKSA6IHN0cmluZ3x1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuY29sdW1uLmV4dHJhPy5wcmVwZW5kO1xyXG4gIH1cclxufVxyXG4iLCI8c3BhbiBjbGFzcz1cInByZWZpeFwiICpuZ0lmPVwicHJlcGVuZFwiPiB7eyBwcmVwZW5kIH19IDwvc3Bhbj5cclxue3tnZXRJdGVtVmFsdWUoKX19Il19