import { OnInit } from '@angular/core';
import { TotsBaseFieldComponent } from '../tots-base-field.component';
import * as i0 from "@angular/core";
export declare class PasswordFieldComponent extends TotsBaseFieldComponent implements OnInit {
    protected showPassword: boolean;
    protected getCaption(): string | undefined;
    protected togglePassword(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PasswordFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PasswordFieldComponent, "tots-password-field", never, {}, {}, never, never, false, never>;
}
