import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { CardComponent } from './card/card.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { BuscaPipe } from './busca.pipe';



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavmenuComponent,
    BuscaPipe, 
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
