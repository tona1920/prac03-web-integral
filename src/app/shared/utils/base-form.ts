import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";

@Injectable({providedIn:'root'})
export class BaseForm{
    constructor(){ }

    isValidField(form: AbstractControl|null){
        var flag = false;
        if(form != null){
            flag= form.touched || form.dirty && !form.valid;
        }
        return flag;
    }

    getErrorMessage(form: AbstractControl|null){
        let mensaje = "";
        if(form){
            const {errors}= form;
            if(errors){
                const messages: any = {
                    required: 'Campo requerido',
                    email: 'Formato inválido',
                    pattern: 'Formato inválido',
                    nimError: 'El rango no es correcto',
                    nim: 'El rango no es correcto',
                    max: 'El rango no es correcto'
                }

                const errorKey = Object.keys(errors).find(Boolean);
                if(errorKey){
                    mensaje=messages[errorKey];
                }
            }
        }
        return mensaje;
    }

    
}
