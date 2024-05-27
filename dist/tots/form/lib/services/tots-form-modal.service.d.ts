import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { TotsActionModalForm } from '../../public-api';
import { TotsModalConfig } from '../entities/tots-modal-config';
import * as i0 from "@angular/core";
export declare class TotsFormModalService {
    protected dialog: MatDialog;
    constructor(dialog: MatDialog);
    open(config: TotsModalConfig): Observable<TotsActionModalForm>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TotsFormModalService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TotsFormModalService>;
}
