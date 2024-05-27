import { Component, Input } from "@angular/core";
import { TotsTableHelper } from "../helpers/tots-table-helper";
import * as i0 from "@angular/core";
export class TotsBaseColumnComponent {
    getItemValue() {
        return TotsTableHelper.getItemValueByKey(this.item, this.column.field_key);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: TotsBaseColumnComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.11", type: TotsBaseColumnComponent, selector: "tots-base-column", inputs: { column: "column", item: "item", onAction: "onAction", index: "index" }, ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: TotsBaseColumnComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'tots-base-column',
                    template: ''
                }]
        }], propDecorators: { column: [{
                type: Input
            }], item: [{
                type: Input
            }], onAction: [{
                type: Input
            }], index: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG90cy1iYXNlLWNvbHVtbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90b3RzL3RhYmxlL3NyYy9saWIvY29sdW1ucy90b3RzLWJhc2UtY29sdW1uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFnQixLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFJdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQU0vRCxNQUFNLE9BQU8sdUJBQXVCO0lBT2hDLFlBQVk7UUFDUixPQUFPLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0UsQ0FBQzsrR0FUUSx1QkFBdUI7bUdBQXZCLHVCQUF1QiwwSUFGdEIsRUFBRTs7NEZBRUgsdUJBQXVCO2tCQUpuQyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSxFQUFFO2lCQUNmOzhCQUdZLE1BQU07c0JBQWQsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBUb3RzQWN0aW9uVGFibGUgfSBmcm9tIFwiLi4vZW50aXRpZXMvdG90cy1hY3Rpb24tdGFibGVcIjtcclxuaW1wb3J0IHsgVG90c0NvbHVtbiB9IGZyb20gXCIuLi9lbnRpdGllcy90b3RzLWNvbHVtblwiO1xyXG5pbXBvcnQgeyBUb3RzVGFibGVIZWxwZXIgfSBmcm9tIFwiLi4vaGVscGVycy90b3RzLXRhYmxlLWhlbHBlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3RvdHMtYmFzZS1jb2x1bW4nLFxyXG4gICAgdGVtcGxhdGU6ICcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb3RzQmFzZUNvbHVtbkNvbXBvbmVudHtcclxuXHJcbiAgICBASW5wdXQoKSBjb2x1bW4hOiBUb3RzQ29sdW1uO1xyXG4gICAgQElucHV0KCkgaXRlbTogYW55O1xyXG4gICAgQElucHV0KCkgb25BY3Rpb24hOiBTdWJqZWN0PFRvdHNBY3Rpb25UYWJsZT47XHJcbiAgICBASW5wdXQoKSBpbmRleD86IG51bWJlcjtcclxuXHJcbiAgICBnZXRJdGVtVmFsdWUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gVG90c1RhYmxlSGVscGVyLmdldEl0ZW1WYWx1ZUJ5S2V5KHRoaXMuaXRlbSwgdGhpcy5jb2x1bW4uZmllbGRfa2V5KTtcclxuICAgIH1cclxufVxyXG4iXX0=