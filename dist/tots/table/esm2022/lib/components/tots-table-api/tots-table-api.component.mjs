import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { TotsTableApiConfig } from '../../entities/tots-table-api-config';
import { TotsTableConfig } from '../../entities/tots-table-config';
import * as i0 from "@angular/core";
import * as i1 from "../tots-table/tots-table.component";
export class TotsTableApiComponent {
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.11", type: TotsTableApiComponent, selector: "tots-table-api", inputs: { config: "config", hasPagination: "hasPagination", isPaginationStartIndexInZero: "isPaginationStartIndexInZero" }, outputs: { onAction: "onAction" }, viewQueries: [{ propertyName: "tableComp", first: true, predicate: ["tableComp"], descendants: true }], ngImport: i0, template: "<tots-table #tableComp [config]=\"configTable\" [pageIndex]=\"config.query.page\" [pageSize]=\"config.query.per_page\" (onAction)=\"onTableAction($event)\" [hasPagination]=\"hasPagination\"></tots-table>\r\n", styles: [""], dependencies: [{ kind: "component", type: i1.TotsTableComponent, selector: "tots-table", inputs: ["config", "pageIndex", "pageSize", "hasPagination", "messageNotFound"], outputs: ["onAction"] }] }); }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG90cy10YWJsZS1hcGkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdG90cy90YWJsZS9zcmMvbGliL2NvbXBvbmVudHMvdG90cy10YWJsZS1hcGkvdG90cy10YWJsZS1hcGkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdG90cy90YWJsZS9zcmMvbGliL2NvbXBvbmVudHMvdG90cy10YWJsZS1hcGkvdG90cy10YWJsZS1hcGkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJMUYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOzs7QUFRbkUsTUFBTSxPQUFPLHFCQUFxQjtJQUxsQztRQVNXLFdBQU0sR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7UUFDbEMsa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFDOUIsaUNBQTRCLEdBQVksS0FBSyxDQUFDO1FBRTdDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUV6RCxnQkFBVyxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7S0EyQ3JDO0lBekNDLFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELGFBQWEsQ0FBQyxNQUF1QjtRQUNuQyxJQUFHLE1BQU0sQ0FBQyxHQUFHLElBQUksYUFBYSxFQUFDO1lBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNsRCxJQUFHLElBQUksQ0FBQyw0QkFBNEIsRUFBQztnQkFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQ2hEO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7YUFDcEQ7WUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwRTtRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDakQsQ0FBQztJQUVELHdCQUF3QjtRQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuRSxPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRUQsTUFBTSxDQUFDLEdBQXNDO1FBQzNDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUM3QixDQUFDOytHQXBEVSxxQkFBcUI7bUdBQXJCLHFCQUFxQiw2VENibEMsaU5BQ0E7OzRGRFlhLHFCQUFxQjtrQkFMakMsU0FBUzsrQkFDRSxnQkFBZ0I7OEJBTUYsU0FBUztzQkFBaEMsU0FBUzt1QkFBQyxXQUFXO2dCQUViLE1BQU07c0JBQWQsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLDRCQUE0QjtzQkFBcEMsS0FBSztnQkFFSSxRQUFRO3NCQUFqQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRvdHNMaXN0UmVzcG9uc2UgfSBmcm9tICdAdG90cy9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBUb3RzQWN0aW9uVGFibGUgfSBmcm9tICcuLi8uLi9lbnRpdGllcy90b3RzLWFjdGlvbi10YWJsZSc7XHJcbmltcG9ydCB7IFRvdHNUYWJsZUFwaUNvbmZpZyB9IGZyb20gJy4uLy4uL2VudGl0aWVzL3RvdHMtdGFibGUtYXBpLWNvbmZpZyc7XHJcbmltcG9ydCB7IFRvdHNUYWJsZUNvbmZpZyB9IGZyb20gJy4uLy4uL2VudGl0aWVzL3RvdHMtdGFibGUtY29uZmlnJztcclxuaW1wb3J0IHsgVG90c1RhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vdG90cy10YWJsZS90b3RzLXRhYmxlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RvdHMtdGFibGUtYXBpJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdG90cy10YWJsZS1hcGkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RvdHMtdGFibGUtYXBpLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFRvdHNUYWJsZUFwaUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgXHJcbiAgQFZpZXdDaGlsZCgndGFibGVDb21wJykgdGFibGVDb21wITogVG90c1RhYmxlQ29tcG9uZW50O1xyXG5cclxuICBASW5wdXQoKSBjb25maWcgPSBuZXcgVG90c1RhYmxlQXBpQ29uZmlnKCk7XHJcbiAgQElucHV0KCkgaGFzUGFnaW5hdGlvbjogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgaXNQYWdpbmF0aW9uU3RhcnRJbmRleEluWmVybzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBAT3V0cHV0KCkgb25BY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPFRvdHNBY3Rpb25UYWJsZT4oKTtcclxuXHJcbiAgY29uZmlnVGFibGUgPSBuZXcgVG90c1RhYmxlQ29uZmlnKCk7XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2FkQ29uZmlnKCk7XHJcbiAgfVxyXG5cclxuICBvblRhYmxlQWN0aW9uKGFjdGlvbjogVG90c0FjdGlvblRhYmxlKSB7XHJcbiAgICBpZihhY3Rpb24ua2V5ID09ICdwYWdlLWNoYW5nZScpe1xyXG4gICAgICB0aGlzLmNvbmZpZy5xdWVyeS5wZXJfcGFnZSA9IGFjdGlvbi5pdGVtLnBhZ2VTaXplO1xyXG4gICAgICBpZih0aGlzLmlzUGFnaW5hdGlvblN0YXJ0SW5kZXhJblplcm8pe1xyXG4gICAgICAgIHRoaXMuY29uZmlnLnF1ZXJ5LnBhZ2UgPSBhY3Rpb24uaXRlbS5wYWdlSW5kZXg7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jb25maWcucXVlcnkucGFnZSA9IGFjdGlvbi5pdGVtLnBhZ2VJbmRleCArIDE7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jb25maWdUYWJsZS5vYnMgPSB0aGlzLmNvbmZpZy5zZXJ2aWNlLmxpc3QodGhpcy5jb25maWcucXVlcnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMub25BY3Rpb24uZW1pdChhY3Rpb24pO1xyXG4gIH1cclxuXHJcbiAgbG9hZENvbmZpZygpIHtcclxuICAgIHRoaXMuY29uZmlnVGFibGUuaWQgPSB0aGlzLmNvbmZpZy5pZDtcclxuICAgIHRoaXMuY29uZmlnVGFibGUuY29sdW1ucyA9IHRoaXMuY29uZmlnLmNvbHVtbnM7XHJcbiAgICB0aGlzLmNvbmZpZ1RhYmxlLm9icyA9IHRoaXMuY29uZmlnLnNlcnZpY2UubGlzdCh0aGlzLmNvbmZpZy5xdWVyeSk7XHJcbiAgICB0aGlzLmNvbmZpZ1RhYmxlLmNsYXNzZXMgPSB0aGlzLmNvbmZpZy5jbGFzc2VzO1xyXG4gIH1cclxuXHJcbiAgcmVmcmVzaFF1ZXJ5QW5kTG9hZEl0ZW1zKCkge1xyXG4gICAgdGhpcy5jb25maWdUYWJsZS5vYnMgPSB0aGlzLmNvbmZpZy5zZXJ2aWNlLmxpc3QodGhpcy5jb25maWcucXVlcnkpO1xyXG4gICAgcmV0dXJuIHRoaXMubG9hZEl0ZW1zKCk7XHJcbiAgfVxyXG5cclxuICBsb2FkSXRlbXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50YWJsZUNvbXAubG9hZEl0ZW1zKCk7XHJcbiAgfVxyXG5cclxuICBnZXREYXRhSXRlbXMoKTogVG90c0xpc3RSZXNwb25zZTxhbnk+IHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB0aGlzLnRhYmxlQ29tcC5nZXREYXRhSXRlbXMoKTtcclxuICB9XHJcblxyXG4gIHNldE9icyhvYnM6IE9ic2VydmFibGU8VG90c0xpc3RSZXNwb25zZTxhbnk+Pikge1xyXG4gICAgdGhpcy5jb25maWdUYWJsZS5vYnMgPSBvYnM7XHJcbiAgfVxyXG59XHJcbiIsIjx0b3RzLXRhYmxlICN0YWJsZUNvbXAgW2NvbmZpZ109XCJjb25maWdUYWJsZVwiIFtwYWdlSW5kZXhdPVwiY29uZmlnLnF1ZXJ5LnBhZ2VcIiBbcGFnZVNpemVdPVwiY29uZmlnLnF1ZXJ5LnBlcl9wYWdlXCIgKG9uQWN0aW9uKT1cIm9uVGFibGVBY3Rpb24oJGV2ZW50KVwiIFtoYXNQYWdpbmF0aW9uXT1cImhhc1BhZ2luYXRpb25cIj48L3RvdHMtdGFibGU+XHJcbiJdfQ==