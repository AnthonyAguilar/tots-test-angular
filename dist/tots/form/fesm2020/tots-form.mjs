import * as i0 from '@angular/core';
import { InjectionToken, Injectable, Component, Input, Inject, EventEmitter, Output, ViewChild, HostListener, NgModule } from '@angular/core';
import * as i1 from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { tap, switchMap, of, map, Subject } from 'rxjs';
import * as i1$1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3$4 from '@tots/loading';
import { TotsLoadingModule } from '@tots/loading';
import * as i2 from '@angular/forms';
import { UntypedFormControl, FormControl, UntypedFormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i4$1 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i3 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i4 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i3$1 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i4$2 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import * as i5 from '@angular/material/core';
import * as i4$3 from '@angular/material/progress-spinner';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import * as i6 from '@angular/material/tooltip';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i6$1 from '@angular/material/autocomplete';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import * as i3$2 from '@angular/material/button-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import * as i2$1 from '@angular/material/slide-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import * as i3$3 from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';

class TotsFieldForm {
    constructor() {
        this.key = '';
        this.label = '';
        this.validators = [];
    }
}

class TotsActionForm {
    constructor() {
        this.key = '';
    }
}

class TotsModalConfig {
    constructor() {
        this.title = '';
        this.fields = [];
        this.autoSave = false;
    }
}

class TotsActionModalForm {
    constructor() {
        this.key = '';
    }
}

const TOTS_FORM_BUTTONS_CONFIG = new InjectionToken('confirm_button_config');
class TotsFormButtonsConfig {
    constructor() {
        this.positiveButtonMaterialDirective = "mat-button";
        this.positiveButtonColor = "primary";
        this.negativeButtonCaption = "Cancel";
        this.negativeButtonMaterialDirective = "mat-button";
        this.negativeButtonColor = undefined; // Unthemed
    }
}
TotsFormButtonsConfig.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: TotsFormButtonsConfig, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
TotsFormButtonsConfig.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: TotsFormButtonsConfig });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: TotsFormButtonsConfig, decorators: [{
            type: Injectable
        }] });

class TotsFormModalService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    open(config) {
        let dialogRef = this.dialog.open(TotsFormModalComponent, {
            width: '700px',
            panelClass: 'tots-form-modal-overlay-pane',
            backdropClass: "tots-modal-backdrop",
            data: config
        });
        return dialogRef.componentInstance.actions;
    }
}
TotsFormModalService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: TotsFormModalService, deps: [{ token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Injectable });
TotsFormModalService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: TotsFormModalService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: TotsFormModalService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.MatDialog }]; } });

class TotsFormHelper {
    /**
     * Crea un form control basico para el formulario
     * @param field
     * @param group
     * @returns
     */
    static createFormControl(field, group) {
        // Create Control
        let newInput = new UntypedFormControl();
        // Config validators
        if (field.validators != undefined && field.validators.length > 0) {
            newInput.setValidators(field.validators);
        }
        // If include default value
        if (field.extra && field.extra.default_value) {
            newInput.setValue(field.extra.default_value);
        }
        // if disable
        if (field.extra && field.extra.disabled) {
            newInput.disable();
        }
        // Add in Group
        if (Array.isArray(field.key)) {
            group.addControl(field.key.join('_'), newInput);
        }
        else {
            group.addControl(field.key, newInput);
        }
        // Return control
        return newInput;
    }
    /**
     * Obtiene el valor de un objeto a traves de la KEY
     * @param item
     * @param key
     * @returns
     */
    static getItemValueByKey(item, key) {
        if (key == undefined) {
            return '';
        }
        if (typeof key == 'string' && item[key] != undefined) {
            return item[key];
        }
        let valueFinal = item;
        for (const keyObj of key) {
            if (valueFinal[keyObj] == undefined) {
                return '';
            }
            valueFinal = valueFinal[keyObj];
        }
        return valueFinal;
    }
    static setValueInItemByKey(item, key, value) {
        if (key == undefined) {
            return '';
        }
        if (typeof key == 'string') {
            item[key] = value;
            return item;
        }
        // Inicializa una variable de referencia que apunte al objeto principal
        let currentObj = item;
        // Utiliza un bucle para acceder a la propiedad deseada
        for (let i = 0; i < key.length; i++) {
            const internalKey = key[i];
            // Verifica si estamos en la última clave
            if (i === key.length - 1) {
                // Asigna el valor en la última propiedad
                currentObj[internalKey] = value;
            }
            else {
                // Avanza al siguiente objeto anidado
                currentObj = currentObj[internalKey];
            }
        }
    }
}

class TotsBaseFieldComponent {
    constructor() { }
    ngOnInit() {
        this.input = TotsFormHelper.createFormControl(this.field, this.group);
    }
    getAppearance() {
        if (this.field.extra && this.field.extra.appearance) {
            return this.field.extra.appearance;
        }
        return 'fill';
    }
    getClases() {
        if (this.field.extra && this.field.extra.classes) {
            return this.field.extra.classes;
        }
        return '';
    }
    getPlaceholder() {
        if (this.field.extra && this.field.extra.placeholder) {
            return this.field.extra.placeholder;
        }
        return '';
    }
    isDisabled() {
        if (this.field.extra && this.field.extra.disabled) {
            return this.field.extra.disabled;
        }
        return false;
    }
    hasError() {
        return this.input.invalid && (this.input.dirty || this.input.touched);
    }
    getMessageError() {
        if (this.field.errors == undefined) {
            return '';
        }
        for (const error of this.field.errors) {
            if (this.input.hasError(error.name)) {
                return error.message;
            }
        }
        return '';
    }
    static updateFormByItem(group, item, field) {
        if (Array.isArray(field.key)) {
            group.get(field.key.join('_'))?.setValue(TotsFormHelper.getItemValueByKey(item, field.key));
        }
        else {
            group.get(field.key)?.setValue(item[field.key]);
        }
    }
    static updateItemByForm(group, item, field) {
        if (Array.isArray(field.key)) {
            TotsFormHelper.setValueInItemByKey(item, field.key, group.get(field.key.join('_'))?.value);
        }
        else {
            item[field.key] = group.get(field.key)?.value;
        }
    }
}
TotsBaseFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: TotsBaseFieldComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TotsBaseFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.3", type: TotsBaseFieldComponent, selector: "tots-base-field", inputs: { field: "field", group: "group", onAction: "onAction" }, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: TotsBaseFieldComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'tots-base-field',
                    template: ''
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { field: [{
                type: Input
            }], group: [{
                type: Input
            }], onAction: [{
                type: Input
            }] } });

class BasePrintFieldComponent {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    ngOnInit() {
        const view = this.viewContainerRef.createComponent(this.field.component);
        view.instance.group = this.group;
        view.instance.field = this.field;
        view.instance.onAction = this.onAction;
    }
}
BasePrintFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: BasePrintFieldComponent, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Component });
BasePrintFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.3", type: BasePrintFieldComponent, selector: "tots-base-print-field", inputs: { field: "field", group: "group", onAction: "onAction" }, ngImport: i0, template: "<div #contentColumn></div>", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: BasePrintFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-base-print-field', template: "<div #contentColumn></div>" }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { field: [{
                type: Input
            }], group: [{
                type: Input
            }], onAction: [{
                type: Input
            }] } });

class StringFieldComponent extends TotsBaseFieldComponent {
    getCaption() {
        if (this.field.extra && this.field.extra.caption) {
            return this.field.extra.caption;
        }
        return '';
    }
    get icon() {
        return this.field.extra?.icon;
    }
}
StringFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: StringFieldComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
StringFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.3", type: StringFieldComponent, selector: "tots-string-field", usesInheritance: true, ngImport: i0, template: "<mat-form-field *ngIf=\"input\" class=\"{{getClases()}}\" [appearance]=\"getAppearance()\">\r\n    <mat-icon matPrefix *ngIf=\"icon\">{{icon}}</mat-icon>\r\n    <mat-label *ngIf=\"field.label\"> {{ field.label }} </mat-label>\r\n    <input matInput type=\"text\" [formControl]=\"input\" [placeholder]=\"getPlaceholder()\"/>\r\n    <mat-hint *ngIf=\"getCaption() != ''\" [align]=\"'end'\"> {{getCaption()}} </mat-hint>\r\n    <mat-error *ngIf=\"hasError()\">{{getMessageError()}}</mat-error>\r\n</mat-form-field>", styles: ["mat-form-field{width:100%}\n"], dependencies: [{ kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLabel, selector: "mat-label" }, { kind: "directive", type: i3.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i3.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i3.MatPrefix, selector: "[matPrefix], [matIconPrefix], [matTextPrefix]", inputs: ["matTextPrefix"] }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i4$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: StringFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-string-field', template: "<mat-form-field *ngIf=\"input\" class=\"{{getClases()}}\" [appearance]=\"getAppearance()\">\r\n    <mat-icon matPrefix *ngIf=\"icon\">{{icon}}</mat-icon>\r\n    <mat-label *ngIf=\"field.label\"> {{ field.label }} </mat-label>\r\n    <input matInput type=\"text\" [formControl]=\"input\" [placeholder]=\"getPlaceholder()\"/>\r\n    <mat-hint *ngIf=\"getCaption() != ''\" [align]=\"'end'\"> {{getCaption()}} </mat-hint>\r\n    <mat-error *ngIf=\"hasError()\">{{getMessageError()}}</mat-error>\r\n</mat-form-field>", styles: ["mat-form-field{width:100%}\n"] }]
        }] });

class SubmitButtonFieldComponent extends TotsBaseFieldComponent {
    constructor(totsButtonConfig) {
        super();
        this.totsButtonConfig = totsButtonConfig;
    }
    ngOnInit() {
        this.matColor = this.field.extra?.matColor || this.totsButtonConfig.positiveButtonColor;
        this.matButtonDirective = this.field.extra?.matButtonDirective || this.totsButtonConfig.positiveButtonMaterialDirective;
    }
    onClick() {
        if (Array.isArray(this.field.key)) {
            this.onAction.next({ key: this.field.key.join('_'), item: {} });
        }
        else {
            this.onAction.next({ key: this.field.key, item: {} });
        }
    }
    static updateFormByItem(group, item, field) { }
    static updateItemByForm(group, item, field) { }
}
SubmitButtonFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: SubmitButtonFieldComponent, deps: [{ token: TOTS_FORM_BUTTONS_CONFIG }], target: i0.ɵɵFactoryTarget.Component });
SubmitButtonFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.3", type: SubmitButtonFieldComponent, selector: "tots-submit-button-field", usesInheritance: true, ngImport: i0, template: "<button\r\n    mat-button\r\n    [ngClass]=\"{\r\n        'mat-mdc-button': matButtonDirective=='mat-button',\r\n        'mat-mdc-unelevated-button mdc-button--unelevated': matButtonDirective=='mat-flat-button',\r\n        'mat-mdc-raised-button mdc-button--raised': matButtonDirective=='mat-raised-button',\r\n        'mat-mdc-outlined-button mdc-button--outlined': matButtonDirective=='mat-stroked-button'\r\n      }\"\r\n    type=\"button\"\r\n    [color]=\"matColor\"\r\n    [disabled]=\"!group.valid\"\r\n    (click)=\"onClick()\"\r\n>\r\n    {{ field.label }}\r\n</button>", styles: ["button{width:100%}\n"], dependencies: [{ kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: i3$1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: SubmitButtonFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-submit-button-field', template: "<button\r\n    mat-button\r\n    [ngClass]=\"{\r\n        'mat-mdc-button': matButtonDirective=='mat-button',\r\n        'mat-mdc-unelevated-button mdc-button--unelevated': matButtonDirective=='mat-flat-button',\r\n        'mat-mdc-raised-button mdc-button--raised': matButtonDirective=='mat-raised-button',\r\n        'mat-mdc-outlined-button mdc-button--outlined': matButtonDirective=='mat-stroked-button'\r\n      }\"\r\n    type=\"button\"\r\n    [color]=\"matColor\"\r\n    [disabled]=\"!group.valid\"\r\n    (click)=\"onClick()\"\r\n>\r\n    {{ field.label }}\r\n</button>", styles: ["button{width:100%}\n"] }]
        }], ctorParameters: function () { return [{ type: TotsFormButtonsConfig, decorators: [{
                    type: Inject,
                    args: [TOTS_FORM_BUTTONS_CONFIG]
                }] }]; } });

class SelectFieldComponent extends TotsBaseFieldComponent {
    getCaption() {
        if (this.field.extra && this.field.extra.caption) {
            return this.field.extra.caption;
        }
        return '';
    }
    isMultiple() {
        if (this.field.extra && this.field.extra.multiple) {
            return this.field.extra.multiple;
        }
        return false;
    }
}
SelectFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: SelectFieldComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
SelectFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.3", type: SelectFieldComponent, selector: "tots-select-field", usesInheritance: true, ngImport: i0, template: "<mat-form-field *ngIf=\"input\" [appearance]=\"getAppearance()\" class=\"{{getClases()}}\">\r\n    <mat-label *ngIf=\"field.label\"> {{ field.label }} </mat-label>\r\n\r\n    <mat-select [formControl]=\"input\" [placeholder]=\"getPlaceholder()\" [multiple]=\"isMultiple()\">\r\n        <mat-option *ngFor=\"let option of field.extra.options\" [value]=\"option.id\"> {{ option.title }} </mat-option>\r\n    </mat-select>\r\n\r\n    <mat-hint *ngIf=\"getCaption() != ''\" [align]=\"'end'\"> {{getCaption()}} </mat-hint>\r\n    <mat-error *ngIf=\"hasError()\">{{getMessageError()}}</mat-error>\r\n</mat-form-field>", styles: ["mat-form-field{width:100%}\n"], dependencies: [{ kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLabel, selector: "mat-label" }, { kind: "directive", type: i3.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i3.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "component", type: i4$2.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { kind: "component", type: i5.MatOption, selector: "mat-option", exportAs: ["matOption"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: SelectFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-select-field', template: "<mat-form-field *ngIf=\"input\" [appearance]=\"getAppearance()\" class=\"{{getClases()}}\">\r\n    <mat-label *ngIf=\"field.label\"> {{ field.label }} </mat-label>\r\n\r\n    <mat-select [formControl]=\"input\" [placeholder]=\"getPlaceholder()\" [multiple]=\"isMultiple()\">\r\n        <mat-option *ngFor=\"let option of field.extra.options\" [value]=\"option.id\"> {{ option.title }} </mat-option>\r\n    </mat-select>\r\n\r\n    <mat-hint *ngIf=\"getCaption() != ''\" [align]=\"'end'\"> {{getCaption()}} </mat-hint>\r\n    <mat-error *ngIf=\"hasError()\">{{getMessageError()}}</mat-error>\r\n</mat-form-field>", styles: ["mat-form-field{width:100%}\n"] }]
        }] });

class LabelHtmlFieldComponent extends TotsBaseFieldComponent {
    ngOnInit() { }
    getHtml() {
        if (this.field.extra && this.field.extra.html) {
            return this.field.extra.html;
        }
        return '';
    }
    static updateFormByItem(group, item, field) { }
    static updateItemByForm(group, item, field) { }
}
LabelHtmlFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: LabelHtmlFieldComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
LabelHtmlFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.3", type: LabelHtmlFieldComponent, selector: "hos-label-html-field", usesInheritance: true, ngImport: i0, template: "<div class=\"tots-label-html-field\" [innerHTML]=\"getHtml()\"></div>", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: LabelHtmlFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'hos-label-html-field', template: "<div class=\"tots-label-html-field\" [innerHTML]=\"getHtml()\"></div>" }]
        }] });

class RowFieldComponent extends TotsBaseFieldComponent {
    ngOnInit() { }
    isHasIcon(field) {
        if (field.extra && field.extra.icon) {
            return true;
        }
        return false;
    }
    getIconField(field) {
        if (field.extra && field.extra.icon) {
            return field.extra.icon;
        }
        return '';
    }
    static updateFormByItem(group, item, field) {
        for (const subfield of field.extra.fields) {
            subfield.component.updateFormByItem(group, item, subfield);
        }
    }
    static updateItemByForm(group, item, field) {
        for (const subfield of field.extra.fields) {
            subfield.component.updateItemByForm(group, item, subfield);
        }
    }
}
RowFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: RowFieldComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
RowFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.3", type: RowFieldComponent, selector: "tots-row-field", usesInheritance: true, ngImport: i0, template: "<div class=\"tots-row-field\">\r\n    <div *ngFor=\"let f of field.extra.fields\" class=\"tots-field-main-container {{ f.extra?.classes ?? '' }}\">\r\n        <mat-icon *ngIf=\"isHasIcon(f)\">{{getIconField(f)}}</mat-icon>\r\n        <div class=\"tots-field-print-container\"><tots-base-print-field [field]=\"f\" [group]=\"group\" [onAction]=\"onAction\"></tots-base-print-field></div>\r\n    </div>\r\n</div>\r\n", styles: [".tots-row-field{display:flex}.tots-field-main-container{display:flex;width:100%;margin-left:24px}.tots-field-main-container tots-base-print-field{width:1px;display:none}.tots-field-main-container mat-icon{width:24px;margin-top:14px;margin-right:20px}.tots-field-main-container .tots-field-print-container{width:100%}.tots-field-main-container:first-child{margin-left:0}\n"], dependencies: [{ kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i4$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: BasePrintFieldComponent, selector: "tots-base-print-field", inputs: ["field", "group", "onAction"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: RowFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-row-field', template: "<div class=\"tots-row-field\">\r\n    <div *ngFor=\"let f of field.extra.fields\" class=\"tots-field-main-container {{ f.extra?.classes ?? '' }}\">\r\n        <mat-icon *ngIf=\"isHasIcon(f)\">{{getIconField(f)}}</mat-icon>\r\n        <div class=\"tots-field-print-container\"><tots-base-print-field [field]=\"f\" [group]=\"group\" [onAction]=\"onAction\"></tots-base-print-field></div>\r\n    </div>\r\n</div>\r\n", styles: [".tots-row-field{display:flex}.tots-field-main-container{display:flex;width:100%;margin-left:24px}.tots-field-main-container tots-base-print-field{width:1px;display:none}.tots-field-main-container mat-icon{width:24px;margin-top:14px;margin-right:20px}.tots-field-main-container .tots-field-print-container{width:100%}.tots-field-main-container:first-child{margin-left:0}\n"] }]
        }] });

class AvatarPhotoFieldComponent extends TotsBaseFieldComponent {
    constructor() {
        super(...arguments);
        this.isUploading = false;
    }
    onChange(target) {
        // Verify if selected one file
        if (target.files.length == 0) {
            return;
        }
        // Call Start uploading
        this.isUploading = true;
        // For each all files selected
        for (let i = 0; i < target.files.length; i++) {
            this.uploadFile(target.files[i]);
        }
    }
    uploadFile(file) {
        this.field.extra.service.upload(file).subscribe((result) => {
            this.input.setValue(result.url);
            this.isUploading = false;
        });
    }
    getButtonText() {
        if (this.field.extra && this.field.extra.button_text) {
            return this.field.extra.button_text;
        }
        return 'Upload photo here';
    }
    getRemoveText() {
        if (this.field.extra && this.field.extra.remove_text) {
            return this.field.extra.remove_text;
        }
        return 'Delete image';
    }
    getErrorImage() {
        if (this.field.extra && this.field.extra.error_image) {
            return this.field.extra.error_image;
        }
        return 'https://storage.googleapis.com/tots-send-public/user-avatar-empty.png';
    }
}
AvatarPhotoFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: AvatarPhotoFieldComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
AvatarPhotoFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.3", type: AvatarPhotoFieldComponent, selector: "avatar-photo-field", usesInheritance: true, ngImport: i0, template: "<div class=\"avatar-photo-field\">\r\n    <input type=\"hidden\" [formControl]=\"input\" />\r\n\r\n    <input #inputFile type=\"file\" accept=\"image/png, image/jpeg, image/gif\" style=\"display: none;\" (change)=\"onChange($event.target)\">\r\n\r\n    <mat-spinner *ngIf=\"isUploading\" [diameter]=\"50\"></mat-spinner>\r\n    <button *ngIf=\"(input.value == ''||input.value == undefined) && !isUploading\" mat-stroked-button class=\"container-image btn-upload-image\" (click)=\"inputFile.click()\">\r\n        <mat-icon>collections</mat-icon> <br> {{getButtonText()}}\r\n    </button>\r\n    <div *ngIf=\"(input.value != '' && input.value != undefined) && !isUploading\" class=\"container-image\" (click)=\"inputFile.click()\">\r\n        <img [src]=\"input.value\" onerror=\"this.src='https://storage.googleapis.com/tots-send-public/user-avatar-empty.png'\" />\r\n    </div>\r\n    <button *ngIf=\"(input.value != '' && input.value != undefined) && !isUploading\" mat-icon-button matTooltip=\"{{getRemoveText()}}\" class=\"btn-delete\" color=\"warn\" (click)=\"input.setValue('')\"><mat-icon>delete</mat-icon></button>\r\n</div>", styles: [".avatar-photo-field{position:relative;border-radius:50%;width:8em;min-width:8em;height:8em;margin:1em 0;color:#000}.avatar-photo-field img{width:100%;height:100%;object-fit:cover}.avatar-photo-field:hover .btn-delete{opacity:1;bottom:-1.2em}.avatar-photo-field .container-image{width:100%;height:100%;padding:0;border-radius:50%;overflow:hidden;white-space:normal;line-height:1.5;cursor:pointer}.avatar-photo-field .btn-upload-image{text-transform:initial;opacity:.5;padding:.5em;font-size:.8rem!important}.avatar-photo-field .btn-upload-image mat-icon{margin-bottom:.3em}.avatar-photo-field .btn-delete{background-color:#fff;opacity:0;position:absolute;bottom:0;left:50%;transform:translate(-50%);-o-transform:translateX(-50%);-ms-transform:translateX(-50%);-moz-transform:translateX(-50%);-webkit-transform:translateX(-50%)}.avatar-photo-field mat-spinner{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%)}\n"], dependencies: [{ kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3$1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i3$1.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i4$3.MatProgressSpinner, selector: "mat-progress-spinner, mat-spinner", inputs: ["color", "mode", "value", "diameter", "strokeWidth"], exportAs: ["matProgressSpinner"] }, { kind: "component", type: i4$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i6.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: AvatarPhotoFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'avatar-photo-field', template: "<div class=\"avatar-photo-field\">\r\n    <input type=\"hidden\" [formControl]=\"input\" />\r\n\r\n    <input #inputFile type=\"file\" accept=\"image/png, image/jpeg, image/gif\" style=\"display: none;\" (change)=\"onChange($event.target)\">\r\n\r\n    <mat-spinner *ngIf=\"isUploading\" [diameter]=\"50\"></mat-spinner>\r\n    <button *ngIf=\"(input.value == ''||input.value == undefined) && !isUploading\" mat-stroked-button class=\"container-image btn-upload-image\" (click)=\"inputFile.click()\">\r\n        <mat-icon>collections</mat-icon> <br> {{getButtonText()}}\r\n    </button>\r\n    <div *ngIf=\"(input.value != '' && input.value != undefined) && !isUploading\" class=\"container-image\" (click)=\"inputFile.click()\">\r\n        <img [src]=\"input.value\" onerror=\"this.src='https://storage.googleapis.com/tots-send-public/user-avatar-empty.png'\" />\r\n    </div>\r\n    <button *ngIf=\"(input.value != '' && input.value != undefined) && !isUploading\" mat-icon-button matTooltip=\"{{getRemoveText()}}\" class=\"btn-delete\" color=\"warn\" (click)=\"input.setValue('')\"><mat-icon>delete</mat-icon></button>\r\n</div>", styles: [".avatar-photo-field{position:relative;border-radius:50%;width:8em;min-width:8em;height:8em;margin:1em 0;color:#000}.avatar-photo-field img{width:100%;height:100%;object-fit:cover}.avatar-photo-field:hover .btn-delete{opacity:1;bottom:-1.2em}.avatar-photo-field .container-image{width:100%;height:100%;padding:0;border-radius:50%;overflow:hidden;white-space:normal;line-height:1.5;cursor:pointer}.avatar-photo-field .btn-upload-image{text-transform:initial;opacity:.5;padding:.5em;font-size:.8rem!important}.avatar-photo-field .btn-upload-image mat-icon{margin-bottom:.3em}.avatar-photo-field .btn-delete{background-color:#fff;opacity:0;position:absolute;bottom:0;left:50%;transform:translate(-50%);-o-transform:translateX(-50%);-ms-transform:translateX(-50%);-moz-transform:translateX(-50%);-webkit-transform:translateX(-50%)}.avatar-photo-field mat-spinner{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%)}\n"] }]
        }] });

class AutocompleteObsFieldComponent extends TotsBaseFieldComponent {
    constructor() {
        super(...arguments);
        this.inputQuery = new FormControl('');
        this.isFirstLoad = true;
    }
    ngOnInit() {
        super.ngOnInit();
        this.loadQueryConfig();
        this.loadInputConfig();
    }
    loadInputConfig() {
        this.input.valueChanges.subscribe(value => {
            if (this.inputQuery.value != '' && this.inputQuery.value != undefined) {
                return;
            }
            if (this.isFirstLoad == false) {
                return;
            }
            this.inputQuery.setValue(this.getItem(value));
            this.isFirstLoad = false;
        });
    }
    loadQueryConfig() {
        let obs = this.field.extra.obs;
        this.filteredOptions = this.inputQuery.valueChanges.pipe(
        //startWith(''),
        //takeWhile(value => typeof value === "string"),
        tap(value => {
            if (typeof value === "string" && value == '') {
                this.input.setValue(undefined);
            }
        }), switchMap(value => obs(value)));
    }
    selectedOption(event) {
        if (this.field.extra.need_full_object == true) {
            this.input.setValue(event.option.value);
            return;
        }
        this.input.setValue(event.option.value[this.field.extra.selected_key]);
    }
    getItem(itemIdentifier) {
        if (this.field.extra.first_query != undefined) {
            return this.field.extra.first_query;
        }
        if (this.field.extra.options == undefined) {
            return;
        }
        let options = this.field.extra.options;
        return options.find(i => i[this.field.extra.selected_key] == itemIdentifier);
    }
    displayOption(item) {
        if (item == undefined) {
            return '';
        }
        return item[this.field.extra.display_key];
    }
    getCaption() {
        if (this.field.extra && this.field.extra.caption) {
            return this.field.extra.caption;
        }
        return '';
    }
    cleanInputQuery() {
        this.inputQuery.setValue('');
    }
}
AutocompleteObsFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: AutocompleteObsFieldComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
AutocompleteObsFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.3", type: AutocompleteObsFieldComponent, selector: "tots-autocomplete-obs-field", usesInheritance: true, ngImport: i0, template: "<mat-form-field *ngIf=\"input\" [appearance]=\"getAppearance()\" class=\"{{getClases()}}\">\r\n    <mat-label *ngIf=\"field.label\"> {{ field.label }} </mat-label>\r\n\r\n    <input matInput type=\"text\" [formControl]=\"inputQuery\" [matAutocomplete]=\"autoInput\" [placeholder]=\"getPlaceholder()\">\r\n\r\n    <mat-autocomplete #autoInput=\"matAutocomplete\" [displayWith]=\"displayOption.bind(this)\" (optionSelected)=\"selectedOption($event)\">\r\n      <mat-option *ngFor=\"let item of filteredOptions | async\" [value]=\"item\">\r\n        {{ displayOption(item) }}\r\n      </mat-option>\r\n    </mat-autocomplete>\r\n\r\n    <mat-hint *ngIf=\"getCaption() != ''\" [align]=\"'end'\"> {{getCaption()}} </mat-hint>\r\n</mat-form-field>", styles: ["mat-form-field{width:100%}\n"], dependencies: [{ kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLabel, selector: "mat-label" }, { kind: "directive", type: i3.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i5.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "component", type: i6$1.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple"], exportAs: ["matAutocomplete"] }, { kind: "directive", type: i6$1.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", exportAs: ["matAutocompleteTrigger"] }, { kind: "pipe", type: i1$1.AsyncPipe, name: "async" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: AutocompleteObsFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-autocomplete-obs-field', template: "<mat-form-field *ngIf=\"input\" [appearance]=\"getAppearance()\" class=\"{{getClases()}}\">\r\n    <mat-label *ngIf=\"field.label\"> {{ field.label }} </mat-label>\r\n\r\n    <input matInput type=\"text\" [formControl]=\"inputQuery\" [matAutocomplete]=\"autoInput\" [placeholder]=\"getPlaceholder()\">\r\n\r\n    <mat-autocomplete #autoInput=\"matAutocomplete\" [displayWith]=\"displayOption.bind(this)\" (optionSelected)=\"selectedOption($event)\">\r\n      <mat-option *ngFor=\"let item of filteredOptions | async\" [value]=\"item\">\r\n        {{ displayOption(item) }}\r\n      </mat-option>\r\n    </mat-autocomplete>\r\n\r\n    <mat-hint *ngIf=\"getCaption() != ''\" [align]=\"'end'\"> {{getCaption()}} </mat-hint>\r\n</mat-form-field>", styles: ["mat-form-field{width:100%}\n"] }]
        }] });

class AutocompleteFieldComponent extends TotsBaseFieldComponent {
    ngOnInit() {
        this.loadConfigField();
    }
    loadConfigField() {
        this.field.extra.obs = this.obsProcessed.bind(this);
    }
    obsProcessed(query) {
        return of(this.filterProcessed(query));
    }
    filterProcessed(query) {
        if (query == undefined || query == null) {
            return [];
        }
        let filterValue;
        if (typeof query === "string") {
            filterValue = query.toLowerCase();
        }
        else {
            filterValue = query[this.field.extra.display_key];
        }
        let options = this.field.extra.options;
        return options.filter(option => option[this.field.extra.filter_key].toLowerCase().indexOf(filterValue) >= 0);
    }
}
AutocompleteFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: AutocompleteFieldComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
AutocompleteFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.3", type: AutocompleteFieldComponent, selector: "tots-autocomplete-field", usesInheritance: true, ngImport: i0, template: "<tots-autocomplete-obs-field [field]=\"field\" [group]=\"group\" [onAction]=\"onAction\"></tots-autocomplete-obs-field>", styles: [""], dependencies: [{ kind: "component", type: AutocompleteObsFieldComponent, selector: "tots-autocomplete-obs-field" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: AutocompleteFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-autocomplete-field', template: "<tots-autocomplete-obs-field [field]=\"field\" [group]=\"group\" [onAction]=\"onAction\"></tots-autocomplete-obs-field>" }]
        }] });

class FilesListFieldComponent extends TotsBaseFieldComponent {
    constructor() {
        super(...arguments);
        this.uploadingCount = 0;
    }
    onChange(target) {
        // Verify if selected one file
        if (target.files.length == 0) {
            return;
        }
        // For each all files selected
        for (let i = 0; i < target.files.length; i++) {
            this.uploadFile(target.files[i]);
        }
    }
    onClickRemove(item) {
        // Get current value
        let currentValue = this.input.value;
        // Remove item from current value
        currentValue = currentValue.filter(i => i != item);
        // Set new value
        this.input.setValue(currentValue);
    }
    uploadFile(file) {
        // Sum one to uploading count
        this.uploadingCount++;
        this.field.extra.service.upload(file).subscribe((result) => {
            // Get current value
            let currentValue = this.input.value;
            if (currentValue == undefined || currentValue == null) {
                currentValue = new Array();
            }
            // Add new file to current value
            currentValue.push(result);
            // Set new value
            this.input.setValue(currentValue);
            // Sub one to uploading count
            this.uploadingCount--;
        });
    }
    displayName(item) {
        if (item == undefined) {
            return '';
        }
        return item[this.field.extra.display_key];
    }
}
FilesListFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: FilesListFieldComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
FilesListFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.3", type: FilesListFieldComponent, selector: "tots-files-list-field", usesInheritance: true, ngImport: i0, template: "<div class=\"tots-files-list-field\">\r\n    <input type=\"hidden\" [formControl]=\"input\" />\r\n    <input #inputFile type=\"file\" style=\"display: none;\" (change)=\"onChange($event.target)\">\r\n\r\n    <div class=\"tots-header-files\">\r\n        <h6>{{field.label}}</h6>\r\n        <button mat-button (click)=\"inputFile.click()\">{{field.extra.textAddButton}}</button>\r\n    </div>\r\n    <div *ngIf=\"input.value\" class=\"tots-files-list\">\r\n        <div class=\"tots-file\" *ngFor=\"let file of input.value\">\r\n            <div class=\"tots-file-name\">\r\n                <mat-icon>insert_drive_file</mat-icon>\r\n                <span>{{displayName(file)}}</span>\r\n            </div>\r\n            <div class=\"tots-file-actions\">\r\n                <button mat-icon-button (click)=\"onClickRemove(file)\">\r\n                    <mat-icon>delete</mat-icon>\r\n                </button>\r\n            </div>\r\n        </div>\r\n</div>\r\n", styles: [""], dependencies: [{ kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3$1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i3$1.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i4$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: FilesListFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-files-list-field', template: "<div class=\"tots-files-list-field\">\r\n    <input type=\"hidden\" [formControl]=\"input\" />\r\n    <input #inputFile type=\"file\" style=\"display: none;\" (change)=\"onChange($event.target)\">\r\n\r\n    <div class=\"tots-header-files\">\r\n        <h6>{{field.label}}</h6>\r\n        <button mat-button (click)=\"inputFile.click()\">{{field.extra.textAddButton}}</button>\r\n    </div>\r\n    <div *ngIf=\"input.value\" class=\"tots-files-list\">\r\n        <div class=\"tots-file\" *ngFor=\"let file of input.value\">\r\n            <div class=\"tots-file-name\">\r\n                <mat-icon>insert_drive_file</mat-icon>\r\n                <span>{{displayName(file)}}</span>\r\n            </div>\r\n            <div class=\"tots-file-actions\">\r\n                <button mat-icon-button (click)=\"onClickRemove(file)\">\r\n                    <mat-icon>delete</mat-icon>\r\n                </button>\r\n            </div>\r\n        </div>\r\n</div>\r\n" }]
        }] });

class ButtonToggleFieldComponent extends TotsBaseFieldComponent {
    onChange(event) {
        this.input.setValue(event.value);
    }
}
ButtonToggleFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: ButtonToggleFieldComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
ButtonToggleFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.3", type: ButtonToggleFieldComponent, selector: "tots-button-toggle-field", usesInheritance: true, ngImport: i0, template: "<p *ngIf=\"field.label\"> {{ field.label }} </p>\r\n<mat-button-toggle-group [formControl]=\"input\">\r\n    <mat-button-toggle *ngFor=\"let option of field.extra.options\" [value]=\"option.id\">{{ option.title }}</mat-button-toggle>\r\n</mat-button-toggle-group>\r\n\r\n", styles: [""], dependencies: [{ kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i3$2.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { kind: "component", type: i3$2.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "appearance", "checked", "disabled"], outputs: ["change"], exportAs: ["matButtonToggle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: ButtonToggleFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-button-toggle-field', template: "<p *ngIf=\"field.label\"> {{ field.label }} </p>\r\n<mat-button-toggle-group [formControl]=\"input\">\r\n    <mat-button-toggle *ngFor=\"let option of field.extra.options\" [value]=\"option.id\">{{ option.title }}</mat-button-toggle>\r\n</mat-button-toggle-group>\r\n\r\n" }]
        }] });

class OneFileFieldComponent extends TotsBaseFieldComponent {
    constructor() {
        super(...arguments);
        this.isUploading = false;
    }
    onChange(target) {
        // Verify if selected one file
        if (target.files.length == 0) {
            return;
        }
        // Upload file
        this.uploadFile(target.files[0]);
    }
    onClickRemove() {
        // Set new value
        this.input.setValue(undefined);
    }
    uploadFile(file) {
        // Show loading
        this.isUploading = true;
        this.field.extra.service.upload(file).subscribe((result) => {
            // Set new value
            this.input.setValue(result);
            // Hide loading
            this.isUploading = false;
        });
    }
    displayName(item) {
        if (item == undefined) {
            return '';
        }
        return item[this.field.extra.display_key];
    }
}
OneFileFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: OneFileFieldComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
OneFileFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.3", type: OneFileFieldComponent, selector: "tots-one-file-field", usesInheritance: true, ngImport: i0, template: "<div class=\"tots-files-list-field\">\r\n    <input type=\"hidden\" [formControl]=\"input\" />\r\n    <input #inputFile type=\"file\" style=\"display: none;\" (change)=\"onChange($event.target)\">\r\n\r\n    <div *ngIf=\"input.value\" class=\"tots-file\">\r\n        <div class=\"tots-file-name\">\r\n            <mat-icon>insert_drive_file</mat-icon>\r\n            <span>{{displayName(input.value)}}</span>\r\n        </div>\r\n        <div class=\"tots-file-actions\">\r\n            <button mat-icon-button (click)=\"onClickRemove()\">\r\n                <mat-icon>delete</mat-icon>\r\n            </button>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"input.value == undefined\" class=\"file-not-uploaded\" (click)=\"inputFile.click()\">\r\n        <div class=\"tots-file-name\">\r\n            <mat-icon>insert_drive_file</mat-icon>\r\n            <span>{{field.label}}</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n", styles: [""], dependencies: [{ kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3$1.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i4$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: OneFileFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-one-file-field', template: "<div class=\"tots-files-list-field\">\r\n    <input type=\"hidden\" [formControl]=\"input\" />\r\n    <input #inputFile type=\"file\" style=\"display: none;\" (change)=\"onChange($event.target)\">\r\n\r\n    <div *ngIf=\"input.value\" class=\"tots-file\">\r\n        <div class=\"tots-file-name\">\r\n            <mat-icon>insert_drive_file</mat-icon>\r\n            <span>{{displayName(input.value)}}</span>\r\n        </div>\r\n        <div class=\"tots-file-actions\">\r\n            <button mat-icon-button (click)=\"onClickRemove()\">\r\n                <mat-icon>delete</mat-icon>\r\n            </button>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"input.value == undefined\" class=\"file-not-uploaded\" (click)=\"inputFile.click()\">\r\n        <div class=\"tots-file-name\">\r\n            <mat-icon>insert_drive_file</mat-icon>\r\n            <span>{{field.label}}</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n" }]
        }] });

class TextareaFieldComponent extends TotsBaseFieldComponent {
    getCaption() {
        if (this.field.extra && this.field.extra.caption) {
            return this.field.extra.caption;
        }
        return '';
    }
}
TextareaFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: TextareaFieldComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
TextareaFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.3", type: TextareaFieldComponent, selector: "tots-textarea-field", usesInheritance: true, ngImport: i0, template: "<mat-form-field *ngIf=\"input\" class=\"{{getClases()}}\" [appearance]=\"getAppearance()\">\r\n    <mat-label *ngIf=\"field.label\"> {{ field.label }} </mat-label>\r\n    <textarea matInput [formControl]=\"input\" [placeholder]=\"getPlaceholder()\"></textarea>\r\n    <mat-hint *ngIf=\"getCaption() != ''\" [align]=\"'end'\"> {{getCaption()}} </mat-hint>\r\n    <mat-error *ngIf=\"hasError()\">{{getMessageError()}}</mat-error>\r\n</mat-form-field>", styles: ["mat-form-field{width:100%}\n"], dependencies: [{ kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLabel, selector: "mat-label" }, { kind: "directive", type: i3.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i3.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: TextareaFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-textarea-field', template: "<mat-form-field *ngIf=\"input\" class=\"{{getClases()}}\" [appearance]=\"getAppearance()\">\r\n    <mat-label *ngIf=\"field.label\"> {{ field.label }} </mat-label>\r\n    <textarea matInput [formControl]=\"input\" [placeholder]=\"getPlaceholder()\"></textarea>\r\n    <mat-hint *ngIf=\"getCaption() != ''\" [align]=\"'end'\"> {{getCaption()}} </mat-hint>\r\n    <mat-error *ngIf=\"hasError()\">{{getMessageError()}}</mat-error>\r\n</mat-form-field>", styles: ["mat-form-field{width:100%}\n"] }]
        }] });

class AutocompleteListFieldComponent extends TotsBaseFieldComponent {
    constructor() {
        super(...arguments);
        this.inputQuery = new FormControl('');
        this.isFirstLoad = true;
    }
    ngOnInit() {
        super.ngOnInit();
        // Default array value
        this.input.setValue([]);
        this.loadQueryConfig();
    }
    loadQueryConfig() {
        let obs = this.field.extra.obs;
        this.filteredOptions = this.inputQuery.valueChanges.pipe(map(value => {
            if (typeof value === "object") {
                return this.displayOption(value);
            }
            return value;
        }), switchMap(value => obs(value)));
    }
    selectedOption(event) {
        let data = this.input.value;
        if (this.input.value == undefined) {
            data = [];
        }
        // Verify if has exist in array
        if (data.find(i => i[this.field.extra.selected_key] == event.option.value[this.field.extra.selected_key]) == undefined) {
            data.push(event.option.value);
            this.input.setValue(data);
        }
        this.inputQuery.setValue('');
    }
    displayOption(item) {
        if (item == undefined) {
            return '';
        }
        return item[this.field.extra.display_key];
    }
    displayPhoto(item) {
        if (item == undefined) {
            return '';
        }
        return item[this.field.extra.display_photo];
    }
    getCaption() {
        if (this.field.extra && this.field.extra.caption) {
            return this.field.extra.caption;
        }
        return '';
    }
    getPlaceholderPhoto() {
        if (this.field.extra && this.field.extra.placeholder_photo) {
            return this.field.extra.placeholder_photo;
        }
        return '';
    }
    isShowPhoto() {
        if (this.field.extra && this.field.extra.is_show_photo != undefined) {
            return this.field.extra.is_show_photo;
        }
        return true;
    }
    onClickRemove(item) {
        let data = this.input.value;
        let index = data.findIndex(i => i[this.field.extra.selected_key] == item[this.field.extra.selected_key]);
        if (index != -1) {
            data.splice(index, 1);
            this.input.setValue(data);
        }
    }
    onImgError(event) {
        let placeholderPhoto = this.getPlaceholderPhoto();
        if (placeholderPhoto == '') {
            return;
        }
        event.target.src = placeholderPhoto;
    }
}
AutocompleteListFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: AutocompleteListFieldComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
AutocompleteListFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.3", type: AutocompleteListFieldComponent, selector: "lib-autocomplete-list-field", usesInheritance: true, ngImport: i0, template: "<mat-form-field *ngIf=\"input\" [appearance]=\"getAppearance()\" class=\"{{getClases()}}\">\r\n    <mat-label *ngIf=\"field.label\"> {{ field.label }} </mat-label>\r\n\r\n    <input matInput type=\"text\" [formControl]=\"inputQuery\" [matAutocomplete]=\"autoInput\" [placeholder]=\"getPlaceholder()\">\r\n\r\n    <mat-autocomplete #autoInput=\"matAutocomplete\" [displayWith]=\"displayOption.bind(this)\" (optionSelected)=\"selectedOption($event)\" >\r\n      <mat-option *ngFor=\"let item of filteredOptions | async\" [value]=\"item\">\r\n        {{ displayOption(item) }}\r\n      </mat-option>\r\n    </mat-autocomplete>\r\n\r\n    <mat-hint *ngIf=\"getCaption() != ''\" [align]=\"'end'\"> {{getCaption()}} </mat-hint>\r\n</mat-form-field>\r\n\r\n<div class=\"tots-autocomplete-list\">\r\n    <div *ngFor=\"let item of input.value\" class=\"tots-item-auto\">\r\n        <div class=\"tots-item-info\">\r\n            <img *ngIf=\"isShowPhoto()\" [src]=\"displayPhoto(item)\" (error)=\"onImgError($event)\" />\r\n            <p>{{ displayOption(item) }}</p>\r\n        </div>\r\n        <div class=\"tots-item-remove\">\r\n            <button mat-icon-button color=\"warn\" (click)=\"onClickRemove(item)\"><mat-icon>close</mat-icon></button>\r\n        </div>\r\n    </div>\r\n</div>", styles: ["mat-form-field{width:100%}.tots-item-auto{display:flex;justify-content:space-between}.tots-item-info{display:flex;align-items:center}.tots-item-info img{width:32px;height:32px}.tots-item-info p{margin:0 0 0 8px}\n"], dependencies: [{ kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLabel, selector: "mat-label" }, { kind: "directive", type: i3.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i5.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "component", type: i3$1.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i4$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i6$1.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple"], exportAs: ["matAutocomplete"] }, { kind: "directive", type: i6$1.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", exportAs: ["matAutocompleteTrigger"] }, { kind: "pipe", type: i1$1.AsyncPipe, name: "async" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: AutocompleteListFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-autocomplete-list-field', template: "<mat-form-field *ngIf=\"input\" [appearance]=\"getAppearance()\" class=\"{{getClases()}}\">\r\n    <mat-label *ngIf=\"field.label\"> {{ field.label }} </mat-label>\r\n\r\n    <input matInput type=\"text\" [formControl]=\"inputQuery\" [matAutocomplete]=\"autoInput\" [placeholder]=\"getPlaceholder()\">\r\n\r\n    <mat-autocomplete #autoInput=\"matAutocomplete\" [displayWith]=\"displayOption.bind(this)\" (optionSelected)=\"selectedOption($event)\" >\r\n      <mat-option *ngFor=\"let item of filteredOptions | async\" [value]=\"item\">\r\n        {{ displayOption(item) }}\r\n      </mat-option>\r\n    </mat-autocomplete>\r\n\r\n    <mat-hint *ngIf=\"getCaption() != ''\" [align]=\"'end'\"> {{getCaption()}} </mat-hint>\r\n</mat-form-field>\r\n\r\n<div class=\"tots-autocomplete-list\">\r\n    <div *ngFor=\"let item of input.value\" class=\"tots-item-auto\">\r\n        <div class=\"tots-item-info\">\r\n            <img *ngIf=\"isShowPhoto()\" [src]=\"displayPhoto(item)\" (error)=\"onImgError($event)\" />\r\n            <p>{{ displayOption(item) }}</p>\r\n        </div>\r\n        <div class=\"tots-item-remove\">\r\n            <button mat-icon-button color=\"warn\" (click)=\"onClickRemove(item)\"><mat-icon>close</mat-icon></button>\r\n        </div>\r\n    </div>\r\n</div>", styles: ["mat-form-field{width:100%}.tots-item-auto{display:flex;justify-content:space-between}.tots-item-info{display:flex;align-items:center}.tots-item-info img{width:32px;height:32px}.tots-item-info p{margin:0 0 0 8px}\n"] }]
        }] });

class IntegerFieldComponent extends TotsBaseFieldComponent {
    getCaption() {
        if (this.field.extra && this.field.extra.caption) {
            return this.field.extra.caption;
        }
        return '';
    }
}
IntegerFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: IntegerFieldComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
IntegerFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.3", type: IntegerFieldComponent, selector: "tots-integer-field", usesInheritance: true, ngImport: i0, template: "<mat-form-field *ngIf=\"input\" class=\"{{getClases()}}\" [appearance]=\"getAppearance()\">\r\n    <mat-label *ngIf=\"field.label\"> {{ field.label }} </mat-label>\r\n    <input matInput type=\"number\" [formControl]=\"input\" [placeholder]=\"getPlaceholder()\"/>\r\n    <mat-hint *ngIf=\"getCaption() != ''\" [align]=\"'end'\"> {{getCaption()}} </mat-hint>\r\n    <mat-error *ngIf=\"hasError()\">{{getMessageError()}}</mat-error>\r\n</mat-form-field>", styles: ["mat-form-field{width:100%}\n"], dependencies: [{ kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLabel, selector: "mat-label" }, { kind: "directive", type: i3.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i3.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: IntegerFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-integer-field', template: "<mat-form-field *ngIf=\"input\" class=\"{{getClases()}}\" [appearance]=\"getAppearance()\">\r\n    <mat-label *ngIf=\"field.label\"> {{ field.label }} </mat-label>\r\n    <input matInput type=\"number\" [formControl]=\"input\" [placeholder]=\"getPlaceholder()\"/>\r\n    <mat-hint *ngIf=\"getCaption() != ''\" [align]=\"'end'\"> {{getCaption()}} </mat-hint>\r\n    <mat-error *ngIf=\"hasError()\">{{getMessageError()}}</mat-error>\r\n</mat-form-field>", styles: ["mat-form-field{width:100%}\n"] }]
        }] });

class PhotosFieldComponent extends TotsBaseFieldComponent {
    constructor() {
        super(...arguments);
        this.uploadingCount = 0;
    }
    onChange(target) {
        // Verify if selected one file
        if (target.files.length == 0) {
            return;
        }
        // For each all files selected
        for (let i = 0; i < target.files.length; i++) {
            this.uploadFile(target.files[i]);
        }
    }
    onClickRemove(item) {
        // Get current value
        let currentValue = this.input.value;
        // Remove item from current value
        currentValue = currentValue.filter(i => i != item);
        // Set new value
        this.input.setValue(currentValue);
    }
    uploadFile(file) {
        // Sum one to uploading count
        this.uploadingCount++;
        this.field.extra.service.upload(file).subscribe((result) => {
            // Get current value
            let currentValue = this.input.value;
            if (currentValue == undefined || currentValue == null) {
                currentValue = new Array();
            }
            // Add new file to current value
            currentValue.push(result);
            // Set new value
            this.input.setValue(currentValue);
            // Sub one to uploading count
            this.uploadingCount--;
        });
    }
    displayUrl(item) {
        if (item == undefined) {
            return '';
        }
        return item[this.field.extra.display_key];
    }
}
PhotosFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: PhotosFieldComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
PhotosFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.3", type: PhotosFieldComponent, selector: "tots-photos-field", usesInheritance: true, ngImport: i0, template: "<div class=\"tots-photos-field\">\r\n    <input type=\"hidden\" [formControl]=\"input\" />\r\n    <input #inputFile type=\"file\" accept=\"image/png, image/jpeg, image/gif\" style=\"display: none;\" (change)=\"onChange($event.target)\">\r\n\r\n    <div class=\"tots-photo-upload-button\" (click)=\"inputFile.click();\">\r\n        <mat-icon>home</mat-icon>\r\n        <h6>{{field.label}}</h6>\r\n    </div>\r\n    <div *ngIf=\"input.value\" class=\"tots-photos-list\">\r\n        <div class=\"tots-file\" *ngFor=\"let file of input.value\">\r\n            <img [src]=\"displayUrl(file)\" />\r\n            <div class=\"tots-photo-actions\">\r\n                <button mat-icon-button (click)=\"onClickRemove(file)\">\r\n                    <mat-icon>delete</mat-icon>\r\n                </button>\r\n            </div>\r\n        </div>\r\n</div>\r\n", styles: [""], dependencies: [{ kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3$1.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i4$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: PhotosFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-photos-field', template: "<div class=\"tots-photos-field\">\r\n    <input type=\"hidden\" [formControl]=\"input\" />\r\n    <input #inputFile type=\"file\" accept=\"image/png, image/jpeg, image/gif\" style=\"display: none;\" (change)=\"onChange($event.target)\">\r\n\r\n    <div class=\"tots-photo-upload-button\" (click)=\"inputFile.click();\">\r\n        <mat-icon>home</mat-icon>\r\n        <h6>{{field.label}}</h6>\r\n    </div>\r\n    <div *ngIf=\"input.value\" class=\"tots-photos-list\">\r\n        <div class=\"tots-file\" *ngFor=\"let file of input.value\">\r\n            <img [src]=\"displayUrl(file)\" />\r\n            <div class=\"tots-photo-actions\">\r\n                <button mat-icon-button (click)=\"onClickRemove(file)\">\r\n                    <mat-icon>delete</mat-icon>\r\n                </button>\r\n            </div>\r\n        </div>\r\n</div>\r\n" }]
        }] });

class SubmitAndCancelButtonsFieldComponent extends TotsBaseFieldComponent {
    constructor(totsButtonConfig) {
        super();
        this.totsButtonConfig = totsButtonConfig;
    }
    ngOnInit() {
        this.submitMatColor = this.field.extra?.matColor || this.totsButtonConfig.positiveButtonColor;
        this.submitMatButtonDirective = this.field.extra?.matButtonDirective || this.totsButtonConfig.positiveButtonMaterialDirective;
        this.cancelLabel = this.field.extra?.cancelLabel || this.totsButtonConfig.negativeButtonCaption;
        this.cancelMatColor = this.totsButtonConfig.negativeButtonColor;
        this.cancelMatButtonDirective = this.field.extra?.matCancelButtonDirective || this.totsButtonConfig.negativeButtonMaterialDirective;
    }
    onClick() {
        if (Array.isArray(this.field.key)) {
            this.onAction.next({ key: this.field.key.join('_'), item: {} });
        }
        else {
            this.onAction.next({ key: this.field.key, item: {} });
        }
    }
    onCancel() {
        this.onAction.next({ key: "cancel", item: {} });
    }
    static updateFormByItem(group, item, field) { }
    static updateItemByForm(group, item, field) { }
}
SubmitAndCancelButtonsFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: SubmitAndCancelButtonsFieldComponent, deps: [{ token: TOTS_FORM_BUTTONS_CONFIG }], target: i0.ɵɵFactoryTarget.Component });
SubmitAndCancelButtonsFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.3", type: SubmitAndCancelButtonsFieldComponent, selector: "tots-submit-and-cancel-buttons-field", usesInheritance: true, ngImport: i0, template: "<div class=\"submit_and_cancel_wrapper\">\r\n\r\n  <button\r\n    mat-button\r\n    [ngClass]=\"{\r\n      'mat-mdc-button': cancelMatButtonDirective=='mat-button',\r\n      'mat-mdc-unelevated-button mdc-button--unelevated': cancelMatButtonDirective=='mat-flat-button',\r\n      'mat-mdc-raised-button mdc-button--raised': cancelMatButtonDirective=='mat-raised-button',\r\n      'mat-mdc-outlined-button mdc-button--outlined': cancelMatButtonDirective=='mat-stroked-button'\r\n    }\"\r\n    type=\"button\"\r\n    [color]=\"cancelMatColor\"\r\n    (click)=\"onCancel()\"\r\n  >\r\n    {{ cancelLabel }}\r\n  </button>\r\n\r\n  <button\r\n    mat-button\r\n    type=\"submit\"\r\n    [ngClass]=\"{\r\n      'mat-mdc-button': submitMatButtonDirective=='mat-button',\r\n      'mat-mdc-unelevated-button mdc-button--unelevated': submitMatButtonDirective=='mat-flat-button',\r\n      'mat-mdc-raised-button mdc-button--raised': submitMatButtonDirective=='mat-raised-button',\r\n      'mat-mdc-outlined-button mdc-button--outlined': submitMatButtonDirective=='mat-stroked-button'\r\n    }\"\r\n    [color]=\"submitMatColor\"\r\n    [disabled]=\"!group.valid\"\r\n    (click)=\"onClick()\"\r\n  >\r\n    {{ field.label }}\r\n  </button>\r\n\r\n</div>", styles: [".submit_and_cancel_wrapper{display:flex;gap:12px}\n"], dependencies: [{ kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: i3$1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: SubmitAndCancelButtonsFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-submit-and-cancel-buttons-field', template: "<div class=\"submit_and_cancel_wrapper\">\r\n\r\n  <button\r\n    mat-button\r\n    [ngClass]=\"{\r\n      'mat-mdc-button': cancelMatButtonDirective=='mat-button',\r\n      'mat-mdc-unelevated-button mdc-button--unelevated': cancelMatButtonDirective=='mat-flat-button',\r\n      'mat-mdc-raised-button mdc-button--raised': cancelMatButtonDirective=='mat-raised-button',\r\n      'mat-mdc-outlined-button mdc-button--outlined': cancelMatButtonDirective=='mat-stroked-button'\r\n    }\"\r\n    type=\"button\"\r\n    [color]=\"cancelMatColor\"\r\n    (click)=\"onCancel()\"\r\n  >\r\n    {{ cancelLabel }}\r\n  </button>\r\n\r\n  <button\r\n    mat-button\r\n    type=\"submit\"\r\n    [ngClass]=\"{\r\n      'mat-mdc-button': submitMatButtonDirective=='mat-button',\r\n      'mat-mdc-unelevated-button mdc-button--unelevated': submitMatButtonDirective=='mat-flat-button',\r\n      'mat-mdc-raised-button mdc-button--raised': submitMatButtonDirective=='mat-raised-button',\r\n      'mat-mdc-outlined-button mdc-button--outlined': submitMatButtonDirective=='mat-stroked-button'\r\n    }\"\r\n    [color]=\"submitMatColor\"\r\n    [disabled]=\"!group.valid\"\r\n    (click)=\"onClick()\"\r\n  >\r\n    {{ field.label }}\r\n  </button>\r\n\r\n</div>", styles: [".submit_and_cancel_wrapper{display:flex;gap:12px}\n"] }]
        }], ctorParameters: function () { return [{ type: TotsFormButtonsConfig, decorators: [{
                    type: Inject,
                    args: [TOTS_FORM_BUTTONS_CONFIG]
                }] }]; } });

class SelectObsFieldComponent extends SelectFieldComponent {
    ngOnInit() {
        super.ngOnInit();
        this.loadOptions();
    }
    displayId(item) {
        if (item == undefined) {
            return '';
        }
        return item[this.field.extra.selected_key];
    }
    displayOption(item) {
        if (item == undefined) {
            return '';
        }
        return item[this.field.extra.display_key];
    }
    loadOptions() {
        let obs = this.field.extra.obs;
        obs().subscribe(options => this.options = options);
    }
}
SelectObsFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: SelectObsFieldComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
SelectObsFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.3", type: SelectObsFieldComponent, selector: "tots-select-obs-field", usesInheritance: true, ngImport: i0, template: "<mat-form-field *ngIf=\"input && options\" [appearance]=\"getAppearance()\" class=\"{{getClases()}}\">\r\n  <mat-label *ngIf=\"field.label\"> {{ field.label }} </mat-label>\r\n\r\n  <mat-select [formControl]=\"input\" [placeholder]=\"getPlaceholder()\" [multiple]=\"isMultiple()\">\r\n      <mat-option *ngFor=\"let option of options\" [value]=\"displayId(option)\"> {{ displayOption(option) }} </mat-option>\r\n  </mat-select>\r\n\r\n  <mat-hint *ngIf=\"getCaption() != ''\" [align]=\"'end'\"> {{getCaption()}} </mat-hint>\r\n  <mat-error *ngIf=\"hasError()\">{{getMessageError()}}</mat-error>\r\n</mat-form-field>\r\n", styles: ["mat-form-field{width:100%}\n"], dependencies: [{ kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLabel, selector: "mat-label" }, { kind: "directive", type: i3.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i3.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "component", type: i4$2.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { kind: "component", type: i5.MatOption, selector: "mat-option", exportAs: ["matOption"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: SelectObsFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-select-obs-field', template: "<mat-form-field *ngIf=\"input && options\" [appearance]=\"getAppearance()\" class=\"{{getClases()}}\">\r\n  <mat-label *ngIf=\"field.label\"> {{ field.label }} </mat-label>\r\n\r\n  <mat-select [formControl]=\"input\" [placeholder]=\"getPlaceholder()\" [multiple]=\"isMultiple()\">\r\n      <mat-option *ngFor=\"let option of options\" [value]=\"displayId(option)\"> {{ displayOption(option) }} </mat-option>\r\n  </mat-select>\r\n\r\n  <mat-hint *ngIf=\"getCaption() != ''\" [align]=\"'end'\"> {{getCaption()}} </mat-hint>\r\n  <mat-error *ngIf=\"hasError()\">{{getMessageError()}}</mat-error>\r\n</mat-form-field>\r\n", styles: ["mat-form-field{width:100%}\n"] }]
        }] });

class ToggleFieldComponent extends TotsBaseFieldComponent {
    ngOnInit() {
        super.ngOnInit();
        this.matColor = this.field.extra?.matColor || "primary";
    }
}
ToggleFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: ToggleFieldComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
ToggleFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.3", type: ToggleFieldComponent, selector: "tots-toggle-field", usesInheritance: true, ngImport: i0, template: "<mat-slide-toggle [color]=\"matColor\" [formControl]=\"input\">{{ field.label }}</mat-slide-toggle>", styles: [""], dependencies: [{ kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i2$1.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex"], exportAs: ["matSlideToggle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: ToggleFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-toggle-field', template: "<mat-slide-toggle [color]=\"matColor\" [formControl]=\"input\">{{ field.label }}</mat-slide-toggle>" }]
        }] });

class RadioGroupFieldComponent extends TotsBaseFieldComponent {
    ngOnInit() {
        this.input = TotsFormHelper.createFormControl(this.field, this.group);
        this.options = this.field.extra.options;
        this.alignment = this.field.extra.alignment || "horizontal";
    }
}
RadioGroupFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: RadioGroupFieldComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
RadioGroupFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.3", type: RadioGroupFieldComponent, selector: "tots-radio-group-field", usesInheritance: true, ngImport: i0, template: "<label>{{field.label}}</label>\r\n\r\n<mat-radio-group [formControl]=\"input\" [ngClass]=\"{vertical: alignment=='vertical'}\">\r\n    <mat-radio-button *ngFor=\"let o of options\" [value]=\"o.value\">\r\n        {{o.caption}}\r\n    </mat-radio-button>\r\n</mat-radio-group>", styles: [".vertical{display:flex;flex-direction:column}\n"], dependencies: [{ kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i3$3.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { kind: "component", type: i3$3.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: RadioGroupFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-radio-group-field', template: "<label>{{field.label}}</label>\r\n\r\n<mat-radio-group [formControl]=\"input\" [ngClass]=\"{vertical: alignment=='vertical'}\">\r\n    <mat-radio-button *ngFor=\"let o of options\" [value]=\"o.value\">\r\n        {{o.caption}}\r\n    </mat-radio-button>\r\n</mat-radio-group>", styles: [".vertical{display:flex;flex-direction:column}\n"] }]
        }] });

class PasswordFieldComponent extends TotsBaseFieldComponent {
    constructor() {
        super(...arguments);
        this.showPassword = false;
    }
    getCaption() {
        return this.field.extra?.caption;
    }
    togglePassword(event) {
        event.stopPropagation();
        this.showPassword = !this.showPassword;
    }
}
PasswordFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: PasswordFieldComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
PasswordFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.3", type: PasswordFieldComponent, selector: "tots-password-field", usesInheritance: true, ngImport: i0, template: "<mat-form-field *ngIf=\"input\" class=\"{{getClases()}}\" [appearance]=\"getAppearance()\">\r\n    <mat-label *ngIf=\"field.label\"> {{ field.label }} </mat-label>\r\n    <input matInput [type]=\"showPassword && group.enabled ? 'text' : 'password'\" [formControl]=\"input\" [placeholder]=\"getPlaceholder()\"/>\r\n    <button mat-icon-button matSuffix type=\"button\" (click)=\"togglePassword($event)\" tabindex=\"-1\" [disabled]=\"group.disabled\">\r\n        <mat-icon>{{showPassword ? \"visibility_off\" : \"visibility\"}}</mat-icon>\r\n    </button>\r\n    <mat-hint *ngIf=\"getCaption() != ''\" [align]=\"'end'\"> {{getCaption()}} </mat-hint>\r\n    <mat-error *ngIf=\"hasError()\">{{getMessageError()}}</mat-error>\r\n</mat-form-field>", styles: ["mat-form-field{width:100%}\n"], dependencies: [{ kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLabel, selector: "mat-label" }, { kind: "directive", type: i3.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i3.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i3.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i3$1.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i4$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: PasswordFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-password-field', template: "<mat-form-field *ngIf=\"input\" class=\"{{getClases()}}\" [appearance]=\"getAppearance()\">\r\n    <mat-label *ngIf=\"field.label\"> {{ field.label }} </mat-label>\r\n    <input matInput [type]=\"showPassword && group.enabled ? 'text' : 'password'\" [formControl]=\"input\" [placeholder]=\"getPlaceholder()\"/>\r\n    <button mat-icon-button matSuffix type=\"button\" (click)=\"togglePassword($event)\" tabindex=\"-1\" [disabled]=\"group.disabled\">\r\n        <mat-icon>{{showPassword ? \"visibility_off\" : \"visibility\"}}</mat-icon>\r\n    </button>\r\n    <mat-hint *ngIf=\"getCaption() != ''\" [align]=\"'end'\"> {{getCaption()}} </mat-hint>\r\n    <mat-error *ngIf=\"hasError()\">{{getMessageError()}}</mat-error>\r\n</mat-form-field>", styles: ["mat-form-field{width:100%}\n"] }]
        }] });

class TotsFormComponent {
    constructor(changeDetector) {
        this.changeDetector = changeDetector;
        this.fields = new Array();
        this.autoSave = false;
        this.onAction = new EventEmitter();
        this.privateActions = new Subject();
        this.group = new UntypedFormGroup({});
    }
    ngOnInit() {
        this.loadConfig();
    }
    ngAfterViewInit() {
        this.updateFormByItem();
        this.activateAutoSave();
        this.emitInit();
    }
    updateFormByItem() {
        if (this.item == undefined) {
            return;
        }
        // Each all fields
        for (const field of this.fields) {
            field.component.updateFormByItem(this.group, this.item, field);
        }
        // Refresh view
        this.changeDetector.detectChanges();
    }
    updateItemByForm() {
        if (this.item == undefined) {
            return;
        }
        for (const field of this.fields) {
            field.component.updateItemByForm(this.group, this.item, field);
        }
        return this.item;
    }
    getItemByForm() {
        let newItem = Object.assign({}, this.item);
        ;
        for (const field of this.fields) {
            field.component.updateItemByForm(this.group, newItem, field);
        }
        return newItem;
    }
    loadConfig() {
        this.privateActions.subscribe(action => {
            action.item = this.getItemByForm();
            this.onAction.emit(action);
        });
    }
    activateAutoSave() {
        if (!this.autoSave) {
            return;
        }
        this.group.valueChanges.subscribe(values => {
            this.updateItemByForm();
        });
    }
    emitInit() {
        this.onAction.emit({ key: 'tots-form-init', item: undefined });
    }
    isHasIcon(field) {
        if (field.extra && field.extra.icon) {
            return true;
        }
        return false;
    }
    getIconField(field) {
        if (field.extra && field.extra.icon) {
            return field.extra.icon;
        }
        return '';
    }
    hasError(field) {
        let control = this.group.get(field.key);
        if (control == undefined) {
            return false;
        }
        return !control.valid;
    }
    getErrors(field) {
        let control = this.group.get(field.key);
        if (control == undefined) {
            return [];
        }
        return control.errors ? Object.keys(control.errors) : [];
    }
    getFormGroup() {
        return this.group;
    }
    setItem(item) {
        this.item = item;
        this.updateFormByItem();
    }
}
TotsFormComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: TotsFormComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
TotsFormComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.3", type: TotsFormComponent, selector: "tots-form", inputs: { fields: "fields", item: "item", autoSave: "autoSave" }, outputs: { onAction: "onAction" }, ngImport: i0, template: "<form [formGroup]=\"group\">\r\n    <div class=\"tots-form-print\">\r\n        <div *ngFor=\"let field of fields\" class=\"tots-field-main-container\">\r\n            <mat-icon *ngIf=\"isHasIcon(field)\">{{getIconField(field)}}</mat-icon>\r\n            <div class=\"tots-field-print-container\"><tots-base-print-field [field]=\"field\" [group]=\"group\" [onAction]=\"privateActions\"></tots-base-print-field></div>\r\n        </div>\r\n    </div>\r\n</form>\r\n", styles: [".tots-field-main-container{display:flex;width:100%}.tots-field-main-container tots-base-print-field{width:1px;display:none}.tots-field-main-container mat-icon{width:24px;margin-top:14px;margin-right:20px}.tots-field-main-container .tots-field-print-container{width:100%}\n"], dependencies: [{ kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "component", type: i4$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: BasePrintFieldComponent, selector: "tots-base-print-field", inputs: ["field", "group", "onAction"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: TotsFormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-form', template: "<form [formGroup]=\"group\">\r\n    <div class=\"tots-form-print\">\r\n        <div *ngFor=\"let field of fields\" class=\"tots-field-main-container\">\r\n            <mat-icon *ngIf=\"isHasIcon(field)\">{{getIconField(field)}}</mat-icon>\r\n            <div class=\"tots-field-print-container\"><tots-base-print-field [field]=\"field\" [group]=\"group\" [onAction]=\"privateActions\"></tots-base-print-field></div>\r\n        </div>\r\n    </div>\r\n</form>\r\n", styles: [".tots-field-main-container{display:flex;width:100%}.tots-field-main-container tots-base-print-field{width:1px;display:none}.tots-field-main-container mat-icon{width:24px;margin-top:14px;margin-right:20px}.tots-field-main-container .tots-field-print-container{width:100%}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { fields: [{
                type: Input
            }], item: [{
                type: Input
            }], autoSave: [{
                type: Input
            }], onAction: [{
                type: Output
            }] } });

class TotsFormModalComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.actions = new Subject();
        this.isLoading = false;
        this.typeLoading = 'square-in-bits';
        this.colorLoading = '#80bc00';
    }
    onDocumentClick(event) {
        const target = event.target;
        if (target.classList.contains("tots-modal-backdrop")) {
            let newAction = new TotsActionModalForm();
            newAction.key = "cancel";
            newAction.item = null;
            newAction.modal = this.dialogRef;
            this.actions.next(newAction);
        }
    }
    onActionForm(action) {
        let newAction = new TotsActionModalForm();
        newAction.key = action.key;
        newAction.item = action.item;
        newAction.modal = this.dialogRef;
        this.actions.next(newAction);
    }
    showLoading(type = 'square-in-bits', color = '#80bc00') {
        this.isLoading = true;
        this.typeLoading = type;
        this.colorLoading = color;
    }
    hideLoading() {
        this.isLoading = false;
    }
}
TotsFormModalComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: TotsFormModalComponent, deps: [{ token: i1.MatDialogRef }, { token: MAT_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component });
TotsFormModalComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.3", type: TotsFormModalComponent, selector: "tots-form-modal", host: { listeners: { "document:click": "onDocumentClick($event)" } }, viewQueries: [{ propertyName: "dialog", first: true, predicate: ["dialog"], descendants: true }], ngImport: i0, template: "<div #dialog>\r\n    <h1 mat-dialog-title>{{data.title}}</h1>\r\n    <div mat-dialog-content>\r\n        <tots-form #form [fields]=\"data.fields\" [item]=\"data.item\" (onAction)=\"onActionForm($event)\" [autoSave]=\"data.autoSave ?? false\"></tots-form>\r\n    </div>\r\n    <tots-loading-factory *ngIf=\"isLoading\" [type]=\"typeLoading\" [color]=\"colorLoading\" [isFullPage]=\"true\"></tots-loading-factory>\r\n</div>", styles: [""], dependencies: [{ kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: i1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "component", type: i3$4.LoadingFactoryComponent, selector: "tots-loading-factory", inputs: ["isFullPage", "color", "type"] }, { kind: "component", type: TotsFormComponent, selector: "tots-form", inputs: ["fields", "item", "autoSave"], outputs: ["onAction"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: TotsFormModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-form-modal', template: "<div #dialog>\r\n    <h1 mat-dialog-title>{{data.title}}</h1>\r\n    <div mat-dialog-content>\r\n        <tots-form #form [fields]=\"data.fields\" [item]=\"data.item\" (onAction)=\"onActionForm($event)\" [autoSave]=\"data.autoSave ?? false\"></tots-form>\r\n    </div>\r\n    <tots-loading-factory *ngIf=\"isLoading\" [type]=\"typeLoading\" [color]=\"colorLoading\" [isFullPage]=\"true\"></tots-loading-factory>\r\n</div>" }]
        }], ctorParameters: function () { return [{ type: i1.MatDialogRef }, { type: TotsModalConfig, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }]; }, propDecorators: { dialog: [{
                type: ViewChild,
                args: ['dialog']
            }], onDocumentClick: [{
                type: HostListener,
                args: ['document:click', ['$event']]
            }] } });

/** Angular */
class TotsFormModule {
}
TotsFormModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: TotsFormModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TotsFormModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.3", ngImport: i0, type: TotsFormModule, declarations: [
        // Components
        TotsFormComponent,
        // Fields
        BasePrintFieldComponent,
        StringFieldComponent,
        SubmitButtonFieldComponent,
        SelectFieldComponent,
        TotsFormModalComponent,
        LabelHtmlFieldComponent,
        RowFieldComponent,
        AvatarPhotoFieldComponent,
        AutocompleteFieldComponent,
        AutocompleteObsFieldComponent,
        FilesListFieldComponent,
        ButtonToggleFieldComponent,
        OneFileFieldComponent,
        TextareaFieldComponent,
        AutocompleteListFieldComponent,
        IntegerFieldComponent,
        PhotosFieldComponent,
        SubmitAndCancelButtonsFieldComponent,
        SelectObsFieldComponent,
        ToggleFieldComponent,
        RadioGroupFieldComponent,
        PasswordFieldComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        // Angular Material
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatTooltipModule,
        MatAutocompleteModule,
        MatButtonToggleModule,
        MatSlideToggleModule,
        MatRadioModule,
        /** Tots Libraries */
        TotsLoadingModule], exports: [TotsFormComponent,
        /** Fields */
        BasePrintFieldComponent,
        AutocompleteObsFieldComponent,
        FilesListFieldComponent,
        OneFileFieldComponent,
        AutocompleteListFieldComponent,
        SelectObsFieldComponent] });
TotsFormModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: TotsFormModule, providers: [
        {
            provide: TOTS_FORM_BUTTONS_CONFIG,
            useClass: TotsFormButtonsConfig
        }
    ], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        // Angular Material
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatTooltipModule,
        MatAutocompleteModule,
        MatButtonToggleModule,
        MatSlideToggleModule,
        MatRadioModule,
        /** Tots Libraries */
        TotsLoadingModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: TotsFormModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        // Components
                        TotsFormComponent,
                        // Fields
                        BasePrintFieldComponent,
                        StringFieldComponent,
                        SubmitButtonFieldComponent,
                        SelectFieldComponent,
                        TotsFormModalComponent,
                        LabelHtmlFieldComponent,
                        RowFieldComponent,
                        AvatarPhotoFieldComponent,
                        AutocompleteFieldComponent,
                        AutocompleteObsFieldComponent,
                        FilesListFieldComponent,
                        ButtonToggleFieldComponent,
                        OneFileFieldComponent,
                        TextareaFieldComponent,
                        AutocompleteListFieldComponent,
                        IntegerFieldComponent,
                        PhotosFieldComponent,
                        SubmitAndCancelButtonsFieldComponent,
                        SelectObsFieldComponent,
                        ToggleFieldComponent,
                        RadioGroupFieldComponent,
                        PasswordFieldComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        // Angular Material
                        MatFormFieldModule,
                        MatInputModule,
                        MatSelectModule,
                        MatButtonModule,
                        MatDialogModule,
                        MatProgressSpinnerModule,
                        MatIconModule,
                        MatTooltipModule,
                        MatAutocompleteModule,
                        MatButtonToggleModule,
                        MatSlideToggleModule,
                        MatRadioModule,
                        /** Tots Libraries */
                        TotsLoadingModule
                    ],
                    exports: [
                        TotsFormComponent,
                        /** Fields */
                        BasePrintFieldComponent,
                        AutocompleteObsFieldComponent,
                        FilesListFieldComponent,
                        OneFileFieldComponent,
                        AutocompleteListFieldComponent,
                        SelectObsFieldComponent
                    ],
                    providers: [
                        {
                            provide: TOTS_FORM_BUTTONS_CONFIG,
                            useClass: TotsFormButtonsConfig
                        }
                    ]
                }]
        }] });

/*
 * Public API Surface of form
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AutocompleteFieldComponent, AutocompleteListFieldComponent, AutocompleteObsFieldComponent, AvatarPhotoFieldComponent, BasePrintFieldComponent, ButtonToggleFieldComponent, FilesListFieldComponent, IntegerFieldComponent, LabelHtmlFieldComponent, OneFileFieldComponent, PasswordFieldComponent, PhotosFieldComponent, RadioGroupFieldComponent, RowFieldComponent, SelectFieldComponent, SelectObsFieldComponent, StringFieldComponent, SubmitAndCancelButtonsFieldComponent, SubmitButtonFieldComponent, TOTS_FORM_BUTTONS_CONFIG, TextareaFieldComponent, ToggleFieldComponent, TotsActionForm, TotsActionModalForm, TotsBaseFieldComponent, TotsFieldForm, TotsFormButtonsConfig, TotsFormComponent, TotsFormHelper, TotsFormModalComponent, TotsFormModalService, TotsFormModule, TotsModalConfig };
//# sourceMappingURL=tots-form.mjs.map
//# sourceMappingURL=tots-form.mjs.map
