import { UntypedFormControl, UntypedFormGroup } from "@angular/forms";
import { TotsFieldForm } from "../entities/tots-field-form";
export declare class TotsFormHelper {
    /**
     * Crea un form control basico para el formulario
     * @param field
     * @param group
     * @returns
     */
    static createFormControl(field: TotsFieldForm, group: UntypedFormGroup): UntypedFormControl;
    /**
     * Obtiene el valor de un objeto a traves de la KEY
     * @param item
     * @param key
     * @returns
     */
    static getItemValueByKey(item: any, key: string | Array<string> | undefined): any;
    static setValueInItemByKey(item: any, key: string | Array<string> | undefined, value: any): any;
}
