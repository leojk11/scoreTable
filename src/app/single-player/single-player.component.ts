import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Player } from '../player.model';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-single-player',
  templateUrl: './single-player.component.html',
  styleUrls: ['./single-player.component.scss']
})
export class SinglePlayerComponent implements OnInit {

  @Input() player!: Player;

  @Output() deleteClick: EventEmitter<void> = new EventEmitter();

  constructor(private playersService: PlayersService) { }

  ngOnInit(): void {
  }

  increment() {
    this.player.score++;
  }
  decrement() {
    if(this.player.score == 0) {
      return;
    }
    
    this.player.score--;
  }
  reset() {
    this.player.score = 0
  }

  delete() {
    // this.playersService.deletePlayer(this.player.id);
    this.deleteClick.emit();
  }

}
