import { Component } from '@angular/core';
import { of } from 'rxjs';
import { TotsBaseFieldComponent } from '../tots-base-field.component';
import * as i0 from "@angular/core";
import * as i1 from "../autocomplete-obs-field/autocomplete-obs-field.component";
export class AutocompleteFieldComponent extends TotsBaseFieldComponent {
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
AutocompleteFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.3", type: AutocompleteFieldComponent, selector: "tots-autocomplete-field", usesInheritance: true, ngImport: i0, template: "<tots-autocomplete-obs-field [field]=\"field\" [group]=\"group\" [onAction]=\"onAction\"></tots-autocomplete-obs-field>", styles: [""], dependencies: [{ kind: "component", type: i1.AutocompleteObsFieldComponent, selector: "tots-autocomplete-obs-field" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.3", ngImport: i0, type: AutocompleteFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-autocomplete-field', template: "<tots-autocomplete-obs-field [field]=\"field\" [group]=\"group\" [onAction]=\"onAction\"></tots-autocomplete-obs-field>" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLWZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RvdHMvZm9ybS9zcmMvbGliL2ZpZWxkcy9hdXRvY29tcGxldGUtZmllbGQvYXV0b2NvbXBsZXRlLWZpZWxkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RvdHMvZm9ybS9zcmMvbGliL2ZpZWxkcy9hdXRvY29tcGxldGUtZmllbGQvYXV0b2NvbXBsZXRlLWZpZWxkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7O0FBT3RFLE1BQU0sT0FBTywwQkFBMkIsU0FBUSxzQkFBc0I7SUFFM0QsUUFBUTtRQUNmLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQWM7UUFDekIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxlQUFlLENBQUMsS0FBVztRQUN6QixJQUFHLEtBQUssSUFBSSxTQUFTLElBQUUsS0FBSyxJQUFJLElBQUksRUFBQztZQUNuQyxPQUFPLEVBQUUsQ0FBQztTQUNYO1FBRUQsSUFBSSxXQUFtQixDQUFDO1FBQ3hCLElBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFDO1lBQzNCLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDbkM7YUFBTTtZQUNMLFdBQVcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDbkQ7UUFFRCxJQUFJLE9BQU8sR0FBZSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDbkQsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMvRyxDQUFDOzt1SEE1QlUsMEJBQTBCOzJHQUExQiwwQkFBMEIsc0ZDVHZDLHlIQUFpSDsyRkRTcEcsMEJBQTBCO2tCQUx0QyxTQUFTOytCQUNFLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFRvdHNCYXNlRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi90b3RzLWJhc2UtZmllbGQuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndG90cy1hdXRvY29tcGxldGUtZmllbGQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hdXRvY29tcGxldGUtZmllbGQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2F1dG9jb21wbGV0ZS1maWVsZC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVGaWVsZENvbXBvbmVudCBleHRlbmRzIFRvdHNCYXNlRmllbGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBvdmVycmlkZSBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubG9hZENvbmZpZ0ZpZWxkKCk7XHJcbiAgfVxyXG5cclxuICBsb2FkQ29uZmlnRmllbGQoKSB7XHJcbiAgICB0aGlzLmZpZWxkLmV4dHJhLm9icyA9IHRoaXMub2JzUHJvY2Vzc2VkLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBvYnNQcm9jZXNzZWQocXVlcnk/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPEFycmF5PGFueT4+IHtcclxuICAgIHJldHVybiBvZih0aGlzLmZpbHRlclByb2Nlc3NlZChxdWVyeSkpO1xyXG4gIH1cclxuXHJcbiAgZmlsdGVyUHJvY2Vzc2VkKHF1ZXJ5PzogYW55KTogQXJyYXk8YW55PiB7XHJcbiAgICBpZihxdWVyeSA9PSB1bmRlZmluZWR8fHF1ZXJ5ID09IG51bGwpe1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCBmaWx0ZXJWYWx1ZTogc3RyaW5nO1xyXG4gICAgaWYodHlwZW9mIHF1ZXJ5ID09PSBcInN0cmluZ1wiKXtcclxuICAgICAgZmlsdGVyVmFsdWUgPSBxdWVyeS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmlsdGVyVmFsdWUgPSBxdWVyeVt0aGlzLmZpZWxkLmV4dHJhLmRpc3BsYXlfa2V5XTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IG9wdGlvbnM6IEFycmF5PGFueT4gPSB0aGlzLmZpZWxkLmV4dHJhLm9wdGlvbnM7XHJcbiAgICByZXR1cm4gb3B0aW9ucy5maWx0ZXIob3B0aW9uID0+IG9wdGlvblt0aGlzLmZpZWxkLmV4dHJhLmZpbHRlcl9rZXldLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXJWYWx1ZSkgPj0gMCk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8dG90cy1hdXRvY29tcGxldGUtb2JzLWZpZWxkIFtmaWVsZF09XCJmaWVsZFwiIFtncm91cF09XCJncm91cFwiIFtvbkFjdGlvbl09XCJvbkFjdGlvblwiPjwvdG90cy1hdXRvY29tcGxldGUtb2JzLWZpZWxkPiJdfQ==