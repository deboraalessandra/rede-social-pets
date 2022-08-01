import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {

  user$ = this.usuarioService.retornaUsuario(); // o $ serve para indicar que a variável é uma convenção

  constructor(private usuarioService: UsuarioService,
              private router: Router) { }

  logout(){
    this.usuarioService.logout(); // ele desloga e
    this.router.navigate(['']); // volta pro login
  }

}
