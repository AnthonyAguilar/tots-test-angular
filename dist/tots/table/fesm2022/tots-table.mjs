import * as i0 from '@angular/core';
import { InjectionToken, Injectable, Component, Input, ViewContainerRef, Inject, ViewChild, EventEmitter, Output, NgModule } from '@angular/core';
import { TotsQuery } from '@tots/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i3 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i4 from '@angular/material/menu';
import { MatMenuModule } from '@angular/material/menu';
import * as i1$1 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Subject, tap } from 'rxjs';
import * as i3$1 from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import * as i4$1 from '@angular/material/paginator';
import { MatPaginatorModule, MAT_PAGINATOR_DEFAULT_OPTIONS } from '@angular/material/paginator';
import * as i5 from '@angular/material/progress-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';

class TotsColumn {
    constructor(key, component, field_key, title, hasOrder = false, order) {
        this.is_show = true;
        this.key = key;
        this.field_key = field_key;
        this.title = title;
        this.component = component;
        this.hasOrder = hasOrder;
        this.order = order;
    }
}

class TotsTableConfig {
    constructor() {
        this.id = '';
        this.columns = [];
        this.classes = '';
    }
}

const TOTS_TABLE_DEFAULT_CONFIG = new InjectionToken('tots_table_default_config');
class TotsTableDefaultConfig {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: TotsTableDefaultConfig, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: TotsTableDefaultConfig }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: TotsTableDefaultConfig, decorators: [{
            type: Injectable
        }] });

class TotsActionTable {
    constructor() {
        this.key = '';
    }
}

class TotsTableApiConfig {
    constructor() {
        this.id = '';
        this.columns = [];
        this.query = new TotsQuery();
        this.classes = '';
    }
}

class TotsColumnOption {
    constructor(value, caption) {
        this.value = value;
        this.caption = caption;
    }
}

class TotsMoreMenuItem {
    constructor(icon, caption, action, cssClass) {
        this.icon = icon;
        this.title = caption;
        this.key = action;
        this.class = cssClass;
    }
}

class TotsStatusColumnOption extends TotsColumnOption {
    constructor(value, caption, backgroundColor, fontColor) {
        super(value, caption);
        this.background_color = backgroundColor;
        this.font_color = fontColor;
    }
}

class TotsStatusIconColumnOption extends TotsColumnOption {
    constructor(value, icon, fontColor) {
        super(value, icon);
        this.font_color = fontColor;
    }
}

class TotsTableHelper {
    /**
     * Obtiene el valor de un objeto a traves de la KEY
     * @param item
     * @param key
     * @returns
     */
    static getItemValueByKey(item, key) {
        if (key == undefined || item == undefined) {
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
}

class TotsBaseColumnComponent {
    getItemValue() {
        return TotsTableHelper.getItemValueByKey(this.item, this.column.field_key);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: TotsBaseColumnComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.11", type: TotsBaseColumnComponent, selector: "tots-base-column", inputs: { column: "column", item: "item", onAction: "onAction", index: "index" }, ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: TotsBaseColumnComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'tots-base-column',
                    template: ''
                }]
        }], propDecorators: { column: [{
                type: Input
            }], item: [{
                type: Input
            }], onAction: [{
                type: Input
            }], index: [{
                type: Input
            }] } });

class StringColumnComponent extends TotsBaseColumnComponent {
    getItemValue() {
        let value = TotsTableHelper.getItemValueByKey(this.item, this.column.field_key);
        if (this.column.extra && this.column.extra.cutSeparator) {
            return value.split(this.column.extra.cutSeparator)[0];
        }
        return value;
    }
    get prepend() {
        return this.column.extra?.prepend;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: StringColumnComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.11", type: StringColumnComponent, selector: "tots-string-column", usesInheritance: true, ngImport: i0, template: "<span class=\"prefix\" *ngIf=\"prepend\"> {{ prepend }} </span>\r\n{{getItemValue()}}", styles: [""], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: StringColumnComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-string-column', template: "<span class=\"prefix\" *ngIf=\"prepend\"> {{ prepend }} </span>\r\n{{getItemValue()}}" }]
        }] });

class MoreMenuColumnComponent extends TotsBaseColumnComponent {
    clickButton(itemAction, $event) {
        this.onAction.next({ key: itemAction.key, item: this.item });
        $event.preventDefault();
        return false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: MoreMenuColumnComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.11", type: MoreMenuColumnComponent, selector: "tots-more-menu-column", usesInheritance: true, ngImport: i0, template: "<button mat-icon-button [matMenuTriggerFor]=\"actions\" (click)=\"$event.stopPropagation()\"><mat-icon>more_vert</mat-icon></button>\r\n<mat-menu #actions=\"matMenu\">\r\n    <button mat-menu-item *ngFor=\"let button of column.extra?.actions\" (click)=\"clickButton(button, $event)\" class=\"{{button.class}}\">\r\n        <mat-icon *ngIf=\"button.icon\">{{ button.icon }}</mat-icon> {{ button.title }}\r\n    </button>\r\n</mat-menu>", styles: [""], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i3.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i4.MatMenu, selector: "mat-menu", exportAs: ["matMenu"] }, { kind: "component", type: i4.MatMenuItem, selector: "[mat-menu-item]", inputs: ["disabled", "disableRipple", "role"], exportAs: ["matMenuItem"] }, { kind: "directive", type: i4.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", exportAs: ["matMenuTrigger"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: MoreMenuColumnComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-more-menu-column', template: "<button mat-icon-button [matMenuTriggerFor]=\"actions\" (click)=\"$event.stopPropagation()\"><mat-icon>more_vert</mat-icon></button>\r\n<mat-menu #actions=\"matMenu\">\r\n    <button mat-menu-item *ngFor=\"let button of column.extra?.actions\" (click)=\"clickButton(button, $event)\" class=\"{{button.class}}\">\r\n        <mat-icon *ngIf=\"button.icon\">{{ button.icon }}</mat-icon> {{ button.title }}\r\n    </button>\r\n</mat-menu>" }]
        }] });

class BooleanColumnComponent extends TotsBaseColumnComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: BooleanColumnComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.11", type: BooleanColumnComponent, selector: "tots-boolean-column", usesInheritance: true, ngImport: i0, template: "<ng-container *ngIf=\"getItemValue() == true||getItemValue() == 1; else textNo\">YES</ng-container>\r\n<ng-template #textNo>NO</ng-template>", styles: [""], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: BooleanColumnComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-boolean-column', template: "<ng-container *ngIf=\"getItemValue() == true||getItemValue() == 1; else textNo\">YES</ng-container>\r\n<ng-template #textNo>NO</ng-template>" }]
        }] });

class TwoStringColumnComponent extends TotsBaseColumnComponent {
    getSubtitleValue() {
        return TotsTableHelper.getItemValueByKey(this.item, this.column.extra.field_subtitle_key);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: TwoStringColumnComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.11", type: TwoStringColumnComponent, selector: "tots-two-string-column", usesInheritance: true, ngImport: i0, template: "<div class=\"first-line\"><strong>{{getItemValue()}}</strong></div>\r\n<div class=\"second-line\">{{getSubtitleValue()}}</div>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: TwoStringColumnComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-two-string-column', template: "<div class=\"first-line\"><strong>{{getItemValue()}}</strong></div>\r\n<div class=\"second-line\">{{getSubtitleValue()}}</div>" }]
        }] });

class IconButtonColumnComponent extends TotsBaseColumnComponent {
    clickButton($event) {
        this.onAction.next({ key: this.column.extra.action, item: this.item });
        $event.stopPropagation();
        return false;
    }
    getIconName() {
        return this.column.extra.icon;
    }
    getButtonColor() {
        return this.column.extra.matColor;
    }
    getClasses() {
        return this.column.extra.class;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: IconButtonColumnComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.11", type: IconButtonColumnComponent, selector: "tots-icon-button-column", usesInheritance: true, ngImport: i0, template: "<button mat-icon-button [color]=\"getButtonColor()\" [class]=\"getClasses()\" (click)=\"clickButton($event)\">\r\n    <mat-icon>{{getIconName()}}</mat-icon>\r\n</button>", styles: [""], dependencies: [{ kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i3.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: IconButtonColumnComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-icon-button-column', template: "<button mat-icon-button [color]=\"getButtonColor()\" [class]=\"getClasses()\" (click)=\"clickButton($event)\">\r\n    <mat-icon>{{getIconName()}}</mat-icon>\r\n</button>" }]
        }] });

class CheckboxColumnComponent extends TotsBaseColumnComponent {
    onChange(event) {
        let key = 'select-item';
        if (!event.checked) {
            key = 'unselect-item';
        }
        this.onAction.next({ key: key, item: this.item });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: CheckboxColumnComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.11", type: CheckboxColumnComponent, selector: "tots-checkbox-column", usesInheritance: true, ngImport: i0, template: "<div class=\"tots-checkbox-column\">\r\n    <mat-checkbox [class]=\"this.column.extra?.class\" [color]=\"this.column.extra?.color\" (change)=\"onChange($event)\" (click)=\"$event.stopPropagation();\"></mat-checkbox>\r\n</div>", styles: [""], dependencies: [{ kind: "component", type: i1$1.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: CheckboxColumnComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-checkbox-column', template: "<div class=\"tots-checkbox-column\">\r\n    <mat-checkbox [class]=\"this.column.extra?.class\" [color]=\"this.column.extra?.color\" (change)=\"onChange($event)\" (click)=\"$event.stopPropagation();\"></mat-checkbox>\r\n</div>" }]
        }] });

class OptionColumnComponent extends TotsBaseColumnComponent {
    getItemValue() {
        let value = TotsTableHelper.getItemValueByKey(this.item, this.column.field_key);
        for (const item of this.column.extra.options) {
            if (item[this.column.extra.field_rel_key] == value) {
                return item[this.column.extra.field_print_key];
            }
        }
        return '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: OptionColumnComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.11", type: OptionColumnComponent, selector: "tots-option-column", usesInheritance: true, ngImport: i0, template: "{{getItemValue()}}", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: OptionColumnComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-option-column', template: "{{getItemValue()}}" }]
        }] });

class UserColumnComponent extends TotsBaseColumnComponent {
    getFirstname() {
        if (this.column.extra?.field_firstname_key) {
            return TotsTableHelper.getItemValueByKey(this.item, this.column.extra.field_firstname_key);
        }
        return '';
    }
    getLastname() {
        if (this.column.extra?.field_lastname_key) {
            return TotsTableHelper.getItemValueByKey(this.item, this.column.extra.field_lastname_key);
        }
        return '';
    }
    getFullname() {
        return this.getFirstname() + ' ' + this.getLastname();
    }
    getPhoto() {
        if (this.column.extra?.field_photo_key) {
            return TotsTableHelper.getItemValueByKey(this.item, this.column.extra.field_photo_key);
        }
        return '';
    }
    getSubtitle() {
        if (this.column.extra?.field_subtitle_key) {
            return TotsTableHelper.getItemValueByKey(this.item, this.column.extra.field_subtitle_key);
        }
        return '';
    }
    isOnline() {
        if (this.column.extra?.field_online_key) {
            return TotsTableHelper.getItemValueByKey(this.item, this.column.extra.field_online_key);
        }
        return false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: UserColumnComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.11", type: UserColumnComponent, selector: "tots-user-column", usesInheritance: true, ngImport: i0, template: "<div class=\"user-avatar-component\">\r\n    <div class=\"avatar\" *ngIf=\"getPhoto() != ''\">\r\n        <img mat-card-avatar [src]=\"getPhoto()\" alt=\"{{ getFullname() }}\" class=\"cover-image\" onerror=\"this.src='/assets/img/user-avatar-empty.svg';\">\r\n    </div>\r\n    <div class=\"texts\">\r\n        <div class=\"user\"> {{ getFullname() }} </div>\r\n        <div class=\"body-2\" *ngIf=\"getSubtitle() != ''\"> {{ getSubtitle() }} </div>\r\n    </div>\r\n    <div class=\"check\" *ngIf=\"column.extra?.field_is_online && isOnline()\"><mat-icon>check</mat-icon></div>\r\n</div>", styles: [".user-avatar-component{display:flex;align-items:center;position:relative}.user-avatar-component .avatar{width:40px;min-width:40px;height:40px;min-height:40px;border-radius:40px;overflow:hidden;margin-right:16px}.user-avatar-component .avatar img{width:40px;min-width:40px;height:40px;min-height:40px}.user-avatar-component .texts .user{font-size:1.1em}.user-avatar-component .texts .body-2{color:#636363;font-size:.9em}.user-avatar-component .check{position:absolute;border:2px solid white;border-radius:200px;top:0;left:0;color:#24b524;background-color:#d7ffa3;width:1em;height:1em;display:flex;align-items:center;justify-content:center}.user-avatar-component .check mat-icon{line-height:1em;font-size:1em;width:1em;height:1em}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: UserColumnComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-user-column', template: "<div class=\"user-avatar-component\">\r\n    <div class=\"avatar\" *ngIf=\"getPhoto() != ''\">\r\n        <img mat-card-avatar [src]=\"getPhoto()\" alt=\"{{ getFullname() }}\" class=\"cover-image\" onerror=\"this.src='/assets/img/user-avatar-empty.svg';\">\r\n    </div>\r\n    <div class=\"texts\">\r\n        <div class=\"user\"> {{ getFullname() }} </div>\r\n        <div class=\"body-2\" *ngIf=\"getSubtitle() != ''\"> {{ getSubtitle() }} </div>\r\n    </div>\r\n    <div class=\"check\" *ngIf=\"column.extra?.field_is_online && isOnline()\"><mat-icon>check</mat-icon></div>\r\n</div>", styles: [".user-avatar-component{display:flex;align-items:center;position:relative}.user-avatar-component .avatar{width:40px;min-width:40px;height:40px;min-height:40px;border-radius:40px;overflow:hidden;margin-right:16px}.user-avatar-component .avatar img{width:40px;min-width:40px;height:40px;min-height:40px}.user-avatar-component .texts .user{font-size:1.1em}.user-avatar-component .texts .body-2{color:#636363;font-size:.9em}.user-avatar-component .check{position:absolute;border:2px solid white;border-radius:200px;top:0;left:0;color:#24b524;background-color:#d7ffa3;width:1em;height:1em;display:flex;align-items:center;justify-content:center}.user-avatar-component .check mat-icon{line-height:1em;font-size:1em;width:1em;height:1em}\n"] }]
        }] });

class CurrencyColumnComponent extends TotsBaseColumnComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: CurrencyColumnComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.11", type: CurrencyColumnComponent, selector: "tots-currency-column", usesInheritance: true, ngImport: i0, template: "<span [ngClass]=\"{'tots-currency-column-positive': getItemValue() > 0, 'tots-currency-column-negative': getItemValue() < 0}\">{{getItemValue()|currency}}</span>", styles: [""], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "pipe", type: i1.CurrencyPipe, name: "currency" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: CurrencyColumnComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-currency-column', template: "<span [ngClass]=\"{'tots-currency-column-positive': getItemValue() > 0, 'tots-currency-column-negative': getItemValue() < 0}\">{{getItemValue()|currency}}</span>" }]
        }] });

class StatusColumnComponent extends OptionColumnComponent {
    getBackgroundColor() {
        let value = TotsTableHelper.getItemValueByKey(this.item, this.column.field_key);
        for (const item of this.column.extra.options) {
            if (item[this.column.extra.field_rel_key] == value && item['background_color'] != undefined) {
                return item['background_color'];
            }
        }
        return '';
    }
    getFontColor() {
        let value = TotsTableHelper.getItemValueByKey(this.item, this.column.field_key);
        for (const item of this.column.extra.options) {
            if (item[this.column.extra.field_rel_key] == value && item['font_color'] != undefined) {
                return item['font_color'];
            }
        }
        return '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: StatusColumnComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.11", type: StatusColumnComponent, selector: "tots-status-column", usesInheritance: true, ngImport: i0, template: "<span class=\"tots-status-column\" [ngStyle]=\"{'background-color': getBackgroundColor(), 'color': getFontColor()}\">{{getItemValue()}}</span>", styles: [".tots-status-column{display:inline-block;padding:3px 10px;background-color:#e7e7e7;color:#08081699;font-size:x-small;font-weight:700;text-transform:uppercase}\n"], dependencies: [{ kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: StatusColumnComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-status-column', template: "<span class=\"tots-status-column\" [ngStyle]=\"{'background-color': getBackgroundColor(), 'color': getFontColor()}\">{{getItemValue()}}</span>", styles: [".tots-status-column{display:inline-block;padding:3px 10px;background-color:#e7e7e7;color:#08081699;font-size:x-small;font-weight:700;text-transform:uppercase}\n"] }]
        }] });

class BalanceCurrencyColumnComponent extends TotsBaseColumnComponent {
    getBalance() {
        return this.getDebit() - this.getCredit();
    }
    getDebit() {
        return TotsTableHelper.getItemValueByKey(this.item, this.column.extra.field_key_debit);
    }
    getCredit() {
        return TotsTableHelper.getItemValueByKey(this.item, this.column.extra.field_key_credit);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: BalanceCurrencyColumnComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.11", type: BalanceCurrencyColumnComponent, selector: "tots-balance-currency-column", usesInheritance: true, ngImport: i0, template: "<span [ngClass]=\"{'tots-balance-column-positive': getBalance() > 0, 'tots-balance-column-negative': getBalance() < 0}\">{{getBalance()|currency}}</span>", styles: [""], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "pipe", type: i1.CurrencyPipe, name: "currency" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: BalanceCurrencyColumnComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-balance-currency-column', template: "<span [ngClass]=\"{'tots-balance-column-positive': getBalance() > 0, 'tots-balance-column-negative': getBalance() < 0}\">{{getBalance()|currency}}</span>" }]
        }] });

class StatusIconColumnComponent extends OptionColumnComponent {
    getFontColor() {
        let value = TotsTableHelper.getItemValueByKey(this.item, this.column.field_key);
        for (const item of this.column.extra.options) {
            if (item[this.column.extra.field_rel_key] == value && item['font_color'] != undefined) {
                return item['font_color'];
            }
        }
        return '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: StatusIconColumnComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.11", type: StatusIconColumnComponent, selector: "tots-status-icon-column", usesInheritance: true, ngImport: i0, template: "<span class=\"tots-status-icon-column\" [ngStyle]=\"{'color': getFontColor()}\"><mat-icon>{{getItemValue()}}</mat-icon></span>", styles: [""], dependencies: [{ kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: StatusIconColumnComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-status-icon-column', template: "<span class=\"tots-status-icon-column\" [ngStyle]=\"{'color': getFontColor()}\"><mat-icon>{{getItemValue()}}</mat-icon></span>" }]
        }] });

class BalanceCurrencyIconColumnComponent extends BalanceCurrencyColumnComponent {
    getIconPositive() {
        return this.column.extra.icon_positive;
    }
    getIconNegative() {
        return this.column.extra.icon_negative;
    }
    getIconNeutral() {
        return this.column.extra.icon_neutral;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: BalanceCurrencyIconColumnComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.11", type: BalanceCurrencyIconColumnComponent, selector: "tots-balance-currency-icon-column", usesInheritance: true, ngImport: i0, template: "<span [ngClass]=\"{'tots-balance-column-positive': getBalance() > 0, 'tots-balance-column-negative': getBalance() < 0}\">\r\n    <mat-icon *ngIf=\"getBalance() > 0\">{{getIconPositive()}}</mat-icon>\r\n    <mat-icon *ngIf=\"getBalance() < 0\">{{getIconNegative()}}</mat-icon>\r\n    <mat-icon *ngIf=\"getBalance() == 0\">{{getIconNeutral()}}</mat-icon>\r\n</span>", styles: [""], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: BalanceCurrencyIconColumnComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-balance-currency-icon-column', template: "<span [ngClass]=\"{'tots-balance-column-positive': getBalance() > 0, 'tots-balance-column-negative': getBalance() < 0}\">\r\n    <mat-icon *ngIf=\"getBalance() > 0\">{{getIconPositive()}}</mat-icon>\r\n    <mat-icon *ngIf=\"getBalance() < 0\">{{getIconNegative()}}</mat-icon>\r\n    <mat-icon *ngIf=\"getBalance() == 0\">{{getIconNeutral()}}</mat-icon>\r\n</span>" }]
        }] });

class TotsBalanceColumn extends TotsColumn {
    constructor(id, activeAssetFieldKey, passiveAssetFieldKey, title, hasOrder, order) {
        super(id, BalanceCurrencyColumnComponent, undefined, title, hasOrder, order);
        this.extra = {
            field_key_credit: activeAssetFieldKey,
            field_key_debit: passiveAssetFieldKey
        };
    }
}

class TotsBalanceIconColumn extends TotsColumn {
    constructor(id, activeAssetFieldKey, passiveAssetFieldKey, neutralIcon, positiveIcon, negativeIcon, title, hasOrder, order) {
        super(id, BalanceCurrencyIconColumnComponent, undefined, title, hasOrder, order);
        this.extra = {
            field_key_credit: activeAssetFieldKey,
            field_key_debit: passiveAssetFieldKey,
            icon_neutral: neutralIcon,
            icon_positive: positiveIcon,
            icon_negative: negativeIcon
        };
    }
}

class TotsBooleanColumn extends TotsColumn {
    constructor(id, fieldKey, title, hasOrder, order) {
        super(id, BooleanColumnComponent, fieldKey, title, hasOrder, order);
    }
}

class TotsCheckboxColumn extends TotsColumn {
    constructor(id, fieldKey, title, color, cssClass, hasOrder, order, stickyEnd) {
        super(id, CheckboxColumnComponent, fieldKey, title, hasOrder, order);
        this.extra = {
            stickyEnd: stickyEnd,
            color: color,
            class: cssClass
        };
    }
}

class TotsCurrencyColumn extends TotsColumn {
    constructor(id, fieldKey, title, hasOrder, order) {
        super(id, CurrencyColumnComponent, fieldKey, title, hasOrder, order);
    }
}

class TotsIconButtonColumn extends TotsColumn {
    constructor(id, icon, action, color, title, cssClass, stickyEnd) {
        super(id, IconButtonColumnComponent, undefined, title);
        this.extra = {
            icon: icon,
            matColor: color,
            action: action,
            class: cssClass,
            stickyEnd: stickyEnd
        };
    }
}

class TotsMoreMenuColumn extends TotsColumn {
    constructor(id, items, title, stickyEnd) {
        super(id, MoreMenuColumnComponent, undefined, title);
        this.extra = {
            stickyEnd: stickyEnd,
            actions: items
        };
    }
}

class TotsOptionColumn extends TotsColumn {
    constructor(id, fieldKey, options, title, hasOrder, order) {
        super(id, OptionColumnComponent, fieldKey, title, hasOrder, order);
        this.extra = {
            options: options,
            field_rel_key: "value",
            field_print_key: "caption"
        };
    }
}

class TotsStatusColumn extends TotsColumn {
    constructor(id, fieldKey, options, title, hasOrder, order) {
        super(id, StatusColumnComponent, fieldKey, title, hasOrder, order);
        this.extra = {
            options: options,
            field_rel_key: "value",
            field_print_key: "caption"
        };
    }
}

class TotsStatusIconColumn extends TotsColumn {
    constructor(id, fieldKey, options, title, hasOrder, order) {
        super(id, StatusIconColumnComponent, fieldKey, title, hasOrder, order);
        this.extra = {
            options: options,
            field_rel_key: "value",
            field_print_key: "caption"
        };
    }
}

class TotsStringColumn extends TotsColumn {
    constructor(id, fieldKey, title, hasOrder, order, prepend) {
        super(id, StringColumnComponent, fieldKey, title, hasOrder, order);
        this.extra = {
            prepend: prepend
        };
    }
}

class TotsTwoStringColumn extends TotsColumn {
    constructor(id, fieldKey, secondFieldKey, title, hasOrder, order) {
        super(id, TwoStringColumnComponent, fieldKey, title, hasOrder, order);
        this.extra = {
            field_subtitle_key: secondFieldKey
        };
    }
}

class TotsUserColumn extends TotsColumn {
    // first name, last name y photo obligatorios. Si no hay variable de foto, que usen two string column
    constructor(id, firstNameFieldKey, lastNameFieldKey, photoFieldKey, secondLineFieldKey, title, onlineFieldKey, hasOrder, order) {
        super(id, UserColumnComponent, undefined, title, hasOrder, order);
        this.extra = {
            field_firstname_key: firstNameFieldKey,
            field_lastname_key: lastNameFieldKey,
            field_photo_key: photoFieldKey,
            field_subtitle_key: secondLineFieldKey,
            field_online_key: onlineFieldKey
        };
    }
}

class BasePrintColumnComponent {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    ngOnInit() {
        const view = this.viewContainerRef.createComponent(this.column.component);
        view.instance.column = this.column;
        view.instance.item = this.item;
        view.instance.onAction = this.onAction;
        view.instance.index = this.index;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: BasePrintColumnComponent, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.11", type: BasePrintColumnComponent, selector: "tots-base-print-column", inputs: { column: "column", item: "item", onAction: "onAction", index: "index" }, ngImport: i0, template: "<div #contentColumn></div>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: BasePrintColumnComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-base-print-column', template: "<div #contentColumn></div>" }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { column: [{
                type: Input
            }], item: [{
                type: Input
            }], onAction: [{
                type: Input
            }], index: [{
                type: Input
            }] } });

class LoadingAnimationRendererComponent {
    //#region Setup
    constructor(totsTableDefaultConfig, viewContainerRef) {
        this.totsTableDefaultConfig = totsTableDefaultConfig;
        this.viewContainerRef = viewContainerRef;
    }
    ngOnInit() {
        this.setLoader();
    }
    ngOnDestroy() {
        this.loadingComponentContainer?.clear();
    }
    setLoader() {
        if (this.totsTableDefaultConfig.loadingComponent) {
            this.loadingComponent = this.viewContainerRef.createComponent(this.totsTableDefaultConfig.loadingComponent);
        }
        else {
            this.loadingComponent = this.viewContainerRef.createComponent(MatProgressSpinner);
            this.loadingComponent.instance.diameter = 50;
            this.loadingComponent.instance.mode = "indeterminate";
            this.loadingComponent.instance.color = this.totsTableDefaultConfig.matColor;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: LoadingAnimationRendererComponent, deps: [{ token: TOTS_TABLE_DEFAULT_CONFIG }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.11", type: LoadingAnimationRendererComponent, selector: "tots-loading-animation-renderer", viewQueries: [{ propertyName: "loadingComponentContainer", first: true, predicate: ["loadingComponentContainer"], descendants: true, read: ViewContainerRef }], ngImport: i0, template: "<ng-container #loadingComponentContainer></ng-container>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: LoadingAnimationRendererComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-loading-animation-renderer', template: "<ng-container #loadingComponentContainer></ng-container>" }]
        }], ctorParameters: function () { return [{ type: TotsTableDefaultConfig, decorators: [{
                    type: Inject,
                    args: [TOTS_TABLE_DEFAULT_CONFIG]
                }] }, { type: i0.ViewContainerRef }]; }, propDecorators: { loadingComponentContainer: [{
                type: ViewChild,
                args: ['loadingComponentContainer', { read: ViewContainerRef }]
            }] } });

class TotsTableComponent {
    //#region Setup
    constructor(changeDectetor, totsTableDefaultConfig) {
        this.changeDectetor = changeDectetor;
        this.totsTableDefaultConfig = totsTableDefaultConfig;
        this.config = new TotsTableConfig();
        this.pageIndex = 0;
        this.pageSize = 50;
        this.hasPagination = true;
        this.onAction = new EventEmitter();
        this.privateActions = new Subject();
        this.displayColumns = [];
        this.isLoading = true;
        this.firstLoad = true;
        this.messageNotFound = this.totsTableDefaultConfig.messageNotFound ? this.totsTableDefaultConfig.messageNotFound : "No results found, please try with other search terms";
        this.matColor = this.totsTableDefaultConfig.matColor != undefined ? this.totsTableDefaultConfig.matColor : "primary";
        this.upperPaginator = this.totsTableDefaultConfig.upperPaginator != undefined ? this.totsTableDefaultConfig.upperPaginator : false;
        this.lowerPaginator = this.totsTableDefaultConfig.lowerPaginator != undefined ? this.totsTableDefaultConfig.lowerPaginator : true;
        this.upperProgressBar = this.totsTableDefaultConfig.upperProgressBar != undefined ? this.totsTableDefaultConfig.upperProgressBar : false;
        this.lowerProgressBar = this.totsTableDefaultConfig.lowerProgressBar != undefined ? this.totsTableDefaultConfig.lowerProgressBar : true;
    }
    //#region Lifetime cycles
    ngOnInit() {
        this.loadConfig();
        this.loadItems();
    }
    //#endregion
    loadConfig() {
        this.loadColumns();
        this.privateActions.subscribe(action => {
            this.onAction.emit(action);
        });
    }
    loadItems() {
        this.isLoading = true;
        return this.config.obs?.pipe(tap(res => {
            this.dataItems = res;
            this.onAction.emit({ key: 'loaded-items', item: res });
        })).subscribe(() => this.stopLoading());
    }
    stopLoading() {
        this.isLoading = false;
        this.firstLoad = false;
    }
    //#endregion
    onClickOrder(column) {
        if (!column.hasOrder) {
            return;
        }
        let orderColumn = column.order;
        this.config.columns.forEach(c => c.order = undefined);
        column.order = orderColumn == 'asc' ? 'desc' : 'asc';
        this.onAction.emit({ key: 'click-order', item: column });
    }
    onClickRow(item) {
        this.onAction.emit({ key: 'click-row', item: item });
    }
    onPageChange(event) {
        this.onAction.emit({ key: 'page-change', item: event });
    }
    loadColumns() {
        this.displayColumns = this.config.columns.filter(c => c.is_show || c.is_show == undefined).map(c => c.key);
    }
    getDataItems() {
        return this.dataItems;
    }
    refreshDataItems(newData) {
        this.dataItems = newData;
    }
    detectChanges() {
        this.changeDectetor.detectChanges();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: TotsTableComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: TOTS_TABLE_DEFAULT_CONFIG }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.11", type: TotsTableComponent, selector: "tots-table", inputs: { config: "config", pageIndex: "pageIndex", pageSize: "pageSize", hasPagination: "hasPagination", messageNotFound: "messageNotFound" }, outputs: { onAction: "onAction" }, ngImport: i0, template: "<div class=\"tots-table-container {{config.classes}}\">\r\n\r\n    <!-- #region Lower paginator -->\r\n    <ng-container *ngIf=\"upperPaginator && dataItems && dataItems.data.length > 0 && hasPagination\">\r\n        <mat-paginator [pageIndex]=\"pageIndex-1\" [length]=\"dataItems!.total\" [pageSize]=\"pageSize\" (page)=\"onPageChange($event)\"></mat-paginator>\r\n    </ng-container>\r\n    <!-- #endregion -->\r\n\r\n    <!-- #region Lower progress bar -->\r\n    <ng-container *ngIf=\"upperProgressBar\">\r\n        <div class=\"tots-table-bar-loading upper\">\r\n            <mat-progress-bar *ngIf=\"isLoading && !firstLoad\" [mode]=\"'indeterminate'\" [color]=\"matColor\"></mat-progress-bar>\r\n        </div>\r\n    </ng-container>\r\n    <!-- #endregion -->\r\n\r\n    <!-- #region Table -->\r\n    <table mat-table [dataSource]=\"dataItems != undefined ? dataItems!.data : []\">\r\n\r\n        <ng-container *ngFor=\"let column of config.columns\" [matColumnDef]=\"column.key\" [stickyEnd]=\"column.extra?.stickyEnd ?? false\">\r\n            <!-- TH-->\r\n            <th mat-header-cell *matHeaderCellDef [ngClass]=\"{'tots-tr-has-order': column.hasOrder}\" (click)=\"onClickOrder(column)\">\r\n                {{ column.title }}\r\n                <mat-icon [ngClass]=\"{'sort_active': column.order == 'asc'}\">arrow_drop_up</mat-icon>\r\n                <mat-icon [ngClass]=\"{'sort_active': column.order == 'desc'}\">arrow_drop_down</mat-icon>\r\n            </th>\r\n            <!-- TD -->\r\n            <td mat-cell *matCellDef=\"let item; let index = index;\" [ngStyle]=\"{'width': column.extra?.width ? column.extra.width : 'auto'}\"><tots-base-print-column [column]=\"column\" [item]=\"item\" [index]=\"index\" [onAction]=\"privateActions\"></tots-base-print-column></td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayColumns;\" (click)=\"onClickRow(row)\" [class]=\"row.classCustom\" [ngClass]=\"{'tots-cell-selected': row.isSelected}\"></tr>\r\n\r\n        <!-- Row shown when there is no matching data. -->\r\n        <ng-container *ngIf=\"!isLoading\">\r\n            <tr class=\"tots-table-not-data\" *matNoDataRow><td class=\"mat-cell\" [colSpan]=\"config.columns.length\">{{ messageNotFound }}</td></tr>\r\n        </ng-container>\r\n    </table>\r\n    <!-- #endregion -->\r\n\r\n    <!-- #region First loading animation -->\r\n    <div *ngIf=\"isLoading && firstLoad\" class=\"tots-table-loading\">\r\n        <tots-loading-animation-renderer></tots-loading-animation-renderer>\r\n    </div>\r\n    <!-- #endregion -->\r\n\r\n    <!-- #region Lower progress bar -->\r\n    <ng-container *ngIf=\"lowerProgressBar\">\r\n        <div class=\"tots-table-bar-loading lower\">\r\n            <mat-progress-bar *ngIf=\"isLoading && !firstLoad\" [mode]=\"'indeterminate'\" [color]=\"matColor\"></mat-progress-bar>\r\n        </div>\r\n    </ng-container>\r\n    <!-- #endregion -->\r\n\r\n    <!-- #region Lower paginator -->\r\n    <ng-container *ngIf=\"lowerPaginator && dataItems && dataItems.data.length > 0 && hasPagination\">\r\n        <mat-paginator [pageIndex]=\"pageIndex-1\" [length]=\"dataItems!.total\" [pageSize]=\"pageSize\" (page)=\"onPageChange($event)\"></mat-paginator>\r\n    </ng-container>\r\n    <!-- #endregion -->\r\n\r\n</div>", styles: [".tots-table-container .mat-mdc-header-cell{position:relative}.tots-table-container .mat-mdc-header-cell mat-icon{display:none}.tots-table-container .tots-tr-has-order{cursor:pointer}.tots-table-container .tots-tr-has-order:hover mat-icon{opacity:.5}.tots-table-container .tots-tr-has-order mat-icon{display:inline;opacity:.3;position:absolute}.tots-table-container .tots-tr-has-order mat-icon:nth-of-type(1){top:12px}.tots-table-container .tots-tr-has-order mat-icon:nth-of-type(2){top:20px}.tots-table-container .tots-tr-has-order .sort_active{opacity:1!important}.tots-table-container .tots-table-loading{display:flex;justify-content:center;text-align:center}.tots-table-container .tots-table-bar-loading{height:4px}.tots-table-container .tots-table-not-data{font-size:large;text-align:center}.tots-table-container .tots-table-not-data td{padding:24px}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i3$1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i3$1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i3$1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i3$1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i3$1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i3$1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i3$1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i3$1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i3$1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i3$1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "directive", type: i3$1.MatNoDataRow, selector: "ng-template[matNoDataRow]" }, { kind: "component", type: i4$1.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }, { kind: "component", type: i5.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }, { kind: "component", type: BasePrintColumnComponent, selector: "tots-base-print-column", inputs: ["column", "item", "onAction", "index"] }, { kind: "component", type: LoadingAnimationRendererComponent, selector: "tots-loading-animation-renderer" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: TotsTableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-table', template: "<div class=\"tots-table-container {{config.classes}}\">\r\n\r\n    <!-- #region Lower paginator -->\r\n    <ng-container *ngIf=\"upperPaginator && dataItems && dataItems.data.length > 0 && hasPagination\">\r\n        <mat-paginator [pageIndex]=\"pageIndex-1\" [length]=\"dataItems!.total\" [pageSize]=\"pageSize\" (page)=\"onPageChange($event)\"></mat-paginator>\r\n    </ng-container>\r\n    <!-- #endregion -->\r\n\r\n    <!-- #region Lower progress bar -->\r\n    <ng-container *ngIf=\"upperProgressBar\">\r\n        <div class=\"tots-table-bar-loading upper\">\r\n            <mat-progress-bar *ngIf=\"isLoading && !firstLoad\" [mode]=\"'indeterminate'\" [color]=\"matColor\"></mat-progress-bar>\r\n        </div>\r\n    </ng-container>\r\n    <!-- #endregion -->\r\n\r\n    <!-- #region Table -->\r\n    <table mat-table [dataSource]=\"dataItems != undefined ? dataItems!.data : []\">\r\n\r\n        <ng-container *ngFor=\"let column of config.columns\" [matColumnDef]=\"column.key\" [stickyEnd]=\"column.extra?.stickyEnd ?? false\">\r\n            <!-- TH-->\r\n            <th mat-header-cell *matHeaderCellDef [ngClass]=\"{'tots-tr-has-order': column.hasOrder}\" (click)=\"onClickOrder(column)\">\r\n                {{ column.title }}\r\n                <mat-icon [ngClass]=\"{'sort_active': column.order == 'asc'}\">arrow_drop_up</mat-icon>\r\n                <mat-icon [ngClass]=\"{'sort_active': column.order == 'desc'}\">arrow_drop_down</mat-icon>\r\n            </th>\r\n            <!-- TD -->\r\n            <td mat-cell *matCellDef=\"let item; let index = index;\" [ngStyle]=\"{'width': column.extra?.width ? column.extra.width : 'auto'}\"><tots-base-print-column [column]=\"column\" [item]=\"item\" [index]=\"index\" [onAction]=\"privateActions\"></tots-base-print-column></td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayColumns;\" (click)=\"onClickRow(row)\" [class]=\"row.classCustom\" [ngClass]=\"{'tots-cell-selected': row.isSelected}\"></tr>\r\n\r\n        <!-- Row shown when there is no matching data. -->\r\n        <ng-container *ngIf=\"!isLoading\">\r\n            <tr class=\"tots-table-not-data\" *matNoDataRow><td class=\"mat-cell\" [colSpan]=\"config.columns.length\">{{ messageNotFound }}</td></tr>\r\n        </ng-container>\r\n    </table>\r\n    <!-- #endregion -->\r\n\r\n    <!-- #region First loading animation -->\r\n    <div *ngIf=\"isLoading && firstLoad\" class=\"tots-table-loading\">\r\n        <tots-loading-animation-renderer></tots-loading-animation-renderer>\r\n    </div>\r\n    <!-- #endregion -->\r\n\r\n    <!-- #region Lower progress bar -->\r\n    <ng-container *ngIf=\"lowerProgressBar\">\r\n        <div class=\"tots-table-bar-loading lower\">\r\n            <mat-progress-bar *ngIf=\"isLoading && !firstLoad\" [mode]=\"'indeterminate'\" [color]=\"matColor\"></mat-progress-bar>\r\n        </div>\r\n    </ng-container>\r\n    <!-- #endregion -->\r\n\r\n    <!-- #region Lower paginator -->\r\n    <ng-container *ngIf=\"lowerPaginator && dataItems && dataItems.data.length > 0 && hasPagination\">\r\n        <mat-paginator [pageIndex]=\"pageIndex-1\" [length]=\"dataItems!.total\" [pageSize]=\"pageSize\" (page)=\"onPageChange($event)\"></mat-paginator>\r\n    </ng-container>\r\n    <!-- #endregion -->\r\n\r\n</div>", styles: [".tots-table-container .mat-mdc-header-cell{position:relative}.tots-table-container .mat-mdc-header-cell mat-icon{display:none}.tots-table-container .tots-tr-has-order{cursor:pointer}.tots-table-container .tots-tr-has-order:hover mat-icon{opacity:.5}.tots-table-container .tots-tr-has-order mat-icon{display:inline;opacity:.3;position:absolute}.tots-table-container .tots-tr-has-order mat-icon:nth-of-type(1){top:12px}.tots-table-container .tots-tr-has-order mat-icon:nth-of-type(2){top:20px}.tots-table-container .tots-tr-has-order .sort_active{opacity:1!important}.tots-table-container .tots-table-loading{display:flex;justify-content:center;text-align:center}.tots-table-container .tots-table-bar-loading{height:4px}.tots-table-container .tots-table-not-data{font-size:large;text-align:center}.tots-table-container .tots-table-not-data td{padding:24px}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: TotsTableDefaultConfig, decorators: [{
                    type: Inject,
                    args: [TOTS_TABLE_DEFAULT_CONFIG]
                }] }]; }, propDecorators: { config: [{
                type: Input
            }], pageIndex: [{
                type: Input
            }], pageSize: [{
                type: Input
            }], hasPagination: [{
                type: Input
            }], messageNotFound: [{
                type: Input
            }], onAction: [{
                type: Output
            }] } });

class TotsTableApiComponent {
    constructor() {
        this.config = new TotsTableApiConfig();
        this.hasPagination = true;
        this.isPaginationStartIndexInZero = false;
        this.onAction = new EventEmitter();
        this.configTable = new TotsTableConfig();
    }
    ngOnInit() {
        this.loadConfig();
    }
    onTableAction(action) {
        if (action.key == 'page-change') {
            this.config.query.per_page = action.item.pageSize;
            if (this.isPaginationStartIndexInZero) {
                this.config.query.page = action.item.pageIndex;
            }
            else {
                this.config.query.page = action.item.pageIndex + 1;
            }
            this.configTable.obs = this.config.service.list(this.config.query);
        }
        this.onAction.emit(action);
    }
    loadConfig() {
        this.configTable.id = this.config.id;
        this.configTable.columns = this.config.columns;
        this.configTable.obs = this.config.service.list(this.config.query);
        this.configTable.classes = this.config.classes;
    }
    refreshQueryAndLoadItems() {
        this.configTable.obs = this.config.service.list(this.config.query);
        return this.loadItems();
    }
    loadItems() {
        return this.tableComp.loadItems();
    }
    getDataItems() {
        return this.tableComp.getDataItems();
    }
    setObs(obs) {
        this.configTable.obs = obs;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: TotsTableApiComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.11", type: TotsTableApiComponent, selector: "tots-table-api", inputs: { config: "config", hasPagination: "hasPagination", isPaginationStartIndexInZero: "isPaginationStartIndexInZero" }, outputs: { onAction: "onAction" }, viewQueries: [{ propertyName: "tableComp", first: true, predicate: ["tableComp"], descendants: true }], ngImport: i0, template: "<tots-table #tableComp [config]=\"configTable\" [pageIndex]=\"config.query.page\" [pageSize]=\"config.query.per_page\" (onAction)=\"onTableAction($event)\" [hasPagination]=\"hasPagination\"></tots-table>\r\n", styles: [""], dependencies: [{ kind: "component", type: TotsTableComponent, selector: "tots-table", inputs: ["config", "pageIndex", "pageSize", "hasPagination", "messageNotFound"], outputs: ["onAction"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: TotsTableApiComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-table-api', template: "<tots-table #tableComp [config]=\"configTable\" [pageIndex]=\"config.query.page\" [pageSize]=\"config.query.per_page\" (onAction)=\"onTableAction($event)\" [hasPagination]=\"hasPagination\"></tots-table>\r\n" }]
        }], propDecorators: { tableComp: [{
                type: ViewChild,
                args: ['tableComp']
            }], config: [{
                type: Input
            }], hasPagination: [{
                type: Input
            }], isPaginationStartIndexInZero: [{
                type: Input
            }], onAction: [{
                type: Output
            }] } });

class TotsTableModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: TotsTableModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.11", ngImport: i0, type: TotsTableModule, declarations: [TotsTableComponent,
            BasePrintColumnComponent,
            StringColumnComponent,
            TotsTableApiComponent,
            MoreMenuColumnComponent,
            BooleanColumnComponent,
            TwoStringColumnComponent,
            IconButtonColumnComponent,
            CheckboxColumnComponent,
            OptionColumnComponent,
            UserColumnComponent,
            CurrencyColumnComponent,
            StatusColumnComponent,
            BalanceCurrencyColumnComponent,
            StatusIconColumnComponent,
            BalanceCurrencyIconColumnComponent,
            LoadingAnimationRendererComponent], imports: [CommonModule,
            // Angular Material
            MatIconModule,
            MatTableModule,
            MatPaginatorModule,
            MatButtonModule,
            MatMenuModule,
            MatCheckboxModule,
            MatProgressSpinnerModule,
            MatProgressBarModule], exports: [TotsTableComponent,
            TotsTableApiComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: TotsTableModule, providers: [
            {
                provide: MAT_PAGINATOR_DEFAULT_OPTIONS,
                useValue: {
                    pageSizeOptions: [5, 10, 25, 50, 100]
                }
            },
            {
                provide: TOTS_TABLE_DEFAULT_CONFIG,
                useClass: TotsTableDefaultConfig
            }
        ], imports: [CommonModule,
            // Angular Material
            MatIconModule,
            MatTableModule,
            MatPaginatorModule,
            MatButtonModule,
            MatMenuModule,
            MatCheckboxModule,
            MatProgressSpinnerModule,
            MatProgressBarModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: TotsTableModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        TotsTableComponent,
                        BasePrintColumnComponent,
                        StringColumnComponent,
                        TotsTableApiComponent,
                        MoreMenuColumnComponent,
                        BooleanColumnComponent,
                        TwoStringColumnComponent,
                        IconButtonColumnComponent,
                        CheckboxColumnComponent,
                        OptionColumnComponent,
                        UserColumnComponent,
                        CurrencyColumnComponent,
                        StatusColumnComponent,
                        BalanceCurrencyColumnComponent,
                        StatusIconColumnComponent,
                        BalanceCurrencyIconColumnComponent,
                        LoadingAnimationRendererComponent
                    ],
                    imports: [
                        CommonModule,
                        // Angular Material
                        MatIconModule,
                        MatTableModule,
                        MatPaginatorModule,
                        MatButtonModule,
                        MatMenuModule,
                        MatCheckboxModule,
                        MatProgressSpinnerModule,
                        MatProgressBarModule
                    ],
                    exports: [
                        TotsTableComponent,
                        TotsTableApiComponent
                    ],
                    providers: [
                        {
                            provide: MAT_PAGINATOR_DEFAULT_OPTIONS,
                            useValue: {
                                pageSizeOptions: [5, 10, 25, 50, 100]
                            }
                        },
                        {
                            provide: TOTS_TABLE_DEFAULT_CONFIG,
                            useClass: TotsTableDefaultConfig
                        }
                    ]
                }]
        }] });

/*
 * Public API Surface of table
 */
/**
 * Entities
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BalanceCurrencyColumnComponent, BalanceCurrencyIconColumnComponent, BooleanColumnComponent, CheckboxColumnComponent, CurrencyColumnComponent, IconButtonColumnComponent, MoreMenuColumnComponent, OptionColumnComponent, StatusColumnComponent, StatusIconColumnComponent, StringColumnComponent, TOTS_TABLE_DEFAULT_CONFIG, TotsActionTable, TotsBalanceColumn, TotsBalanceIconColumn, TotsBaseColumnComponent, TotsBooleanColumn, TotsCheckboxColumn, TotsColumn, TotsColumnOption, TotsCurrencyColumn, TotsIconButtonColumn, TotsMoreMenuColumn, TotsMoreMenuItem, TotsOptionColumn, TotsStatusColumn, TotsStatusColumnOption, TotsStatusIconColumn, TotsStatusIconColumnOption, TotsStringColumn, TotsTableApiComponent, TotsTableApiConfig, TotsTableComponent, TotsTableConfig, TotsTableDefaultConfig, TotsTableHelper, TotsTableModule, TotsTwoStringColumn, TotsUserColumn, TwoStringColumnComponent, UserColumnComponent };
//# sourceMappingURL=tots-table.mjs.map
