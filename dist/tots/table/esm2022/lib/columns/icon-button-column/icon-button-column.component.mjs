import { Component } from '@angular/core';
import { TotsBaseColumnComponent } from '../tots-base-column.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/icon";
import * as i2 from "@angular/material/button";
export class IconButtonColumnComponent extends TotsBaseColumnComponent {
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.11", type: IconButtonColumnComponent, selector: "tots-icon-button-column", usesInheritance: true, ngImport: i0, template: "<button mat-icon-button [color]=\"getButtonColor()\" [class]=\"getClasses()\" (click)=\"clickButton($event)\">\r\n    <mat-icon>{{getIconName()}}</mat-icon>\r\n</button>", styles: [""], dependencies: [{ kind: "component", type: i1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: IconButtonColumnComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-icon-button-column', template: "<button mat-icon-button [color]=\"getButtonColor()\" [class]=\"getClasses()\" (click)=\"clickButton($event)\">\r\n    <mat-icon>{{getIconName()}}</mat-icon>\r\n</button>" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1idXR0b24tY29sdW1uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RvdHMvdGFibGUvc3JjL2xpYi9jb2x1bW5zL2ljb24tYnV0dG9uLWNvbHVtbi9pY29uLWJ1dHRvbi1jb2x1bW4uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdG90cy90YWJsZS9zcmMvbGliL2NvbHVtbnMvaWNvbi1idXR0b24tY29sdW1uL2ljb24tYnV0dG9uLWNvbHVtbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7O0FBT3hFLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSx1QkFBdUI7SUFFcEUsV0FBVyxDQUFDLE1BQWU7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN2RSxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7SUFDcEMsQ0FBQztJQUVELFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUNqQyxDQUFDOytHQWxCVSx5QkFBeUI7bUdBQXpCLHlCQUF5QixzRkNSdEMsMktBRVM7OzRGRE1JLHlCQUF5QjtrQkFMckMsU0FBUzsrQkFDRSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVG90c0Jhc2VDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuLi90b3RzLWJhc2UtY29sdW1uLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RvdHMtaWNvbi1idXR0b24tY29sdW1uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaWNvbi1idXR0b24tY29sdW1uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9pY29uLWJ1dHRvbi1jb2x1bW4uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJY29uQnV0dG9uQ29sdW1uQ29tcG9uZW50IGV4dGVuZHMgVG90c0Jhc2VDb2x1bW5Db21wb25lbnQge1xyXG5cclxuICBjbGlja0J1dHRvbigkZXZlbnQ6IFVJRXZlbnQpIHtcclxuICAgIHRoaXMub25BY3Rpb24ubmV4dCh7IGtleTogdGhpcy5jb2x1bW4uZXh0cmEuYWN0aW9uLCBpdGVtOiB0aGlzLml0ZW0gfSk7XHJcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBnZXRJY29uTmFtZSgpIDogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmNvbHVtbi5leHRyYS5pY29uO1xyXG4gIH1cclxuXHJcbiAgZ2V0QnV0dG9uQ29sb3IoKSA6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5jb2x1bW4uZXh0cmEubWF0Q29sb3I7XHJcbiAgfVxyXG5cclxuICBnZXRDbGFzc2VzKCkgOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuY29sdW1uLmV4dHJhLmNsYXNzO1xyXG4gIH1cclxufVxyXG4iLCI8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBbY29sb3JdPVwiZ2V0QnV0dG9uQ29sb3IoKVwiIFtjbGFzc109XCJnZXRDbGFzc2VzKClcIiAoY2xpY2spPVwiY2xpY2tCdXR0b24oJGV2ZW50KVwiPlxyXG4gICAgPG1hdC1pY29uPnt7Z2V0SWNvbk5hbWUoKX19PC9tYXQtaWNvbj5cclxuPC9idXR0b24+Il19