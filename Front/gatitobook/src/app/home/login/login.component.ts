import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario='';
  senha='';

  constructor(private authService:AutenticacaoService, // c ele pode utilizar o metodo login
              private router:Router) { } // temos que instanciar esse obj router

  ngOnInit(): void {
  }
  login(){
    this.authService.autenticar(this.usuario, this.senha).subscribe(
      () => {
        this.router.navigate(['animais']); //console.log('Autenticado com sucesso');
    },
    (error) => {
      alert("Usuário ou senha inválidos");
      console.log(error);
    }
    );
  }
}
