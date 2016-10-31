import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent}   from './app.component';
import { GameFormComponent } from './gameForm.component';
import { ScorelistComponent } from './scorelist.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, GameFormComponent, ScorelistComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


