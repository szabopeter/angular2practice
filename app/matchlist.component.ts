import { Component, Input } from '@angular/core';
import { Match } from './match';

@Component({
  selector: 'matchlist',
  templateUrl: 'app/matchlist.component.html',
})
export class MatchListComponent {
    @Input() matches: Match[];
} 
