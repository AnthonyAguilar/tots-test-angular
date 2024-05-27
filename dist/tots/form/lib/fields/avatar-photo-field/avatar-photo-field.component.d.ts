import { TotsBaseFieldComponent } from '../tots-base-field.component';
import * as i0 from "@angular/core";
export declare class AvatarPhotoFieldComponent extends TotsBaseFieldComponent {
    isUploading: boolean;
    onChange(target: any): void;
    uploadFile(file: File): void;
    getButtonText(): any;
    getRemoveText(): any;
    getErrorImage(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<AvatarPhotoFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AvatarPhotoFieldComponent, "avatar-photo-field", never, {}, {}, never, never, false, never>;
}
