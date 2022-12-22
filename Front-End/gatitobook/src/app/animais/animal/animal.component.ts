import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

// const API = 'http://localhost:3000'; //para pegar as img na API
const API = environment.apiURL; //Substituí por environment

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  private urlOriginal = '';

  @Input() descricao = ''; //decorator para receber informação

  @Input() set url(url: string) {
    if (url.startsWith('dat'))
    {
      this.urlOriginal = url;
    }
    else {
      this.urlOriginal = `${API}/imgs/${url}`;
    }
  }

  get url(): string {
    return this.urlOriginal;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
