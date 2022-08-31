import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NovoUsuario } from './novo-usuario';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {
//aqui será criado o metodo de interação com o backend, e precisava injetar o httpcliente
  constructor(private http: HttpClient) { }

  cadastraNovoUsuario(novoUsuario: NovoUsuario) {
    return this.http.post(`${API}/user/signup`, novoUsuario);
  }
  // aqui fica a requisição pro backend
  verificaUsuarioExistente(nomeUsuario: string){// aqui foi usado template string
    return this.http.get(`${API}/user/exists/${nomeUsuario}`) //vai retornar um Obsevable
  }
}
