import { AbstractControl } from "@angular/forms";

// validação se o campo usuário não tiver todo minúsculo
export function minusculoValidator(control:AbstractControl){
  const valor = control.value as string;
  if(valor !== valor.toLowerCase() ){
    return { minusculo: true };
  } else {
    return null;
  }
}

