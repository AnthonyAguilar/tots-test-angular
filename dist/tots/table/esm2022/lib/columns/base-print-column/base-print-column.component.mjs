import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class BasePrintColumnComponent {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    ngOnInit() {
        const view = this.viewContainerRef.createComponent(this.column.component);
        view.instance.column = this.column;
        view.instance.item = this.item;
        view.instance.onAction = this.onAction;
        view.instance.index = this.index;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: BasePrintColumnComponent, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.11", type: BasePrintColumnComponent, selector: "tots-base-print-column", inputs: { column: "column", item: "item", onAction: "onAction", index: "index" }, ngImport: i0, template: "<div #contentColumn></div>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: BasePrintColumnComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-base-print-column', template: "<div #contentColumn></div>" }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { column: [{
                type: Input
            }], item: [{
                type: Input
            }], onAction: [{
                type: Input
            }], index: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1wcmludC1jb2x1bW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdG90cy90YWJsZS9zcmMvbGliL2NvbHVtbnMvYmFzZS1wcmludC1jb2x1bW4vYmFzZS1wcmludC1jb2x1bW4uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdG90cy90YWJsZS9zcmMvbGliL2NvbHVtbnMvYmFzZS1wcmludC1jb2x1bW4vYmFzZS1wcmludC1jb2x1bW4uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQW9CLE1BQU0sZUFBZSxDQUFDOztBQVVuRSxNQUFNLE9BQU8sd0JBQXdCO0lBT25DLFlBQ1ksZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDMUMsQ0FBQztJQUVMLFFBQVE7UUFDTixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLFFBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNwQyxJQUFJLENBQUMsUUFBUyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDeEMsSUFBSSxDQUFDLFFBQVMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUMxQyxDQUFDOytHQWpCVSx3QkFBd0I7bUdBQXhCLHdCQUF3QixnSkNWckMsNEJBQTBCOzs0RkRVYix3QkFBd0I7a0JBTHBDLFNBQVM7K0JBQ0Usd0JBQXdCO3VHQU16QixNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFRvdHNBY3Rpb25UYWJsZSB9IGZyb20gJy4uLy4uL2VudGl0aWVzL3RvdHMtYWN0aW9uLXRhYmxlJztcclxuaW1wb3J0IHsgVG90c0NvbHVtbiB9IGZyb20gJy4uLy4uL2VudGl0aWVzL3RvdHMtY29sdW1uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndG90cy1iYXNlLXByaW50LWNvbHVtbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Jhc2UtcHJpbnQtY29sdW1uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9iYXNlLXByaW50LWNvbHVtbi5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEJhc2VQcmludENvbHVtbkNvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIGNvbHVtbiE6IFRvdHNDb2x1bW47XHJcbiAgQElucHV0KCkgaXRlbTogYW55O1xyXG4gIEBJbnB1dCgpIG9uQWN0aW9uITogU3ViamVjdDxUb3RzQWN0aW9uVGFibGU+O1xyXG4gIEBJbnB1dCgpIGluZGV4PzogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCB2aWV3ID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudCh0aGlzLmNvbHVtbi5jb21wb25lbnQpO1xyXG4gICAgKDxhbnk+dmlldy5pbnN0YW5jZSkuY29sdW1uID0gdGhpcy5jb2x1bW47XHJcbiAgICAoPGFueT52aWV3Lmluc3RhbmNlKS5pdGVtID0gdGhpcy5pdGVtO1xyXG4gICAgKDxhbnk+dmlldy5pbnN0YW5jZSkub25BY3Rpb24gPSB0aGlzLm9uQWN0aW9uO1xyXG4gICAgKDxhbnk+dmlldy5pbnN0YW5jZSkuaW5kZXggPSB0aGlzLmluZGV4O1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2ICNjb250ZW50Q29sdW1uPjwvZGl2PiJdfQ==