import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/** Angular Material */
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MAT_PAGINATOR_DEFAULT_OPTIONS, MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
/** Components */
import { TotsTableComponent } from './components/tots-table/tots-table.component';
import { TotsTableApiComponent } from './components/tots-table-api/tots-table-api.component';
/** Columns */
import { BasePrintColumnComponent } from './columns/base-print-column/base-print-column.component';
import { StringColumnComponent } from './columns/string-column/string-column.component';
import { MoreMenuColumnComponent } from './columns/more-menu-column/more-menu-column.component';
import { BooleanColumnComponent } from './columns/boolean-column/boolean-column.component';
import { TwoStringColumnComponent } from './columns/two-string-column/two-string-column.component';
import { IconButtonColumnComponent } from './columns/icon-button-column/icon-button-column.component';
import { CheckboxColumnComponent } from './columns/checkbox-column/checkbox-column.component';
import { OptionColumnComponent } from './columns/option-column/option-column.component';
import { UserColumnComponent } from './columns/user-column/user-column.component';
import { CurrencyColumnComponent } from './columns/currency-column/currency-column.component';
import { StatusColumnComponent } from './columns/status-column/status-column.component';
import { BalanceCurrencyColumnComponent } from './columns/balance-currency-column/balance-currency-column.component';
import { StatusIconColumnComponent } from './columns/status-icon-column/status-icon-column.component';
import { BalanceCurrencyIconColumnComponent } from './columns/balance-currency-icon-column/balance-currency-icon-column.component';
import { TOTS_TABLE_DEFAULT_CONFIG, TotsTableDefaultConfig } from './entities/tots-table-default-config';
import { LoadingAnimationRendererComponent } from './components/loading-animation-renderer/loading-animation-renderer.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import * as i0 from "@angular/core";
export class TotsTableModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdG90cy90YWJsZS9zcmMvbGliL3RhYmxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyx1QkFBdUI7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLDZCQUE2QixFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDaEcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRTlFLGlCQUFpQjtBQUNqQixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUU3RixjQUFjO0FBQ2QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDbkcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDeEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDaEcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDM0YsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0seURBQXlELENB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Q0QsT0FBTyxFQUFFLDZCQUE2Qjs0QkFDdEMsUUFBUSxFQUFFO2dDQUNULGVBQWUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUM7NkJBQ3JDO3lCQUNEO3dCQUNDOzRCQUNFLE9BQU8sRUFBRSx5QkFBeUI7NEJBQ2xDLFFBQVEsRUFBRSxzQkFBc0I7eUJBQ2pDO3FCQUNGO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbi8qKiBBbmd1bGFyIE1hdGVyaWFsICovXHJcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcclxuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcclxuaW1wb3J0IHsgTWF0VGFibGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XHJcbmltcG9ydCB7IE1BVF9QQUdJTkFUT1JfREVGQVVMVF9PUFRJT05TLCBNYXRQYWdpbmF0b3JNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xyXG5pbXBvcnQgeyBNYXRNZW51TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XHJcbmltcG9ydCB7IE1hdENoZWNrYm94TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xyXG5pbXBvcnQgeyBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1zcGlubmVyJztcclxuXHJcbi8qKiBDb21wb25lbnRzICovXHJcbmltcG9ydCB7IFRvdHNUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90b3RzLXRhYmxlL3RvdHMtdGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVG90c1RhYmxlQXBpQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RvdHMtdGFibGUtYXBpL3RvdHMtdGFibGUtYXBpLmNvbXBvbmVudCc7XHJcblxyXG4vKiogQ29sdW1ucyAqL1xyXG5pbXBvcnQgeyBCYXNlUHJpbnRDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuL2NvbHVtbnMvYmFzZS1wcmludC1jb2x1bW4vYmFzZS1wcmludC1jb2x1bW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3RyaW5nQ29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi9jb2x1bW5zL3N0cmluZy1jb2x1bW4vc3RyaW5nLWNvbHVtbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNb3JlTWVudUNvbHVtbkNvbXBvbmVudCB9IGZyb20gJy4vY29sdW1ucy9tb3JlLW1lbnUtY29sdW1uL21vcmUtbWVudS1jb2x1bW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQm9vbGVhbkNvbHVtbkNvbXBvbmVudCB9IGZyb20gJy4vY29sdW1ucy9ib29sZWFuLWNvbHVtbi9ib29sZWFuLWNvbHVtbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUd29TdHJpbmdDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuL2NvbHVtbnMvdHdvLXN0cmluZy1jb2x1bW4vdHdvLXN0cmluZy1jb2x1bW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgSWNvbkJ1dHRvbkNvbHVtbkNvbXBvbmVudCB9IGZyb20gJy4vY29sdW1ucy9pY29uLWJ1dHRvbi1jb2x1bW4vaWNvbi1idXR0b24tY29sdW1uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENoZWNrYm94Q29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi9jb2x1bW5zL2NoZWNrYm94LWNvbHVtbi9jaGVja2JveC1jb2x1bW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgT3B0aW9uQ29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi9jb2x1bW5zL29wdGlvbi1jb2x1bW4vb3B0aW9uLWNvbHVtbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBVc2VyQ29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi9jb2x1bW5zL3VzZXItY29sdW1uL3VzZXItY29sdW1uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEN1cnJlbmN5Q29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi9jb2x1bW5zL2N1cnJlbmN5LWNvbHVtbi9jdXJyZW5jeS1jb2x1bW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3RhdHVzQ29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi9jb2x1bW5zL3N0YXR1cy1jb2x1bW4vc3RhdHVzLWNvbHVtbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCYWxhbmNlQ3VycmVuY3lDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuL2NvbHVtbnMvYmFsYW5jZS1jdXJyZW5jeS1jb2x1bW4vYmFsYW5jZS1jdXJyZW5jeS1jb2x1bW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3RhdHVzSWNvbkNvbHVtbkNvbXBvbmVudCB9IGZyb20gJy4vY29sdW1ucy9zdGF0dXMtaWNvbi1jb2x1bW4vc3RhdHVzLWljb24tY29sdW1uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJhbGFuY2VDdXJyZW5jeUljb25Db2x1bW5Db21wb25lbnQgfSBmcm9tICcuL2NvbHVtbnMvYmFsYW5jZS1jdXJyZW5jeS1pY29uLWNvbHVtbi9iYWxhbmNlLWN1cnJlbmN5LWljb24tY29sdW1uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRPVFNfVEFCTEVfREVGQVVMVF9DT05GSUcsIFRvdHNUYWJsZURlZmF1bHRDb25maWcgfSBmcm9tICcuL2VudGl0aWVzL3RvdHMtdGFibGUtZGVmYXVsdC1jb25maWcnO1xyXG5pbXBvcnQgeyBMb2FkaW5nQW5pbWF0aW9uUmVuZGVyZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9hZGluZy1hbmltYXRpb24tcmVuZGVyZXIvbG9hZGluZy1hbmltYXRpb24tcmVuZGVyZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1iYXInO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFRvdHNUYWJsZUNvbXBvbmVudCxcclxuICAgIEJhc2VQcmludENvbHVtbkNvbXBvbmVudCxcclxuICAgIFN0cmluZ0NvbHVtbkNvbXBvbmVudCxcclxuICAgIFRvdHNUYWJsZUFwaUNvbXBvbmVudCxcclxuICAgIE1vcmVNZW51Q29sdW1uQ29tcG9uZW50LFxyXG4gICAgQm9vbGVhbkNvbHVtbkNvbXBvbmVudCxcclxuICAgIFR3b1N0cmluZ0NvbHVtbkNvbXBvbmVudCxcclxuICAgIEljb25CdXR0b25Db2x1bW5Db21wb25lbnQsXHJcbiAgICBDaGVja2JveENvbHVtbkNvbXBvbmVudCxcclxuICAgIE9wdGlvbkNvbHVtbkNvbXBvbmVudCxcclxuICAgIFVzZXJDb2x1bW5Db21wb25lbnQsXHJcbiAgICBDdXJyZW5jeUNvbHVtbkNvbXBvbmVudCxcclxuICAgIFN0YXR1c0NvbHVtbkNvbXBvbmVudCxcclxuICAgIEJhbGFuY2VDdXJyZW5jeUNvbHVtbkNvbXBvbmVudCxcclxuICAgIFN0YXR1c0ljb25Db2x1bW5Db21wb25lbnQsXHJcbiAgICBCYWxhbmNlQ3VycmVuY3lJY29uQ29sdW1uQ29tcG9uZW50LFxyXG4gICAgTG9hZGluZ0FuaW1hdGlvblJlbmRlcmVyQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAvLyBBbmd1bGFyIE1hdGVyaWFsXHJcbiAgICBNYXRJY29uTW9kdWxlLFxyXG4gICAgTWF0VGFibGVNb2R1bGUsXHJcbiAgICBNYXRQYWdpbmF0b3JNb2R1bGUsXHJcbiAgICBNYXRCdXR0b25Nb2R1bGUsXHJcbiAgICBNYXRNZW51TW9kdWxlLFxyXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXHJcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXHJcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgVG90c1RhYmxlQ29tcG9uZW50LFxyXG4gICAgVG90c1RhYmxlQXBpQ29tcG9uZW50XHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuXHRcdFx0cHJvdmlkZTogTUFUX1BBR0lOQVRPUl9ERUZBVUxUX09QVElPTlMsXHJcblx0XHRcdHVzZVZhbHVlOiB7XHJcblx0XHRcdFx0cGFnZVNpemVPcHRpb25zOiBbNSwgMTAsIDI1LCA1MCwgMTAwXVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBUT1RTX1RBQkxFX0RFRkFVTFRfQ09ORklHLFxyXG4gICAgICB1c2VDbGFzczogVG90c1RhYmxlRGVmYXVsdENvbmZpZ1xyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRvdHNUYWJsZU1vZHVsZSB7IH1cclxuIl19