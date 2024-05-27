import { TotsBaseFieldComponent } from '../tots-base-field.component';
import * as i0 from "@angular/core";
export declare class OneFileFieldComponent extends TotsBaseFieldComponent {
    isUploading: boolean;
    onChange(target: any): void;
    onClickRemove(): void;
    uploadFile(file: File): void;
    displayName(item: any): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<OneFileFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OneFileFieldComponent, "tots-one-file-field", never, {}, {}, never, never, false, never>;
}
