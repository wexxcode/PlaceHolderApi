import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { CardModule } from './card/card.module';


import { NavmenuComponent } from './navmenu/navmenu.component';






@NgModule({
  declarations: [
    AppComponent,
    
    NavmenuComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
