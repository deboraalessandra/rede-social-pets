import { Injectable } from '@angular/core';

const KEY = 'token'; // vai ser a chave do localstorage

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { } // n tem construtor pois não será injetado nenhum serviço nele
  //alguns metodos para a classe
  retornaToken() {
    return localStorage.getItem(KEY) ?? ''; // retornar o localStorage
  } // se não pegar a chave vai retornar uma variável em branco

  salvaToken(token: string) { // receber o token que vai ser uma string
    localStorage.setItem(KEY, token); // e setar o token que receber
  }

  excluiToken() { // par remover o token
    localStorage.removeItem(KEY);
  }

  possuiToken() { // retorna uma aplicação q se tem ou não token guardado
    return !! this.retornaToken(); // retorna uma boolean
  }
}
