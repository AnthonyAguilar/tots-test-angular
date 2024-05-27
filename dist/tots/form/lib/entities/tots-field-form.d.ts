import { ValidatorFn } from "@angular/forms";
export declare class TotsFieldForm {
    component: any;
    key: string | Array<string>;
    label?: string;
    validators?: ValidatorFn[];
    extra?: any;
    errors?: Array<{
        name: string;
        message: string;
    }>;
}
