import { TotsBaseFieldComponent } from '../tots-base-field.component';
import * as i0 from "@angular/core";
export declare class PhotosFieldComponent extends TotsBaseFieldComponent {
    uploadingCount: number;
    onChange(target: any): void;
    onClickRemove(item: any): void;
    uploadFile(file: File): void;
    displayUrl(item: any): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<PhotosFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PhotosFieldComponent, "tots-photos-field", never, {}, {}, never, never, false, never>;
}
