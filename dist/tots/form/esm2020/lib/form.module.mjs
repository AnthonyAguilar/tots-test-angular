/** Angular */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/** Angular Material */
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRadioModule } from '@angular/material/radio';
/** Tots Libraries */
import { TotsLoadingModule } from '@tots/loading';
/** Entities */
import { TOTS_FORM_BUTTONS_CONFIG, TotsFormButtonsConfig } from './entities/tots-buttons-config';
/** Components */
import { TotsFormComponent } from './components/tots-form/tots-form.component';
/** Fields */
import { BasePrintFieldComponent } from './fields/base-print-field/base-print-field.component';
import { StringFieldComponent } from './fields/string-field/string-field.component';
import { SubmitButtonFieldComponent } from './fields/submit-button-field/submit-button-field.component';
import { SelectFieldComponent } from './fields/select-field/select-field.component';
import { TotsFormModalComponent } from './modals/tots-form-modal/tots-form-modal.component';
import { LabelHtmlFieldComponent } from './fields/label-html-field/label-html-field.component';
import { RowFieldComponent } from './fields/row-field/row-field.component';
import { AvatarPhotoFieldComponent } from './fields/avatar-photo-field/avatar-photo-field.component';
import { AutocompleteFieldComponent } from './fields/autocomplete-field/autocomplete-field.component';
import { AutocompleteObsFieldComponent } from './fields/autocomplete-obs-field/autocomplete-obs-field.component';
import { FilesListFieldComponent } from './fields/files-list-field/files-list-field.component';
import { ButtonToggleFieldComponent } from './fields/button-toggle-field/button-toggle-field.component';
import { OneFileFieldComponent } from './fields/one-file-field/one-file-field.component';
import { TextareaFieldComponent } from './fields/textarea-field/textarea-field.component';
import { AutocompleteListFieldComponent } from './fields/autocomplete-list-field/autocomplete-list-field.component';
import { IntegerFieldComponent } from './fields/integer-field/integer-field.component';
import { PhotosFieldComponent } from './fields/photos-field/photos-field.component';
import { SubmitAndCancelButtonsFieldComponent } from './fields/submit-and-cancel-buttons-field/submit-and-cancel-buttons-field.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SelectObsFieldComponent } from './fields/select-obs-field/select-obs-field.component';
import { ToggleFieldComponent } from './fields/toggle-field/toggle-field.component';
import { RadioGroupFieldComponent } from './fields/radio-group-field/radio-group-field.component';
import { PasswordFieldComponent } from './fields/password-field/password-field.component';
import * as i0 from "@angular/core";
export class TotsFormModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90b3RzL2Zvcm0vc3JjL2xpYi9mb3JtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjO0FBQ2QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLHVCQUF1QjtBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDOUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV6RCxxQkFBcUI7QUFDckIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxELGVBQWU7QUFDZixPQUFPLEVBQUUsd0JBQXdCLEVBQUUscUJBQXFCLEVBQUUsTUFB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cUJBQXFCO3dCQUNyQixpQkFBaUI7cUJBQ2xCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxpQkFBaUI7d0JBRWpCLGFBQWE7d0JBQ2IsdUJBQXVCO3dCQUN2Qiw2QkFBNkI7d0JBQzdCLHVCQUF1Qjt3QkFDdkIscUJBQXFCO3dCQUNyQiw4QkFBOEI7d0JBQzlCLHVCQUF1QjtxQkFDeEI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSx3QkFBd0I7NEJBQ2pDLFFBQVEsRUFBRSxxQkFBcUI7eUJBQ2hDO3FCQUNGO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEFuZ3VsYXIgKi9cclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG4vKiogQW5ndWxhciBNYXRlcmlhbCAqL1xyXG5pbXBvcnQgeyBNYXRTZWxlY3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xyXG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcclxuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XHJcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XHJcbmltcG9ydCB7IE1hdERpYWxvZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLXNwaW5uZXInO1xyXG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XHJcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcclxuaW1wb3J0IHsgTWF0QXV0b2NvbXBsZXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcclxuaW1wb3J0IHsgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uLXRvZ2dsZSc7XHJcbmltcG9ydCB7IE1hdFJhZGlvTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8nO1xyXG5cclxuLyoqIFRvdHMgTGlicmFyaWVzICovXHJcbmltcG9ydCB7IFRvdHNMb2FkaW5nTW9kdWxlIH0gZnJvbSAnQHRvdHMvbG9hZGluZyc7XHJcblxyXG4vKiogRW50aXRpZXMgKi9cclxuaW1wb3J0IHsgVE9UU19GT1JNX0JVVFRPTlNfQ09ORklHLCBUb3RzRm9ybUJ1dHRvbnNDb25maWcgfSBmcm9tICcuL2VudGl0aWVzL3RvdHMtYnV0dG9ucy1jb25maWcnO1xyXG5cclxuLyoqIENvbXBvbmVudHMgKi9cclxuaW1wb3J0IHsgVG90c0Zvcm1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdG90cy1mb3JtL3RvdHMtZm9ybS5jb21wb25lbnQnO1xyXG5cclxuLyoqIEZpZWxkcyAqL1xyXG5pbXBvcnQgeyBCYXNlUHJpbnRGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vZmllbGRzL2Jhc2UtcHJpbnQtZmllbGQvYmFzZS1wcmludC1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdHJpbmdGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vZmllbGRzL3N0cmluZy1maWVsZC9zdHJpbmctZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3VibWl0QnV0dG9uRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2ZpZWxkcy9zdWJtaXQtYnV0dG9uLWZpZWxkL3N1Ym1pdC1idXR0b24tZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2VsZWN0RmllbGRDb21wb25lbnQgfSBmcm9tICcuL2ZpZWxkcy9zZWxlY3QtZmllbGQvc2VsZWN0LWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRvdHNGb3JtTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL21vZGFscy90b3RzLWZvcm0tbW9kYWwvdG90cy1mb3JtLW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExhYmVsSHRtbEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9maWVsZHMvbGFiZWwtaHRtbC1maWVsZC9sYWJlbC1odG1sLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJvd0ZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9maWVsZHMvcm93LWZpZWxkL3Jvdy1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBdmF0YXJQaG90b0ZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9maWVsZHMvYXZhdGFyLXBob3RvLWZpZWxkL2F2YXRhci1waG90by1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBdXRvY29tcGxldGVGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vZmllbGRzL2F1dG9jb21wbGV0ZS1maWVsZC9hdXRvY29tcGxldGUtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXV0b2NvbXBsZXRlT2JzRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2ZpZWxkcy9hdXRvY29tcGxldGUtb2JzLWZpZWxkL2F1dG9jb21wbGV0ZS1vYnMtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRmlsZXNMaXN0RmllbGRDb21wb25lbnQgfSBmcm9tICcuL2ZpZWxkcy9maWxlcy1saXN0LWZpZWxkL2ZpbGVzLWxpc3QtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnV0dG9uVG9nZ2xlRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2ZpZWxkcy9idXR0b24tdG9nZ2xlLWZpZWxkL2J1dHRvbi10b2dnbGUtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT25lRmlsZUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9maWVsZHMvb25lLWZpbGUtZmllbGQvb25lLWZpbGUtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGV4dGFyZWFGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vZmllbGRzL3RleHRhcmVhLWZpZWxkL3RleHRhcmVhLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEF1dG9jb21wbGV0ZUxpc3RGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vZmllbGRzL2F1dG9jb21wbGV0ZS1saXN0LWZpZWxkL2F1dG9jb21wbGV0ZS1saXN0LWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEludGVnZXJGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vZmllbGRzL2ludGVnZXItZmllbGQvaW50ZWdlci1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQaG90b3NGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vZmllbGRzL3Bob3Rvcy1maWVsZC9waG90b3MtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3VibWl0QW5kQ2FuY2VsQnV0dG9uc0ZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9maWVsZHMvc3VibWl0LWFuZC1jYW5jZWwtYnV0dG9ucy1maWVsZC9zdWJtaXQtYW5kLWNhbmNlbC1idXR0b25zLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdFNsaWRlVG9nZ2xlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGUtdG9nZ2xlJztcclxuaW1wb3J0IHsgU2VsZWN0T2JzRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2ZpZWxkcy9zZWxlY3Qtb2JzLWZpZWxkL3NlbGVjdC1vYnMtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVG9nZ2xlRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2ZpZWxkcy90b2dnbGUtZmllbGQvdG9nZ2xlLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJhZGlvR3JvdXBGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vZmllbGRzL3JhZGlvLWdyb3VwLWZpZWxkL3JhZGlvLWdyb3VwLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhc3N3b3JkRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2ZpZWxkcy9wYXNzd29yZC1maWVsZC9wYXNzd29yZC1maWVsZC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIC8vIENvbXBvbmVudHNcclxuICAgIFRvdHNGb3JtQ29tcG9uZW50LFxyXG5cclxuICAgIC8vIEZpZWxkc1xyXG4gICAgQmFzZVByaW50RmllbGRDb21wb25lbnQsXHJcbiAgICBTdHJpbmdGaWVsZENvbXBvbmVudCxcclxuICAgIFN1Ym1pdEJ1dHRvbkZpZWxkQ29tcG9uZW50LFxyXG4gICAgU2VsZWN0RmllbGRDb21wb25lbnQsXHJcbiAgICBUb3RzRm9ybU1vZGFsQ29tcG9uZW50LFxyXG4gICAgTGFiZWxIdG1sRmllbGRDb21wb25lbnQsXHJcbiAgICBSb3dGaWVsZENvbXBvbmVudCxcclxuICAgIEF2YXRhclBob3RvRmllbGRDb21wb25lbnQsXHJcbiAgICBBdXRvY29tcGxldGVGaWVsZENvbXBvbmVudCxcclxuICAgIEF1dG9jb21wbGV0ZU9ic0ZpZWxkQ29tcG9uZW50LFxyXG4gICAgRmlsZXNMaXN0RmllbGRDb21wb25lbnQsXHJcbiAgICBCdXR0b25Ub2dnbGVGaWVsZENvbXBvbmVudCxcclxuICAgIE9uZUZpbGVGaWVsZENvbXBvbmVudCxcclxuICAgIFRleHRhcmVhRmllbGRDb21wb25lbnQsXHJcbiAgICBBdXRvY29tcGxldGVMaXN0RmllbGRDb21wb25lbnQsXHJcbiAgICBJbnRlZ2VyRmllbGRDb21wb25lbnQsXHJcbiAgICBQaG90b3NGaWVsZENvbXBvbmVudCxcclxuICAgIFN1Ym1pdEFuZENhbmNlbEJ1dHRvbnNGaWVsZENvbXBvbmVudCxcclxuICAgIFNlbGVjdE9ic0ZpZWxkQ29tcG9uZW50LFxyXG4gICAgVG9nZ2xlRmllbGRDb21wb25lbnQsXHJcbiAgICBSYWRpb0dyb3VwRmllbGRDb21wb25lbnQsXHJcbiAgICBQYXNzd29yZEZpZWxkQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblxyXG4gICAgLy8gQW5ndWxhciBNYXRlcmlhbFxyXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG4gICAgTWF0SW5wdXRNb2R1bGUsXHJcbiAgICBNYXRTZWxlY3RNb2R1bGUsXHJcbiAgICBNYXRCdXR0b25Nb2R1bGUsXHJcbiAgICBNYXREaWFsb2dNb2R1bGUsXHJcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXHJcbiAgICBNYXRJY29uTW9kdWxlLFxyXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcclxuICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcclxuICAgIE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSxcclxuICAgIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG4gICAgTWF0UmFkaW9Nb2R1bGUsXHJcblxyXG4gICAgLyoqIFRvdHMgTGlicmFyaWVzICovXHJcbiAgICBUb3RzTG9hZGluZ01vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgVG90c0Zvcm1Db21wb25lbnQsXHJcblxyXG4gICAgLyoqIEZpZWxkcyAqL1xyXG4gICAgQmFzZVByaW50RmllbGRDb21wb25lbnQsXHJcbiAgICBBdXRvY29tcGxldGVPYnNGaWVsZENvbXBvbmVudCxcclxuICAgIEZpbGVzTGlzdEZpZWxkQ29tcG9uZW50LFxyXG4gICAgT25lRmlsZUZpZWxkQ29tcG9uZW50LFxyXG4gICAgQXV0b2NvbXBsZXRlTGlzdEZpZWxkQ29tcG9uZW50LFxyXG4gICAgU2VsZWN0T2JzRmllbGRDb21wb25lbnRcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBUT1RTX0ZPUk1fQlVUVE9OU19DT05GSUcsXHJcbiAgICAgIHVzZUNsYXNzOiBUb3RzRm9ybUJ1dHRvbnNDb25maWdcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb3RzRm9ybU1vZHVsZSB7IH1cclxuIl19