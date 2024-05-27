import { ElementRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { TotsActionModalForm } from '../../entities/tots-action-modal-form';
import { TotsModalConfig } from '../../entities/tots-modal-config';
import { TotsActionForm } from '../../entities/tots-action-form';
import * as i0 from "@angular/core";
export declare class TotsFormModalComponent {
    protected dialogRef: MatDialogRef<TotsFormModalComponent>;
    data: TotsModalConfig;
    actions: Subject<TotsActionModalForm>;
    isLoading: boolean;
    typeLoading: string;
    colorLoading: string;
    dialog?: ElementRef;
    onDocumentClick(event: Event): void;
    constructor(dialogRef: MatDialogRef<TotsFormModalComponent>, data: TotsModalConfig);
    onActionForm(action: TotsActionForm): void;
    showLoading(type?: string, color?: string): void;
    hideLoading(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TotsFormModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TotsFormModalComponent, "tots-form-modal", never, {}, {}, never, never, false, never>;
}
