import { InjectionToken } from "@angular/core";
import { ThemePalette } from "@angular/material/core";
import * as i0 from "@angular/core";
export declare const TOTS_FORM_BUTTONS_CONFIG: InjectionToken<TotsFormButtonsConfig>;
export declare type TotsFormButtonMatDirective = "mat-button" | "mat-flat-button" | "mat-raised-button" | "mat-stroked-button";
export declare class TotsFormButtonsConfig {
    positiveButtonMaterialDirective: TotsFormButtonMatDirective;
    positiveButtonColor: ThemePalette;
    negativeButtonCaption: string;
    negativeButtonMaterialDirective: TotsFormButtonMatDirective;
    negativeButtonColor: ThemePalette;
    static ɵfac: i0.ɵɵFactoryDeclaration<TotsFormButtonsConfig, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TotsFormButtonsConfig>;
}
