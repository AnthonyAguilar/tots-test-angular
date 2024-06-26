import { ChangeDetectorRef, EventEmitter, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { TotsListResponse } from '@tots/core';
import { Subject } from 'rxjs';
import { TotsActionTable } from '../../entities/tots-action-table';
import { TotsColumn } from '../../entities/tots-column';
import { TotsTableConfig } from '../../entities/tots-table-config';
import { TotsTableDefaultConfig } from '../../entities/tots-table-default-config';
import { ThemePalette } from '@angular/material/core';
import * as i0 from "@angular/core";
export declare class TotsTableComponent implements OnInit {
    protected changeDectetor: ChangeDetectorRef;
    private totsTableDefaultConfig;
    config: TotsTableConfig;
    pageIndex: number;
    pageSize: number;
    hasPagination: boolean;
    messageNotFound: string;
    onAction: EventEmitter<TotsActionTable>;
    privateActions: Subject<TotsActionTable>;
    dataItems?: TotsListResponse<any>;
    displayColumns: Array<String>;
    isLoading: boolean;
    firstLoad: boolean;
    matColor: ThemePalette;
    upperPaginator: boolean;
    lowerPaginator: boolean;
    upperProgressBar: boolean;
    lowerProgressBar: boolean;
    constructor(changeDectetor: ChangeDetectorRef, totsTableDefaultConfig: TotsTableDefaultConfig);
    ngOnInit(): void;
    loadConfig(): void;
    loadItems(): import("rxjs").Subscription | undefined;
    private stopLoading;
    onClickOrder(column: TotsColumn): void;
    onClickRow(item: any): void;
    onPageChange(event: PageEvent): void;
    loadColumns(): void;
    getDataItems(): TotsListResponse<any> | undefined;
    refreshDataItems(newData: TotsListResponse<any> | undefined): void;
    detectChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TotsTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TotsTableComponent, "tots-table", never, { "config": { "alias": "config"; "required": false; }; "pageIndex": { "alias": "pageIndex"; "required": false; }; "pageSize": { "alias": "pageSize"; "required": false; }; "hasPagination": { "alias": "hasPagination"; "required": false; }; "messageNotFound": { "alias": "messageNotFound"; "required": false; }; }, { "onAction": "onAction"; }, never, never, false, never>;
}
