import { TotsBaseFieldComponent } from '../tots-base-field.component';
import * as i0 from "@angular/core";
export declare class FilesListFieldComponent extends TotsBaseFieldComponent {
    uploadingCount: number;
    onChange(target: any): void;
    onClickRemove(item: any): void;
    uploadFile(file: File): void;
    displayName(item: any): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilesListFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FilesListFieldComponent, "tots-files-list-field", never, {}, {}, never, never, false, never>;
}
