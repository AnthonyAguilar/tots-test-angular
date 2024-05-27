import { Component } from '@angular/core';
import { TotsBaseColumnComponent } from '../tots-base-column.component';
import { TotsTableHelper } from '../../helpers/tots-table-helper';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class BalanceCurrencyColumnComponent extends TotsBaseColumnComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFsYW5jZS1jdXJyZW5jeS1jb2x1bW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdG90cy90YWJsZS9zcmMvbGliL2NvbHVtbnMvYmFsYW5jZS1jdXJyZW5jeS1jb2x1bW4vYmFsYW5jZS1jdXJyZW5jeS1jb2x1bW4uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdG90cy90YWJsZS9zcmMvbGliL2NvbHVtbnMvYmFsYW5jZS1jdXJyZW5jeS1jb2x1bW4vYmFsYW5jZS1jdXJyZW5jeS1jb2x1bW4uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7OztBQU9sRSxNQUFNLE9BQU8sOEJBQStCLFNBQVEsdUJBQXVCO0lBRXpFLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDNUMsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFFRCxTQUFTO1FBQ1AsT0FBTyxlQUFlLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzFGLENBQUM7K0dBWlUsOEJBQThCO21HQUE5Qiw4QkFBOEIsMkZDVDNDLDJKQUF1Sjs7NEZEUzFJLDhCQUE4QjtrQkFMMUMsU0FBUzsrQkFDRSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVG90c0Jhc2VDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuLi90b3RzLWJhc2UtY29sdW1uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRvdHNUYWJsZUhlbHBlciB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdG90cy10YWJsZS1oZWxwZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0b3RzLWJhbGFuY2UtY3VycmVuY3ktY29sdW1uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYmFsYW5jZS1jdXJyZW5jeS1jb2x1bW4uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2JhbGFuY2UtY3VycmVuY3ktY29sdW1uLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQmFsYW5jZUN1cnJlbmN5Q29sdW1uQ29tcG9uZW50IGV4dGVuZHMgVG90c0Jhc2VDb2x1bW5Db21wb25lbnQge1xyXG5cclxuICBnZXRCYWxhbmNlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0RGViaXQoKSAtIHRoaXMuZ2V0Q3JlZGl0KCk7XHJcbiAgfVxyXG5cclxuICBnZXREZWJpdCgpOiBhbnkge1xyXG4gICAgcmV0dXJuIFRvdHNUYWJsZUhlbHBlci5nZXRJdGVtVmFsdWVCeUtleSh0aGlzLml0ZW0sIHRoaXMuY29sdW1uLmV4dHJhLmZpZWxkX2tleV9kZWJpdCk7XHJcbiAgfVxyXG5cclxuICBnZXRDcmVkaXQoKTogYW55IHtcclxuICAgIHJldHVybiBUb3RzVGFibGVIZWxwZXIuZ2V0SXRlbVZhbHVlQnlLZXkodGhpcy5pdGVtLCB0aGlzLmNvbHVtbi5leHRyYS5maWVsZF9rZXlfY3JlZGl0KTtcclxuICB9XHJcbn1cclxuIiwiPHNwYW4gW25nQ2xhc3NdPVwieyd0b3RzLWJhbGFuY2UtY29sdW1uLXBvc2l0aXZlJzogZ2V0QmFsYW5jZSgpID4gMCwgJ3RvdHMtYmFsYW5jZS1jb2x1bW4tbmVnYXRpdmUnOiBnZXRCYWxhbmNlKCkgPCAwfVwiPnt7Z2V0QmFsYW5jZSgpfGN1cnJlbmN5fX08L3NwYW4+Il19