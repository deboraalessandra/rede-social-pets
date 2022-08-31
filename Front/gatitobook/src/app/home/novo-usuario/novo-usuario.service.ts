import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {
//aqui será criado o metodo de interação com o backend, e precisava injetar o httpcliente
  constructor(private http: HttpClient) { }

  cadastraNovoUsuario(novoUsuario: NovoUsuario) {
    return this.http.post('http://localhost:3000/user/signup', novoUsuario);
  }
  // aqui fica a requisição pro backend
  verificaUsuarioExistente(nomeUsuario: string){// aqui foi usado template string
    return this.http.get(`http://localhost:3000/user/exists/${nomeUsuario}`) //vai retornar um Obsevable
  }
}
