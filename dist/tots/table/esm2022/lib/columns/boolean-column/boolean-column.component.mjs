import { Component } from '@angular/core';
import { TotsBaseColumnComponent } from '../tots-base-column.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class BooleanColumnComponent extends TotsBaseColumnComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: BooleanColumnComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.11", type: BooleanColumnComponent, selector: "tots-boolean-column", usesInheritance: true, ngImport: i0, template: "<ng-container *ngIf=\"getItemValue() == true||getItemValue() == 1; else textNo\">YES</ng-container>\r\n<ng-template #textNo>NO</ng-template>", styles: [""], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: BooleanColumnComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tots-boolean-column', template: "<ng-container *ngIf=\"getItemValue() == true||getItemValue() == 1; else textNo\">YES</ng-container>\r\n<ng-template #textNo>NO</ng-template>" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1jb2x1bW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdG90cy90YWJsZS9zcmMvbGliL2NvbHVtbnMvYm9vbGVhbi1jb2x1bW4vYm9vbGVhbi1jb2x1bW4uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdG90cy90YWJsZS9zcmMvbGliL2NvbHVtbnMvYm9vbGVhbi1jb2x1bW4vYm9vbGVhbi1jb2x1bW4uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7O0FBT3hFLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSx1QkFBdUI7K0dBQXRELHNCQUFzQjttR0FBdEIsc0JBQXNCLGtGQ1JuQyw4SUFDcUM7OzRGRE94QixzQkFBc0I7a0JBTGxDLFNBQVM7K0JBQ0UscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRvdHNCYXNlQ29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi4vdG90cy1iYXNlLWNvbHVtbi5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0b3RzLWJvb2xlYW4tY29sdW1uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYm9vbGVhbi1jb2x1bW4uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Jvb2xlYW4tY29sdW1uLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQm9vbGVhbkNvbHVtbkNvbXBvbmVudCBleHRlbmRzIFRvdHNCYXNlQ29sdW1uQ29tcG9uZW50IHtcclxuXHJcbn0iLCI8bmctY29udGFpbmVyICpuZ0lmPVwiZ2V0SXRlbVZhbHVlKCkgPT0gdHJ1ZXx8Z2V0SXRlbVZhbHVlKCkgPT0gMTsgZWxzZSB0ZXh0Tm9cIj5ZRVM8L25nLWNvbnRhaW5lcj5cclxuPG5nLXRlbXBsYXRlICN0ZXh0Tm8+Tk88L25nLXRlbXBsYXRlPiJdfQ==