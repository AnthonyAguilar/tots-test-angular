import { InjectionToken } from "@angular/core";
import { ThemePalette } from "@angular/material/core";
import * as i0 from "@angular/core";
export declare const TOTS_TABLE_DEFAULT_CONFIG: InjectionToken<TotsTableDefaultConfig>;
export declare class TotsTableDefaultConfig {
    /**
     * Message shown when there are no entries in the table
     */
    messageNotFound?: string;
    /**
     * Replaces default mat spinner
     */
    loadingComponent?: any;
    /**
     * Applies to the default initial loading spinner and to the upper and/or lower progress bars
     */
    matColor?: ThemePalette;
    /**
     * @default false
     */
    upperPaginator?: boolean;
    /**
     * @default true
     */
    lowerPaginator?: boolean;
    /**
     * @default false
     */
    upperProgressBar?: boolean;
    /**
     * @default true
     */
    lowerProgressBar?: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TotsTableDefaultConfig, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TotsTableDefaultConfig>;
}
