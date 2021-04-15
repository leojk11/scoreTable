import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  players: Player[] = [];

  noPlayers!: boolean;

  constructor(private playersService: PlayersService) { }

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers() {
    this.players = this.playersService.getPlayers();

    console.log(this.players.length);

    if(this.players.length == 0) {
      this.noPlayers = true;
    }
  }

  addPlayers() {
    const index = this.players.length + 1;

    const player = new Player(index, 0);

    this.playersService.addPlayer(player);
  }

}
