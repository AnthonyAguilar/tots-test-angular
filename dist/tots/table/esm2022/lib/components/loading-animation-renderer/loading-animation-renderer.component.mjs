import { Component, Inject, ViewChild, ViewContainerRef } from '@angular/core';
import { TOTS_TABLE_DEFAULT_CONFIG } from '../../entities/tots-table-default-config';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import * as i0 from "@angular/core";
import * as i1 from "../../entities/tots-table-default-config";
export class LoadingAnimationRendererComponent {
    //#region Setup
    constructor(totsTableDefaultConfig, viewContainerRef) {
        this.totsTableDefaultConfig = totsTableDefaultConfig;
        this.viewContainerRef = viewContainerRef;
    }
    ngOnInit() {
        this.setLoader();
    }
    ngOnDestroy() {
        this.loadingComponentContainer?.clear();
    }
    setLoader() {
        if (this.totsTableDefaultConfig.loadingComponent) {
            this.loadingComponent = this.viewContainerRef.createComponent(this.totsTableDefaultConfig.loadingComponent);
        }
        else {
            this.loadingComponent = this.viewContainerRef.createComponent(MatProgressSpinner);
            this.loadingComponent.instance.diameter = 50;
            this.loadingComponent.instance.mode = "indeterminate";
            this.loadingComponent.instance.color = this.totsTableDefaultConfig.matColor;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: LoadingAnimationRendererComponent, deps: [{ token: TOTS_TABLE_DEFAULT_CONFIG }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.11", type: LoadingAnimationRendererComponent, selector: "tots-loading-animation-renderer", viewQueries: [{ propertyName: "loadingComponentContainer", first: true, predicate: ["loadingComponentContainer"], descendants: true, read: ViewContainerRef }], ngImport: i0, template: "<ng-container #loadingComponentContainer></ng-container>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: LoadingAnimationRendererComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-loading-animation-renderer', template: "<ng-container #loadingComponentContainer></ng-container>" }]
        }], ctorParameters: function () { return [{ type: i1.TotsTableDefaultConfig, decorators: [{
                    type: Inject,
                    args: [TOTS_TABLE_DEFAULT_CONFIG]
                }] }, { type: i0.ViewContainerRef }]; }, propDecorators: { loadingComponentContainer: [{
                type: ViewChild,
                args: ['loadingComponentContainer', { read: ViewContainerRef }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1hbmltYXRpb24tcmVuZGVyZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdG90cy90YWJsZS9zcmMvbGliL2NvbXBvbmVudHMvbG9hZGluZy1hbmltYXRpb24tcmVuZGVyZXIvbG9hZGluZy1hbmltYXRpb24tcmVuZGVyZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdG90cy90YWJsZS9zcmMvbGliL2NvbXBvbmVudHMvbG9hZGluZy1hbmltYXRpb24tcmVuZGVyZXIvbG9hZGluZy1hbmltYXRpb24tcmVuZGVyZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxFQUFhLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RyxPQUFPLEVBQUUseUJBQXlCLEVBQTBCLE1BQU0sMENBQTBDLENBQUM7QUFDN0csT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7OztBQU94RSxNQUFNLE9BQU8saUNBQWlDO0lBSzVDLGVBQWU7SUFDZixZQUM2QyxzQkFBK0MsRUFDcEYsZ0JBQWtDO1FBREcsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF5QjtRQUNwRixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQ3ZDLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFDRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLHlCQUF5QixFQUFFLEtBQUssRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFFTyxTQUFTO1FBQ2YsSUFBSSxJQUFJLENBQUMsc0JBQXNCLENBQUMsZ0JBQWdCLEVBQUU7WUFDaEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDN0c7YUFBTTtZQUNMLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDbEYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQzdDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQztZQUN0RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDO1NBQzdFO0lBQ0gsQ0FBQzsrR0EzQlUsaUNBQWlDLGtCQU9sQyx5QkFBeUI7bUdBUHhCLGlDQUFpQywwTEFFRyxnQkFBZ0IsNkJDWGpFLDBEQUF3RDs7NEZEUzNDLGlDQUFpQztrQkFMN0MsU0FBUzsrQkFDRSxpQ0FBaUM7OzBCQVd4QyxNQUFNOzJCQUFDLHlCQUF5QjsyRUFMZ0MseUJBQXlCO3NCQUE1RixTQUFTO3VCQUFDLDJCQUEyQixFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRSZWYsIEluamVjdCwgT25EZXN0cm95LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVE9UU19UQUJMRV9ERUZBVUxUX0NPTkZJRywgVG90c1RhYmxlRGVmYXVsdENvbmZpZyB9IGZyb20gJy4uLy4uL2VudGl0aWVzL3RvdHMtdGFibGUtZGVmYXVsdC1jb25maWcnO1xyXG5pbXBvcnQgeyBNYXRQcm9ncmVzc1NwaW5uZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1zcGlubmVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndG90cy1sb2FkaW5nLWFuaW1hdGlvbi1yZW5kZXJlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xvYWRpbmctYW5pbWF0aW9uLXJlbmRlcmVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9sb2FkaW5nLWFuaW1hdGlvbi1yZW5kZXJlci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nQW5pbWF0aW9uUmVuZGVyZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG5cclxuXHRAVmlld0NoaWxkKCdsb2FkaW5nQ29tcG9uZW50Q29udGFpbmVyJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pIGxvYWRpbmdDb21wb25lbnRDb250YWluZXIhIDogVmlld0NvbnRhaW5lclJlZjtcclxuICBsb2FkaW5nQ29tcG9uZW50ISA6IENvbXBvbmVudFJlZjxhbnk+O1xyXG5cclxuICAvLyNyZWdpb24gU2V0dXBcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoVE9UU19UQUJMRV9ERUZBVUxUX0NPTkZJRykgcHJpdmF0ZSB0b3RzVGFibGVEZWZhdWx0Q29uZmlnIDogVG90c1RhYmxlRGVmYXVsdENvbmZpZyxcclxuXHRcdHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZlxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldExvYWRlcigpO1xyXG4gIH1cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMubG9hZGluZ0NvbXBvbmVudENvbnRhaW5lcj8uY2xlYXIoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0TG9hZGVyKCkge1xyXG4gICAgaWYgKHRoaXMudG90c1RhYmxlRGVmYXVsdENvbmZpZy5sb2FkaW5nQ29tcG9uZW50KSB7XHJcbiAgICAgIHRoaXMubG9hZGluZ0NvbXBvbmVudCA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQodGhpcy50b3RzVGFibGVEZWZhdWx0Q29uZmlnLmxvYWRpbmdDb21wb25lbnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5sb2FkaW5nQ29tcG9uZW50ID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChNYXRQcm9ncmVzc1NwaW5uZXIpO1xyXG4gICAgICB0aGlzLmxvYWRpbmdDb21wb25lbnQuaW5zdGFuY2UuZGlhbWV0ZXIgPSA1MDtcclxuICAgICAgdGhpcy5sb2FkaW5nQ29tcG9uZW50Lmluc3RhbmNlLm1vZGUgPSBcImluZGV0ZXJtaW5hdGVcIjtcclxuICAgICAgdGhpcy5sb2FkaW5nQ29tcG9uZW50Lmluc3RhbmNlLmNvbG9yID0gdGhpcy50b3RzVGFibGVEZWZhdWx0Q29uZmlnLm1hdENvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyNlbmRyZWdpb25cclxufSIsIjxuZy1jb250YWluZXIgI2xvYWRpbmdDb21wb25lbnRDb250YWluZXI+PC9uZy1jb250YWluZXI+Il19