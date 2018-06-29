import { Component, OnInit } from '@angular/core';
import {Http } from '@angular/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

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