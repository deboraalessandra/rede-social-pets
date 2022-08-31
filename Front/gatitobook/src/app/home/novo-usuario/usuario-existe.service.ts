import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs';
import { NovoUsuario } from './novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {
// Serviço exclusivo só para validação para não misturar com a regra de negócio de interação com o backend
  constructor(private novoUsuarioService: NovoUsuarioService ) { } // injetando o serviço de novo usuário service
  //método para validação. Ele vai retornar uma função que seria o objeto(erro ou nulo)
  usuarioJaExiste() {
    //ela recebe como parâmentro o controle que seria o input. Essa função diferente da assíncrona
    // ela não vai retornar o valor e sim o oberservable que vai representar essa valor
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((nomeUsuario)=>
          this.novoUsuarioService.verificaUsuarioExistente(nomeUsuario)
          ), // o switchMap vai fazer a trocar do fluxo da digitação p/ o da requisição
        map((usuarioExiste) => // map para trocar o resultado
        usuarioExiste ? { usuarioExistente: true } : null
        ),
        first() // para encerrar o fluxo da validação
      );
    };
  }
}
