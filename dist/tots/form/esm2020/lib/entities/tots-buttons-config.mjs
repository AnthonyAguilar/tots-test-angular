import { Injectable, InjectionToken } from "@angular/core";
import * as i0 from "@angular/core";
export const TOTS_FORM_BUTTONS_CONFIG = new InjectionToken('confirm_button_config');
export class TotsFormButtonsConfig {
    constructor() {
        this.positiveButtonMaterialDirective = "mat-button";
        this.positiveButtonColor = "primary";
        this.negativeButtonCaption = "Cancel";
        this.negativeButtonMaterialDirective = "mat-button";
        this.negativeButtonColor = undefined; // Unthemed
    }
}
TotsFormButtonsConfig.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: TotsFormButtonsConfig, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
TotsFormButtonsConfig.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: TotsFormButtonsConfig });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: TotsFormButtonsConfig, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG90cy1idXR0b25zLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RvdHMvZm9ybS9zcmMvbGliL2VudGl0aWVzL3RvdHMtYnV0dG9ucy1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzNELE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUFHLElBQUksY0FBYyxDQUF3Qix1QkFBdUIsQ0FBQyxDQUFDO0FBSTNHLE1BQU0sT0FBTyxxQkFBcUI7SUFEbEM7UUFFRSxvQ0FBK0IsR0FBZ0MsWUFBWSxDQUFDO1FBQzVFLHdCQUFtQixHQUFrQixTQUFTLENBQUM7UUFDL0MsMEJBQXFCLEdBQVksUUFBUSxDQUFDO1FBQzFDLG9DQUErQixHQUFnQyxZQUFZLENBQUM7UUFDNUUsd0JBQW1CLEdBQWtCLFNBQVMsQ0FBQyxDQUFHLFdBQVc7S0FDOUQ7O2tIQU5ZLHFCQUFxQjtzSEFBckIscUJBQXFCOzJGQUFyQixxQkFBcUI7a0JBRGpDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFRoZW1lUGFsZXR0ZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9jb3JlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVE9UU19GT1JNX0JVVFRPTlNfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPFRvdHNGb3JtQnV0dG9uc0NvbmZpZz4oJ2NvbmZpcm1fYnV0dG9uX2NvbmZpZycpO1xyXG5leHBvcnQgdHlwZSBUb3RzRm9ybUJ1dHRvbk1hdERpcmVjdGl2ZSA9IFwibWF0LWJ1dHRvblwifFwibWF0LWZsYXQtYnV0dG9uXCJ8XCJtYXQtcmFpc2VkLWJ1dHRvblwifFwibWF0LXN0cm9rZWQtYnV0dG9uXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUb3RzRm9ybUJ1dHRvbnNDb25maWcge1xyXG4gIHBvc2l0aXZlQnV0dG9uTWF0ZXJpYWxEaXJlY3RpdmUgOiBUb3RzRm9ybUJ1dHRvbk1hdERpcmVjdGl2ZSA9IFwibWF0LWJ1dHRvblwiO1xyXG4gIHBvc2l0aXZlQnV0dG9uQ29sb3IgOiBUaGVtZVBhbGV0dGUgPSBcInByaW1hcnlcIjtcclxuICBuZWdhdGl2ZUJ1dHRvbkNhcHRpb24gOiBzdHJpbmcgPSBcIkNhbmNlbFwiO1xyXG4gIG5lZ2F0aXZlQnV0dG9uTWF0ZXJpYWxEaXJlY3RpdmUgOiBUb3RzRm9ybUJ1dHRvbk1hdERpcmVjdGl2ZSA9IFwibWF0LWJ1dHRvblwiO1xyXG4gIG5lZ2F0aXZlQnV0dG9uQ29sb3IgOiBUaGVtZVBhbGV0dGUgPSB1bmRlZmluZWQ7ICAgLy8gVW50aGVtZWRcclxufSJdfQ==