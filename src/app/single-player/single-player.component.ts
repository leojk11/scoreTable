import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Player } from '../player.model';

@Component({
  selector: 'app-single-player',
  templateUrl: './single-player.component.html',
  styleUrls: ['./single-player.component.scss']
})
export class SinglePlayerComponent implements OnInit {

  @Input() player!: Player;

  @Output() deleteClick: EventEmitter<void> = new EventEmitter();

  constructor() { }

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
    this.deleteClick.emit();
  }

}
