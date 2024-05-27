import { UntypedFormControl } from "@angular/forms";
export class TotsFormHelper {
    /**
     * Crea un form control basico para el formulario
     * @param field
     * @param group
     * @returns
     */
    static createFormControl(field, group) {
        // Create Control
        let newInput = new UntypedFormControl();
        // Config validators
        if (field.validators != undefined && field.validators.length > 0) {
            newInput.setValidators(field.validators);
        }
        // If include default value
        if (field.extra && field.extra.default_value) {
            newInput.setValue(field.extra.default_value);
        }
        // if disable
        if (field.extra && field.extra.disabled) {
            newInput.disable();
        }
        // Add in Group
        if (Array.isArray(field.key)) {
            group.addControl(field.key.join('_'), newInput);
        }
        else {
            group.addControl(field.key, newInput);
        }
        // Return control
        return newInput;
    }
    /**
     * Obtiene el valor de un objeto a traves de la KEY
     * @param item
     * @param key
     * @returns
     */
    static getItemValueByKey(item, key) {
        if (key == undefined) {
            return '';
        }
        if (typeof key == 'string' && item[key] != undefined) {
            return item[key];
        }
        let valueFinal = item;
        for (const keyObj of key) {
            if (valueFinal[keyObj] == undefined) {
                return '';
            }
            valueFinal = valueFinal[keyObj];
        }
        return valueFinal;
    }
    static setValueInItemByKey(item, key, value) {
        if (key == undefined) {
            return '';
        }
        if (typeof key == 'string') {
            item[key] = value;
            return item;
        }
        // Inicializa una variable de referencia que apunte al objeto principal
        let currentObj = item;
        // Utiliza un bucle para acceder a la propiedad deseada
        for (let i = 0; i < key.length; i++) {
            const internalKey = key[i];
            // Verifica si estamos en la última clave
            if (i === key.length - 1) {
                // Asigna el valor en la última propiedad
                currentObj[internalKey] = value;
            }
            else {
                // Avanza al siguiente objeto anidado
                currentObj = currentObj[internalKey];
            }
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG90cy1mb3JtLWhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RvdHMvZm9ybS9zcmMvbGliL2hlbHBlcnMvdG90cy1mb3JtLWhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsa0JBQWtCLEVBQW9CLE1BQU0sZ0JBQWdCLENBQUM7QUFHdEUsTUFBTSxPQUFPLGNBQWM7SUFDdkI7Ozs7O09BS0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBb0IsRUFBRSxLQUF1QjtRQUNsRSxpQkFBaUI7UUFDakIsSUFBSSxRQUFRLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1FBQ3hDLG9CQUFvQjtRQUNwQixJQUFHLEtBQUssQ0FBQyxVQUFVLElBQUksU0FBUyxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBQztZQUM1RCxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM1QztRQUNELDJCQUEyQjtRQUMzQixJQUFHLEtBQUssQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUM7WUFDMUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsYUFBYTtRQUNiLElBQUcsS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBQztZQUNuQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDdEI7UUFDRCxlQUFlO1FBQ2YsSUFBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBQztZQUMxQixLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ2pEO2FBQU07WUFDTCxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDdkM7UUFDRCxpQkFBaUI7UUFDakIsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQUNEOzs7OztPQUtHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQVMsRUFBRSxHQUFtQztRQUNuRSxJQUFHLEdBQUcsSUFBSSxTQUFTLEVBQUM7WUFDaEIsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUVELElBQUksT0FBTyxHQUFHLElBQUksUUFBUSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxTQUFTLEVBQUU7WUFDcEQsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbEI7UUFFRCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdEIsS0FBSyxNQUFNLE1BQU0sSUFBSSxHQUFJLEVBQUU7WUFDekIsSUFBRyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksU0FBUyxFQUFDO2dCQUNqQyxPQUFPLEVBQUUsQ0FBQzthQUNYO1lBQ0QsVUFBVSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNqQztRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxNQUFNLENBQUMsbUJBQW1CLENBQUMsSUFBUyxFQUFFLEdBQW1DLEVBQUUsS0FBVTtRQUNuRixJQUFHLEdBQUcsSUFBSSxTQUFTLEVBQUM7WUFDbEIsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUVELElBQUksT0FBTyxHQUFHLElBQUksUUFBUSxFQUFFO1lBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDbEIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELHVFQUF1RTtRQUN2RSxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFFdEIsdURBQXVEO1FBQ3ZELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25DLE1BQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUUzQix5Q0FBeUM7WUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3RCLHlDQUF5QztnQkFDekMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEtBQUssQ0FBQzthQUNuQztpQkFBTTtnQkFDSCxxQ0FBcUM7Z0JBQ3JDLFVBQVUsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDeEM7U0FDRjtJQUVILENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVudHlwZWRGb3JtQ29udHJvbCwgVW50eXBlZEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBUb3RzRmllbGRGb3JtIH0gZnJvbSBcIi4uL2VudGl0aWVzL3RvdHMtZmllbGQtZm9ybVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRvdHNGb3JtSGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYSB1biBmb3JtIGNvbnRyb2wgYmFzaWNvIHBhcmEgZWwgZm9ybXVsYXJpb1xyXG4gICAgICogQHBhcmFtIGZpZWxkXHJcbiAgICAgKiBAcGFyYW0gZ3JvdXBcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVGb3JtQ29udHJvbChmaWVsZDogVG90c0ZpZWxkRm9ybSwgZ3JvdXA6IFVudHlwZWRGb3JtR3JvdXApOiBVbnR5cGVkRm9ybUNvbnRyb2wge1xyXG4gICAgICAgIC8vIENyZWF0ZSBDb250cm9sXHJcbiAgICAgICAgbGV0IG5ld0lucHV0ID0gbmV3IFVudHlwZWRGb3JtQ29udHJvbCgpO1xyXG4gICAgICAgIC8vIENvbmZpZyB2YWxpZGF0b3JzXHJcbiAgICAgICAgaWYoZmllbGQudmFsaWRhdG9ycyAhPSB1bmRlZmluZWQgJiYgZmllbGQudmFsaWRhdG9ycy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgbmV3SW5wdXQuc2V0VmFsaWRhdG9ycyhmaWVsZC52YWxpZGF0b3JzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSWYgaW5jbHVkZSBkZWZhdWx0IHZhbHVlXHJcbiAgICAgICAgaWYoZmllbGQuZXh0cmEgJiYgZmllbGQuZXh0cmEuZGVmYXVsdF92YWx1ZSl7XHJcbiAgICAgICAgICBuZXdJbnB1dC5zZXRWYWx1ZShmaWVsZC5leHRyYS5kZWZhdWx0X3ZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgZGlzYWJsZVxyXG4gICAgICAgIGlmKGZpZWxkLmV4dHJhICYmIGZpZWxkLmV4dHJhLmRpc2FibGVkKXtcclxuICAgICAgICAgICAgbmV3SW5wdXQuZGlzYWJsZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGQgaW4gR3JvdXBcclxuICAgICAgICBpZihBcnJheS5pc0FycmF5KGZpZWxkLmtleSkpe1xyXG4gICAgICAgICAgZ3JvdXAuYWRkQ29udHJvbChmaWVsZC5rZXkuam9pbignXycpLCBuZXdJbnB1dCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGdyb3VwLmFkZENvbnRyb2woZmllbGQua2V5LCBuZXdJbnB1dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFJldHVybiBjb250cm9sXHJcbiAgICAgICAgcmV0dXJuIG5ld0lucHV0O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnRpZW5lIGVsIHZhbG9yIGRlIHVuIG9iamV0byBhIHRyYXZlcyBkZSBsYSBLRVlcclxuICAgICAqIEBwYXJhbSBpdGVtXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0SXRlbVZhbHVlQnlLZXkoaXRlbTogYW55LCBrZXk6IHN0cmluZ3xBcnJheTxzdHJpbmc+fHVuZGVmaW5lZCk6IGFueSB7XHJcbiAgICAgICAgaWYoa2V5ID09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAodHlwZW9mIGtleSA9PSAnc3RyaW5nJyAmJiBpdGVtW2tleV0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtW2tleV07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbGV0IHZhbHVlRmluYWwgPSBpdGVtO1xyXG4gICAgICAgICAgZm9yIChjb25zdCBrZXlPYmogb2Yga2V5ISkge1xyXG4gICAgICAgICAgICBpZih2YWx1ZUZpbmFsW2tleU9ial0gPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFsdWVGaW5hbCA9IHZhbHVlRmluYWxba2V5T2JqXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiB2YWx1ZUZpbmFsO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXRWYWx1ZUluSXRlbUJ5S2V5KGl0ZW06IGFueSwga2V5OiBzdHJpbmd8QXJyYXk8c3RyaW5nPnx1bmRlZmluZWQsIHZhbHVlOiBhbnkpOiBhbnkge1xyXG4gICAgICBpZihrZXkgPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0eXBlb2Yga2V5ID09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgaXRlbVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEluaWNpYWxpemEgdW5hIHZhcmlhYmxlIGRlIHJlZmVyZW5jaWEgcXVlIGFwdW50ZSBhbCBvYmpldG8gcHJpbmNpcGFsXHJcbiAgICAgIGxldCBjdXJyZW50T2JqID0gaXRlbTtcclxuXHJcbiAgICAgIC8vIFV0aWxpemEgdW4gYnVjbGUgcGFyYSBhY2NlZGVyIGEgbGEgcHJvcGllZGFkIGRlc2VhZGFcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBpbnRlcm5hbEtleSA9IGtleVtpXTtcclxuXHJcbiAgICAgICAgLy8gVmVyaWZpY2Egc2kgZXN0YW1vcyBlbiBsYSDDumx0aW1hIGNsYXZlXHJcbiAgICAgICAgaWYgKGkgPT09IGtleS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgIC8vIEFzaWduYSBlbCB2YWxvciBlbiBsYSDDumx0aW1hIHByb3BpZWRhZFxyXG4gICAgICAgICAgICBjdXJyZW50T2JqW2ludGVybmFsS2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEF2YW56YSBhbCBzaWd1aWVudGUgb2JqZXRvIGFuaWRhZG9cclxuICAgICAgICAgICAgY3VycmVudE9iaiA9IGN1cnJlbnRPYmpbaW50ZXJuYWxLZXldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=