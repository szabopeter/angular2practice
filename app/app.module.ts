import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }      from '@angular/http';

import { AppComponent}   from './app.component';
import { GameFormComponent } from './gameForm.component';
import { MatchListComponent } from './matchlist.component';

import { MatchRepositoryService } from './services/matchRepositoryService';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, GameFormComponent, MatchListComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ MatchRepositoryService ],
})
export class AppModule { }


