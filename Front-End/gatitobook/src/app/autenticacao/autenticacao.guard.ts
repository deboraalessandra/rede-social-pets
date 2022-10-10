import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from './usuario/usuario';
import { UsuarioService } from './usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoGuard implements CanLoad {

  constructor(private usuarioService: UsuarioService,
    private router: Router) { }

  canLoad(
    route: Route,
    segments: UrlSegment[]
    ):
     Observable<boolean | UrlTree>
     | Promise<boolean | UrlTree>
     | boolean
     | UrlTree {
    if (!this.usuarioService.estaLogado()) { // se o usuário ñ tiver logado
      this.router.navigate(['']); // volta pra tela de login
      return false;
    }
    return true; // caso contrário ele vai
  }
}
