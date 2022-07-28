import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { minusculoValidator } from './minusculo.validator';
import { NovoUsuario } from './novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup; //atributo que representa o estado do form
  // como não está inicializando tem que dizer se é nulo ou não usando o !

  constructor(private formBuilder: FormBuilder, //servico p/ utilizar forms reativos
              private novoUsuarioService: NovoUsuarioService) // serviço p/ gravar new user
              { }

  ngOnInit(): void { //agr vamos construir o obj novoUsuarioForm e pra isso usaremos o serviço FormBuilder.
    // o lugar correto de fazer isso é nesse metodo pq ele é executado após a classe injetar tds
    // os serviços, ou seja, a conclusão da classe ser feita com sucesso.
    this.novoUsuarioForm = this.formBuilder.group({
      // elementos que terão no formulário
      // Mesmo nome de atributo da interface para facilitar depois a conversão
      email:['',  //Criação de validação padrão no nosso usuário
      [Validators.required, Validators.email]],
      fullName:['', [Validators.required, Validators.minLength(4)]],
      userName:['', [minusculoValidator]],
      password:[''],
    });
  }
  cadastrar(){ // método que será executado dps que ele for submetido no evento onsubmit
    const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
    console.log(novoUsuario);
  } // o getRawValue vai retornar um obj c/ o estado da variável que a view informou


}
