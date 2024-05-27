import { Component } from '@angular/core';
import { OptionColumnComponent } from '../option-column/option-column.component';
import { TotsTableHelper } from '../../helpers/tots-table-helper';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class StatusColumnComponent extends OptionColumnComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWNvbHVtbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90b3RzL3RhYmxlL3NyYy9saWIvY29sdW1ucy9zdGF0dXMtY29sdW1uL3N0YXR1cy1jb2x1bW4uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdG90cy90YWJsZS9zcmMvbGliL2NvbHVtbnMvc3RhdHVzLWNvbHVtbi9zdGF0dXMtY29sdW1uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDakYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7QUFPbEUsTUFBTSxPQUFPLHFCQUFzQixTQUFRLHFCQUFxQjtJQUU5RCxrQkFBa0I7UUFDaEIsSUFBSSxLQUFLLEdBQUcsZUFBZSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoRixLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUM1QyxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksU0FBUyxFQUFDO2dCQUN6RixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2FBQ2pDO1NBQ0Y7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxLQUFLLEdBQUcsZUFBZSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoRixLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUM1QyxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLFNBQVMsRUFBQztnQkFDbkYsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDM0I7U0FDRjtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQzsrR0FwQlUscUJBQXFCO21HQUFyQixxQkFBcUIsaUZDVGxDLGdKQUEwSTs7NEZEUzdILHFCQUFxQjtrQkFMakMsU0FBUzsrQkFDRSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT3B0aW9uQ29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi4vb3B0aW9uLWNvbHVtbi9vcHRpb24tY29sdW1uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRvdHNUYWJsZUhlbHBlciB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdG90cy10YWJsZS1oZWxwZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0b3RzLXN0YXR1cy1jb2x1bW4nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zdGF0dXMtY29sdW1uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zdGF0dXMtY29sdW1uLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3RhdHVzQ29sdW1uQ29tcG9uZW50IGV4dGVuZHMgT3B0aW9uQ29sdW1uQ29tcG9uZW50IHtcclxuXHJcbiAgZ2V0QmFja2dyb3VuZENvbG9yKCk6IHN0cmluZyB7XHJcbiAgICBsZXQgdmFsdWUgPSBUb3RzVGFibGVIZWxwZXIuZ2V0SXRlbVZhbHVlQnlLZXkodGhpcy5pdGVtLCB0aGlzLmNvbHVtbi5maWVsZF9rZXkpO1xyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuY29sdW1uLmV4dHJhLm9wdGlvbnMpIHtcclxuICAgICAgaWYoaXRlbVt0aGlzLmNvbHVtbi5leHRyYS5maWVsZF9yZWxfa2V5XSA9PSB2YWx1ZSAmJiBpdGVtWydiYWNrZ3JvdW5kX2NvbG9yJ10gIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICByZXR1cm4gaXRlbVsnYmFja2dyb3VuZF9jb2xvciddO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG5cclxuICBnZXRGb250Q29sb3IoKTogc3RyaW5nIHtcclxuICAgIGxldCB2YWx1ZSA9IFRvdHNUYWJsZUhlbHBlci5nZXRJdGVtVmFsdWVCeUtleSh0aGlzLml0ZW0sIHRoaXMuY29sdW1uLmZpZWxkX2tleSk7XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5jb2x1bW4uZXh0cmEub3B0aW9ucykge1xyXG4gICAgICBpZihpdGVtW3RoaXMuY29sdW1uLmV4dHJhLmZpZWxkX3JlbF9rZXldID09IHZhbHVlICYmIGl0ZW1bJ2ZvbnRfY29sb3InXSAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgIHJldHVybiBpdGVtWydmb250X2NvbG9yJ107XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAnJztcclxuICB9XHJcbn1cclxuIiwiPHNwYW4gY2xhc3M9XCJ0b3RzLXN0YXR1cy1jb2x1bW5cIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBnZXRCYWNrZ3JvdW5kQ29sb3IoKSwgJ2NvbG9yJzogZ2V0Rm9udENvbG9yKCl9XCI+e3tnZXRJdGVtVmFsdWUoKX19PC9zcGFuPiJdfQ==