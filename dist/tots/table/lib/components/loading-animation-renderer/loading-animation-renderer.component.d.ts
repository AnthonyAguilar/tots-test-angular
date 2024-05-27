import { ComponentRef, OnDestroy, ViewContainerRef } from '@angular/core';
import { TotsTableDefaultConfig } from '../../entities/tots-table-default-config';
import * as i0 from "@angular/core";
export declare class LoadingAnimationRendererComponent implements OnDestroy {
    private totsTableDefaultConfig;
    private viewContainerRef;
    loadingComponentContainer: ViewContainerRef;
    loadingComponent: ComponentRef<any>;
    constructor(totsTableDefaultConfig: TotsTableDefaultConfig, viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private setLoader;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoadingAnimationRendererComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LoadingAnimationRendererComponent, "tots-loading-animation-renderer", never, {}, {}, never, never, false, never>;
}
