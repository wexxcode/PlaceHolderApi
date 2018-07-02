import { Component, OnInit, Input } from '@angular/core';
import {Http } from '@angular/http';





@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})


export class CardComponent implements OnInit {

  public images: Object[] = [];
  public meuArrayFinal: Object[] = [];
  private minhaUrl: string = 'https://jsonplaceholder.typicode.com/posts';
  private urlUplash: string ='https://pixabay.com/api/?key=9427593-258b998a855644f90d132f40e&q=yellow+flowers&image_type=photo'

  startPage : Number;
  paginationLimit:Number; 

  @Input()textoProcurado: String = '';
  
  constructor(http: Http) {
    this.meuArrayFinal;
    this.startPage = 0;
    this.paginationLimit = 6;

     
    http.get(this.minhaUrl)
    .map(res => res.json())
    .subscribe((data) => {
      data.forEach(dado => {
          var dadoCompleto = {
            'dado' : dado,
            'url' : this.images[Math.floor(Math.random() * 19)]
          }
          this.meuArrayFinal.push(dadoCompleto);
        });
      },
      erro => console.log('Erro' + erro)
    );
   
    http.get(this.urlUplash)
      .map(res => res.json())
      .subscribe((data) => {
        this.images = data.hits;
        },
        erro => console.log('Erro' + erro)
    );
  }

    ngOnInit(){}

    showMoreItems()
  {
     this.paginationLimit = Number(this.paginationLimit) + 3;        
  }
  
  }