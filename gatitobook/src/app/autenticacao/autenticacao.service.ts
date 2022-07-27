import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ //indica que essa classe pode ser injetada em outro componente ou serviço
  providedIn: 'root' // providedIn é uma propriedade
})
export class AutenticacaoService {

  constructor(private httpCliente: HttpClient) { }

  autenticar(usuario: string, senha: string): Observable<any>{
    return this.httpCliente.post('http://localhost:3000/user/login', {
      userName: usuario,
      password: senha,
    });
  }
}
