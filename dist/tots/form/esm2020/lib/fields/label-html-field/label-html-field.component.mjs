import { Component } from '@angular/core';
import { TotsBaseFieldComponent } from '../tots-base-field.component';
import * as i0 from "@angular/core";
export class LabelHtmlFieldComponent extends TotsBaseFieldComponent {
    ngOnInit() { }
    getHtml() {
        if (this.field.extra && this.field.extra.html) {
            return this.field.extra.html;
        }
        return '';
    }
    static updateFormByItem(group, item, field) { }
    static updateItemByForm(group, item, field) { }
}
LabelHtmlFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: LabelHtmlFieldComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
LabelHtmlFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.3", type: LabelHtmlFieldComponent, selector: "hos-label-html-field", usesInheritance: true, ngImport: i0, template: "<div class=\"tots-label-html-field\" [innerHTML]=\"getHtml()\"></div>", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: LabelHtmlFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'hos-label-html-field', template: "<div class=\"tots-label-html-field\" [innerHTML]=\"getHtml()\"></div>" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwtaHRtbC1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90b3RzL2Zvcm0vc3JjL2xpYi9maWVsZHMvbGFiZWwtaHRtbC1maWVsZC9sYWJlbC1odG1sLWZpZWxkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RvdHMvZm9ybS9zcmMvbGliL2ZpZWxkcy9sYWJlbC1odG1sLWZpZWxkL2xhYmVsLWh0bWwtZmllbGQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUdsRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7QUFPdEUsTUFBTSxPQUFPLHVCQUF3QixTQUFRLHNCQUFzQjtJQUV4RCxRQUFRLEtBQVUsQ0FBQztJQUU1QixPQUFPO1FBQ0wsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUM7WUFBRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztTQUFFO1FBQzlFLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVELE1BQU0sQ0FBVSxnQkFBZ0IsQ0FBQyxLQUF1QixFQUFFLElBQVMsRUFBRSxLQUFvQixJQUFHLENBQUM7SUFFN0YsTUFBTSxDQUFVLGdCQUFnQixDQUFDLEtBQXVCLEVBQUUsSUFBUyxFQUFFLEtBQW9CLElBQUcsQ0FBQzs7b0hBWGxGLHVCQUF1Qjt3R0FBdkIsdUJBQXVCLG1GQ1ZwQyx1RUFBaUU7MkZEVXBELHVCQUF1QjtrQkFMbkMsU0FBUzsrQkFDRSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVbnR5cGVkRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBUb3RzRmllbGRGb3JtIH0gZnJvbSAnLi4vLi4vZW50aXRpZXMvdG90cy1maWVsZC1mb3JtJztcclxuaW1wb3J0IHsgVG90c0Jhc2VGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL3RvdHMtYmFzZS1maWVsZC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdob3MtbGFiZWwtaHRtbC1maWVsZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xhYmVsLWh0bWwtZmllbGQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2xhYmVsLWh0bWwtZmllbGQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYWJlbEh0bWxGaWVsZENvbXBvbmVudCBleHRlbmRzIFRvdHNCYXNlRmllbGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBvdmVycmlkZSBuZ09uSW5pdCgpOiB2b2lkIHt9XHJcblxyXG4gIGdldEh0bWwoKSB7XHJcbiAgICBpZih0aGlzLmZpZWxkLmV4dHJhICYmIHRoaXMuZmllbGQuZXh0cmEuaHRtbCl7IHJldHVybiB0aGlzLmZpZWxkLmV4dHJhLmh0bWw7IH1cclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBvdmVycmlkZSB1cGRhdGVGb3JtQnlJdGVtKGdyb3VwOiBVbnR5cGVkRm9ybUdyb3VwLCBpdGVtOiBhbnksIGZpZWxkOiBUb3RzRmllbGRGb3JtKSB7fVxyXG5cclxuICBzdGF0aWMgb3ZlcnJpZGUgdXBkYXRlSXRlbUJ5Rm9ybShncm91cDogVW50eXBlZEZvcm1Hcm91cCwgaXRlbTogYW55LCBmaWVsZDogVG90c0ZpZWxkRm9ybSkge31cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwidG90cy1sYWJlbC1odG1sLWZpZWxkXCIgW2lubmVySFRNTF09XCJnZXRIdG1sKClcIj48L2Rpdj4iXX0=