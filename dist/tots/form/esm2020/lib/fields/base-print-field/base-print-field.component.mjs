import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class BasePrintFieldComponent {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    ngOnInit() {
        const view = this.viewContainerRef.createComponent(this.field.component);
        view.instance.group = this.group;
        view.instance.field = this.field;
        view.instance.onAction = this.onAction;
    }
}
BasePrintFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: BasePrintFieldComponent, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Component });
BasePrintFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.3", type: BasePrintFieldComponent, selector: "tots-base-print-field", inputs: { field: "field", group: "group", onAction: "onAction" }, ngImport: i0, template: "<div #contentColumn></div>", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: BasePrintFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-base-print-field', template: "<div #contentColumn></div>" }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { field: [{
                type: Input
            }], group: [{
                type: Input
            }], onAction: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1wcmludC1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90b3RzL2Zvcm0vc3JjL2xpYi9maWVsZHMvYmFzZS1wcmludC1maWVsZC9iYXNlLXByaW50LWZpZWxkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RvdHMvZm9ybS9zcmMvbGliL2ZpZWxkcy9iYXNlLXByaW50LWZpZWxkL2Jhc2UtcHJpbnQtZmllbGQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQzs7QUFXekYsTUFBTSxPQUFPLHVCQUF1QjtJQU1sQyxZQUNZLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQzFDLENBQUM7SUFFTCxRQUFRO1FBQ04sTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxRQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDbEMsSUFBSSxDQUFDLFFBQVMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNsQyxJQUFJLENBQUMsUUFBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ2hELENBQUM7O29IQWZVLHVCQUF1Qjt3R0FBdkIsdUJBQXVCLCtIQ1hwQyw0QkFBMEI7MkZEV2IsdUJBQXVCO2tCQUxuQyxTQUFTOytCQUNFLHVCQUF1Qjt1R0FNeEIsS0FBSztzQkFBYixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVW50eXBlZEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBUb3RzQWN0aW9uRm9ybSB9IGZyb20gJy4uLy4uL2VudGl0aWVzL3RvdHMtYWN0aW9uLWZvcm0nO1xyXG5pbXBvcnQgeyBUb3RzRmllbGRGb3JtIH0gZnJvbSAnLi4vLi4vZW50aXRpZXMvdG90cy1maWVsZC1mb3JtJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndG90cy1iYXNlLXByaW50LWZpZWxkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYmFzZS1wcmludC1maWVsZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYmFzZS1wcmludC1maWVsZC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCYXNlUHJpbnRGaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGZpZWxkITogVG90c0ZpZWxkRm9ybTtcclxuICBASW5wdXQoKSBncm91cCE6IFVudHlwZWRGb3JtR3JvdXA7XHJcbiAgQElucHV0KCkgb25BY3Rpb24hOiBTdWJqZWN0PFRvdHNBY3Rpb25Gb3JtPjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZlxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgdmlldyA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQodGhpcy5maWVsZC5jb21wb25lbnQpO1xyXG4gICAgKDxhbnk+dmlldy5pbnN0YW5jZSkuZ3JvdXAgPSB0aGlzLmdyb3VwO1xyXG4gICAgKDxhbnk+dmlldy5pbnN0YW5jZSkuZmllbGQgPSB0aGlzLmZpZWxkO1xyXG4gICAgKDxhbnk+dmlldy5pbnN0YW5jZSkub25BY3Rpb24gPSB0aGlzLm9uQWN0aW9uO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdiAjY29udGVudENvbHVtbj48L2Rpdj4iXX0=