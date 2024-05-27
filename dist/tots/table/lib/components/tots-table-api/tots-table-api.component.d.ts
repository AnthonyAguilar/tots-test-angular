import { EventEmitter, OnInit } from '@angular/core';
import { TotsListResponse } from '@tots/core';
import { Observable } from 'rxjs';
import { TotsActionTable } from '../../entities/tots-action-table';
import { TotsTableApiConfig } from '../../entities/tots-table-api-config';
import { TotsTableConfig } from '../../entities/tots-table-config';
import { TotsTableComponent } from '../tots-table/tots-table.component';
import * as i0 from "@angular/core";
export declare class TotsTableApiComponent implements OnInit {
    tableComp: TotsTableComponent;
    config: TotsTableApiConfig;
    hasPagination: boolean;
    isPaginationStartIndexInZero: boolean;
    onAction: EventEmitter<TotsActionTable>;
    configTable: TotsTableConfig;
    ngOnInit(): void;
    onTableAction(action: TotsActionTable): void;
    loadConfig(): void;
    refreshQueryAndLoadItems(): import("rxjs").Subscription | undefined;
    loadItems(): import("rxjs").Subscription | undefined;
    getDataItems(): TotsListResponse<any> | undefined;
    setObs(obs: Observable<TotsListResponse<any>>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TotsTableApiComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TotsTableApiComponent, "tots-table-api", never, { "config": { "alias": "config"; "required": false; }; "hasPagination": { "alias": "hasPagination"; "required": false; }; "isPaginationStartIndexInZero": { "alias": "isPaginationStartIndexInZero"; "required": false; }; }, { "onAction": "onAction"; }, never, never, false, never>;
}
