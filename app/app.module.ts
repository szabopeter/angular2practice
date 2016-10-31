import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }      from '@angular/http';

import { AppComponent}   from './app.component';
import { GameFormComponent } from './gameForm.component';
import { ScoreListComponent } from './scorelist.component';

import { ScoreRepositoryService } from './services/scoreRepositoryService';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, GameFormComponent, ScoreListComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ ScoreRepositoryService ],
})
export class AppModule { }


