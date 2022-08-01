import { Injectable } from '@angular/core';
import { TokenService } from '../token.service';
import { Usuario } from './usuario';
import  jwt_decode  from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
// foi criado esse serviço nessa pasta pq será criado uma interface que represente usuário
// e assim pode ter todas as vantagens de tipificação do typeScript
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarioSubject = new BehaviorSubject<Usuario>({}); // usuario decotificado
  constructor(private tokenService: TokenService) { // injetar o serviço de token
    if (this.tokenService.possuiToken()) {
      this.decodificaJWT();
    }
   }
  //Será criado agora um método private que será responsável por pegar a informação do token através do
  // token service e decodificar essa informação para transformar no objeto de usuário
  private decodificaJWT(){
    const token = this.tokenService.retornaToken();
    const usuario = jwt_decode(token) as Usuario;
    this.usuarioSubject.next(usuario);
  }
  // será criado agora um método que retorna o subject
  retornaUsuario(){
    return this.usuarioSubject.asObservable();
  }

  salvaToken(token: string){
    this.tokenService.salvaToken(token);
    this.decodificaJWT();
  }

  logout(){
    this.tokenService.excluiToken();
    this.usuarioSubject.next({});
  }

  estaLogado(){
    return this.tokenService.possuiToken();
  }
}
