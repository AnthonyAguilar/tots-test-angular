import { Component, Input } from "@angular/core";
import { TotsFormHelper } from "../helpers/tots-form-helper";
import * as i0 from "@angular/core";
export class TotsBaseFieldComponent {
    constructor() { }
    ngOnInit() {
        this.input = TotsFormHelper.createFormControl(this.field, this.group);
    }
    getAppearance() {
        if (this.field.extra && this.field.extra.appearance) {
            return this.field.extra.appearance;
        }
        return 'fill';
    }
    getClases() {
        if (this.field.extra && this.field.extra.classes) {
            return this.field.extra.classes;
        }
        return '';
    }
    getPlaceholder() {
        if (this.field.extra && this.field.extra.placeholder) {
            return this.field.extra.placeholder;
        }
        return '';
    }
    isDisabled() {
        if (this.field.extra && this.field.extra.disabled) {
            return this.field.extra.disabled;
        }
        return false;
    }
    hasError() {
        return this.input.invalid && (this.input.dirty || this.input.touched);
    }
    getMessageError() {
        if (this.field.errors == undefined) {
            return '';
        }
        for (const error of this.field.errors) {
            if (this.input.hasError(error.name)) {
                return error.message;
            }
        }
        return '';
    }
    static updateFormByItem(group, item, field) {
        if (Array.isArray(field.key)) {
            group.get(field.key.join('_'))?.setValue(TotsFormHelper.getItemValueByKey(item, field.key));
        }
        else {
            group.get(field.key)?.setValue(item[field.key]);
        }
    }
    static updateItemByForm(group, item, field) {
        if (Array.isArray(field.key)) {
            TotsFormHelper.setValueInItemByKey(item, field.key, group.get(field.key.join('_'))?.value);
        }
        else {
            item[field.key] = group.get(field.key)?.value;
        }
    }
}
TotsBaseFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: TotsBaseFieldComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TotsBaseFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.3", type: TotsBaseFieldComponent, selector: "tots-base-field", inputs: { field: "field", group: "group", onAction: "onAction" }, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: TotsBaseFieldComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'tots-base-field',
                    template: ''
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { field: [{
                type: Input
            }], group: [{
                type: Input
            }], onAction: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG90cy1iYXNlLWZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RvdHMvZm9ybS9zcmMvbGliL2ZpZWxkcy90b3RzLWJhc2UtZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWdCLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUt2RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7O0FBTTdELE1BQU0sT0FBTyxzQkFBc0I7SUFRL0IsZ0JBQWdCLENBQUM7SUFFakIsUUFBUTtRQUNKLElBQUksQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRCxhQUFhO1FBQ1QsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUM7WUFBRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztTQUFFO1FBQzFGLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxTQUFTO1FBQ0wsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUM7WUFBRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztTQUFFO1FBQ3BGLE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELGNBQWM7UUFDVixJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBQztZQUFFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO1NBQUU7UUFDNUYsT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQsVUFBVTtRQUNOLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFDO1lBQUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7U0FBRTtRQUN0RixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsUUFBUTtRQUNKLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRCxlQUFlO1FBQ1gsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxTQUFTLEVBQUM7WUFDOUIsT0FBTyxFQUFFLENBQUM7U0FDYjtRQUVELEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDbkMsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUM7Z0JBQy9CLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQzthQUN4QjtTQUNKO1FBRUQsT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEtBQXVCLEVBQUUsSUFBUyxFQUFFLEtBQW9CO1FBQzlFLElBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUM7WUFDMUIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzdGO2FBQU07WUFDTCxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2pEO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUF1QixFQUFFLElBQVMsRUFBRSxLQUFvQjtRQUM5RSxJQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFDO1lBQzFCLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDNUY7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDO1NBQy9DO0lBQ0gsQ0FBQzs7bUhBbEVRLHNCQUFzQjt1R0FBdEIsc0JBQXNCLHlIQUZyQixFQUFFOzJGQUVILHNCQUFzQjtrQkFKbEMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsRUFBRTtpQkFDZjswRUFHWSxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFVudHlwZWRGb3JtQ29udHJvbCwgVW50eXBlZEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgVG90c0FjdGlvbkZvcm0gfSBmcm9tIFwiLi4vZW50aXRpZXMvdG90cy1hY3Rpb24tZm9ybVwiO1xyXG5pbXBvcnQgeyBUb3RzRmllbGRGb3JtIH0gZnJvbSBcIi4uL2VudGl0aWVzL3RvdHMtZmllbGQtZm9ybVwiO1xyXG5pbXBvcnQgeyBUb3RzRm9ybUhlbHBlciB9IGZyb20gXCIuLi9oZWxwZXJzL3RvdHMtZm9ybS1oZWxwZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd0b3RzLWJhc2UtZmllbGQnLFxyXG4gICAgdGVtcGxhdGU6ICcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb3RzQmFzZUZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBASW5wdXQoKSBmaWVsZCE6IFRvdHNGaWVsZEZvcm07XHJcbiAgICBASW5wdXQoKSBncm91cCE6IFVudHlwZWRGb3JtR3JvdXA7XHJcbiAgICBASW5wdXQoKSBvbkFjdGlvbiE6IFN1YmplY3Q8VG90c0FjdGlvbkZvcm0+O1xyXG5cclxuICAgIGlucHV0ITogVW50eXBlZEZvcm1Db250cm9sO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pbnB1dCA9IFRvdHNGb3JtSGVscGVyLmNyZWF0ZUZvcm1Db250cm9sKHRoaXMuZmllbGQsIHRoaXMuZ3JvdXApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFwcGVhcmFuY2UoKSB7XHJcbiAgICAgICAgaWYodGhpcy5maWVsZC5leHRyYSAmJiB0aGlzLmZpZWxkLmV4dHJhLmFwcGVhcmFuY2UpeyByZXR1cm4gdGhpcy5maWVsZC5leHRyYS5hcHBlYXJhbmNlOyB9XHJcbiAgICAgICAgcmV0dXJuICdmaWxsJztcclxuICAgIH1cclxuXHJcbiAgICBnZXRDbGFzZXMoKSB7XHJcbiAgICAgICAgaWYodGhpcy5maWVsZC5leHRyYSAmJiB0aGlzLmZpZWxkLmV4dHJhLmNsYXNzZXMpeyByZXR1cm4gdGhpcy5maWVsZC5leHRyYS5jbGFzc2VzOyB9XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBsYWNlaG9sZGVyKCkge1xyXG4gICAgICAgIGlmKHRoaXMuZmllbGQuZXh0cmEgJiYgdGhpcy5maWVsZC5leHRyYS5wbGFjZWhvbGRlcil7IHJldHVybiB0aGlzLmZpZWxkLmV4dHJhLnBsYWNlaG9sZGVyOyB9XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYodGhpcy5maWVsZC5leHRyYSAmJiB0aGlzLmZpZWxkLmV4dHJhLmRpc2FibGVkKXsgcmV0dXJuIHRoaXMuZmllbGQuZXh0cmEuZGlzYWJsZWQ7IH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzRXJyb3IoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXQuaW52YWxpZCAmJiAodGhpcy5pbnB1dC5kaXJ0eSB8fCB0aGlzLmlucHV0LnRvdWNoZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1lc3NhZ2VFcnJvcigpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmKHRoaXMuZmllbGQuZXJyb3JzID09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgZXJyb3Igb2YgdGhpcy5maWVsZC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5pbnB1dC5oYXNFcnJvcihlcnJvci5uYW1lKSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IubWVzc2FnZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB1cGRhdGVGb3JtQnlJdGVtKGdyb3VwOiBVbnR5cGVkRm9ybUdyb3VwLCBpdGVtOiBhbnksIGZpZWxkOiBUb3RzRmllbGRGb3JtKSB7XHJcbiAgICAgIGlmKEFycmF5LmlzQXJyYXkoZmllbGQua2V5KSl7XHJcbiAgICAgICAgZ3JvdXAuZ2V0KGZpZWxkLmtleS5qb2luKCdfJykpPy5zZXRWYWx1ZShUb3RzRm9ybUhlbHBlci5nZXRJdGVtVmFsdWVCeUtleShpdGVtLCBmaWVsZC5rZXkpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBncm91cC5nZXQoZmllbGQua2V5KT8uc2V0VmFsdWUoaXRlbVtmaWVsZC5rZXldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB1cGRhdGVJdGVtQnlGb3JtKGdyb3VwOiBVbnR5cGVkRm9ybUdyb3VwLCBpdGVtOiBhbnksIGZpZWxkOiBUb3RzRmllbGRGb3JtKSB7XHJcbiAgICAgIGlmKEFycmF5LmlzQXJyYXkoZmllbGQua2V5KSl7XHJcbiAgICAgICAgVG90c0Zvcm1IZWxwZXIuc2V0VmFsdWVJbkl0ZW1CeUtleShpdGVtLCBmaWVsZC5rZXksIGdyb3VwLmdldChmaWVsZC5rZXkuam9pbignXycpKT8udmFsdWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGl0ZW1bZmllbGQua2V5XSA9IGdyb3VwLmdldChmaWVsZC5rZXkpPy52YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==