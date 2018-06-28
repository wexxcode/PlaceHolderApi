import { Component } from '@angular/core';
import {Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  private dados: Object[];
  
  private minhaUrl: string = 'https://jsonplaceholder.typicode.com/posts';
  
  constructor(http: Http) {
    http.get(this.minhaUrl)
    .map(res => res.json())
    .subscribe(
        dados => this.dados = dados,
        erro => console.log(' deu ruim' + erro)
    );
    console.log(this.dados);
    }

    ngOnInit(){}
  }



