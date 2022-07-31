import { FormGroup } from '@angular/forms'; // Esse arquivo precisa importar o
//FormGroup do Angular e depois podemos construir a função que fará a verificação
//do nome de usuário e senha

export function usuarioSenhaIguaisValidator(formGroup: FormGroup){ //o formGroup
  // indica que ele vai receber o formulário inteiro
  const username = formGroup.get('userName')?.value ?? ''; //é uma feature do typeScrip
  // significa que se for undefined passe o userName vazio
  const password = formGroup.get('password')?.value ?? '';

  if(username.trim() + password.trim()){
    return username !== password ? null: {senhaIgualUsuario: true}
  } else {
    return null;
  }
}
