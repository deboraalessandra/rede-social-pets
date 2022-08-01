import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';

@Injectable({ //indica que essa classe pode ser injetada em outro componente ou serviço
  providedIn: 'root' // providedIn é uma propriedade
})
export class AutenticacaoService {

  constructor(private httpCliente: HttpClient,
              private usuarioService: UsuarioService) { }

  autenticar(usuario: string, senha: string): Observable<HttpResponse<any>>{
    return this.httpCliente.post('http://localhost:3000/user/login', {
      userName: usuario,
      password: senha,
    },
    {
      observe: 'response'
    }
    )
    .pipe(
      tap((res) => {
        const authToken = res.headers.get('x-acess-token') ?? '';
        this.usuarioService.salvaToken(authToken);
      })
    );
  }
}
