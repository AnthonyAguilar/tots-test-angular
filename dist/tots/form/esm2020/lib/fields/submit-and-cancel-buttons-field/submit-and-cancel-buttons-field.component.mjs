import { Component, Inject } from '@angular/core';
import { TotsBaseFieldComponent } from '../tots-base-field.component';
import { TOTS_FORM_BUTTONS_CONFIG } from '../../entities/tots-buttons-config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/button";
import * as i3 from "../../entities/tots-buttons-config";
export class SubmitAndCancelButtonsFieldComponent extends TotsBaseFieldComponent {
    constructor(totsButtonConfig) {
        super();
        this.totsButtonConfig = totsButtonConfig;
    }
    ngOnInit() {
        this.submitMatColor = this.field.extra?.matColor || this.totsButtonConfig.positiveButtonColor;
        this.submitMatButtonDirective = this.field.extra?.matButtonDirective || this.totsButtonConfig.positiveButtonMaterialDirective;
        this.cancelLabel = this.field.extra?.cancelLabel || this.totsButtonConfig.negativeButtonCaption;
        this.cancelMatColor = this.totsButtonConfig.negativeButtonColor;
        this.cancelMatButtonDirective = this.field.extra?.matCancelButtonDirective || this.totsButtonConfig.negativeButtonMaterialDirective;
    }
    onClick() {
        if (Array.isArray(this.field.key)) {
            this.onAction.next({ key: this.field.key.join('_'), item: {} });
        }
        else {
            this.onAction.next({ key: this.field.key, item: {} });
        }
    }
    onCancel() {
        this.onAction.next({ key: "cancel", item: {} });
    }
    static updateFormByItem(group, item, field) { }
    static updateItemByForm(group, item, field) { }
}
SubmitAndCancelButtonsFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: SubmitAndCancelButtonsFieldComponent, deps: [{ token: TOTS_FORM_BUTTONS_CONFIG }], target: i0.ɵɵFactoryTarget.Component });
SubmitAndCancelButtonsFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.3", type: SubmitAndCancelButtonsFieldComponent, selector: "tots-submit-and-cancel-buttons-field", usesInheritance: true, ngImport: i0, template: "<div class=\"submit_and_cancel_wrapper\">\r\n\r\n  <button\r\n    mat-button\r\n    [ngClass]=\"{\r\n      'mat-mdc-button': cancelMatButtonDirective=='mat-button',\r\n      'mat-mdc-unelevated-button mdc-button--unelevated': cancelMatButtonDirective=='mat-flat-button',\r\n      'mat-mdc-raised-button mdc-button--raised': cancelMatButtonDirective=='mat-raised-button',\r\n      'mat-mdc-outlined-button mdc-button--outlined': cancelMatButtonDirective=='mat-stroked-button'\r\n    }\"\r\n    type=\"button\"\r\n    [color]=\"cancelMatColor\"\r\n    (click)=\"onCancel()\"\r\n  >\r\n    {{ cancelLabel }}\r\n  </button>\r\n\r\n  <button\r\n    mat-button\r\n    type=\"submit\"\r\n    [ngClass]=\"{\r\n      'mat-mdc-button': submitMatButtonDirective=='mat-button',\r\n      'mat-mdc-unelevated-button mdc-button--unelevated': submitMatButtonDirective=='mat-flat-button',\r\n      'mat-mdc-raised-button mdc-button--raised': submitMatButtonDirective=='mat-raised-button',\r\n      'mat-mdc-outlined-button mdc-button--outlined': submitMatButtonDirective=='mat-stroked-button'\r\n    }\"\r\n    [color]=\"submitMatColor\"\r\n    [disabled]=\"!group.valid\"\r\n    (click)=\"onClick()\"\r\n  >\r\n    {{ field.label }}\r\n  </button>\r\n\r\n</div>", styles: [".submit_and_cancel_wrapper{display:flex;gap:12px}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: SubmitAndCancelButtonsFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-submit-and-cancel-buttons-field', template: "<div class=\"submit_and_cancel_wrapper\">\r\n\r\n  <button\r\n    mat-button\r\n    [ngClass]=\"{\r\n      'mat-mdc-button': cancelMatButtonDirective=='mat-button',\r\n      'mat-mdc-unelevated-button mdc-button--unelevated': cancelMatButtonDirective=='mat-flat-button',\r\n      'mat-mdc-raised-button mdc-button--raised': cancelMatButtonDirective=='mat-raised-button',\r\n      'mat-mdc-outlined-button mdc-button--outlined': cancelMatButtonDirective=='mat-stroked-button'\r\n    }\"\r\n    type=\"button\"\r\n    [color]=\"cancelMatColor\"\r\n    (click)=\"onCancel()\"\r\n  >\r\n    {{ cancelLabel }}\r\n  </button>\r\n\r\n  <button\r\n    mat-button\r\n    type=\"submit\"\r\n    [ngClass]=\"{\r\n      'mat-mdc-button': submitMatButtonDirective=='mat-button',\r\n      'mat-mdc-unelevated-button mdc-button--unelevated': submitMatButtonDirective=='mat-flat-button',\r\n      'mat-mdc-raised-button mdc-button--raised': submitMatButtonDirective=='mat-raised-button',\r\n      'mat-mdc-outlined-button mdc-button--outlined': submitMatButtonDirective=='mat-stroked-button'\r\n    }\"\r\n    [color]=\"submitMatColor\"\r\n    [disabled]=\"!group.valid\"\r\n    (click)=\"onClick()\"\r\n  >\r\n    {{ field.label }}\r\n  </button>\r\n\r\n</div>", styles: [".submit_and_cancel_wrapper{display:flex;gap:12px}\n"] }]
        }], ctorParameters: function () { return [{ type: i3.TotsFormButtonsConfig, decorators: [{
                    type: Inject,
                    args: [TOTS_FORM_BUTTONS_CONFIG]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibWl0LWFuZC1jYW5jZWwtYnV0dG9ucy1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90b3RzL2Zvcm0vc3JjL2xpYi9maWVsZHMvc3VibWl0LWFuZC1jYW5jZWwtYnV0dG9ucy1maWVsZC9zdWJtaXQtYW5kLWNhbmNlbC1idXR0b25zLWZpZWxkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RvdHMvZm9ybS9zcmMvbGliL2ZpZWxkcy9zdWJtaXQtYW5kLWNhbmNlbC1idXR0b25zLWZpZWxkL3N1Ym1pdC1hbmQtY2FuY2VsLWJ1dHRvbnMtZmllbGQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHMUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFdEUsT0FBTyxFQUFFLHdCQUF3QixFQUFxRCxNQUFNLG9DQUFvQyxDQUFDOzs7OztBQU9qSSxNQUFNLE9BQU8sb0NBQXFDLFNBQVEsc0JBQXNCO0lBUzlFLFlBQXdELGdCQUF1QztRQUM3RixLQUFLLEVBQUUsQ0FBQztRQUQ4QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXVCO0lBRS9GLENBQUM7SUFFUSxRQUFRO1FBQ2YsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxRQUFRLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDO1FBQzlGLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxrQkFBa0IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsK0JBQStCLENBQUM7UUFFOUgsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxXQUFXLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDO1FBQ2hHLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDO1FBQ2hFLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSx3QkFBd0IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsK0JBQStCLENBQUM7SUFDdEksQ0FBQztJQUVELE9BQU87UUFDTCxJQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBQztZQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDakU7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZEO0lBQ0gsQ0FBQztJQUNELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELE1BQU0sQ0FBVSxnQkFBZ0IsQ0FBQyxLQUF1QixFQUFFLElBQVMsRUFBRSxLQUFvQixJQUFJLENBQUM7SUFFOUYsTUFBTSxDQUFVLGdCQUFnQixDQUFDLEtBQXVCLEVBQUUsSUFBUyxFQUFFLEtBQW9CLElBQUksQ0FBQzs7aUlBbkNuRixvQ0FBb0Msa0JBUzNCLHdCQUF3QjtxSEFUakMsb0NBQW9DLG1HQ1pqRCwrdENBaUNNOzJGRHJCTyxvQ0FBb0M7a0JBTGhELFNBQVM7K0JBQ0Usc0NBQXNDOzswQkFhbkMsTUFBTTsyQkFBQyx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFVudHlwZWRGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFRvdHNGaWVsZEZvcm0gfSBmcm9tICcuLi8uLi9lbnRpdGllcy90b3RzLWZpZWxkLWZvcm0nO1xyXG5pbXBvcnQgeyBUb3RzQmFzZUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vdG90cy1iYXNlLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRoZW1lUGFsZXR0ZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xyXG5pbXBvcnQgeyBUT1RTX0ZPUk1fQlVUVE9OU19DT05GSUcsIFRvdHNGb3JtQnV0dG9uTWF0RGlyZWN0aXZlLCBUb3RzRm9ybUJ1dHRvbnNDb25maWcgfSBmcm9tICcuLi8uLi9lbnRpdGllcy90b3RzLWJ1dHRvbnMtY29uZmlnJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndG90cy1zdWJtaXQtYW5kLWNhbmNlbC1idXR0b25zLWZpZWxkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VibWl0LWFuZC1jYW5jZWwtYnV0dG9ucy1maWVsZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3VibWl0LWFuZC1jYW5jZWwtYnV0dG9ucy1maWVsZC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1Ym1pdEFuZENhbmNlbEJ1dHRvbnNGaWVsZENvbXBvbmVudCBleHRlbmRzIFRvdHNCYXNlRmllbGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBzdWJtaXRNYXRDb2xvciEgOiBUaGVtZVBhbGV0dGU7XHJcbiAgc3VibWl0TWF0QnV0dG9uRGlyZWN0aXZlISA6IFRvdHNGb3JtQnV0dG9uTWF0RGlyZWN0aXZlO1xyXG5cclxuICBjYW5jZWxMYWJlbCEgOiBzdHJpbmc7XHJcbiAgY2FuY2VsTWF0Q29sb3IhIDogVGhlbWVQYWxldHRlO1xyXG4gIGNhbmNlbE1hdEJ1dHRvbkRpcmVjdGl2ZSEgOiBUb3RzRm9ybUJ1dHRvbk1hdERpcmVjdGl2ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoQEluamVjdChUT1RTX0ZPUk1fQlVUVE9OU19DT05GSUcpIHByb3RlY3RlZCB0b3RzQnV0dG9uQ29uZmlnOiBUb3RzRm9ybUJ1dHRvbnNDb25maWcpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBvdmVycmlkZSBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3VibWl0TWF0Q29sb3IgPSB0aGlzLmZpZWxkLmV4dHJhPy5tYXRDb2xvciB8fCB0aGlzLnRvdHNCdXR0b25Db25maWcucG9zaXRpdmVCdXR0b25Db2xvcjtcclxuICAgIHRoaXMuc3VibWl0TWF0QnV0dG9uRGlyZWN0aXZlID0gdGhpcy5maWVsZC5leHRyYT8ubWF0QnV0dG9uRGlyZWN0aXZlIHx8IHRoaXMudG90c0J1dHRvbkNvbmZpZy5wb3NpdGl2ZUJ1dHRvbk1hdGVyaWFsRGlyZWN0aXZlO1xyXG5cclxuICAgIHRoaXMuY2FuY2VsTGFiZWwgPSB0aGlzLmZpZWxkLmV4dHJhPy5jYW5jZWxMYWJlbCB8fCB0aGlzLnRvdHNCdXR0b25Db25maWcubmVnYXRpdmVCdXR0b25DYXB0aW9uO1xyXG4gICAgdGhpcy5jYW5jZWxNYXRDb2xvciA9IHRoaXMudG90c0J1dHRvbkNvbmZpZy5uZWdhdGl2ZUJ1dHRvbkNvbG9yO1xyXG4gICAgdGhpcy5jYW5jZWxNYXRCdXR0b25EaXJlY3RpdmUgPSB0aGlzLmZpZWxkLmV4dHJhPy5tYXRDYW5jZWxCdXR0b25EaXJlY3RpdmUgfHwgdGhpcy50b3RzQnV0dG9uQ29uZmlnLm5lZ2F0aXZlQnV0dG9uTWF0ZXJpYWxEaXJlY3RpdmU7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrKCkge1xyXG4gICAgaWYoQXJyYXkuaXNBcnJheSh0aGlzLmZpZWxkLmtleSkpe1xyXG4gICAgICB0aGlzLm9uQWN0aW9uLm5leHQoeyBrZXk6IHRoaXMuZmllbGQua2V5LmpvaW4oJ18nKSwgaXRlbToge30gfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm9uQWN0aW9uLm5leHQoeyBrZXk6IHRoaXMuZmllbGQua2V5LCBpdGVtOiB7fSB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgb25DYW5jZWwoKSB7XHJcbiAgICB0aGlzLm9uQWN0aW9uLm5leHQoeyBrZXk6IFwiY2FuY2VsXCIsIGl0ZW06IHt9IH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIG92ZXJyaWRlIHVwZGF0ZUZvcm1CeUl0ZW0oZ3JvdXA6IFVudHlwZWRGb3JtR3JvdXAsIGl0ZW06IGFueSwgZmllbGQ6IFRvdHNGaWVsZEZvcm0pIHsgfVxyXG5cclxuICBzdGF0aWMgb3ZlcnJpZGUgdXBkYXRlSXRlbUJ5Rm9ybShncm91cDogVW50eXBlZEZvcm1Hcm91cCwgaXRlbTogYW55LCBmaWVsZDogVG90c0ZpZWxkRm9ybSkgeyB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInN1Ym1pdF9hbmRfY2FuY2VsX3dyYXBwZXJcIj5cclxuXHJcbiAgPGJ1dHRvblxyXG4gICAgbWF0LWJ1dHRvblxyXG4gICAgW25nQ2xhc3NdPVwie1xyXG4gICAgICAnbWF0LW1kYy1idXR0b24nOiBjYW5jZWxNYXRCdXR0b25EaXJlY3RpdmU9PSdtYXQtYnV0dG9uJyxcclxuICAgICAgJ21hdC1tZGMtdW5lbGV2YXRlZC1idXR0b24gbWRjLWJ1dHRvbi0tdW5lbGV2YXRlZCc6IGNhbmNlbE1hdEJ1dHRvbkRpcmVjdGl2ZT09J21hdC1mbGF0LWJ1dHRvbicsXHJcbiAgICAgICdtYXQtbWRjLXJhaXNlZC1idXR0b24gbWRjLWJ1dHRvbi0tcmFpc2VkJzogY2FuY2VsTWF0QnV0dG9uRGlyZWN0aXZlPT0nbWF0LXJhaXNlZC1idXR0b24nLFxyXG4gICAgICAnbWF0LW1kYy1vdXRsaW5lZC1idXR0b24gbWRjLWJ1dHRvbi0tb3V0bGluZWQnOiBjYW5jZWxNYXRCdXR0b25EaXJlY3RpdmU9PSdtYXQtc3Ryb2tlZC1idXR0b24nXHJcbiAgICB9XCJcclxuICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgW2NvbG9yXT1cImNhbmNlbE1hdENvbG9yXCJcclxuICAgIChjbGljayk9XCJvbkNhbmNlbCgpXCJcclxuICA+XHJcbiAgICB7eyBjYW5jZWxMYWJlbCB9fVxyXG4gIDwvYnV0dG9uPlxyXG5cclxuICA8YnV0dG9uXHJcbiAgICBtYXQtYnV0dG9uXHJcbiAgICB0eXBlPVwic3VibWl0XCJcclxuICAgIFtuZ0NsYXNzXT1cIntcclxuICAgICAgJ21hdC1tZGMtYnV0dG9uJzogc3VibWl0TWF0QnV0dG9uRGlyZWN0aXZlPT0nbWF0LWJ1dHRvbicsXHJcbiAgICAgICdtYXQtbWRjLXVuZWxldmF0ZWQtYnV0dG9uIG1kYy1idXR0b24tLXVuZWxldmF0ZWQnOiBzdWJtaXRNYXRCdXR0b25EaXJlY3RpdmU9PSdtYXQtZmxhdC1idXR0b24nLFxyXG4gICAgICAnbWF0LW1kYy1yYWlzZWQtYnV0dG9uIG1kYy1idXR0b24tLXJhaXNlZCc6IHN1Ym1pdE1hdEJ1dHRvbkRpcmVjdGl2ZT09J21hdC1yYWlzZWQtYnV0dG9uJyxcclxuICAgICAgJ21hdC1tZGMtb3V0bGluZWQtYnV0dG9uIG1kYy1idXR0b24tLW91dGxpbmVkJzogc3VibWl0TWF0QnV0dG9uRGlyZWN0aXZlPT0nbWF0LXN0cm9rZWQtYnV0dG9uJ1xyXG4gICAgfVwiXHJcbiAgICBbY29sb3JdPVwic3VibWl0TWF0Q29sb3JcIlxyXG4gICAgW2Rpc2FibGVkXT1cIiFncm91cC52YWxpZFwiXHJcbiAgICAoY2xpY2spPVwib25DbGljaygpXCJcclxuICA+XHJcbiAgICB7eyBmaWVsZC5sYWJlbCB9fVxyXG4gIDwvYnV0dG9uPlxyXG5cclxuPC9kaXY+Il19