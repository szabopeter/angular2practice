import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent}   from './app.component';
import { GameFormComponent } from './gameForm.component';
import { ScoreListComponent } from './scorelist.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, GameFormComponent, ScoreListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


